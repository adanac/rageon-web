package com.adanac.tool.rageon.file.upload;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;

/**
* @ClassName: ListFileServlet
* @Description: 列出Web系统中所有下载文件
* @author: 孤傲苍狼
* @date: 2015-1-4 下午9:54:40
*
*/
@Controller
@RequestMapping("listFile")
public class ListFileAction extends BaseAction {

	@ResponseBody
	@RequestMapping("list")
	public BaseResult list(HttpServletRequest request, ModelMap map) throws IOException {
		BaseResult br = new BaseResult();
		try {

			// 获取上传文件的目录
			String uploadFilePath = request.getSession().getServletContext().getRealPath("/");
			// D:\Dev\apache-tomcat-8.0.33(1)\webapps\rageon-web\
			uploadFilePath += "WEB-INF\\upload";
			// 存储要下载的文件名
			Map<String, String> fileNameMap = new HashMap<String, String>();
			// 递归遍历filepath目录下的所有文件和目录，将文件的文件名存储到map集合中
			listfile(new File(uploadFilePath), fileNameMap);// File既可以代表一个文件也可以代表一个目录
			// 将Map集合发送到listfile.jsp页面进行显示
			br.setContent(fileNameMap);
			br.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			br.setErrorMsg("查询上传文件列表失败");
			br.setStatus(BaseResult.ERROR);
		}
		return br;
	}

	@RequestMapping("list2")
	public String list2(HttpServletRequest request, ModelMap map) throws IOException {
		// 获取上传文件的目录
		String uploadFilePath = request.getSession().getServletContext().getRealPath("/");
		// D:\Dev\apache-tomcat-8.0.33(1)\webapps\rageon-web\
		uploadFilePath += "WEB-INF\\upload";
		// 存储要下载的文件名
		Map<String, String> fileNameMap = new HashMap<String, String>();
		// 递归遍历filepath目录下的所有文件和目录，将文件的文件名存储到map集合中
		listfile(new File(uploadFilePath), fileNameMap);// File既可以代表一个文件也可以代表一个目录
		// 将Map集合发送到listfile.jsp页面进行显示
		map.addAttribute("fileNames", fileNameMap);
		return "file/listfile.ftl";
	}

	/**
	* @Method: listfile
	* @Description: 递归遍历指定目录下的所有文件
	* @Anthor:孤傲苍狼
	* @param file 即代表一个文件，也代表一个文件目录
	* @param map 存储文件名的Map集合
	*/
	public void listfile(File file, Map<String, String> map) {
		// 如果file代表的不是一个文件，而是一个目录
		if (!file.isFile()) {
			// 列出该目录下的所有文件和目录
			File files[] = file.listFiles();
			// 遍历files[]数组
			for (File f : files) {
				// 递归
				listfile(f, map);
			}
		} else {
			/**
			 * 处理文件名，上传后的文件是以uuid_文件名的形式去重新命名的，去除文件名的uuid_部分
			    file.getName().indexOf("_")检索字符串中第一次出现"_"字符的位置，如果文件名类似于：9349249849-88343-8344_阿_凡_达.avi
			    那么file.getName().substring(file.getName().indexOf("_")+1)处理之后就可以得到阿_凡_达.avi部分
			 */
			String realName = file.getName().substring(file.getName().indexOf("_") + 1);
			// file.getName()得到的是文件的原始名称，这个名称是唯一的，因此可以作为key，realName是处理过后的名称，有可能会重复
			map.put(file.getName(), realName);
		}
	}

}
