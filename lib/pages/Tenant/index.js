"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

require("./tenant.css");

var _pusherJs = _interopRequireDefault(require("pusher-js"));

var _TenantOverview = _interopRequireDefault(require("../../components/Tenant/TenantOverview"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

// Enable pusher logging - don't include this in production
_pusherJs.default.logToConsole = true;
var pusher = new _pusherJs.default('009b33c0f7f7a2f595fa', {
  cluster: 'ap1',
  forceTLS: true
});

var Tenant =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Tenant, _Component);

  function Tenant() {
    (0, _classCallCheck2.default)(this, Tenant);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tenant).apply(this, arguments));
  }

  (0, _createClass2.default)(Tenant, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var channel = pusher.subscribe('tenant');
      channel.bind('tenantList', function (data) {
        console.log(data);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      pusher.unsubscribe('tenant');
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_TenantOverview.default, null);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Tenant;
}(_react.Component);

var _default = Tenant;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pusher, "pusher", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/pages/Tenant/index.js");
  reactHotLoader.register(Tenant, "Tenant", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/pages/Tenant/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/pages/Tenant/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();