package com.adanac.tool.rageon.tz;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.sql.SqlService;
import com.adanac.tool.rageon.utils.JsonUtil;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping(value = "/sql", produces = "text/html;charset=UTF-8")
public class SQLAction extends BaseAction {

	@Autowired
	SqlService sqlService;

	@RequestMapping("toSQL")
	public String toCard(HttpServletRequest request, ModelMap model) {
		return "sql/sql.ftl";
	}

	/**
	 * 插入数据到数据库中
	 * @param request
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "insertSQL", method = RequestMethod.POST, produces = "application/json")
	public BaseResult insertSQL(HttpServletRequest request, ModelMap model) {

		String username = request.getParameter("username");
		String pwd = request.getParameter("pwd");
		String age = request.getParameter("age");
		BaseResult br = sqlService.insertDB(username, pwd, Integer.parseInt(age));
		return br;
	}

	/**
	 * 根据用户名和密码查询
	 * @param request
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "querySQL", method = RequestMethod.POST, produces = "application/json")
	public BaseResult querySQL(HttpServletRequest request, ModelMap model) {
		String username = request.getParameter("username");
		String pwd = request.getParameter("pwd");
		BaseResult br = sqlService.queryDB(username, pwd);
		return br;
	}

	/**
	 * 根据用户名模糊查询
	 * @param request
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "queryList", method = RequestMethod.POST, produces = "application/json")
	public BaseResult queryList(HttpServletRequest request, ModelMap model) {
		String username = request.getParameter("username");
		BaseResult br = sqlService.queryList(username);
		return br;
	}

	/**
	 * queryIn
	 * @param request
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "queryIn", method = RequestMethod.POST, produces = "application/json")
	public BaseResult queryIn(HttpServletRequest request, ModelMap model) {
		String username = request.getParameter("username");
		JSONArray jsonArray = JSONObject.parseArray(username);
		String[] names = JsonUtil.getJsonToStringArray(jsonArray);
		BaseResult br = sqlService.queryIn(names);
		return br;
	}

}
