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

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

require("./sidebar.css");

var _react = _interopRequireWildcard(require("react"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var Table =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Table, _Component);

  function Table() {
    (0, _classCallCheck2.default)(this, Table);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Table).apply(this, arguments));
  }

  (0, _createClass2.default)(Table, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "wrapper"
      }, _react.default.createElement("nav", {
        className: "sidebar",
        role: "navigation"
      }, _react.default.createElement("div", {
        className: "sidebar-content"
      }, _react.default.createElement("img", {
        src: require('../../assets/image/logo.png'),
        className: "logo"
      }), _react.default.createElement(_reactRouterDom.NavLink, {
        activeClassName: "active",
        to: "/tenant"
      }, _react.default.createElement("div", {
        className: "sidebar-menu"
      }, _react.default.createElement("p", {
        className: "menu"
      }, _react.default.createElement("img", {
        src: require('../../assets/image/tenant.png'),
        className: "image-menu"
      }), "Tenant"))), _react.default.createElement(_reactRouterDom.NavLink, {
        activeClassName: "active",
        to: "/service"
      }, _react.default.createElement("div", {
        className: "sidebar-menu"
      }, _react.default.createElement("p", {
        className: "menu"
      }, _react.default.createElement("img", {
        src: require('../../assets/image/service.png'),
        className: "image-menu"
      }), "Service"))), _react.default.createElement(_reactRouterDom.NavLink, {
        activeClassName: "active",
        to: "/resource"
      }, _react.default.createElement("div", {
        className: "sidebar-menu"
      }, _react.default.createElement("p", {
        className: "menu"
      }, _react.default.createElement("img", {
        src: require('../../assets/image/resource.png'),
        className: "image-menu"
      }), "Resource"))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Table;
}(_react.Component);

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Table);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Table, "Table", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Table/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Table/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Table/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();