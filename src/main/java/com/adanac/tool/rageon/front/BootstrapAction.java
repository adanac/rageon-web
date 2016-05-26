package com.adanac.tool.rageon.front;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "/font/bt", produces = "text/html;charset=UTF-8")
public class BootstrapAction extends BaseAction {

	@RequestMapping("/")
	public String index(HttpServletRequest request) {
		return "front/bootstrap/bootstrap.ftl";
	}

}
