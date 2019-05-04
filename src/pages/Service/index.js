import React, { Component } from 'react'

import './tenant.css'
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import {getServiceOverview, getServiceIO} from "../../actions/service/overview";
import {Col, Row} from "reactstrap";
import {
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import {connect} from "react-redux";
import Number from "../../components/Chart/Number";
import Option from "../../components/Option";
import BarStack from "../../components/Chart/BarStack";
import TimeSeries from "../../components/Chart/TimeSeries";

function compare( a, b ) {
    if ( a.usage > b.usage ){
        return -1;
    }
    if ( a.usage < b.usage ){
        return 1;
    }
    return 0;
}


class Service extends Component {

    componentWillMount() {
        const {dispatch} = this.props
        dispatch(getServiceOverview('2019-03-30T00:00:00Z', '2019-05-02T00:00:00Z'))
        dispatch(getServiceIO('2019-03-30T00:00:00Z', '2019-05-03T00:00:00Z', '1d'))
    }

    constructor(props) {
        super(props)
    }

    render() {
        let serviceOverview = this.props.serviceOverview
        let serviceIO = this.props.serviceIO

        console.log(serviceIO)

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
                "error_rate":33,
                "bytes_in":104,
                "bytes_out":198,
            },
            {
                "service": "service2",
                "usage": 16.6,
                "latency": 0.566,
                "error_rate":100,
                "bytes_in":76,
                "bytes_out":147,
            },
            {
                "service": "service3",
                "usage": 16.6,
                "latency": 0.876,
                "error_rate":100,
                "bytes_in":81,
                "bytes_out":158,
            },
            {
                "service": "service4",
                "usage": 33.3,
                "latency": 1.781,
                "error_rate":100,
                "bytes_in":276,
                "bytes_out":509,
            },
            {
                "service": "service5",
                "usage": 8.3,
                "latency": 0.583,
                "error_rate":100,
                "bytes_in":76,
                "bytes_out":147,
            },
            {
                "service": "service6",
                "usage": 0,
                "latency": 0,
                "error_rate":100,
                "bytes_in":0,
                "bytes_out":0,
            },
        ]
        return (<div className="app">
            <div className="header">
                <div className="dashboard-text">DASHBOARD</div>
                <div className="dashboard-title">Service Overview</div>
            </div>
            <Option className="mr-1" optionValue="10s" optionName="interval" title="interval" menu={options}/>
            <Option className="mr-1" optionValue="10s" optionName="interval" title="time start" menu={options}/>
            <Option className="mr-1" optionValue="10s" optionName="interval" title="time end" menu={options}/>
            <Row>
                <div className="partition-20">
                    {console.log("yoo", serviceOverview)}
                    <Number title="Latency" value={serviceOverview.latency? serviceOverview.latency: 0 } unit="ms"/>
                </div>
                <div className="partition-20">
                    <Number title="Error Rate" value={serviceOverview.error_rate? serviceOverview.error_rate: 0} unit="%"/>
                </div>
                <div className="partition-20">
                    <Number title="Bytes In" value={serviceOverview.bytes_in? serviceOverview.bytes_in: 0} unit="bytes"/>
                </div>
                <div className="partition-20">
                    <Number title="Bytes Out" value={serviceOverview.bytes_out? serviceOverview.bytes_out: 0} unit="bytes"/>
                </div>
                <div className="partition-20">
                    <Number title="Access/Request" value={serviceOverview.request? serviceOverview.request: 0}/>
                </div>
                <div className="partition-33">
                    {console.log(rows.sort(compare))}
                    <BarStack data={rows.sort(compare)} axis="service" dataKeys={serviceDataKeys} title="Service Usage" height={250}/>
                </div>
                <div className="partition-66">
                    <TimeSeries data={serviceIO} dataKeys={IOkeys} title={"Data In/Out"} height={250}/>
                </div>

            </Row>
            <Row>
                <Col md="3">
                    <Paper style={{borderRadius: "7pt", marginBottom: "10px"}}>
                        <ResponsiveContainer aspect={5.0 / 4.0} width='100%'>

                            <PieChart>
                                <Tooltip/>
                                <Pie data={rows} dataKey="usage" cx="50%" cy="50%"
                                     fill="#82ca9d"
                                     label/>
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Col>
                <Col md="3">
                    <Paper className="paper" style={{borderRadius: "7pt"}}>
                        <p className="graph-title">Data IO</p>
                        <ResponsiveContainer aspect={5.0 / 4.0} width='100%'>
                            <LineChart data={rows}
                                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <Tooltip />
                                <Line dataKey="bytes_in" stroke="#8884d8" />
                                <Line dataKey="bytes_out" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Col>
                <Col md="3">
                    <Paper className="paper" style={{borderRadius: "7pt"}}>


                        <p className="graph-title">Latency</p>
                        <h1 className="number-graph">{serviceOverview.latency}</h1>

                        <ResponsiveContainer aspect={8.0 / 4.0} width='80%'>
                            <LineChart data={rows}
                                       margin={{
                                           top: 20, right: 10, left: 50, bottom: 5,
                                       }}
                            >
                                <Tooltip />

                                <Line dataKey="active" stroke="#8884d8" strokeWidth={2}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Col>
                <Col md="3">
                    <Paper className="paper" style={{borderRadius: "7pt"}}>

                        <p className="graph-title">Error rate</p>
                        <h1 className="number-graph">83.33</h1>

                        <ResponsiveContainer aspect={8.0 / 4.0} width='80%'>
                            <LineChart data={rows}
                                       margin={{
                                           top: 20, right: 10, left: 50, bottom: 5,
                                       }}
                            >
                                <Tooltip />

                                <Line dataKey="active" stroke="#8884d8" strokeWidth={2}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </Paper>
                </Col>
            </Row>
            <Paper className="root" style={{borderRadius: "7pt"}}>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Service</TableCell>
                            <TableCell align="left">Usage</TableCell>
                            <TableCell align="left">Latency</TableCell>
                            <TableCell align="left">Error rate</TableCell>
                            <TableCell align="left">Bytes In</TableCell>
                            <TableCell align="left">Bytes Out </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.service}
                                </TableCell>
                                <TableCell align="left">{row.usage}</TableCell>
                                <TableCell align="left">{row.latency}</TableCell>
                                <TableCell align="left">{row.error_rate}</TableCell>
                                <TableCell align="left">{row.bytes_in}</TableCell>
                                <TableCell align="left">{row.bytes_out}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Paper>
        </div>)
    }
}

function mapStateToProps(state) {
    const {serviceOverview, serviceIO} = state.serviceOverview
    return {
        serviceOverview: serviceOverview,
        serviceIO: serviceIO
    }
}

function mapDispatchToProps(dispatch) {
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Service)