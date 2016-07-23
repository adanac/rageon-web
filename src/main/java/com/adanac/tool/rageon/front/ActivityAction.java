package com.adanac.tool.rageon.front;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.log.MyLogger;
import com.adanac.framework.log.MyLoggerFactory;
import com.adanac.framework.page.Pager;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.intf.common.entity.BootstrapTable;
import com.adanac.tool.rageon.intf.front.entity.ActivityDto;
import com.adanac.tool.rageon.intf.front.entity.ActivityQueryDto;
import com.adanac.tool.rageon.intf.front.service.ActivityService;
import com.google.common.reflect.TypeToken;

import net.sf.json.JSONObject;

/**
 * 活动商品
 */
@Controller
@RequestMapping("activity")
public class ActivityAction extends BaseAction {

	@Autowired
	private ActivityService activityService;
	private final MyLogger log = MyLoggerFactory.getLogger(ActivityAction.class);

	// 商品展示
	@RequestMapping(value = "toAct", produces = "text/html;charset=UTF-8")
	public String toAct(HttpServletRequest request, ModelMap model) {
		log.info("toAct====>");
		Integer type = Integer.parseInt(request.getParameter("discountType"));
		try {
			if (1 == type) {
				String activityId = request.getParameter("activityId");
				Integer discountType = Integer.parseInt(request.getParameter("discountType"));
				model.addAttribute("activityId", activityId);
				model.addAttribute("discountType", discountType);
				return "pages/sale/xs/activityGood/priceFixed.ftl";
			} else {
				String activityId = request.getParameter("activityId");
				Integer discountType = Integer.parseInt(request.getParameter("discountType"));
				model.addAttribute("activityId", activityId);
				model.addAttribute("discountType", discountType);
				return "pages/sale/xs/activityGood/priceDiscount.ftl";
			}

		} catch (Exception e) {
			log.error("toAct====>error:" + e.toString());
			return "";
		}
	}

	@ResponseBody
	@RequestMapping(value = "list")
	public String list(HttpServletRequest request, HttpServletResponse response, ActivityQueryDto dto) {
		log.info("listActivs====>param:" + dto.toString());
		try {
			Pager<ActivityDto> pager = activityService.queryActivityList(dto);
			List<ActivityDto> infoList = pager.getDatas();
			BootstrapTable<ActivityDto> data = new BootstrapTable<ActivityDto>(infoList,
					pager.getTotalDataCount() == null ? 0 : pager.getTotalDataCount(), pager.getPageNumber());

			return JSONObject.fromObject(data).toString();
		} catch (Exception e) {
			log.error("listActivs====>error:" + e.toString());
			return "";
		}
	}

	@RequestMapping(value = "add", produces = "text/html;charset=UTF-8")
	public String add(HttpServletRequest request, HttpServletResponse response, ModelMap model) {
		String paramJson = request.getParameter("paramJson");
		String activityId = request.getParameter("activityId");
		String discountType = request.getParameter("discountType");
		log.info("add----------------------------" + paramJson);
		// 获取参数
		List<Map<String, Object>> paramList = gson.fromJson(paramJson, new TypeToken<List<Map<String, Object>>>() {
		}.getType());
		if (null != paramList) {
			for (Map<String, Object> map : paramList) {
				log.info("map=" + map);
			}
		}

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("activityId", activityId);
		map.put("discountType", discountType);
		map.put("paramList", paramList);

		ActivityDto activityDto = null;
		String res = activityService.addActivity(activityDto);
		return ajaxJson(response, JSONObject.fromObject(res).toString());
	}

}
