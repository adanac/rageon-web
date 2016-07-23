package com.adanac.tool.rageon.module;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.adanac.framework.utils.StringUtils;
import com.adanac.framework.web.controller.BaseResult;
import com.adanac.tool.rageon.common.BaseAction;
import com.adanac.tool.rageon.intf.common.entity.BaseResultDto;
import com.adanac.tool.rageon.intf.module.mq.entity.MonitorDto;
import com.adanac.tool.rageon.intf.module.mq.service.ActiveMqService;
import com.adanac.tool.rageon.intf.module.mq.service.MonitorService;

@Controller
@RequestMapping(value = "/activeMq", produces = "text/html;charset=UTF-8")
public class ActiveMqAction extends BaseAction {
	@Autowired
	private MonitorService monitorService;
	@Autowired
	private ActiveMqService activeMqService;

	@ResponseBody
	@RequestMapping(value = "/mqAddSync", method = RequestMethod.POST, produces = "application/json")
	public BaseResultDto<String> monitor(MonitorDto dto) {
		log.info("monitor:{" + dto.toString() + "}");
		BaseResultDto<String> br = new BaseResultDto<String>();
		try {
			String result = monitorService.add(dto);

			// 通过 mq 同步操作
			if (!StringUtils.isEmpty(result)) {// 添加成功
				String id = dto.getId();
				activeMqService.syncMonitor(id);
			}
			// br.setContent("成功发送消息到服务器");
			br.setStatus(BaseResult.SUCCESS);
			br.setResult(result);
		} catch (Exception e) {
			br.setErrorMsg("mq error:" + e.getMessage());
			br.setStatus(BaseResult.ERROR);
		}
		return br;
	}
}
