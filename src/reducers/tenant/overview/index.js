import {
    TENANT_SET_TENANT_LIST,
    TENANT_SET_TENANT_OVERVIEW,
    TENANT_SET_TENANT_PLAN
} from '../../../actions/tenant/overview/constants'
import {isFSA} from 'flux-standard-action'
import invariant from 'invariant'

let initialState = {
    totalPage: null,
    tenantList: [],
    tenantOverview: {},
    currentPage: 1
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
            console.log("set", payload.tenantPlan)
            return {...state, tenantPlan: payload.tenantPlan}
        default:
            return {...state}
    }
}

export {reducer}