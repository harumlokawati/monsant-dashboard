import React, {Component} from 'react'
import './tenant.css'
import Pusher from "pusher-js";
import TenantOverview from "../../components/Tenant/TenantOverview";

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;


const pusher = new Pusher('009b33c0f7f7a2f595fa', {
    cluster: 'ap1',
    forceTLS: true
});

class Tenant extends Component {

    componentDidMount() {

        const channel = pusher.subscribe('tenant');
        channel.bind('tenantList', data => {
            console.log(data)
        });
    }

    componentWillUnmount() {
        pusher.unsubscribe('tenant')
    }

    render() {
        return (<TenantOverview/>);
    }

}

export default Tenant