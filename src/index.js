import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore, combineReducers, compose} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerReducer} from 'react-router-redux'
import {connectRouter} from 'connected-react-router'
import {createBrowserHistory} from "history"
import createSagaMiddleware from 'redux-saga'
import Routes from './routes'
import {reducer as tenantOverviewReducer} from 'reducers/tenant/overview'
import {reducer as serviceOverviewReducer} from 'reducers/service/overview'
import {reducer as resourceReducer} from 'reducers/resource'
import tenantSaga from 'sagas/tenant'
import serviceSaga from 'sagas/service'
import resourceSaga from 'sagas/resource'
import thunk from 'redux-thunk'

const history = createBrowserHistory()

const reducer = {
    tenantOverview: tenantOverviewReducer,
    serviceOverview: serviceOverviewReducer,
    resource: resourceReducer,
    routing: routerReducer,
    router: connectRouter(history)
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combineReducers(reducer),
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(thunk)
    )
)


sagaMiddleware.run(tenantSaga)
sagaMiddleware.run(serviceSaga)
sagaMiddleware.run(resourceSaga)

const App = Routes(store, history)
ReactDOM.render(<App/>, document.getElementById('root'))