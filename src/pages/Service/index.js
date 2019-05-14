import React, {Component} from 'react'

import {
    getServiceOverview,
    getServiceIO,
    getLatencySeries,
    getUsageSeries, setOptionInterval, setOptionTimeStart, setOptionTimeEnd
} from "../../actions/service/overview";
import {Col, Row} from "reactstrap";
import {connect} from "react-redux";
import Number from "../../components/Chart/Number";
import IntervalOption from "../../components/Option/IntervalOption";
import DateOption from "../../components/Option/DateOption";
import BarStack from "../../components/Chart/BarStack";
import TimeSeries from "../../components/Chart/TimeSeries";
import TableServiceList from "../../components/Service/TableServiceList";
import moment from 'moment'

function compare(a, b) {
    if (a.usage > b.usage) {
        return -1;
    }
    if (a.usage < b.usage) {
        return 1;
    }
    return 0;
}

// moment().sub(7, 'day').utc().format()
class Service extends Component {
    componentDidMount(){
        this.interval = setInterval(this.tick.bind(this),10000);
    }
    componentWillMount() {
        const {dispatch, interval, timeStart, timeEnd} = this.props
        dispatch(getServiceOverview(timeStart, timeEnd))
        dispatch(getServiceIO(timeStart, timeEnd, interval))
        dispatch(getLatencySeries(timeStart, timeEnd, interval))
        dispatch(getUsageSeries(timeStart, timeEnd, interval))
        clearInterval(this.interval);
    }

    constructor(props) {
        super(props)
    }

    tick() {
        if(this.props.location.pathname!=="/service"){
            return;
        }
        console.log("yes")
        const {dispatch, interval, timeStart, timeEnd} = this.props
        dispatch(setOptionTimeEnd(timeStart, moment().utc().format(), interval))
        dispatch(getServiceOverview(timeStart, timeEnd))
        dispatch(getServiceIO(timeStart, timeEnd, interval))
        dispatch(getLatencySeries(timeStart, timeEnd, interval))
        dispatch(getUsageSeries(timeStart, timeEnd, interval))
    }

    handleChange = event => {
        const {dispatch, timeStart, timeEnd} = this.props
        const {name, value} = event.target;
        if (name == 'interval') {
            dispatch(setOptionInterval(timeStart,timeEnd,value))
        }
    }

    handleDateStartChange = date => {
        const {dispatch, timeEnd, interval} = this.props
        dispatch(setOptionTimeStart(moment(date.toDate()).utc().format(), timeEnd, interval))
    }

    handleDateEndChange = date => {
        const {dispatch, timeStart, interval} = this.props
        dispatch(setOptionTimeEnd(timeStart, moment(date.toDate()).utc().format(), interval))
    }

    render() {

        let serviceOverview = this.props.serviceOverview
        let serviceIO = this.props.serviceIO

        let serviceDataKeys = [
            {
                "dataKey": "usage",
                "color": "#8884d8"
            }
        ]
        let IOkeys = [
            {
                "dataKey": "bytes_in",
                "color": "#82ca9d"
            },
            {
                "dataKey": "bytes_out",
                "color": "#ed86ae"
            }
        ]
        let latencyKeys = [
            {
                "dataKey": "value",
                "color": "#82ca9d"
            }
        ]
        let usageKeys = [
            {
                "dataKey": "count",
                "color": "#82ca9d"
            }
        ]
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
        let rows = [
            {
                "service": "service1",
                "usage": 25,
                "latency": 1.000,
                "error_rate": 33,
                "bytes_in": 104,
                "bytes_out": 198,
            },
            {
                "service": "service2",
                "usage": 16.6,
                "latency": 0.566,
                "error_rate": 100,
                "bytes_in": 76,
                "bytes_out": 147,
            },
            {
                "service": "service3",
                "usage": 16.6,
                "latency": 0.876,
                "error_rate": 100,
                "bytes_in": 81,
                "bytes_out": 158,
            },
            {
                "service": "service4",
                "usage": 33.3,
                "latency": 1.781,
                "error_rate": 100,
                "bytes_in": 276,
                "bytes_out": 509,
            },
            {
                "service": "service5",
                "usage": 8.3,
                "latency": 0.583,
                "error_rate": 100,
                "bytes_in": 76,
                "bytes_out": 147,
            },
            {
                "service": "service6",
                "usage": 0,
                "latency": 0,
                "error_rate": 100,
                "bytes_in": 0,
                "bytes_out": 0,
            },
        ]
        return (<div className="app">
            <div className="header">
                <div className="dashboard-text">DASHBOARD</div>
                <div className="dashboard-title">Service Overview</div>
            </div>
            <DateOption className="mr-1" value={this.props.timeStart} title="Start"
                        handleChange={this.handleDateStartChange}/>
            <DateOption className="mr-1" value={this.props.timeEnd} title="End"
                        handleChange={this.handleDateEndChange}/>
            <IntervalOption className="mr-1" optionValue={this.props.interval} optionName="interval" title="interval"
                            menu={options} handleChange={this.handleChange}/>
            <Row>
                <div className="partition-20">
                    <Number title="Latency" value={serviceOverview.latency ? serviceOverview.latency : 0} unit="ms"/>
                </div>
                <div className="partition-20">
                    <Number title="Error Rate" value={serviceOverview.error_rate ? serviceOverview.error_rate : 0}
                            unit="%"/>
                </div>
                <div className="partition-20">
                    <Number title="Bytes In" value={serviceOverview.bytes_in ? serviceOverview.bytes_in : 0}
                            unit="bytes"/>
                </div>
                <div className="partition-20">
                    <Number title="Bytes Out" value={serviceOverview.bytes_out ? serviceOverview.bytes_out : 0}
                            unit="bytes"/>
                </div>
                <div className="partition-20">
                    <Number title="Access/Request" value={serviceOverview.request ? serviceOverview.request : 0}/>
                </div>
                <div className="partition-33">
                    <BarStack data={this.props.serviceList.services.sort(compare)} axis="service" dataKeys={serviceDataKeys} title="Service Usage"
                              height={250}/>
                </div>
                <div className="partition-66">
                    <TimeSeries data={serviceIO} dataKeys={IOkeys} title={"Data In/Out"} height={250}/>
                </div>
                <div className="partition-50">
                    <TimeSeries data={this.props.latencySeries} dataKeys={latencyKeys} title={"Latency"} height={250}/>
                </div>
                <div className="partition-50">
                    <TimeSeries data={this.props.usageSeries} dataKeys={usageKeys} title={"Usage"} height={250}/>
                </div>
                <div className="partition-80">
                    <TableServiceList title="Service List" start='2019-03-30T00:00:00Z' end='2019-05-06T00:00:00Z'/>
                </div>
            </Row>

        </div>)
    }
}

function mapStateToProps(state) {
    const {serviceOverview, serviceIO, interval, latencySeries, usageSeries, timeStart, timeEnd, serviceList} = state.serviceOverview
    return {
        interval: interval,
        timeStart: timeStart,
        timeEnd: timeEnd,
        latencySeries: latencySeries,
        serviceOverview: serviceOverview,
        serviceIO: serviceIO,
        usageSeries: usageSeries,
        serviceList: serviceList
    }
}

function mapDispatchToProps(dispatch) {
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Service)