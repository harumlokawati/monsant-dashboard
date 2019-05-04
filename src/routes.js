import React from 'react'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router'
import {ConnectedRouter} from 'connected-react-router'
import App from './pages/App'
import Tenant from './pages/Tenant'
import Service from './pages/Service'
import Resource from './pages/Resource'

export default (store, history) => {
    const routes = () => {
        return <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <App>
                        <Route path='/tenant' component={Tenant}/>
                        <Route path='/service' component={Service}/>
                        <Route path='/resource' component={Resource}/>
                    </App>
                </Switch>
            </ConnectedRouter>
        </Provider>
    }

    return routes
}