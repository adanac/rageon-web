package com.adanac.tool.rageon.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Properties;

/**
 * Properties文件的读写
 * @author <a href="http://www.xdemo.org/">http://www.xdemo.org/</a>
 * 252878950@qq.com
 */
public class PropertiesUtils {

	public static void main(String[] args) throws Exception {
		String path = PropertiesUtils.class.getClassLoader().getResource("").toURI().getPath();
		String filePath = path + "conf/config.properties";
		try {
			String key = "configKey";
			System.out.println(getPropertyValue(filePath, key));
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 获取指定key的value
	 * @param filePath
	 * @param key
	 * @return
	 */
	public static String getPropertyValue(String filePath, String key) {
		String property = "";
		try {
			Properties properties = readProperties(filePath);
			property = properties.getProperty(key);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return property;
	}

	/**
	 * 读取Properties配置文件内容
	 * @param filePath
	 * @return Properties
	 * @throws FileNotFoundException
	 * @throws IOException
	 */
	public static Properties readProperties(String filePath) throws FileNotFoundException, IOException {
		Properties properties = new Properties();
		properties.load(new FileInputStream(new File(filePath)));
		return properties;
	}

	/**
	 * 写key-value到properties文件 相同的key会被覆盖 追加不同的key-value
	 * @param key 键
	 * @param value 值
	 * @param filePath 文件路径
	 * @param comment key-value的注释
	 * @throws FileNotFoundException
	 * @throws IOException
	 */
	public static void writeProperties(String key, String value, String comment, String filePath)
			throws FileNotFoundException, IOException {
		Properties properties = new Properties();

		File file = new File(filePath);
		if (file.exists()) {
			FileInputStream fis = new FileInputStream(file);
			properties.load(fis);
			fis.close();
		}
		properties.setProperty(key, value);
		properties.store(new FileOutputStream(new File(filePath)), comment);
	}

}
