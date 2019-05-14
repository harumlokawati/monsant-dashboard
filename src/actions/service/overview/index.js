import {
    SERVICE_GET_SERVICE_OVERVIEW,
    SERVICE_SET_SERVICE_OVERVIEW,
    SERVICE_GET_SERVICE_IO,
    SERVICE_SET_SERVICE_IO,
    SERVICE_GET_LATENCY_SERIES,
    SERVICE_SET_LATENCY_SERIES,
    SERVICE_SET_OPTION,
    SERVICE_GET_USAGE_SERIES,
    SERVICE_SET_USAGE_SERIES,
    SERVICE_GET_SERVICE_LIST,
    SERVICE_SET_SERVICE_LIST,
    SERVICE_SET_OPTION_TIME_START,
    SERVICE_SET_OPTION_TIME_END,
    SERVICE_SET_OPTION_INTERVAL
} from './constants'

export function getServiceOverview(start, end) {
    return {type: SERVICE_GET_SERVICE_OVERVIEW, payload: {start, end}}
}

export function setServiceOverview(serviceOverview) {
    return {type: SERVICE_SET_SERVICE_OVERVIEW, payload: {serviceOverview}}
}

export function getServiceIO(timeStart, timeEnd, interval) {
    return {type: SERVICE_GET_SERVICE_IO, payload: {timeStart, timeEnd, interval}}
}

export function setServiceIO(serviceIO) {
    return {type: SERVICE_SET_SERVICE_IO, payload: {serviceIO}}
}

export function getLatencySeries(timeStart, timeEnd, interval) {
    return {type: SERVICE_GET_LATENCY_SERIES, payload: {timeStart, timeEnd, interval}}
}

export function setLatencySeries(latencySeries) {
    return {type: SERVICE_SET_LATENCY_SERIES, payload: {latencySeries}}
}

export function getUsageSeries(timeStart, timeEnd, interval) {
    return {type: SERVICE_GET_USAGE_SERIES, payload: {timeStart, timeEnd, interval}}
}

export function setUsageSeries(usageSeries) {
    return {type: SERVICE_SET_USAGE_SERIES, payload: {usageSeries}}
}

export function getServiceList(timeStart, timeEnd, page, row_num) {
    return {type: SERVICE_GET_SERVICE_LIST, payload: {timeStart, timeEnd, page, row_num}}
}

export function setServiceList(serviceList) {
    return {type: SERVICE_SET_SERVICE_LIST, payload: {serviceList}}
}

export function setOption(timeStart, timeEnd, interval) {
    return {type: SERVICE_SET_OPTION, payload: {timeStart, timeEnd, interval}}
}

export function setOptionTimeStart(timeStart, timeEnd, interval) {
    return {type: SERVICE_SET_OPTION_TIME_START, payload: {timeStart,timeEnd, interval}}
}

export function setOptionTimeEnd(timeStart, timeEnd, interval) {
    return {type: SERVICE_SET_OPTION_TIME_END, payload: { timeStart,timeEnd, interval}}
}

export function setOptionInterval(timeStart, timeEnd, interval) {
    return {type: SERVICE_SET_OPTION_INTERVAL, payload: {timeStart,timeEnd, interval}}
}