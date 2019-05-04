"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onClickMovePage = onClickMovePage;
exports.pageRequest = pageRequest;
exports.setTenantList = setTenantList;
exports.setTenantOverview = setTenantOverview;
exports.setTenantPlan = setTenantPlan;
exports.getTenantList = getTenantList;

var _constants = require("./constants");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function onClickMovePage(pagination) {
  return {
    type: _constants.TENANT_OVERVIEW_MOVE_PAGE,
    payload: {
      pagination: pagination
    }
  };
}

function pageRequest(page, row_num) {
  return {
    type: _constants.TENANT_OVERVIEW_PAGE_REQUEST,
    payload: {
      page: page,
      row_num: row_num
    }
  };
}

function setTenantList(tenantList) {
  return {
    type: _constants.TENANT_SET_TENANT_LIST,
    payload: {
      tenantList: tenantList
    }
  };
}

function setTenantOverview(tenantOverview) {
  return {
    type: _constants.TENANT_SET_TENANT_OVERVIEW,
    payload: {
      tenantOverview: tenantOverview
    }
  };
}

function setTenantPlan(tenantPlan) {
  return {
    type: _constants.TENANT_SET_TENANT_PLAN,
    payload: {
      tenantPlan: tenantPlan
    }
  };
}

function getTenantList(page, row_num) {
  return {
    type: _constants.TENANT_GET_TENANT_LIST,
    payload: {
      page: page,
      row_num: row_num
    }
  };
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(onClickMovePage, "onClickMovePage", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/tenant/overview/index.js");
  reactHotLoader.register(pageRequest, "pageRequest", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/tenant/overview/index.js");
  reactHotLoader.register(setTenantList, "setTenantList", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/tenant/overview/index.js");
  reactHotLoader.register(setTenantOverview, "setTenantOverview", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/tenant/overview/index.js");
  reactHotLoader.register(setTenantPlan, "setTenantPlan", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/tenant/overview/index.js");
  reactHotLoader.register(getTenantList, "getTenantList", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/tenant/overview/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();