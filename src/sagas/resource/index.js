import {put, call, takeLatest} from 'redux-saga/effects'
import {
    RESOURCE_GET_OPTIONS_HOST,
    RESOURCE_GET_OPTIONS_CPU,
    RESOURCE_GET_OPTIONS_DISK,
    RESOURCE_GET_OVERVIEW,
    RESOURCE_GET_CPU_USAGE_SERIES,
    RESOURCE_GET_MEM_USAGE_SERIES,
    RESOURCE_GET_FS_USAGE_SERIES,
    RESOURCE_SET_OPTION_TIME_END
} from "actions/resource/constants"
import * as actResource from 'actions/resource'
import * as apiResource from 'api/resource'

function* getOptionsHost() {
    try {
        let options_host = yield call(apiResource.getHostOptions)
        yield put(actResource.setOptionsHost(options_host))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getOptionsCPU(request) {
    try {
        const {payload: {host}} = request
        let options_cpu = yield call(apiResource.getCPUOptions, host)
        yield put(actResource.setOptionsCPU(options_cpu))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getOptionsDisk() {
    try {
        let options_disk = yield call(apiResource.getDiskOptions)
        yield put(actResource.setOptionsDisk(options_disk))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getOverview(request) {
    try {
        const {payload: {host}} = request
        let overview = yield call(apiResource.getOverview,host)
        yield put(actResource.setResourceOverview(overview))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getCPUUsageSeries(request) {
    try {
        const {payload: {host, timeStart, timeEnd, interval}} = request
        let cpu_usage_series = yield call(apiResource.getCPUUsageSeries,host,timeStart, timeEnd, interval)
        yield put(actResource.setCPUUsageSeries(cpu_usage_series))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getMemUsageSeries(request) {
    try {
        const {payload: {host, timeStart, timeEnd, interval}} = request
        let mem_usage_series = yield call(apiResource.getMemUsageSeries,host,timeStart, timeEnd, interval)
        yield put(actResource.setMemUsageSeries(mem_usage_series))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

function* getFSUsageSeries(request) {
    try {
        const {payload: {host, timeStart, timeEnd, interval}} = request
        let fs_usage_series = yield call(apiResource.getFSUsageSeries,host,timeStart, timeEnd, interval)
        yield put(actResource.setFSUsageSeries(fs_usage_series))

    } catch (e) {
        console.log(e)
    } finally {
        console.log("success")
    }
}

export default function* resourceSaga() {
    yield takeLatest(RESOURCE_GET_OPTIONS_HOST, getOptionsHost)
    yield takeLatest(RESOURCE_GET_OPTIONS_CPU, getOptionsCPU)
    yield takeLatest(RESOURCE_GET_OPTIONS_DISK, getOptionsDisk)
    yield takeLatest(RESOURCE_GET_OVERVIEW, getOverview)
    yield takeLatest([RESOURCE_SET_OPTION_TIME_END,RESOURCE_GET_CPU_USAGE_SERIES], getCPUUsageSeries)
    yield takeLatest([RESOURCE_SET_OPTION_TIME_END,RESOURCE_GET_MEM_USAGE_SERIES],getMemUsageSeries)
    yield takeLatest([RESOURCE_SET_OPTION_TIME_END,RESOURCE_GET_FS_USAGE_SERIES], getFSUsageSeries)
}