package com.adanac.tool.rageon.login;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "/member", produces = "text/html;charset=UTF-8")
public class MemberAction extends BaseAction {

	@RequestMapping("ajaxLogin")
	public String ajaxLogin(HttpServletRequest request, ModelMap model) {
		request.getParameter("userid");
		return "true";
	}

	@RequestMapping("ajaxLoginsta")
	public String ajaxLoginsta(HttpServletRequest request, ModelMap model) {
		request.getParameter("userid");
		return "true";
	}

}
