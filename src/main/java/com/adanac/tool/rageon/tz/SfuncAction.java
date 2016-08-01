package com.adanac.tool.rageon.tz;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "/sfunc", produces = "text/html;charset=UTF-8")
public class SfuncAction extends BaseAction {

	@RequestMapping("toCard")
	public String toCard(HttpServletRequest request, ModelMap model) {
		return "sfunc/card.ftl";
	}
}
