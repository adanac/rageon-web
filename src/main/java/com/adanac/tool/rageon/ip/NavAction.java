package com.adanac.tool.rageon.ip;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

/**
 * 首页导航
 * @author adanac
 */
@Controller
@RequestMapping(value = "/nav", produces = "text/html;charset=UTF-8")
public class NavAction extends BaseAction {

	@RequestMapping("index")
	public String index(HttpServletRequest request, ModelMap model) {
		return "tools/nav/nav.ftl";
	}

	@RequestMapping("index2")
	public String index2(HttpServletRequest request, ModelMap model) {
		return "tools/nav/nav2.ftl";
	}
}
