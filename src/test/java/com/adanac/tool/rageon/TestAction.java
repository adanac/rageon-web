package com.adanac.tool.rageon;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "test", produces = "text/html;charset=UTF-8")
public class TestAction extends BaseAction {

	@RequestMapping("css")
	public String index(HttpServletRequest request, ModelMap model) {
		return "test/css/css.ftl";
	}

}
