import {
    TENANT_OVERVIEW_MOVE_PAGE,
    TENANT_SET_TENANT_LIST,
    TENANT_OVERVIEW_PAGE_REQUEST,
    TENANT_SET_TENANT_OVERVIEW,
    TENANT_SET_TENANT_PLAN,
    TENANT_GET_TENANT_LIST,
    TENANT_SET_OPTION_INTERVAL,
    TENANT_SET_OPTION_TIME_END,
    TENANT_SET_OPTION_TIME_START,
    TENANT_GET_LOGIN_ACTIVITY,
    TENANT_SET_LOGIN_ACTIVITY
} from './constants'

export function onClickMovePage(pagination) {
    return {type: TENANT_OVERVIEW_MOVE_PAGE, payload: {pagination}}
}

export function pageRequest(page, row_num) {
    return {type: TENANT_OVERVIEW_PAGE_REQUEST, payload: {page, row_num}}
}

export function setTenantList(tenantList) {
    return {type: TENANT_SET_TENANT_LIST, payload: {tenantList}}
}

export function setTenantOverview(tenantOverview) {
    return {type: TENANT_SET_TENANT_OVERVIEW, payload: {tenantOverview}}
}

export function setTenantPlan(tenantPlan) {
    return {type: TENANT_SET_TENANT_PLAN, payload: {tenantPlan}}
}

export function getTenantList(page,row_num) {
    return {type: TENANT_GET_TENANT_LIST, payload: {page, row_num}}
}

export function getLoginActivity(timeStart, timeEnd, interval) {
    return {type: TENANT_GET_LOGIN_ACTIVITY, payload: {timeStart, timeEnd, interval}}
}
export function setLoginActivity(loginActivity) {
    return {type: TENANT_SET_LOGIN_ACTIVITY, payload: {loginActivity}}
}

export function setOptionTimeStart(timeStart, timeEnd, interval) {
    return {type: TENANT_SET_OPTION_TIME_START, payload: {timeStart,timeEnd, interval}}
}

export function setOptionTimeEnd(timeStart, timeEnd, interval) {
    return {type: TENANT_SET_OPTION_TIME_END, payload: { timeStart,timeEnd, interval}}
}

export function setOptionInterval(timeStart, timeEnd, interval) {
    return {type: TENANT_SET_OPTION_INTERVAL, payload: {timeStart,timeEnd, interval}}
}