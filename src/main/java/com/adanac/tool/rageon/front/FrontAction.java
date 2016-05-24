package com.adanac.tool.rageon.front;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.page.Pager;
import com.adanac.framework.page.PagerParam;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.intf.common.entity.BootstrapTable;
import com.adanac.tool.rageon.intf.demo.entity.DemoDto;
import com.adanac.tool.rageon.intf.demo.service.DemoService;
import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping(value = "/front", produces = "text/html;charset=UTF-8")
public class FrontAction extends BaseAction {

	@Autowired
	DemoService demoService;

	@RequestMapping("toSelect/{id}")
	public String index(HttpServletRequest request, @PathVariable String id) {
		return "front/bootstrap/select" + id + ".ftl";
	}

	@ResponseBody
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(DemoDto demoDto, PagerParam pagerParam) {
		// 根据条件分页查询数据
		Pager<DemoDto> dtos = demoService.getDemoList(demoDto, pagerParam);
		if (dtos == null) {
			BootstrapTable<DemoDto> data1 = new BootstrapTable<>(null, 0, pagerParam.getPageNumber());
			return JSONObject.toJSONString(data1);
		}
		List<DemoDto> datas = dtos.getDatas();

		BootstrapTable<DemoDto> data = new BootstrapTable<>(datas,
				dtos.getTotalDataCount() == null ? 0l : dtos.getTotalDataCount().longValue(),
				pagerParam.getPageNumber());
		return JSONObject.toJSONString(data);
	}
}
