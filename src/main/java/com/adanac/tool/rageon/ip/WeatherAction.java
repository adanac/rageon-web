package com.adanac.tool.rageon.ip;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.intf.ip.service.WeatherService;

@Controller
@RequestMapping(value = "/tq", produces = "text/html;charset=UTF-8")
public class WeatherAction extends BaseAction {

	@Autowired
	WeatherService weatherService;

	@ResponseBody
	@RequestMapping(value = "queryWeather", method = RequestMethod.POST, produces = "application/json")
	public BaseResult queryWeather(HttpServletRequest request) {
		String city = request.getParameter("city");
		String day = request.getParameter("day");
		log.info("====queryWeather====city:" + city);
		BaseResult baseResult = new BaseResult();
		try {
			Map<String, String> map = weatherService.qrWeather(city, day);
			baseResult.setContent(map);
			baseResult.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			log.info("====queryWeather====error{}" + e.getMessage());
			baseResult.setContent(e.getMessage());
			baseResult.setStatus(BaseResult.ERROR);
		}
		return baseResult;
	}
}
