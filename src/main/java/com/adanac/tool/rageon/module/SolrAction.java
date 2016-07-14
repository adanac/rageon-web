package com.adanac.tool.rageon.module;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.page.Pager;
import com.adanac.framework.page.PagerParam;
import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.intf.common.entity.CommonDto;
import com.adanac.tool.rageon.intf.module.solr.service.SolrCommonSearchService;

@Controller
@RequestMapping(value = "/solr", produces = "text/html;charset=UTF-8")
public class SolrAction extends BaseAction {
	@Autowired
	private SolrCommonSearchService commonService;

	// @Autowired
	// private SolrGoodsSearchService goodService;

	@ResponseBody
	@RequestMapping(value = "/list", method = RequestMethod.POST, produces = "application/json")
	public BaseResult listCommons(CommonDto dto, PagerParam pagerParam) {
		log.info("listDtos:{dto-" + dto.toString() + "}");
		BaseResult br = new BaseResult();
		try {

			Pager<CommonDto> datas = commonService.queryDtos(dto, pagerParam);
			br.setContent(datas);
			br.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			br.setErrorMsg("queryDtos error:" + e.getMessage());
			br.setStatus(BaseResult.ERROR);
		}
		return br;
	}

	@ResponseBody
	@RequestMapping(value = "/{id}", method = RequestMethod.POST, produces = "application/json")
	public BaseResult queryById(HttpServletRequest request, @PathVariable String id) {
		log.info("queryById:{id-" + id + "}");
		BaseResult br = new BaseResult();
		try {
			CommonDto dto = commonService.getCommonDtoById(id);
			br.setContent(dto);
			br.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			br.setErrorMsg("queryById error:" + e.getMessage());
			br.setStatus(BaseResult.ERROR);
		}
		return br;
	}

	@ResponseBody
	@RequestMapping(value = "/query", method = RequestMethod.POST, produces = "application/json")
	public BaseResult queryByEntity(@RequestParam String param) {
		BaseResult br = new BaseResult();
		// try {
		// log.info("queryBycardno:{cardno-" + cardno + ",name-" + name + "}");
		// JSONObject jsonObject = commonService.getCommonDtoByEntity(dto);
		// br.setContent(jsonObject);
		// br.setStatus(BaseResult.SUCCESS);
		// } catch (Exception e) {
		// br.setErrorMsg("queryBycardno error:" + e.getMessage());
		// br.setStatus(BaseResult.ERROR);
		// }
		return br;
	}

}
