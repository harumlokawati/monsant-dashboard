import {
    Line,
    CartesianGrid,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import Paper from "@material-ui/core/Paper";
import React, {Component} from "react";

class TimeSeries extends Component {
    render() {
        return (
            <Paper className="paper" style={{borderRadius: "7pt"}}>
                <p className="graph-title">{this.props.title}</p>
                <hr/>
                <ResponsiveContainer width='100%' height={this.props.height}>
                    <LineChart data={this.props.data}
                               margin={{top: 20, right: 30, left: -10, bottom: 0}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="time" interval={2} angle={30} dx={10}/>
                        <YAxis/>
                        <Tooltip/>
                        {this.renderLine(this.props.dataKeys)}
                    </LineChart>
                </ResponsiveContainer>
            </Paper>
        )
    }

    renderLine(datakeys) {
        return datakeys.map((item, index) => {
            return (
                <Line key={index} dataKey={item.dataKey} stackId="a" stroke={item.color}/>
            );
        });
    }
}

export default TimeSeries;