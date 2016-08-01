package com.adanac.tool.rageon.file;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class DownLoadAction
 */
public class DownLoadAction extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DownLoadAction() {
		super();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// response.getWriter().append("Served at:
		// ").append(request.getContextPath());
		String rootPath = this.getServletContext().getRealPath("/");

		String filename = request.getParameter("filename");
		if (filename == null)
			filename = "";
		filename = filename.trim();

		InputStream inStream = null;

		byte[] b = new byte[1024];
		int len = 0;
		try {
			if (filename == null) {
				return;
			}
			// 读到流中
			// 本行代码未对文件名参数进行过滤，存在任意文件下载漏洞
			inStream = new FileInputStream(rootPath + "/WEB-INF/download/" + filename);
			// 设置输出的格式
			response.reset();
			response.setContentType("application/x-msdownload");

			response.addHeader("Content-Disposition", "attachment; filename=\"" + filename + "\"");
			// 循环取出流中的数据
			while ((len = inStream.read(b)) > 0) {
				response.getOutputStream().write(b, 0, len);
			}
			response.getOutputStream().close();
			inStream.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
