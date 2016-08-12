package com.adanac.tool.rageon.sfunc;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.adanac.framework.log.MyLogger;
import com.adanac.framework.log.MyLoggerFactory;
import com.adanac.framework.page.Pager;
import com.adanac.framework.page.PagerParam;
import com.adanac.framework.utils.StringUtils;
import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.common.entity.CommonDto;
import com.adanac.tool.rageon.common.service.CommonService;
import com.adanac.tool.rageon.constant.RageonConstant;
import com.adanac.tool.rageon.sfunc.intf.ExcelOperService;
import com.adanac.tool.rageon.utils.excel.ExportExcelUtil;

import net.sf.json.JSONObject;

@Controller
@RequestMapping(value = "/excel")
public class ExcelOperController extends BaseAction {

	private static final MyLogger log = MyLoggerFactory.getLogger(ExcelOperController.class);
	@Autowired
	private ExcelOperService excelOperService;

	@Autowired
	private CommonService commonService;

	/**
	 * 导入数据
	 * @param file
	 * @param request
	 * @param response
	 * @return status(0成功，1解析文件失败，2文件无内容，3数据格式不正确，4工号存在)
	 * @return 3数据格式不正确
	 */
	@RequestMapping(value = "/uploadExcel", method = RequestMethod.POST)
	public String uploadExcel(@RequestParam(value = "excelFile", required = false) MultipartFile excelFile,
			HttpServletRequest request, HttpServletResponse response) {
		// String param =request.getParameter("param");
		String param = "1";
		log.info("upload param=" + param + ",file=" + excelFile.getOriginalFilename());
		BaseResult result = new BaseResult();
		String filePath = saveFile(excelFile, request);
		if (StringUtils.isEmpty(filePath)) {
			// 保存文件失败
			log.info("上传文件失败");
			result.setStatus(RageonConstant.strNum.STR_1);
		} else if (!filePath.endsWith(".xls")) {
			// 保存文件失败
			log.info("文件格式不正确,请选择xls格式的文件导入");
			result.setStatus(RageonConstant.strNum.STR_5);
		} else {
			log.info("解析excle");
			String id = "1";
			CommonDto user = commonService.getCommonDto(id);
			// 解析EXCEL TODO
			result = excelOperService.readXlsNew(filePath, param, user.getId());
			if (result.getStatus().equals(SUCCESS)) {
				log.info("导入到数据库");
				BaseResult br = commonService.addCommonDto((List<CommonDto>) result.getContent());
				result.setStatus(br.getStatus());
				result.setContent(br.getContent());
			}
		}
		log.info("结果编码" + result.getStatus());
		return ajaxJson(response, JSONObject.fromObject(result).toString());
	}

	/**
	 * 
	 * @param file TODO 导出
	 * @param 导出用户信息
	 * @param response
	 * @return
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@RequestMapping("/exportExcel")
	public void exportExcel(String id, String username, HttpServletRequest request, HttpServletResponse response) {

		CommonDto input = new CommonDto();

		input.setId(id);// 员工id
		input.setUsername(username);// 员工username

		PagerParam pagerParam = new PagerParam();
		pagerParam.setPageNumber(1);
		pagerParam.setPageSize(2147483640);// int 最大长度2147483647
		pagerParam.setOrderBy("id");
		pagerParam.setOrderAsc(false);
		// 分页查询用户列表信息
		Integer queryMode = new Integer(1);
		Pager<CommonDto> pager = commonService.queryCommonDtoPage(input, pagerParam, queryMode);

		List<CommonDto> infoList = null;
		if (pager != null) {
			infoList = pager.getDatas();

			// 导出工具类
			ExportExcelUtil expUtil = new ExportExcelUtil();
			// 工号empCode 真实姓名 realName 性别 职位 职称 手机号码 QQ 身份证号码 E_Mail 地址 备注

			String[] headers = { "员工ID", "员工姓名", "性别", "年龄", "密码" };
			String[] objFields = { "id", "username", "sex", "age", "passwd" };// 数据库字段名保持一致
			try {
				SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");// 设置日期格式
				String now = df.format(new Date());// new Date()为获取当前系统时间
				response.setContentType("application/vnd.ms-excel");
				response.addHeader("Content-Disposition", "attachment;filename=" + "userinfo" + now + ".xls");
				response.setBufferSize(1024);

				OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
				expUtil.setTitle("用户信息");
				expUtil.setHeaders(headers);
				expUtil.setObjFields(objFields);

				// 导出操作
				expUtil.exportExcel(infoList, toClient);
				toClient.flush();
				toClient.close();

			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	@RequestMapping(value = "toExperExclePage", produces = "text/html;charset=UTF-8")
	public ModelAndView toExperExclePage(String id, String username, ModelMap model) {
		model.put("id", id);
		model.put("username", username);

		return new ModelAndView(RageonConstant.EXCEL_EXPORT, model);
	}

	/**
	 * 保存文件
	 * @param MultipartFile file
	 * @param HttpServletRequest request
	 * @return filePath文件保存路径
	 */
	private String saveFile(MultipartFile file, HttpServletRequest request) {
		// excel数据写入到数据库
		String filePath = "";
		try {
			request.setCharacterEncoding("utf-8");
			// 上传的服务器路径
			String basePath = request.getSession().getServletContext().getRealPath("/") + "uploadFile" + File.separator;
			File f = new File(basePath);
			if (!f.exists()) {
				f.mkdir();
			}
			// 上传的excel文件名称【uuid保证上传的文件是唯一的】
			String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
			filePath = basePath + fileName;
			// 检查服务器的文件上传路径是否存在，不存在就创建
			File targetFile = new File(filePath);
			// excel文件上传到应用服务器
			file.transferTo(targetFile);
		} catch (Exception e) {
			log.error("upload file fail", e);
			filePath = null;
		}
		return filePath;
	}
}
