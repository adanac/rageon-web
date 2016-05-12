package com.adanac.tool.rageon;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.MmcAction;

@Controller
@RequestMapping(value = "/", produces = "text/html;charset=UTF-8")
public class HomeAction extends MmcAction {

	@RequestMapping("/")
	public String index(HttpServletRequest request, ModelMap model) {
		return "index.ftl";
	}

	@RequestMapping("index")
	public String home(HttpServletRequest request, ModelMap model) {
		return "index.ftl";
	}

	@RequestMapping("admin")
	public String admin(HttpServletRequest request) {
		return "forward:/loginController/toAdminPage.do";
	}

}
