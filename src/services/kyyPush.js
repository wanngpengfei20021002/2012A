import request from '@/utils/request'
import api from './api'

// 获取规则列表
export const getPushRuleList = payload => request.get(api.get_send_rule_lists, payload)

// 获取推送列表
export const getPushNumList = payload => request.get(api.get_send_lists, payload)

// 修改推送状态
export const changePushStatus = payload => request.post(api.change_send_status, payload)

// 新增修改推送规则
export const submitPushRule = payload => request.post(api.submit_push_rule, payload)

// 
export const getPushRuleDetail = payload => request.post(api.get_push_rule_details, payload)

// 获取专题活动列表
export const getSpecialActList = payload => request.get(api.get_specialact_list, payload)

// 获取促销活动列表
export const getPromoteActList = payload => request.get(api.get_promoteact_list, payload)
