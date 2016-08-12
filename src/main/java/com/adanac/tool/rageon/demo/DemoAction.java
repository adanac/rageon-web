package com.adanac.tool.rageon.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.page.Pager;
import com.adanac.framework.page.PagerParam;
import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.constant.RageonConstant;
import com.adanac.tool.rageon.demo.entity.DemoDto;
import com.adanac.tool.rageon.demo.service.DemoService;

@Controller
@RequestMapping(value = "demo", produces = "application/json;charset=UTF-8")
public class DemoAction extends BaseAction {

	@Autowired
	private DemoService demoService;

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	@ResponseBody
	public BaseResult getDemoList(DemoDto demoDto, PagerParam pagerParam) {
		log.info("======start getDemoList======");
		BaseResult baseResult = new BaseResult();
		try {
			Pager<DemoDto> list = demoService.getDemoList(demoDto, pagerParam);
			baseResult.setContent(list);
			baseResult.setStatus(RageonConstant.SUCCESS);
		} catch (Exception e) {
			log.error("getDemoList error: " + e.getMessage());
			baseResult.setStatus(RageonConstant.ERROR);
			baseResult.setErrorMsg("getDemoList error");
		}
		return baseResult;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public BaseResult getDemoById(@PathVariable Integer id) {
		log.info("======start getDemoById======");
		BaseResult baseResult = new BaseResult();
		try {
			DemoDto demoDto = demoService.getDemoById(id);
			baseResult.setContent(demoDto);
			baseResult.setStatus(RageonConstant.SUCCESS);
		} catch (Exception e) {
			log.error("getDemoById error: " + e.getMessage());
			baseResult.setStatus(RageonConstant.ERROR);
			baseResult.setErrorMsg("getDemoById error");
		}
		return baseResult;
	}

	@RequestMapping(value = "/add", method = RequestMethod.POST)
	@ResponseBody
	public BaseResult addDemo(@RequestBody DemoDto demoDto) {
		log.info("======start addDemo======");
		BaseResult baseResult = new BaseResult();
		try {
			boolean result = demoService.addDemo(demoDto);
			baseResult.setContent(result);
			baseResult.setStatus(RageonConstant.SUCCESS);
		} catch (Exception e) {
			log.error("addDemo error: " + e.getMessage());
			baseResult.setStatus(RageonConstant.ERROR);
			baseResult.setErrorMsg("addDemo error");
		}
		return baseResult;
	}

	@RequestMapping(value = "/mod", method = RequestMethod.POST)
	@ResponseBody
	public BaseResult modDemo(@RequestBody DemoDto demoDto) {
		log.info("======start modDemo======");
		BaseResult baseResult = new BaseResult();
		try {
			boolean result = demoService.modDemo(demoDto);
			baseResult.setContent(result);
			baseResult.setStatus(RageonConstant.SUCCESS);
		} catch (Exception e) {
			log.error("modDemo error: " + e.getMessage());
			baseResult.setStatus(RageonConstant.ERROR);
			baseResult.setErrorMsg("modDemo error");
		}
		return baseResult;
	}

	@RequestMapping(value = "/{id}/del", method = RequestMethod.GET)
	@ResponseBody
	public BaseResult delDemoById(@PathVariable Integer id) {
		log.info("======start delDemoById======");
		BaseResult baseResult = new BaseResult();
		try {
			boolean result = demoService.delDemoById(id);
			baseResult.setContent(result);
			baseResult.setStatus(RageonConstant.SUCCESS);
		} catch (Exception e) {
			log.error("delDemoById error: " + e.getMessage());
			baseResult.setStatus(RageonConstant.ERROR);
			baseResult.setErrorMsg("delDemoById error");
		}
		return baseResult;
	}

}
