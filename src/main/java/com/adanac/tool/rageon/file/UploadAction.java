package com.adanac.tool.rageon.file;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpResponse;
import org.apache.http.StatusLine;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;

import net.sf.json.JSONObject;

@Controller
@RequestMapping("upload")
public class UploadAction extends BaseAction {

	/**
	 * 下载HTTP文件
	 * @param request
	 * @param response
	 */
	@RequestMapping("downLoadFile")
	public void downloadFile(HttpServletRequest request, HttpServletResponse response) {

		String fileName = request.getParameter("fileName");
		String filePath = request.getParameter("filePath");

		response.setContentType("text/html;charset=utf-8");
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;

		String downLoadPath = filePath;

		HttpClient httpClient1 = new DefaultHttpClient();
		HttpGet httpGet1 = new HttpGet(downLoadPath);
		try {
			HttpResponse httpResponse1 = httpClient1.execute(httpGet1);

			StatusLine statusLine = httpResponse1.getStatusLine();
			if (statusLine.getStatusCode() == 200) {
				response.setContentType("application/x-msdownload;");
				response.setHeader("Content-disposition",
						"attachment; filename=" + new String(fileName.getBytes("utf-8"), "ISO8859-1"));
				bis = new BufferedInputStream(httpResponse1.getEntity().getContent());
				bos = new BufferedOutputStream(response.getOutputStream());
				byte[] buff = new byte[2048];
				int bytesRead;
				long fileLength = 0;
				while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {
					bos.write(buff, 0, bytesRead);
					fileLength += bytesRead;
				}
				response.setHeader("Content-Length", String.valueOf(fileLength));
			}
		} catch (ClientProtocolException e) {
			log.error("UploadController-->downloadFile-->fileName:" + fileName + "  filePath:" + filePath, e);
		} catch (IOException e) {
			log.error("UploadController-->downloadFile-->fileName:" + fileName + "  filePath:" + filePath, e);
		} finally {
			if (bis != null) {
				try {
					bis.close();
				} catch (IOException e) {
					log.error("UploadController-->downloadFile-->fileName:" + fileName + "  filePath:" + filePath, e);
				}
			}
			if (bos != null) {
				try {
					bos.close();
				} catch (IOException e) {
					log.error("UploadController-->downloadFile-->fileName:" + fileName + "  filePath:" + filePath, e);
				}
			}
			httpClient1.getConnectionManager().shutdown();
		}
	}

	/**
	 * 上传单个文件到文件服务器
	 * @param response
	 * @param request
	 * @param multipartFile
	 */
	@RequestMapping("uploadOneFile")
	public void uploadOneFile(HttpServletResponse response, HttpServletRequest request,
			@RequestParam(value = "file", required = false) MultipartFile file) {

		BaseResult br = new BaseResult();
		try {
			String fileTrueName = file.getOriginalFilename();

			Map<String, Object> paramMap = new HashMap<String, Object>();
			paramMap.put("filename", fileTrueName);

			br.setContent(paramMap);
			br.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			log.error("UploadController-->uploadOneFile", e);
			br.setErrorMsg("文件上传失败。");
			br.setStatus(BaseResult.ERROR);
		}

		// 返回数据
		ajaxJson(response, JSONObject.fromObject(br).toString());
	}
}
