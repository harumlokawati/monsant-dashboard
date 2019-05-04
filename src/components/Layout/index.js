import React, { Component } from 'react'
import './layout.css'
import Sidebar from 'components/Sidebar'

class Layout extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <div className="dashboard-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout