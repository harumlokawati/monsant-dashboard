"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTenants = getTenants;
exports.getTenantOverview = getTenantOverview;
exports.getTenantPlanOverview = getTenantPlanOverview;

var url = _interopRequireWildcard(require("../constants"));

var _axios = _interopRequireDefault(require("axios"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

// import io from "socket.io-client"
function getTenants(page, row_num) {
  return _axios.default.get(url.GET_TENANTS_LIST_URL, {
    params: {
      page: page,
      row_num: row_num
    }
  }).then(function (res) {
    return Promise.resolve(res.data.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
}

function getTenantOverview(request) {
  return _axios.default.get(url.GET_TENANTS_OVERVIEW_URL, {
    params: request
  }).then(function (res) {
    return Promise.resolve(res.data.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
}

function getTenantPlanOverview(request) {
  return _axios.default.get(url.GET_TENANTS_PLAN_OVERVIEW_URL, {
    params: request
  }).then(function (res) {
    return Promise.resolve(res.data.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getTenants, "getTenants", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/tenant/index.js");
  reactHotLoader.register(getTenantOverview, "getTenantOverview", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/tenant/index.js");
  reactHotLoader.register(getTenantPlanOverview, "getTenantPlanOverview", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/tenant/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();