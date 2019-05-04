import * as url from '../constants'
import axios from 'axios'

// import io from "socket.io-client"

export function getServiceOverview(start, end) {
    console.log("yoo")
    return axios.get(url.GET_SERVICE_OVERVIEW,
        {
            params: {
                start: start,
                end: end
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


export function getServiceIO(start, end, interval) {
    return axios.get(url.GET_SERVICE_IO,
        {
            params: {
                start: start,
                end: end,
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