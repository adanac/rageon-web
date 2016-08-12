package com.adanac.tool.rageon.file.dom4j;

import com.adanac.tool.rageon.file.dom4j.WeatherInfo;
import com.adanac.tool.rageon.service.file.dom4j.DownloadXML;
import com.adanac.tool.rageon.service.file.dom4j.GetCurrentTimeOnline;
import com.adanac.tool.rageon.service.file.dom4j.MakeMessage;
import com.adanac.tool.rageon.service.file.dom4j.ResolveXML;

public class Home {
	// 这是活取天气xml的连接，可直接从浏览器访问查看
	static final String weburl = "http://wthrcdn.etouch.cn/WeatherApi?citykey=101120101";
	static final String savePath = "res/file/dom4jXML.xml";
	DownloadXML downXML;
	ResolveXML resolveXML;
	WeatherInfo weather;
	MakeMessage message;
	GetCurrentTimeOnline currTime;

	public Home() {
		weather = new WeatherInfo();
		currTime = new GetCurrentTimeOnline(weather);
		downXML = new DownloadXML(weburl, savePath);
		resolveXML = new ResolveXML(savePath, weather);
		message = new MakeMessage(weather);
		System.out.println(message.showMessage());
	}

	public static void main(String[] args) {
		new Home();
	}
}
