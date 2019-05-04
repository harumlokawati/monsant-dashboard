import {put, call, takeLatest} from 'redux-saga/effects'
import {SERVICE_GET_SERVICE_OVERVIEW, SERVICE_GET_SERVICE_IO} from "actions/service/overview/constants"
import * as actServiceOverview from 'actions/service/overview'


import * as apiService from 'api/service'

function* getOverview(request) {
    try {
        const {payload: {start, end}} = request
        let serviceOverview = yield call(apiService.getServiceOverview, start, end)
        yield put(actServiceOverview.setServiceOverview(serviceOverview))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getServiceIO(request) {
    try {
        const {payload: {start, end, interval}} = request
        let serviceIO = yield call(apiService.getServiceIO, start, end, interval)
        yield put(actServiceOverview.setServiceIO(serviceIO))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

export default function* serviceSaga() {
    yield takeLatest(SERVICE_GET_SERVICE_IO, getServiceIO)
    yield takeLatest(SERVICE_GET_SERVICE_OVERVIEW, getOverview)
}