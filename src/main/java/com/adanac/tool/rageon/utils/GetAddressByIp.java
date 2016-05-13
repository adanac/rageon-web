package com.adanac.tool.rageon.utils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import net.sf.json.JSONObject;

public class GetAddressByIp {

	public static void main(String[] args) {
		System.out.println(GetAddressByIp("125.70.11.136"));
	}

	/**
	 * 
	 * @param IP
	 * @return
	 */
	public static String GetAddressByIp(String IP) {
		String resout = "";
		try {
			String str = getJsonContent("http://ip.taobao.com/service/getIpInfo.php?ip=" + IP);
			System.out.println(str);

			JSONObject obj = JSONObject.fromObject(str);
			JSONObject obj2 = (JSONObject) obj.get("data");
			String code = (String) obj.get("code");
			if (code.equals("0")) {

				resout = obj2.get("country") + "--" + obj2.get("area") + "--" + obj2.get("city") + "--"
						+ obj2.get("isp");
			} else {
				resout = "IP地址有误";
			}
		} catch (Exception e) {

			e.printStackTrace();
			resout = "获取IP地址异常：" + e.getMessage();
		}
		return resout;

	}

	public static String getJsonContent(String urlStr) {
		try {// 获取HttpURLConnection连接对象
			URL url = new URL(urlStr);
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			// 设置连接属性
			httpConn.setConnectTimeout(3000);
			httpConn.setDoInput(true);
			httpConn.setRequestMethod("GET");
			// 获取相应码
			int respCode = httpConn.getResponseCode();
			if (respCode == 200) {
				return ConvertStream2Json(httpConn.getInputStream());
			}
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "";
	}

	private static String ConvertStream2Json(InputStream inputStream) {
		String jsonStr = "";
		// ByteArrayOutputStream相当于内存输出流
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		byte[] buffer = new byte[1024];
		int len = 0;
		// 将输入流转移到内存输出流中
		try {
			while ((len = inputStream.read(buffer, 0, buffer.length)) != -1) {
				out.write(buffer, 0, len);
			}
			// 将内存流转换为字符串
			jsonStr = new String(out.toByteArray());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return jsonStr;
	}
}