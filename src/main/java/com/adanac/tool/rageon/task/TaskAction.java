package com.adanac.tool.rageon.task;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "task", produces = "text/html;charset=UTF-8")
public class TaskAction extends BaseAction {

	@RequestMapping("fd/{id}")
	public String toFangdai(HttpServletRequest request, @PathVariable String id) {
		return "task/0530/fangdai" + id + ".ftl";
	}

}
