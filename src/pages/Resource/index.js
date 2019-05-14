import React, {Component} from 'react'
import './resource.css'
import {connect} from "react-redux";
import DateOption from "../../components/Option/DateOption";
import IntervalOption from "../../components/Option/IntervalOption";
import Gauge from "../../components/Chart/Gauge";
import {Col, Row} from "reactstrap";
import {
    setOptionTimeEnd,
    setOptionTimeStart,
    setOptionInterval,
    setOptionCPU,
    setOptionDisk,
    setOptionHost,
    getOptionsHost,
    getOptionsCPU,
    getOptionsDisk, getResourceOverview, getCPUUsageSeries, getMemUsageSeries, getFSUsageSeries
} from "../../actions/resource";
import moment from "moment";
import Number from "../../components/Chart/Number";
import AreaSeries from "../../components/Chart/AreaSeries";

class Resource extends Component {
    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this),10000);
    }

    tick() {
        if(this.props.location.pathname!=="/resource"){
            return;
        }
        const {interval, timeStart, timeEnd, dispatch, host, cpu, disk} = this.props
        dispatch(setOptionTimeEnd(moment().utc().format(),timeStart, interval, cpu, host, disk))
        dispatch(getResourceOverview())
        // dispatch(getCPUUsageSeries(host, timeStart, timeEnd, interval))
        // dispatch(getMemUsageSeries(host, timeStart, timeEnd, interval))
        // dispatch(getFSUsageSeries(host, timeStart, timeEnd, interval))
    }

    componentWillMount() {
        const {interval, timeStart, timeEnd, dispatch, host} = this.props
        dispatch(getOptionsHost())
        dispatch(getOptionsCPU(host))
        dispatch(getOptionsDisk())
        dispatch(getResourceOverview())
        dispatch(getCPUUsageSeries(host, timeStart, timeEnd, interval))
        dispatch(getMemUsageSeries(host, timeStart, timeEnd, interval))
        dispatch(getFSUsageSeries(host, timeStart, timeEnd, interval))
    }

    handleChange = event => {
        const {dispatch, timeEnd, timeStart, cpu, disk, host, interval} = this.props
        const {name, value} = event.target;
        if (name == 'interval') {
            dispatch(setOptionInterval(timeEnd, timeStart, value, cpu, disk, host))
        } else if (name == 'cpu') {
            dispatch(setOptionCPU(timeEnd, timeStart, interval, value, disk, host))
        } else if (name == 'disk') {
            dispatch(setOptionDisk(timeEnd, timeStart, interval, cpu, value, host))
        } else if (name == 'host') {
            dispatch(setOptionHost(timeEnd, timeStart, interval, cpu, disk, value))
        }
    }

    handleDateStartChange = date => {
        const {dispatch, timeEnd, interval, cpu, disk, host} = this.props
        dispatch(setOptionTimeStart(timeEnd, moment(date.toDate()).utc().format(), interval, cpu, disk, host))
    }

    handleDateEndChange = date => {
        const {dispatch, timeStart, interval, cpu, disk, host} = this.props
        dispatch(setOptionTimeEnd(moment(date.toDate()).utc().format(), timeStart, interval, cpu, disk, host))
    }

    constructor(props) {
        super(props)
    }

    render() {
        let cpu_keys = [
            {
                "dataKey": "user",
                "color": "#82ca9d"
            },
            {
                "dataKey": "system",
                "color": "#FFBB28"
            }
        ]
        let fs_keys = [
            {
                "dataKey": "total",
                "color": "#82ca9d"
            },
            {
                "dataKey": "used",
                "color": "#FFBB28"
            },
            {
                "dataKey": "free",
                "color": "#7a85ca"
            },
        ]
        let mem_keys = [
            {
                "dataKey": "total",
                "color": "#82ca9d"
            },
            {
                "dataKey": "used",
                "color": "#FFBB28"
            },
            {
                "dataKey": "cached",
                "color": "#4bb6ca"
            },
            {
                "dataKey": "free",
                "color": "#ff808d"
            },
            {
                "dataKey": "buffered",
                "color": "#7a85ca"
            },
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
        return (<div className="app">
            <div className="header">
                <div className="dashboard-text">DASHBOARD</div>
                <div className="dashboard-title">Resource Overview</div>
            </div>
            <DateOption className="mr-1" value={this.props.timeStart} title="Start"
                        handleChange={this.handleDateStartChange}/>
            <DateOption className="mr-1" value={this.props.timeEnd} title="End"
                        handleChange={this.handleDateEndChange}/>
            <IntervalOption className="mr-1" optionValue={this.props.interval} optionName="interval" title="interval"
                            menu={options} handleChange={this.handleChange}/>
            <IntervalOption className="mr-1" optionValue={this.props.cpu} optionName="cpu" title="CPU"
                            menu={this.props.options_cpu} handleChange={this.handleChange}/>
            <IntervalOption className="mr-1" optionValue={this.props.host} optionName="host" title="Host"
                            menu={this.props.options_host} handleChange={this.handleChange}/>
            <IntervalOption className="mr-1" optionValue={this.props.disk} optionName="disk" title="Disk"
                            menu={this.props.options_disk} handleChange={this.handleChange}/>
            <Row>
                <div className="partition-16">
                    <Gauge name="cpu_usage" title="CPU Usage" value={this.props.overview.cpu_usage} height={130}/>
                </div>
                <div className="partition-16">
                    <Number title="Number of CPUs" value={this.props.overview.num_cpu}
                            unit="cpu"/>
                </div>
                <div className="partition-16">
                    <Gauge name="ram_usage" title="RAM Usage" value={this.props.overview.ram_usage} height={130}/>
                </div>
                <div className="partition-16">
                    <Number title="Number of Processes" value={this.props.overview.num_process}
                            unit="process"/>
                </div>
                <div className="partition-16">
                    <Gauge name="fs_used" title="Root FS Used" value={this.props.overview.fs_used} height={130}/>
                </div>
                <div className="partition-16">
                    <Number title="Number of Users" value={this.props.overview.num_user}
                            unit="user"/>
                </div>
                <div className="partition-50">
                    <AreaSeries data={this.props.cpu_usage_series} dataKeys={cpu_keys} title={"CPU Usage"} height={250} name="cpu_usage"/>
                </div>
                <div className="partition-50">
                    <AreaSeries data={this.props.mem_usage_series} dataKeys={mem_keys} title={"Memory Usage"} height={250} name="mem_usage"/>
                </div>
                <div className="partition-50">
                    <AreaSeries data={this.props.fs_usage_series} dataKeys={fs_keys} title={"Root FS Usage"} height={250} name="fs_usage"/>
                </div>
            </Row>

        </div>)
    }
}

function mapStateToProps(state) {
    const {cpu, disk, host, overview, interval, timeStart, timeEnd, options_cpu, options_disk, options_host, cpu_usage_series, mem_usage_series, fs_usage_series} = state.resource
    return {
        cpu: cpu,
        disk: disk,
        host: host,
        options_cpu: options_cpu,
        options_host: options_host,
        options_disk: options_disk,
        overview: overview,
        interval: interval,
        timeStart: timeStart,
        timeEnd: timeEnd,
        cpu_usage_series: cpu_usage_series,
        mem_usage_series: mem_usage_series,
        fs_usage_series: fs_usage_series
    }
}

function mapDispatchToProps(dispatch) {
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Resource)