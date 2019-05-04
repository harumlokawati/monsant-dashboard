import {put, call, takeLatest} from 'redux-saga/effects'
import {TENANT_OVERVIEW_PAGE_REQUEST, TENANT_GET_TENANT_LIST} from "actions/tenant/overview/constants"
import * as actTenantOverview from 'actions/tenant/overview'


import * as apiTenant from 'api/tenant'

function* pageRequest() {
    try {
        let tenantOverview = yield call(apiTenant.getTenantOverview)
        let tenantPlan = yield call(apiTenant.getTenantPlanOverview)
        console.log(tenantPlan)
        console.log(tenantOverview)
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
        console.log(responseTenant)
        yield put(actTenantOverview.setTenantList(responseTenant))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success get tenant list")
    }
}


export default function* tenantSaga() {
    yield takeLatest(TENANT_OVERVIEW_PAGE_REQUEST, pageRequest)
    yield takeLatest(TENANT_GET_TENANT_LIST, getTenantList)
}