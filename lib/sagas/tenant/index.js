"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tenantSaga;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _effects = require("redux-saga/effects");

var _constants = require("actions/tenant/overview/constants");

var actTenantOverview = _interopRequireWildcard(require("actions/tenant/overview"));

var apiTenant = _interopRequireWildcard(require("api/tenant"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_regenerator.default.mark(pageRequest),
    _marked2 =
/*#__PURE__*/
_regenerator.default.mark(getTenantList),
    _marked3 =
/*#__PURE__*/
_regenerator.default.mark(tenantSaga);

function pageRequest() {
  var tenantOverview, tenantPlan;
  return _regenerator.default.wrap(function pageRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(apiTenant.getTenantOverview);

        case 3:
          tenantOverview = _context.sent;
          _context.next = 6;
          return (0, _effects.call)(apiTenant.getTenantPlanOverview);

        case 6:
          tenantPlan = _context.sent;
          console.log(tenantPlan);
          console.log(tenantOverview);
          _context.next = 11;
          return (0, _effects.put)(actTenantOverview.setTenantOverview(tenantOverview));

        case 11:
          _context.next = 13;
          return (0, _effects.put)(actTenantOverview.setTenantPlan(tenantPlan));

        case 13:
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 18:
          _context.prev = 18;
          console.log("success");
          return _context.finish(18);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 15, 18, 21]]);
}

function getTenantList(request) {
  var _request$payload, page, row_num, responseTenant;

  return _regenerator.default.wrap(function getTenantList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _request$payload = request.payload, page = _request$payload.page, row_num = _request$payload.row_num;
          _context2.next = 4;
          return (0, _effects.call)(apiTenant.getTenants, page, row_num);

        case 4:
          responseTenant = _context2.sent;
          console.log(responseTenant);
          _context2.next = 8;
          return (0, _effects.put)(actTenantOverview.setTenantList(responseTenant));

        case 8:
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 13:
          _context2.prev = 13;
          console.log("success get tenant list");
          return _context2.finish(13);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10, 13, 16]]);
}

function tenantSaga() {
  return _regenerator.default.wrap(function tenantSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeLatest)(_constants.TENANT_OVERVIEW_PAGE_REQUEST, pageRequest);

        case 2:
          _context3.next = 4;
          return (0, _effects.takeLatest)(_constants.TENANT_GET_TENANT_LIST, getTenantList);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pageRequest, "pageRequest", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/sagas/tenant/index.js");
  reactHotLoader.register(getTenantList, "getTenantList", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/sagas/tenant/index.js");
  reactHotLoader.register(tenantSaga, "tenantSaga", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/sagas/tenant/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();