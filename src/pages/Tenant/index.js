import React, {Component} from 'react'
import './tenant.css'
import Pusher from "pusher-js";
import TenantOverview from "../../components/Tenant/TenantOverview";
import {getLoginActivity, setOptionTimeEnd} from "../../actions/tenant/overview";
import moment from "moment"
import {connect} from "react-redux";
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;


const pusher = new Pusher('009b33c0f7f7a2f595fa', {
    cluster: 'ap1',
    forceTLS: true
});

class Tenant extends Component {

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this),10000);
    }

    tick() {
        const {dispatch, timeStart, timeEnd, interval} = this.props
        dispatch(setOptionTimeEnd(timeStart, moment().utc().format(), interval))
        // dispatch(getLoginActivity(timeStart, timeEnd, interval))
    }

    // componentDidMount() {
    //
    //     const channel = pusher.subscribe('tenant');
    //     channel.bind('tenantList', data => {
    //         console.log(data)
    //     });
    // }

    componentWillUnmount() {
        pusher.unsubscribe('tenant')
    }

    render() {
        return (<TenantOverview/>);
    }

}

function mapStateToProps(state) {
    const {tenantOverview, tenantPlan, loginActivity, timeStart, timeEnd, interval} = state.tenantOverview
    return {
        tenantOverview: tenantOverview,
        tenantPlan: tenantPlan,
        loginActivity: loginActivity,
        interval: interval,
        timeStart: timeStart,
        timeEnd: timeEnd
    }
}

function mapDispatchToProps(dispatch) {
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tenant)