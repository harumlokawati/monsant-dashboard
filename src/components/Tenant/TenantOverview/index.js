import React, {Component} from 'react'
import {Row} from "reactstrap";
import TableOverviewTenant from 'components/Tenant/TableOverviewTenant'
import BarStack from 'components/Chart/BarStack'
import Number from 'components/Chart/Number'
import Option from 'components/Option'
import {pageRequest} from "../../../actions/tenant/overview";
import {connect} from "react-redux";
import TimeSeries from "../../Chart/TimeSeries";
import "./tenantoverview.css"

class TenantOverview extends Component {

    state = {
        age: 10,
        labelWidth: 100
    }

    componentWillMount() {
        const {dispatch} = this.props
        dispatch(pageRequest())

    }

    constructor(props) {
        super(props)
    }

    render() {
        let status = this.props.tenantPlan
        let options = [
            {
                "text": "1s",
                "value": "1s"
            },
            {
                "text": "5s",
                "value": "5s"
            },
            {
                "text": "10s",
                "value": "10s"
            },
            {
                "text": "1m",
                "value": "1m"
            },
            {
                "text": "10m",
                "value": "10m"
            },
            {
                "text": "30m",
                "value": "30m"
            },
            {
                "text": "1h",
                "value": "1h"
            },
            {
                "text": "12h",
                "value": "12h"
            },
            {
                "text": "1d",
                "value": "1d"
            }
        ]
        let planDataKeys = [
            {
                "dataKey": "annual",
                "color": "#8884d8"
            },
            {
                "dataKey": "monthly",
                "color": "#82ca9d"
            },
            {
                "dataKey": "semester",
                "color": "#ed86ae"
            },
        ]
        let loginKeys = [
            {
                "dataKey": "login",
                "color": "#82ca9d"
            },
        ]
        let loginAct = [
            {
                "time": "2019-04-14T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-14T12:00:00Z",
                "login": 15
            },
            {
                "time": "2019-04-15T00:00:00Z",
                "login": 1
            },
            {
                "time": "2019-04-15T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-16T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-16T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-17T00:00:00Z",
                "login": 3
            },
            {
                "time": "2019-04-17T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-18T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-18T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-19T00:00:00Z",
                "login": 2
            },
            {
                "time": "2019-04-19T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-20T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-20T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-21T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-21T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-22T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-22T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-23T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-23T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-24T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-24T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-25T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-25T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-26T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-26T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-27T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-27T12:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-28T00:00:00Z",
                "login": 0
            },
            {
                "time": "2019-04-28T12:00:00Z",
                "login": 0
            },
        ]
        let rows = [
            {
                "id": 1,
                "name": "tenant_1",
                "plan": "home",
                "status": "paid",
                "SLA": {
                    "property": {
                        "provider": 1,
                        "tenant": 1,
                        "service_parameter": "premium",
                        "period": "2019-04-24T10:42:05.518767957+07:00"
                    },
                    "slo": [
                        {
                            "parameter": "user_number",
                            "value": 150
                        },
                        {
                            "parameter": "service_number",
                            "value": 10
                        },
                        {
                            "parameter": "billing_type",
                            "value": "monthly"
                        }
                    ],
                    "services": [
                        {
                            "name": "service1",
                            "max_latency": 2000
                        },
                        {
                            "name": "service2",
                            "max_latency": 3000
                        }
                    ]
                },
                "usage_status": "OK"
            },
            {
                "id": 2,
                "name": "tenant_2",
                "plan": "individual",
                "status": "paid",
                "SLA": {
                    "property": {
                        "provider": 0,
                        "tenant": 0,
                        "service_parameter": "",
                        "period": "0001-01-01T00:00:00Z"
                    },
                    "slo": null,
                    "services": null
                },
                "usage_status": "OK"
            },
            {
                "id": 5,
                "name": "tenant_3",
                "plan": "enterprise",
                "status": "not paid",
                "SLA": {
                    "property": {
                        "provider": 0,
                        "tenant": 0,
                        "service_parameter": "",
                        "period": "0001-01-01T00:00:00Z"
                    },
                    "slo": null,
                    "services": null
                },
                "usage_status": "OK"
            },
            {
                "id": 6,
                "name": "tenant_4",
                "plan": "enterprise",
                "status": "paid",
                "SLA": {
                    "property": {
                        "provider": 0,
                        "tenant": 0,
                        "service_parameter": "",
                        "period": "0001-01-01T00:00:00Z"
                    },
                    "slo": null,
                    "services": null
                },
                "usage_status": "OK"
            },
            {
                "id": 6,
                "name": "tenant_4",
                "plan": "home",
                "status": "paid",
                "SLA": {
                    "property": {
                        "provider": 0,
                        "tenant": 0,
                        "service_parameter": "",
                        "period": "0001-01-01T00:00:00Z"
                    },
                    "slo": null,
                    "services": null
                },
                "usage_status": "OK"
            }
        ]
        return (<div className="app">
            <div className="header">
                <div className="dashboard-text">DASHBOARD</div>
                <div className="dashboard-title">Tenant Overview</div>
            </div>

            <Option className="mr-1" optionValue="10s" optionName="interval" title="interval" menu={options}/>
            <Option className="mr-1" optionValue="10s" optionName="interval" title="time start" menu={options}/>
            <Option className="mr-1" optionValue="10s" optionName="interval" title="time end" menu={options}/>
            <Row>

                <div className="partition-20">
                    <Number title="Number Of User" value={this.props.tenantOverview['number_of_users']}/>
                </div>
                <div className="partition-20">
                    <Number title="Number Of Tenants" value={this.props.tenantOverview['number_of_tenants']}/>
                </div>
                <div className="partition-20">
                    <Number title="Usage Status" value={this.props.tenantOverview['usage_status']} unit="%"/>
                </div>
                <div className="partition-20">
                    <Number title="Active Tenant" value={this.props.tenantOverview['active_tenant']} unit="%"/>
                </div>
                <div className="partition-20">
                    <Number title="New User" value={this.props.tenantOverview['new_user']}/>
                </div>
                <div className="partition-33">
                    <BarStack data={status} axis="package" dataKeys={planDataKeys} title="Tenant Plans" height={250}/>
                </div>
                <div className="partition-66">
                    <TimeSeries data={loginAct} dataKeys={loginKeys} title={"Login Activity"} height={250}/>
                </div>
                <div className="partition-66">
                    <TableOverviewTenant rows={this.props.tenantOverview['number_of_tenants']} title="Tenant List"/>
                </div>

            </Row>
        </div>)
    }
}

function mapStateToProps(state) {
    const {tenantOverview, tenantPlan} = state.tenantOverview
    return {
        tenantOverview: tenantOverview,
        tenantPlan: tenantPlan
    }
}

function mapDispatchToProps(dispatch) {
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantOverview)
