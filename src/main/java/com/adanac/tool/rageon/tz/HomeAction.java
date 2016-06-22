package com.adanac.tool.rageon.tz;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.framework.utils.StringUtils;
import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "/", produces = "text/html;charset=UTF-8")
public class HomeAction extends BaseAction {
	@RequestMapping("index")
	public String index(HttpServletRequest request, @PathVariable String id) {
		return "index.ftl";
	}

	@RequestMapping("index/{id}")
	public String home(HttpServletRequest request, @PathVariable String id) {
		String link = "";
		if (StringUtils.isEmpty(id)) {
			link = "index.ftl";
		} else {
			link = "index" + id + ".ftl";
		}
		return link;
	}

	@RequestMapping("admin")
	public String admin(HttpServletRequest request) {
		return "forward:/loginController/toAdminPage.do";
	}

}
