import * as url from '../constants'
import axios from 'axios'

// import io from "socket.io-client"

export function getTenants(page, row_num) {
    return axios.get(url.GET_TENANTS_LIST_URL,
        {
            params: {
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

export function getTenantOverview(request) {
    return axios.get(url.GET_TENANTS_OVERVIEW_URL, {params: request})
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

export function getTenantPlanOverview(request) {
    return axios.get(url.GET_TENANTS_PLAN_OVERVIEW_URL, {params: request})
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

export function getLoginActivity(timeStart, timeEnd, interval) {
    return axios.get(url.GET_TENANTS_LOGIN_ACTIVITY_URL, {
        params: {
            start: timeStart,
            end: timeEnd,
            interval: interval
        }
    })
        .then(res => {
            return Promise.resolve(res.data.data)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}