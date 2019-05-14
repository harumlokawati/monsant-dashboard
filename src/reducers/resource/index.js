import {
    RESOURCE_SET_OVERVIEW,
    RESOURCE_SET_OPTION_TIME_END,
    RESOURCE_SET_OPTION_TIME_START,
    RESOURCE_SET_OPTION_INTERVAL,
    RESOURCE_SET_OPTION_HOST,
    RESOURCE_SET_OPTIONS_HOST,
    RESOURCE_SET_OPTIONS_DISK,
    RESOURCE_SET_OPTIONS_CPU,
    RESOURCE_SET_OPTION_DISK,
    RESOURCE_SET_OPTION_CPU,
    RESOURCE_SET_CPU_USAGE_SERIES,
    RESOURCE_SET_MEM_USAGE_SERIES,
    RESOURCE_SET_FS_USAGE_SERIES
} from '../../actions/resource/constants'
import {isFSA} from 'flux-standard-action'
import invariant from 'invariant'
import moment from "moment";

let initialState = {
    options_cpu: [{text: "All", value: ''}],
    options_disk: [{text: "All", value: ''}],
    options_host: [{text: "All", value: ''}],
    cpu: '',
    disk: '',
    host: '',
    overview: {
        "cpu_usage": 0,
        "ram_usage": 0,
        "fs_used": 0,
        "num_cpu": 0,
        "num_process": 0,
        "num_user": 0
    },
    interval: '1m',
    timeEnd: moment().utc().format(),
    timeStart: moment().add(-2, 'hour').utc().format(),
    cpu_usage_series:[],
    mem_usage_series:[],
    fs_usage_series:[]
}


const reducer = (state = initialState, action) => {
    invariant(
        isFSA(action),
        `Invalid FSA action. See https://github.com/acdlite/flux-standard-action for info. Object: ${JSON.stringify(action)}`
    )

    const {payload = {}} = action
    switch (action.type) {
        case RESOURCE_SET_OVERVIEW:
            return {...state, overview: payload.overview}
        case RESOURCE_SET_OPTION_TIME_END:
            return {...state, timeEnd: payload.timeEnd}
        case RESOURCE_SET_OPTION_TIME_START:
            return {...state, timeStart: payload.timeStart}
        case RESOURCE_SET_OPTION_INTERVAL:
            return {...state, interval: payload.interval}
        case RESOURCE_SET_OPTION_CPU:
            return {...state, cpu: payload.cpu}
        case RESOURCE_SET_OPTION_DISK:
            return {...state, disk: payload.disk}
        case RESOURCE_SET_OPTION_HOST:
            return {...state, host: payload.host}
        case RESOURCE_SET_OPTIONS_HOST:
            return {...state, options_host: payload.options_host}
        case RESOURCE_SET_OPTIONS_DISK:
            return {...state, options_disk: payload.options_disk}
        case RESOURCE_SET_OPTIONS_CPU:
            return {...state, options_cpu: payload.options_cpu}
        case RESOURCE_SET_CPU_USAGE_SERIES:
            return {...state, cpu_usage_series: payload.cpu_usage_series}
        case RESOURCE_SET_MEM_USAGE_SERIES:
            return {...state, mem_usage_series: payload.mem_usage_series}
        case RESOURCE_SET_FS_USAGE_SERIES:
            return {...state, fs_usage_series: payload.fs_usage_series}
        default:
            return {...state}
    }
}

export {reducer}