import * as url from '../constants'
import axios from 'axios'

export function getHostOptions() {
    return axios.get(url.GET_RESOURCE_HOST_OPTIONS,
        {
            params: {}
        }
    )
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

export function getCPUOptions(host) {
    return axios.get(url.GET_RESOURCE_CPU_OPTIONS,
        {
            params: {host: host}
        }
    )
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

export function getDiskOptions() {
    return axios.get(url.GET_RESOURCE_DISK_OPTIONS,
        {
            params: {}
        }
    )
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

export function getOverview(host) {
    return axios.get(url.GET_RESOURCE_OVERVIEW,
        {
            params: {host: host}
        }
    )
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

export function getCPUUsageSeries(host, timeStart, timeEnd, interval) {
    return axios.get(url.GET_RESOURCE_CPU_USAGE_SERIES,
        {
            params: {
                host: host,
                start: timeStart,
                end: timeEnd,
                interval: interval
            }
        }
    )
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

export function getMemUsageSeries(host, timeStart, timeEnd, interval) {
    return axios.get(url.GET_RESOURCE_MEM_USAGE_SERIES,
        {
            params: {
                host: host,
                start: timeStart,
                end: timeEnd,
                interval: interval
            }
        }
    )
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

export function getFSUsageSeries(host, timeStart, timeEnd, interval) {
    return axios.get(url.GET_RESOURCE_FS_USAGE_SERIES,
        {
            params: {
                host: host,
                start: timeStart,
                end: timeEnd,
                interval: interval
            }
        }
    )
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}