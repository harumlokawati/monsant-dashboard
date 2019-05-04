"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reactRouter = require("react-router");

var _connectedReactRouter = require("connected-react-router");

var _App = _interopRequireDefault(require("./pages/App"));

var _Tenant = _interopRequireDefault(require("./pages/Tenant"));

var _Service = _interopRequireDefault(require("./pages/Service"));

var _Resource = _interopRequireDefault(require("./pages/Resource"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var _default = function _default(store, history) {
  var routes = function routes() {
    return _react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_connectedReactRouter.ConnectedRouter, {
      history: history
    }, _react.default.createElement(_reactRouter.Switch, null, _react.default.createElement(_App.default, null, _react.default.createElement(_reactRouter.Route, {
      path: "/tenant",
      component: _Tenant.default
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/service",
      component: _Service.default
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/resource",
      component: _Resource.default
    })))));
  };

  return routes;
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/routes.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();