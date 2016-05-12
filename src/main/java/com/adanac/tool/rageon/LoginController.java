package com.adanac.tool.rageon;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.framework.log.MyLogger;
import com.adanac.framework.log.MyLoggerFactory;
import com.adanac.tool.rageon.common.MmcAction;

/**
 * 登录controller
 */
@Controller
@RequestMapping(value = "loginController", produces = "text/html;charset=UTF-8")
public class LoginController extends MmcAction {

	private static final MyLogger log = MyLoggerFactory.getLogger(LoginController.class);

	/**
	 * 首页
	 */
	@RequestMapping(value = "toIndex")
	public String toIndex(HttpServletRequest request, ModelMap model) {

		return "index.ftl";
	}

	@RequestMapping(value = "goError")
	public String goError(HttpServletRequest request) {
		return "error/403.ftl";
	}

	@RequestMapping(value = "removeFlag")
	public void removeFlag(HttpServletRequest request, HttpServletResponse response) {

		request.getSession().invalidate();
		ajaxJson(response, "1");
	}
}