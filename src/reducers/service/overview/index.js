import {
    SERVICE_SET_SERVICE_IO,
    SERVICE_SET_SERVICE_OVERVIEW
} from '../../../actions/service/overview/constants'
import {isFSA} from 'flux-standard-action'
import invariant from 'invariant'

let initialState = {
    serviceList: [],
    serviceOverview: {},
    serviceIO: []
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
        default:
            return {...state}
    }
}

export {reducer}