package com.adanac.tool.rageon.ip;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.intf.ip.service.Md5Dto;
import com.adanac.tool.rageon.utils.IpAddressUtil;
import com.adanac.tool.rageon.utils.MD5DecodeUtil;
import com.adanac.tool.rageon.utils.MD5Util;

@Controller
@RequestMapping(value = "/ip", produces = "text/html;charset=UTF-8")
public class IpAction extends BaseAction {

	@RequestMapping("index")
	public String index(HttpServletRequest request, ModelMap model) {
		return "tools/ip/ip.ftl";
	}

	@ResponseBody
	@RequestMapping(value = "md5Encode", method = RequestMethod.POST, produces = "application/json")
	public BaseResult md5Encode(HttpServletRequest request, Md5Dto md5Dto) {
		log.info("====md5Encode====md5Dto:" + md5Dto.toString());
		BaseResult baseResult = new BaseResult();
		String[] res = new String[3];
		try {
			String inStr = md5Dto.getQuerymd5();
			String md5Value = MD5Util.md5Encode(inStr);
			res[0] = inStr;
			res[1] = md5Value.substring(8, 24);
			res[2] = md5Value;
			baseResult.setContent(res);
			baseResult.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			log.info("====md5Encode====error{}" + e.getMessage());
			baseResult.setContent(e.getMessage());
			baseResult.setStatus(BaseResult.ERROR);
		}
		return baseResult;
	}

	@ResponseBody
	@RequestMapping(value = "md5Decode", method = RequestMethod.POST, produces = "application/json")
	public BaseResult md5Decode(HttpServletRequest request, Md5Dto md5Dto) {
		log.info("====md5Decode====md5Dto:" + md5Dto.toString());
		BaseResult baseResult = new BaseResult();
		String[] res = new String[2];
		try {
			String inStr = md5Dto.getQuerymd5();
			String oriPwd = MD5DecodeUtil.md5Decode(inStr);
			res[0] = inStr;
			res[1] = oriPwd;
			baseResult.setContent(res);
			baseResult.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			log.info("====md5Decode====error{}" + e.getMessage());
			baseResult.setContent(e.getMessage());
			baseResult.setStatus(BaseResult.ERROR);
		}
		return baseResult;
	}

	@ResponseBody
	@RequestMapping(value = "queryIp", method = RequestMethod.POST, produces = "application/json")
	public BaseResult queryIp(HttpServletRequest request) {
		String ip = request.getParameter("ip");
		log.info("====queryIp====Ip:" + ip);
		BaseResult baseResult = new BaseResult();
		String[] res = new String[2];
		try {
			String ipAddress = IpAddressUtil.getAddressByIp(ip);
			res[0] = ip;
			res[1] = ipAddress;
			baseResult.setContent(res);
			baseResult.setStatus(BaseResult.SUCCESS);
		} catch (Exception e) {
			log.info("====queryIp====error{}" + e.getMessage());
			baseResult.setContent(e.getMessage());
			baseResult.setStatus(BaseResult.ERROR);
		}
		return baseResult;
	}
}
