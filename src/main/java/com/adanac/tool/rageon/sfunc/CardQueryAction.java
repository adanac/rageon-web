package com.adanac.tool.rageon.sfunc;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.sfunc.intf.IdCardService;
import com.alibaba.fastjson.JSONObject;

/**
 * 查询身份信息
 */
@Controller
@RequestMapping(value = "/card", produces = "text/html;charset=UTF-8")
public class CardQueryAction extends BaseAction {

	@Autowired
	private IdCardService cardService;

	@ResponseBody
	@RequestMapping(value = "/{cardno}", method = RequestMethod.POST, produces = "application/json")
	public BaseResult queryBycardno(@PathVariable String cardno) {
		log.info("queryBycardno:{cardno-" + cardno + "}");
		BaseResult br = new BaseResult();
		try {

			JSONObject jsonObject = cardService.queryByCardno(cardno);
			br.setContent(jsonObject);
			br.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			br.setErrorMsg("queryBycardno error:" + e.getMessage());
			br.setStatus(BaseResult.ERROR);
		}
		return br;
	}

	@ResponseBody
	@RequestMapping(value = "/name/{cardno}", method = RequestMethod.POST, produces = "application/json")
	public BaseResult queryBynameAndno(HttpServletRequest request, @PathVariable String cardno) {
		String name = request.getParameter("name");
		log.info("queryBynameAndno:{cardno-" + cardno + ",name-" + name + "}");
		BaseResult br = new BaseResult();
		try {
			JSONObject jsonObject = cardService.queryByNameAndCardno(name, cardno);
			br.setContent(jsonObject);
			br.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			br.setErrorMsg("queryBynameAndno error:" + e.getMessage());
			br.setStatus(BaseResult.ERROR);
		}
		return br;
	}

	@ResponseBody
	@RequestMapping(value = "/query/{cardno}", method = RequestMethod.POST, produces = "application/json")
	public BaseResult queryBycardno2(@PathVariable String cardno, @RequestParam String name) {
		BaseResult br = new BaseResult();
		try {
			name = java.net.URLDecoder.decode(name, "utf-8");
			log.info("queryBycardno:{cardno-" + cardno + ",name-" + name + "}");
			JSONObject jsonObject = cardService.queryByNameAndCardno(name, cardno);
			br.setContent(jsonObject);
			br.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			br.setErrorMsg("queryBycardno error:" + e.getMessage());
			br.setStatus(BaseResult.ERROR);
		}
		return br;
	}

}
