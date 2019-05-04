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

require("./number.css");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var Number =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Number, _Component);

  function Number() {
    (0, _classCallCheck2.default)(this, Number);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Number).apply(this, arguments));
  }

  (0, _createClass2.default)(Number, [{
    key: "render",
    value: function render() {
      console.log("value", this.props.value); // var image = this.props.image

      return _react.default.createElement(_Paper.default, {
        className: "paper",
        style: {
          borderRadius: "7pt"
        }
      }, _react.default.createElement("p", {
        className: "graph-title"
      }, _react.default.createElement("img", {
        src: require('assets/image/tenant.png'),
        className: "icon-chart"
      }), this.props.title), _react.default.createElement("hr", null), _react.default.createElement("div", {
        className: "value-container"
      }, _react.default.createElement("div", {
        className: "value"
      }, _react.default.createElement("span", {
        className: "number-graph"
      }, this.props.value), _react.default.createElement("span", {
        className: "unit"
      }, "   ", this.props.unit))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Number;
}(_react.Component);

var _default = Number;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Number, "Number", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Chart/Number/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Chart/Number/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();