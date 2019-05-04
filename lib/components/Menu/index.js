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

require("./menu.css");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var Menu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Menu, _Component);

  function Menu() {
    (0, _classCallCheck2.default)(this, Menu);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Menu).apply(this, arguments));
  }

  (0, _createClass2.default)(Menu, [{
    key: "render",
    value: function render() {
      // var image = this.props.image
      return _react.default.createElement("div", {
        className: "sidebar-menu"
      }, _react.default.createElement("p", {
        className: "menu"
      }, _react.default.createElement("img", {
        src: require(this.props.image),
        className: "image-menu"
      }), this.props.text));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Menu;
}(_react.Component);

var _default = Menu;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Menu, "Menu", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Menu/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Menu/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();