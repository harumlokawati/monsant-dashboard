"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reactRouterRedux = require("react-router-redux");

var _connectedReactRouter = require("connected-react-router");

var _history = require("history");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _routes = _interopRequireDefault(require("./routes"));

var _overview = require("reducers/tenant/overview");

var _overview2 = require("reducers/service/overview");

var _tenant = _interopRequireDefault(require("sagas/tenant"));

var _service = _interopRequireDefault(require("sagas/service"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var history = (0, _history.createBrowserHistory)();
var reducer = {
  tenantOverview: _overview.reducer,
  serviceOverview: _overview2.reducer,
  routing: _reactRouterRedux.routerReducer,
  router: (0, _connectedReactRouter.connectRouter)(history)
};
var sagaMiddleware = (0, _reduxSaga.default)();
var store = (0, _redux.createStore)((0, _redux.combineReducers)(reducer), (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(sagaMiddleware), (0, _redux.applyMiddleware)(_reduxThunk.default)));
sagaMiddleware.run(_tenant.default);
sagaMiddleware.run(_service.default);
var App = (0, _routes.default)(store, history);

_reactDom.default.render(_react.default.createElement(App, null), document.getElementById('root'));

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(history, "history", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/index.js");
  reactHotLoader.register(reducer, "reducer", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/index.js");
  reactHotLoader.register(sagaMiddleware, "sagaMiddleware", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/index.js");
  reactHotLoader.register(store, "store", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/index.js");
  reactHotLoader.register(App, "App", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();