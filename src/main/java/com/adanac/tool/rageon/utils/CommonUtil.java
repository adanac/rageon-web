package com.adanac.tool.rageon.utils;

import java.io.IOException;
import java.util.Properties;

public class CommonUtil {

	public static String getPropertyValue(String filePath, String key) {
		String property = "";
		try {
			Properties properties = PropertiesUtils.readProperties(filePath);
			property = properties.getProperty(key);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return property;
	}
}
