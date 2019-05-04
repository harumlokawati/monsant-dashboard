const PORT = '8000'
const HOST = 'http://localhost'
const ADDRESS = `${HOST}:${PORT}`

export const GET_TENANTS_LIST_URL = `${ADDRESS}/api/tenants`
export const GET_TENANTS_OVERVIEW_URL = `${ADDRESS}/api/tenant_overview`
export const GET_TENANTS_PLAN_OVERVIEW_URL = `${ADDRESS}/api/tenant_plan`
export const GET_SERVICE_OVERVIEW = `${ADDRESS}/api/service_overview`
export const GET_SERVICE_IO = `${ADDRESS}/api/data_series`