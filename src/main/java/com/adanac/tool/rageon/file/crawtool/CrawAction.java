package com.adanac.tool.rageon.file.crawtool;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.file.craw.CrawService;

@Controller
@RequestMapping(value = "file", produces = "application/json;charset=UTF-8")
public class CrawAction extends BaseAction {

	@Autowired
	CrawService crawService;

	@ResponseBody
	@RequestMapping(value = "/procraw", method = RequestMethod.POST)
	public BaseResult proCraw(HttpServletRequest request, ModelMap model) {

		String url = request.getParameter("url");
		String element = request.getParameter("elem");
		BaseResult br = crawService.proCraw1(url, element);
		return br;
	}

	@RequestMapping(value = "/toCraw163", method = RequestMethod.GET)
	public String toCraw163(HttpServletRequest request, ModelMap model) {
		return "file/craw163.ftl";
	}

}
