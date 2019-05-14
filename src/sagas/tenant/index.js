import {put, call, takeLatest} from 'redux-saga/effects'
import {
    TENANT_OVERVIEW_PAGE_REQUEST,
    TENANT_GET_TENANT_LIST,
    TENANT_GET_LOGIN_ACTIVITY,
    TENANT_SET_OPTION_INTERVAL, TENANT_SET_OPTION_TIME_START, TENANT_SET_OPTION_TIME_END
} from "actions/tenant/overview/constants"
import * as actTenantOverview from 'actions/tenant/overview'


import * as apiTenant from 'api/tenant'

function* pageRequest() {
    try {
        let tenantOverview = yield call(apiTenant.getTenantOverview)
        let tenantPlan = yield call(apiTenant.getTenantPlanOverview)
        yield put(actTenantOverview.setTenantOverview(tenantOverview))
        yield put(actTenantOverview.setTenantPlan(tenantPlan))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getTenantList(request) {
    try {
        const {payload: {page, row_num}} = request
        let responseTenant = yield call(apiTenant.getTenants, page, row_num)
        yield put(actTenantOverview.setTenantList(responseTenant))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success get tenant list")
    }
}

function* getLoginActivity(request) {
    try {
        const {payload: {timeStart, timeEnd, interval}} = request
        let loginActivity = yield call(apiTenant.getLoginActivity, timeStart, timeEnd, interval)
        yield put(actTenantOverview.setLoginActivity(loginActivity))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success get tenant list")
    }
}

export default function* tenantSaga() {
    yield takeLatest(TENANT_OVERVIEW_PAGE_REQUEST, pageRequest)
    yield takeLatest(TENANT_GET_TENANT_LIST, getTenantList)
    yield takeLatest([TENANT_GET_LOGIN_ACTIVITY, TENANT_SET_OPTION_INTERVAL, TENANT_SET_OPTION_TIME_START, TENANT_SET_OPTION_TIME_END], getLoginActivity)
}