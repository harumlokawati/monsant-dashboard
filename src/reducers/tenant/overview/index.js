import {
    TENANT_SET_TENANT_LIST,
    TENANT_SET_TENANT_OVERVIEW,
    TENANT_SET_TENANT_PLAN, TENANT_SET_OPTION_INTERVAL, TENANT_SET_OPTION_TIME_END, TENANT_SET_OPTION_TIME_START,
    TENANT_SET_LOGIN_ACTIVITY
} from '../../../actions/tenant/overview/constants'
import {isFSA} from 'flux-standard-action'
import invariant from 'invariant'
import moment from "moment";


let initialState = {
    totalPage: null,
    tenantList: [],
    loginActivity: [],
    tenantOverview: {},
    currentPage: 1,
    interval: '1h',
    timeEnd: moment().utc().format(),
    timeStart: moment().add(-2, 'day').utc().format()
}


const reducer = (state = initialState, action) => {
    invariant(
        isFSA(action),
        `Invalid FSA action. See https://github.com/acdlite/flux-standard-action for info. Object: ${JSON.stringify(action)}`
    )

    const {payload = {}} = action
    switch (action.type) {
        case TENANT_SET_TENANT_LIST:
            return {...state, tenantList: payload.tenantList}
        case TENANT_SET_TENANT_OVERVIEW:
            return {...state, tenantOverview: payload.tenantOverview}
        case TENANT_SET_TENANT_PLAN:
            return {...state, tenantPlan: payload.tenantPlan}
        case TENANT_SET_OPTION_INTERVAL:
            return {...state, interval: payload.interval}
        case TENANT_SET_OPTION_TIME_END:
            return {...state, timeEnd: payload.timeEnd}
        case TENANT_SET_OPTION_TIME_START:
            return {...state, timeStart: payload.timeStart}
        case TENANT_SET_LOGIN_ACTIVITY:
            return {...state, loginActivity: payload.loginActivity}
        default:
            return {...state}
    }
}

export {reducer}