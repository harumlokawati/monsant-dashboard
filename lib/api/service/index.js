"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServiceOverview = getServiceOverview;
exports.getServiceIO = getServiceIO;

var url = _interopRequireWildcard(require("../constants"));

var _axios = _interopRequireDefault(require("axios"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

// import io from "socket.io-client"
function getServiceOverview(start, end) {
  console.log("yoo");
  return _axios.default.get(url.GET_SERVICE_OVERVIEW, {
    params: {
      start: start,
      end: end
    }
  }).then(function (res) {
    return Promise.resolve(res.data.data);
  }).catch(function (err) {
    return Promise.reject(err);
  });
}

function getServiceIO(start, end, interval) {
  console.log("GET IO");
  return _axios.default.get(url.GET_SERVICE_IO, {
    params: {
      start: start,
      end: end,
      interval: interval
    }
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

  reactHotLoader.register(getServiceOverview, "getServiceOverview", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/service/index.js");
  reactHotLoader.register(getServiceIO, "getServiceIO", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/api/service/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();