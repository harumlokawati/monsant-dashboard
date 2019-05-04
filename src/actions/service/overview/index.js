import {
    SERVICE_GET_SERVICE_OVERVIEW,
    SERVICE_SET_SERVICE_OVERVIEW,
    SERVICE_GET_SERVICE_IO,
    SERVICE_SET_SERVICE_IO
} from './constants'

export function getServiceOverview(start, end) {
    return {type: SERVICE_GET_SERVICE_OVERVIEW, payload: {start, end}}
}

export function setServiceOverview(serviceOverview) {
    return {type: SERVICE_SET_SERVICE_OVERVIEW, payload: {serviceOverview}}
}

export function getServiceIO(start, end, interval) {
    return {type: SERVICE_GET_SERVICE_IO, payload: {start, end, interval}}
}

export function setServiceIO(serviceIO) {
    return {type: SERVICE_SET_SERVICE_IO, payload: {serviceIO}}
}