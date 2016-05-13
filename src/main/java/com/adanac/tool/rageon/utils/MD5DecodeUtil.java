package com.adanac.tool.rageon.utils;

import java.text.SimpleDateFormat;
import java.util.Date;

public class MD5DecodeUtil {

	private static final char code[] = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
			'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
			'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ',', '.', '/', ';', '\'', ':',
			'"', '[', ']', '{', '}', '\\', '|', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=',
			'0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

	/**
	 * 六位密码破解
	 */
	public static String Md5_6(String md5Password) {
		String res = "";
		String testPassword;
		MD5DecodeUtil md5Obj = new MD5DecodeUtil();
		String result;
		for (int a = 0; a < code.length; a++) {
			testPassword = "";
			testPassword += code[a];
			for (int b = 0; b < code.length; b++) {
				testPassword = testPassword.substring(0, 1);
				testPassword += code[b];
				for (int c = 0; c < code.length; c++) {
					testPassword = testPassword.substring(0, 2);
					testPassword += code[c];
					for (int d = 0; d < code.length; d++) {
						testPassword = testPassword.substring(0, 3);
						testPassword += code[d];
						for (int e = 0; e < code.length; e++) {
							testPassword = testPassword.substring(0, 4);
							testPassword += code[e];
							for (int f = 0; f < code.length; f++) {
								testPassword = testPassword.substring(0, 5);
								testPassword += code[f];
								// System.out.println(testPassword);
								result = md5Obj.getMD5ofStr(testPassword);
								if (md5Password.equals(result)) {
									System.out.println("密码已经破解!");
									System.out.println("明文是:" + testPassword);
									System.out.println("密文是:" + md5Password);
									res = testPassword;
									break;
								}
							}
						}
					}
				}
			}
		}
		return res;
	}

	/**
	 * 七位密码破解,写法详见六位密码破解
	 */
	public static void Md5_7(String md5Password) {
	}

	/**
	 * 八位密码破解,写法详见六位密码破解
	 */
	public static void Md5_8(String md5Password) {
	}

	public static String md5Decode(String str) {
		MD5DecodeUtil md5Obj = new MD5DecodeUtil();
		// MD5加密对象
		String md5Password = md5Obj.getMD5ofStr(password);
		String res = Md5_6(md5Password);
		return res;
	}

	public static void main(String[] args) {
		MD5DecodeUtil md5Obj = new MD5DecodeUtil();
		// MD5加密对象
		String md5Password = md5Obj.getMD5ofStr(password);
		// 把这个认为我要找到的经过加密的密码
		System.out.println("明文是:" + password);
		System.out.println("密文是:" + md5Password);
		System.out.println("开始时间:" + getNow());
		Md5_6(md5Password);
		// 依次调用6位破解到20位破解..
		// Md5_7(testResult);
		System.out.println("结束时间:" + getNow());
	}

	private static String getNow() {
		String sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
		return sdf;
	}

	private String getMD5ofStr(String str) {
		return str;
	}

	private static final String password = "aaa918";

	/**
	 * 这里只是一个实现的方法, 在自己破解的时候把自己的密文直接贴出来, 进行破解, 这里只是进行一个aaaBc8加密的测试
	 */
	private static final String MD5PWD = "你的数据库中的密文";
}