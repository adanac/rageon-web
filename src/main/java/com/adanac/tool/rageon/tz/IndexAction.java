package com.adanac.tool.rageon.tz;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.adanac.tool.rageon.common.BaseAction;

@Controller
@RequestMapping(value = "index", produces = "text/html;charset=UTF-8")
public class IndexAction extends BaseAction {

	@RequestMapping("front/bootstrap/select/{id}")
	public String frontBootstrap(HttpServletRequest request, @PathVariable String id) {
		return "front/bootstrap/select" + id + ".ftl";
	}

	@RequestMapping("front/interaction/{id}")
	public String frontInteraction(HttpServletRequest request, @PathVariable String id) {
		return "front/interaction/" + id + ".ftl";
	}

	@RequestMapping("front/html/run")
	public String frontRun(HttpServletRequest request) {
		return "front/html/run.ftl";
	}

	@RequestMapping("module/solr/")
	public String moduleSolr(HttpServletRequest request) {
		return "module/solr.ftl";
	}

	/*
	 * @RequestMapping("module/springSecurity/") public String
	 * moduleSpringSecurity(HttpServletRequest request) { return
	 * "module/springSecurity.ftl"; }
	 */
}