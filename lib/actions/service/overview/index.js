"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceOverview = getServiceOverview;
exports.setServiceOverview = setServiceOverview;
exports.getServiceIO = getServiceIO;
exports.setServiceIO = setServiceIO;

var _constants = require("./constants");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function getServiceOverview(start, end) {
  return {
    type: _constants.SERVICE_GET_SERVICE_OVERVIEW,
    payload: {
      start: start,
      end: end
    }
  };
}

function setServiceOverview(serviceOverview) {
  return {
    type: _constants.SERVICE_SET_SERVICE_OVERVIEW,
    payload: {
      serviceOverview: serviceOverview
    }
  };
}

function getServiceIO(start, end, interval) {
  console.log("act IO");
  return {
    type: _constants.SERVICE_GET_SERVICE_IO,
    payload: {
      start: start,
      end: end
    }
  };
}

function setServiceIO(serviceIO) {
  return {
    type: _constants.SERVICE_SET_SERVICE_IO,
    payload: {
      serviceIO: serviceIO
    }
  };
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getServiceOverview, "getServiceOverview", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/service/overview/index.js");
  reactHotLoader.register(setServiceOverview, "setServiceOverview", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/service/overview/index.js");
  reactHotLoader.register(getServiceIO, "getServiceIO", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/service/overview/index.js");
  reactHotLoader.register(setServiceIO, "setServiceIO", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/actions/service/overview/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();