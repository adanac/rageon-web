package com.adanac.tool.rageon.tz;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "file", produces = "application/json;charset=UTF-8")
public class FileAction extends BaseAction {

	@RequestMapping(value = "/toDom4j", method = RequestMethod.GET)
	public String toDom4j(HttpServletRequest request, ModelMap model) {
		return "file/dom4j.ftl";
	}

	@RequestMapping(value = "/toCraw", method = RequestMethod.GET)
	public String toCraw(HttpServletRequest request, ModelMap model) {
		return "file/crawtool.ftl";
	}

	@RequestMapping(value = "/toUpload", method = RequestMethod.GET)
	public String toUpDown(HttpServletRequest request, ModelMap model) {
		return "file/upload.ftl";
	}

}
