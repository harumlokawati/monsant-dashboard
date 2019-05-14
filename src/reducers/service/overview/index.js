import {
    SERVICE_SET_SERVICE_IO,
    SERVICE_SET_SERVICE_OVERVIEW,
    SERVICE_SET_LATENCY_SERIES,
    SERVICE_SET_USAGE_SERIES,
    SERVICE_SET_SERVICE_LIST, SERVICE_SET_OPTION_INTERVAL, SERVICE_SET_OPTION_TIME_END, SERVICE_SET_OPTION_TIME_START
} from '../../../actions/service/overview/constants'
import {isFSA} from 'flux-standard-action'
import invariant from 'invariant'
import moment from "moment";

let initialState = {
    serviceList: {num_of_service: 0, services: []},
    serviceOverview: {},
    serviceIO: [],
    latencySeries: [],
    usageSeries: [],
    interval: '10m',
    timeEnd: moment().utc().format(),
    timeStart: moment().add(-2, 'hour').utc().format()
}


const reducer = (state = initialState, action) => {
    invariant(
        isFSA(action),
        `Invalid FSA action. See https://github.com/acdlite/flux-standard-action for info. Object: ${JSON.stringify(action)}`
    )

    const {payload = {}} = action
    switch (action.type) {
        case SERVICE_SET_SERVICE_OVERVIEW:
            return {...state, serviceOverview: payload.serviceOverview}
        case SERVICE_SET_SERVICE_IO:
            return {...state, serviceIO: payload.serviceIO}
        case SERVICE_SET_LATENCY_SERIES:
            return {...state, latencySeries: payload.latencySeries}
        case SERVICE_SET_OPTION_INTERVAL:
            return {...state, interval: payload.interval}
        case SERVICE_SET_OPTION_TIME_END:
            return {...state, timeEnd: payload.timeEnd}
        case SERVICE_SET_OPTION_TIME_START:
            return {...state, timeStart: payload.timeStart}
        case SERVICE_SET_USAGE_SERIES:
            return {...state, usageSeries: payload.usageSeries}
        case SERVICE_SET_SERVICE_LIST:
            return {...state, serviceList: payload.serviceList}
        default:
            return {...state}
    }
}

export {reducer}