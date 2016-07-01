package com.adanac.tool.rageon.front;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.page.Pager;
import com.adanac.framework.page.PagerParam;
import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.intf.common.entity.BootstrapPage;
import com.adanac.tool.rageon.intf.common.entity.BootstrapTable;
import com.adanac.tool.rageon.intf.common.entity.CommonDto;
import com.adanac.tool.rageon.intf.common.service.CommonService;
import com.adanac.tool.rageon.intf.demo.entity.DemoDto;
import com.adanac.tool.rageon.intf.demo.service.DemoService;
import com.alibaba.fastjson.JSONObject;

import net.sf.json.JSONArray;

@Controller
@RequestMapping(value = "front", produces = "text/html;charset=UTF-8")
public class FrontAction extends BaseAction {

	@Autowired
	DemoService demoService;

	@Autowired
	CommonService commonService;

	@ResponseBody
	@RequestMapping(value = "list", method = RequestMethod.GET)
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

	/**
	 * 批量保存用户
	 * @param paramJson
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "interaction/saveUser", method = RequestMethod.POST)
	public String interactionSaveUser(@RequestParam String paramJson) {
		BaseResult br = new BaseResult();
		try {

			List<CommonDto> commonDtoList = new ArrayList<CommonDto>();
			paramJson = java.net.URLDecoder.decode(paramJson, "utf-8");
			log.info("interactionSaveUser====>paramJson:" + paramJson.toString());
			// JSONObject jsonObject = JSONObject.fromObject(paramJson);
			JSONArray jsonArray = JSONArray.fromObject(paramJson);

			for (int i = 0; i < jsonArray.size(); i++) {
				CommonDto commonDto = new CommonDto();
				// Object jsonObj = jsonArray.get(i);
				net.sf.json.JSONObject obj = new net.sf.json.JSONObject().fromObject(jsonArray.get(i));
				commonDto.setId(obj.optString("userId"));
				commonDto.setUsername(obj.optString("username"));
				commonDto.setPasswd(obj.optString("passwd"));
				commonDto.setAge(obj.optInt("age123"));
				commonDtoList.add(commonDto);
			}

			br = commonService.addCommonDto(commonDtoList);

		} catch (Exception e) {
			log.error("interactionSaveUser====>error：", e.getMessage());
		}

		return JSONObject.toJSONString(br);
	}

	/**
	 * 查询用户
	 * @param paramJson
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "interaction/queryUser", method = RequestMethod.POST)
	public String interactionQueryUser(String id, String query) {
		BaseResult br = new BaseResult();
		try {
			CommonDto commonDto = new CommonDto();
			commonDto.setId(id);
			BootstrapPage param = new BootstrapPage();
			param.setLimit(10);
			param.setOffset(0);
			Pager<CommonDto> dataPage = commonService.queryCommonDtoPage(commonDto, param, Integer.parseInt(query));
			br.setContent(dataPage);
			br.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			log.error("interactionSaveUser====>error：", e.getMessage());
			br.setStatus(BaseResult.ERROR);
		}

		return JSONObject.toJSONString(br);
	}
}
