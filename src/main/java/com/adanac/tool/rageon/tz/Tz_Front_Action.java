package com.adanac.tool.rageon.tz;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "/tz/front", produces = "text/html;charset=UTF-8")
public class Tz_Front_Action extends BaseAction {
	@RequestMapping("json/1")
	public String json1(HttpServletRequest request, @PathVariable String id) {
		return "front/json/1.ftl";
	}
}
