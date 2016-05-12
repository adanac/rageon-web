package com.adanac.tool.rageon;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "/ip", produces = "text/html;charset=UTF-8")
public class IpAction extends BaseAction {

	@RequestMapping("index")
	public String index(HttpServletRequest request, ModelMap model) {
		return "tools/ip/ip.ftl";
	}
}
