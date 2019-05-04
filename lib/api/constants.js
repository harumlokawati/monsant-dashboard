"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_SERVICE_IO = exports.GET_SERVICE_OVERVIEW = exports.GET_TENANTS_PLAN_OVERVIEW_URL = exports.GET_TENANTS_OVERVIEW_URL = exports.GET_TENANTS_LIST_URL = void 0;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var PORT = '8000';
var HOST = 'http://localhost';
var ADDRESS = "".concat(HOST, ":").concat(PORT);
var GET_TENANTS_LIST_URL = "".concat(ADDRESS, "/api/tenants");
exports.GET_TENANTS_LIST_URL = GET_TENANTS_LIST_URL;
var GET_TENANTS_OVERVIEW_URL = "".concat(ADDRESS, "/api/tenant_overview");
exports.GET_TENANTS_OVERVIEW_URL = GET_TENANTS_OVERVIEW_URL;
var GET_TENANTS_PLAN_OVERVIEW_URL = "".concat(ADDRESS, "/api/tenant_plan");
exports.GET_TENANTS_PLAN_OVERVIEW_URL = GET_TENANTS_PLAN_OVERVIEW_URL;
var GET_SERVICE_OVERVIEW = "".concat(ADDRESS, "/api/service_overview");
exports.GET_SERVICE_OVERVIEW = GET_SERVICE_OVERVIEW;
var GET_SERVICE_IO = "".concat(ADDRESS, "/api/data_series");
exports.GET_SERVICE_IO = GET_SERVICE_IO;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PORT, "PORT", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/constants.js");
  reactHotLoader.register(HOST, "HOST", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/constants.js");
  reactHotLoader.register(ADDRESS, "ADDRESS", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/constants.js");
  reactHotLoader.register(GET_TENANTS_LIST_URL, "GET_TENANTS_LIST_URL", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/constants.js");
  reactHotLoader.register(GET_TENANTS_OVERVIEW_URL, "GET_TENANTS_OVERVIEW_URL", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/constants.js");
  reactHotLoader.register(GET_TENANTS_PLAN_OVERVIEW_URL, "GET_TENANTS_PLAN_OVERVIEW_URL", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/constants.js");
  reactHotLoader.register(GET_SERVICE_OVERVIEW, "GET_SERVICE_OVERVIEW", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/constants.js");
  reactHotLoader.register(GET_SERVICE_IO, "GET_SERVICE_IO", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/constants.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();