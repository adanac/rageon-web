package com.adanac.tool.rageon.module.mq;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.common.entity.BaseResultDto;
import com.adanac.tool.rageon.module.mq.entity.MonitorDto;
import com.adanac.tool.rageon.module.mq.service.MonitorService;

@Controller
@RequestMapping(value = "/monitor", produces = "text/html;charset=UTF-8")
public class MonitorAction extends BaseAction {
	@Autowired
	private MonitorService monitorService;

	@ResponseBody
	@RequestMapping(value = "/test", method = RequestMethod.POST, produces = "application/json")
	public BaseResultDto<MonitorDto> monitor(MonitorDto dto) {
		log.info("monitor:{" + dto.toString() + "}");
		BaseResultDto<MonitorDto> br = new BaseResultDto<MonitorDto>();
		try {
			MonitorDto resultDto = monitorService.monitor(dto);
			// br.setContent("成功发送消息到服务器");
			br.setStatus(BaseResult.SUCCESS);
			br.setResult(resultDto);
		} catch (Exception e) {
			br.setErrorMsg("monitor error:" + e.getMessage());
			br.setStatus(BaseResult.ERROR);
		}
		return br;
	}
}
