package com.adanac.tool.rageon.utils;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

public class JsonUtil {
	/** 
	  * 将json数组转化为String型 
	  * @param str 
	  * @return 
	  */
	public static String[] getJsonToStringArray(JSONArray jsonArray) {
		String[] arr = new String[jsonArray.size()];
		for (int i = 0; i < jsonArray.size(); i++) {
			arr[i] = jsonArray.getString(i);
			System.out.println(arr[i]);
		}
		return arr;
	}

	public static void main(String[] args) {
		String username = "['a','b']";
		JSONArray jsonArray = JSONObject.parseArray(username);
		getJsonToStringArray(jsonArray);
	}
}
