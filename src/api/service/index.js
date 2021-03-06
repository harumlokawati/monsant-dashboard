import * as url from '../constants'
import axios from 'axios'

// import io from "socket.io-client"

export function getServiceOverview(timeStart, timeEnd,) {
    console.log("yoo")
    return axios.get(url.GET_SERVICE_OVERVIEW,
        {
            params: {
                start: timeStart,
                end: timeEnd
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


export function getServiceIO(timeStart, timeEnd, interval) {
    return axios.get(url.GET_SERVICE_IO,
        {
            params: {
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

export function getLatencySeries(timeStart, timeEnd, interval) {
    return axios.get(url.GET_LATENCY_SERIES,
        {
            params: {
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

export function getUsageSeries(timeStart, timeEnd, interval) {
    return axios.get(url.GET_USAGE_SERIES,
        {
            params: {
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

export function getServiceList(timeStart, timeEnd, page, row_num) {
    return axios.get(url.GET_SERVICE_LIST_URL,
        {
            params: {
                start: timeStart,
                end: timeEnd,
                page: page,
                row_num: row_num
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