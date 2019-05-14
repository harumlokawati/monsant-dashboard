import {
    RESOURCE_GET_OPTIONS_CPU,
    RESOURCE_GET_OPTIONS_DISK,
    RESOURCE_GET_OPTIONS_HOST,
    RESOURCE_SET_OPTIONS_CPU,
    RESOURCE_SET_OPTIONS_DISK,
    RESOURCE_SET_OPTIONS_HOST,
    RESOURCE_GET_OVERVIEW,
    RESOURCE_SET_OVERVIEW,
    RESOURCE_SET_OPTION_TIME_END,
    RESOURCE_SET_OPTION_TIME_START,
    RESOURCE_SET_OPTION_INTERVAL,
    RESOURCE_SET_OPTION_CPU,
    RESOURCE_SET_OPTION_DISK,
    RESOURCE_SET_OPTION_HOST,
    RESOURCE_GET_CPU_USAGE_SERIES,
    RESOURCE_SET_CPU_USAGE_SERIES,
    RESOURCE_GET_MEM_USAGE_SERIES,
    RESOURCE_SET_MEM_USAGE_SERIES,
    RESOURCE_SET_FS_USAGE_SERIES,
    RESOURCE_GET_FS_USAGE_SERIES
} from './constants'

export function getResourceOverview(host) {
    return {type: RESOURCE_GET_OVERVIEW, payload: {host}}
}

export function setResourceOverview(overview) {
    return {type: RESOURCE_SET_OVERVIEW, payload: {overview}}
}

export function getOptionsCPU(host) {
    return {type: RESOURCE_GET_OPTIONS_CPU, payload: {host}}
}

export function getOptionsHost() {
    return {type: RESOURCE_GET_OPTIONS_HOST, payload: {}}
}

export function getOptionsDisk() {
    return {type: RESOURCE_GET_OPTIONS_DISK, payload: {}}
}

export function setOptionsCPU(options_cpu) {
    console.log(options_cpu)
    return {type: RESOURCE_SET_OPTIONS_CPU, payload: {options_cpu}}
}

export function setOptionsHost(options_host) {
    return {type: RESOURCE_SET_OPTIONS_HOST, payload: {options_host}}
}

export function setOptionsDisk(options_disk) {
    return {type: RESOURCE_SET_OPTIONS_DISK, payload: {options_disk}}
}

export function setOptionTimeEnd(timeEnd, timeStart, interval, cpu, disk, host) {
    return {type: RESOURCE_SET_OPTION_TIME_END, payload: {timeEnd, timeStart, interval, cpu, disk, host}}
}

export function setOptionTimeStart(timeEnd, timeStart, interval, cpu, disk, host) {
    return {type: RESOURCE_SET_OPTION_TIME_START, payload: {timeEnd, timeStart, interval, cpu, disk, host}}
}

export function setOptionInterval(timeEnd, timeStart, interval, cpu, disk, host) {
    return {type: RESOURCE_SET_OPTION_INTERVAL, payload: {timeEnd, timeStart, interval, cpu, disk, host}}
}

export function setOptionCPU(timeEnd, timeStart, interval, cpu, disk, host) {
    return {type: RESOURCE_SET_OPTION_CPU, payload: {timeEnd, timeStart, interval, cpu, disk, host}}
}

export function setOptionDisk(timeEnd, timeStart, interval, cpu, disk, host) {
    return {type: RESOURCE_SET_OPTION_DISK, payload: {timeEnd, timeStart, interval, cpu, disk, host}}
}

export function setOptionHost(timeEnd, timeStart, interval, cpu, disk, host) {
    return {type: RESOURCE_SET_OPTION_HOST, payload: {timeEnd, timeStart, interval, cpu, disk, host}}
}

export function getCPUUsageSeries(host, timeStart, timeEnd, interval) {
    return {type: RESOURCE_GET_CPU_USAGE_SERIES, payload: {host, timeStart, timeEnd, interval}}
}

export function setCPUUsageSeries(cpu_usage_series) {
    return {type: RESOURCE_SET_CPU_USAGE_SERIES, payload: {cpu_usage_series}}
}

export function getMemUsageSeries(host, timeStart, timeEnd, interval) {
    return {type: RESOURCE_GET_MEM_USAGE_SERIES, payload: {host, timeStart, timeEnd, interval}}
}

export function setMemUsageSeries(mem_usage_series) {
    return {type: RESOURCE_SET_MEM_USAGE_SERIES, payload: {mem_usage_series}}
}

export function getFSUsageSeries(host, timeStart, timeEnd, interval) {
    return {type: RESOURCE_GET_FS_USAGE_SERIES, payload: {host, timeStart, timeEnd, interval}}
}

export function setFSUsageSeries(fs_usage_series) {
    return {type: RESOURCE_SET_FS_USAGE_SERIES, payload: {fs_usage_series}}
}