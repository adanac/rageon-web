package com.adanac.tool.rageon.menu;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.menu.entity.MenuDto;
import com.adanac.tool.rageon.menu.service.MenuService;
import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping(value = "menu", produces = "text/html;charset=UTF-8")
public class MenuAction extends BaseAction {

	@Autowired
	private MenuService menuService;

	@ResponseBody
	@RequestMapping(value = "list", method = RequestMethod.GET)
	public String list(MenuDto menuDto) {
		// 根据条件分页查询数据
		List<MenuDto> dtos = menuService.listMenu(menuDto);
		if (dtos == null) {
			List<MenuDto> data0 = new ArrayList<MenuDto>();
			return JSONObject.toJSONString(data0);
		}
		return JSONObject.toJSONString(dtos);
	}

	@ResponseBody
	@RequestMapping(value = "get", method = RequestMethod.GET)
	public String get(String id) {
		// 根据条件分页查询数据
		MenuDto dto = menuService.getMenu(Integer.parseInt(id));
		return JSONObject.toJSONString(dto);
	}

}
