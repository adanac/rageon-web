package com.adanac.tool.rageon.module.disconf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.exception.SysException;
import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.common.entity.BaseResultDto;
import com.adanac.tool.rageon.module.disconf.service.DisconfService;

@Controller
@RequestMapping(value = "/disconf", produces = "text/html;charset=UTF-8")
public class DisconfAction<T> extends BaseAction {
	@Autowired
	private DisconfService disconfService;

	@ResponseBody
	@RequestMapping(value = "/{companyCode}", method = RequestMethod.GET, produces = "application/json")
	public BaseResultDto<Boolean> validate(@PathVariable String companyCode) {
		log.info("companyCode:{" + companyCode + "}");
		BaseResultDto<Boolean> br = new BaseResultDto<Boolean>();
		try {
			boolean result = disconfService.validateCompanyCode(companyCode);
			br.setStatus(BaseResult.SUCCESS);
			br.setResult(new Boolean(result));
		} catch (Exception e) {
			br.setErrorMsg("disconf error:" + e.getMessage());
			br.setStatus(BaseResult.ERROR);
			throw new SysException(e);
		}
		return br;
	}
}
