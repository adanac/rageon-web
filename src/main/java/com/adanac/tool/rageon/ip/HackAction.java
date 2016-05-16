package com.adanac.tool.rageon.ip;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "/hack", produces = "text/html;charset=UTF-8")
public class HackAction extends BaseAction {

	@RequestMapping("index")
	public String index(HttpServletRequest request, ModelMap model) {
		return "tools/hack/hack.ftl";
	}
}