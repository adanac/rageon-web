package com.adanac.tool.rageon.common;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.entity.CommonDto;
import com.adanac.tool.rageon.common.service.CommonService;
import com.adanac.tool.rageon.common.service.ExportService;

@Controller
@RequestMapping(value = "/export")
public class ExportAction extends BaseAction {

	@Autowired
	private ExportService exportService;

	@Autowired
	private CommonService commonService;

	@RequestMapping(value = "/export2Excel")
	public void exportDeptGoodDiff(HttpServletRequest request, HttpServletResponse response) {
		CommonDto commonDto = new CommonDto();
		List<CommonDto> dataList = commonService.queryCommonDtoList(commonDto);
		String basePath = request.getSession().getServletContext().getRealPath("/"); // 项目物理地址
		String filepath = exportService.exportFile(basePath, dataList);

		downloadFile(response, filepath);
	}

	/**
	 * 下载文件
	 * @param response
	 * @param filepath
	 */
	private void downloadFile(HttpServletResponse response, String filepath) {
		try {
			// path是指欲下载的文件的路径。
			File file = new File(filepath);
			// 取得文件名。
			String filename = file.getName();
			// 取得文件的后缀名。
			// String ext = filename.substring(filename.lastIndexOf(".") +
			// 1).toUpperCase();

			// 以流的形式下载文件。
			InputStream fis = new BufferedInputStream(new FileInputStream(filepath));
			byte[] buffer = new byte[fis.available()];
			fis.read(buffer);
			fis.close();
			// 清空response
			response.reset();
			// 设置response的Header
			response.setContentType("application/vnd.ms-excel;charset=UTF-8");
			String downLoadName = new String(filename.getBytes("utf-8"), "iso8859-1");
			response.addHeader("Content-Disposition", "attachment;filename=" + downLoadName);
			response.addHeader("Content-Length", "" + file.length());
			OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
			toClient.write(buffer);
			toClient.flush();
			toClient.close();
		} catch (IOException e) {
			log.error("ExportAction->downloadTemp->" + e.getMessage());
		}
	}

}
