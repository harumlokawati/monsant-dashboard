"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serviceSaga;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _effects = require("redux-saga/effects");

var _constants = require("actions/service/overview/constants");

var actServiceOverview = _interopRequireWildcard(require("actions/service/overview"));

var apiService = _interopRequireWildcard(require("api/service"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
_regenerator.default.mark(getOverview),
    _marked2 =
/*#__PURE__*/
_regenerator.default.mark(getServiceIO),
    _marked3 =
/*#__PURE__*/
_regenerator.default.mark(serviceSaga);

function getOverview(request) {
  var _request$payload, start, end, serviceOverview;

  return _regenerator.default.wrap(function getOverview$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _request$payload = request.payload, start = _request$payload.start, end = _request$payload.end;
          _context.next = 4;
          return (0, _effects.call)(apiService.getServiceOverview, start, end);

        case 4:
          serviceOverview = _context.sent;
          _context.next = 7;
          return (0, _effects.put)(actServiceOverview.setServiceOverview(serviceOverview));

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 12:
          _context.prev = 12;
          console.log("success");
          return _context.finish(12);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9, 12, 15]]);
}

function getServiceIO(request) {
  var _request$payload2, start, end, interval, serviceIO;

  return _regenerator.default.wrap(function getServiceIO$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log("saga IO");
          _request$payload2 = request.payload, start = _request$payload2.start, end = _request$payload2.end, interval = request.interval;
          _context2.next = 5;
          return (0, _effects.call)(apiService.getServiceIO, start, end, interval);

        case 5:
          serviceIO = _context2.sent;
          _context2.next = 8;
          return (0, _effects.put)(actServiceOverview.setServiceIO(serviceIO));

        case 8:
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 13:
          _context2.prev = 13;
          console.log("success");
          return _context2.finish(13);

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10, 13, 16]]);
}

function serviceSaga() {
  return _regenerator.default.wrap(function serviceSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeLatest)(_constants.SERVICE_GET_SERVICE_IO, getServiceIO);

        case 2:
          _context3.next = 4;
          return (0, _effects.takeLatest)(_constants.SERVICE_GET_SERVICE_OVERVIEW, getOverview);

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

  reactHotLoader.register(getOverview, "getOverview", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/sagas/service/index.js");
  reactHotLoader.register(getServiceIO, "getServiceIO", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/sagas/service/index.js");
  reactHotLoader.register(serviceSaga, "serviceSaga", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/sagas/service/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();