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

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _recharts = require("recharts");

var _react = _interopRequireWildcard(require("react"));

require("./barstack.css");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var VerticalBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(VerticalBar, _Component);

  function VerticalBar() {
    (0, _classCallCheck2.default)(this, VerticalBar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(VerticalBar).apply(this, arguments));
  }

  (0, _createClass2.default)(VerticalBar, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_Paper.default, {
        className: "paper",
        style: {
          borderRadius: "7pt"
        }
      }, _react.default.createElement("p", {
        className: "graph-title"
      }, this.props.title), _react.default.createElement("hr", null), _react.default.createElement(_recharts.ResponsiveContainer, {
        aspect: 6.0 / 4.0,
        width: "100%"
      }, _react.default.createElement(_recharts.BarChart, {
        data: this.props.data,
        layout: "vertical",
        margin: {
          top: 20,
          right: 30,
          left: 0,
          bottom: 5
        }
      }, _react.default.createElement(_recharts.YAxis, {
        dataKey: this.props.axis,
        interval: 0
      }), _react.default.createElement(_recharts.XAxis, {
        type: "number"
      }), _react.default.createElement(_recharts.Tooltip, null), _react.default.createElement(_recharts.Legend, null), this.renderBar(this.props.dataKeys))));
    }
  }, {
    key: "renderBar",
    value: function renderBar(datakeys) {
      return datakeys.map(function (item, index) {
        return _react.default.createElement(_recharts.Bar, {
          key: index,
          dataKey: item.dataKey,
          stackId: "a",
          fill: item.color,
          label: {
            position: 'right'
          }
        });
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return VerticalBar;
}(_react.Component);

var _default = VerticalBar;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(VerticalBar, "VerticalBar", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Chart/VerticalBar/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Chart/VerticalBar/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();