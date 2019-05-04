"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _constants = require("../../../actions/tenant/overview/constants");

var _fluxStandardAction = require("flux-standard-action");

var _invariant = _interopRequireDefault(require("invariant"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var initialState = {
  totalPage: null,
  tenantList: [],
  tenantOverview: {},
  currentPage: 1
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  (0, _invariant.default)((0, _fluxStandardAction.isFSA)(action), "Invalid FSA action. See https://github.com/acdlite/flux-standard-action for info. Object: ".concat(JSON.stringify(action)));
  var _action$payload = action.payload,
      payload = _action$payload === void 0 ? {} : _action$payload;

  switch (action.type) {
    case _constants.TENANT_SET_TENANT_LIST:
      return (0, _objectSpread2.default)({}, state, {
        tenantList: payload.tenantList
      });

    case _constants.TENANT_SET_TENANT_OVERVIEW:
      return (0, _objectSpread2.default)({}, state, {
        tenantOverview: payload.tenantOverview
      });

    case _constants.TENANT_SET_TENANT_PLAN:
      console.log("set", payload.tenantPlan);
      return (0, _objectSpread2.default)({}, state, {
        tenantPlan: payload.tenantPlan
      });

    default:
      return (0, _objectSpread2.default)({}, state);
  }
};

exports.reducer = reducer;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/reducers/tenant/overview/index.js");
  reactHotLoader.register(reducer, "reducer", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/reducers/tenant/overview/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();