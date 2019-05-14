import {put, call, takeLatest} from 'redux-saga/effects'
import {
    SERVICE_GET_SERVICE_OVERVIEW,
    SERVICE_GET_SERVICE_IO,
    SERVICE_GET_LATENCY_SERIES,
    SERVICE_SET_OPTION,
    SERVICE_GET_USAGE_SERIES,
    SERVICE_GET_SERVICE_LIST, SERVICE_SET_OPTION_INTERVAL, SERVICE_SET_OPTION_TIME_END, SERVICE_SET_OPTION_TIME_START,
} from "actions/service/overview/constants"
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
        const {payload: {timeStart, timeEnd, interval}} = request
        let serviceIO = yield call(apiService.getServiceIO, timeStart, timeEnd, interval)
        yield put(actServiceOverview.setServiceIO(serviceIO))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getLatencySeries(request) {
    try {
        const {payload: {timeStart, timeEnd, interval}} = request
        let latencySeries = yield call(apiService.getLatencySeries, timeStart, timeEnd, interval)
        yield put(actServiceOverview.setLatencySeries(latencySeries))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getUsageSeries(request) {
    try {
        const {payload: {timeStart, timeEnd, interval}} = request
        let usageSeries = yield call(apiService.getUsageSeries, timeStart, timeEnd, interval)
        yield put(actServiceOverview.setUsageSeries(usageSeries))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getServiceList(request) {
    try {
        const {payload: {timeStart, timeEnd, page, row_num}} = request
        let serviceList = yield call(apiService.getServiceList, timeStart, timeEnd, page, row_num)
        yield put(actServiceOverview.setServiceList(serviceList))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}


export default function* serviceSaga() {
    yield takeLatest([SERVICE_SET_OPTION_INTERVAL,SERVICE_SET_OPTION_TIME_END,SERVICE_SET_OPTION_TIME_START, SERVICE_GET_SERVICE_IO], getServiceIO)
    yield takeLatest(SERVICE_GET_SERVICE_OVERVIEW, getOverview)
    yield takeLatest([SERVICE_SET_OPTION_INTERVAL,SERVICE_SET_OPTION_TIME_END,SERVICE_SET_OPTION_TIME_START, SERVICE_GET_LATENCY_SERIES], getLatencySeries)
    yield takeLatest([SERVICE_SET_OPTION_INTERVAL,SERVICE_SET_OPTION_TIME_END,SERVICE_SET_OPTION_TIME_START, SERVICE_GET_USAGE_SERIES], getUsageSeries)
    yield takeLatest(SERVICE_GET_SERVICE_LIST, getServiceList)
}