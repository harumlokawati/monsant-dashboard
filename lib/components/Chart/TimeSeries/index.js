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

var _recharts = require("recharts");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _react = _interopRequireWildcard(require("react"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var TimeSeries =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TimeSeries, _Component);

  function TimeSeries() {
    (0, _classCallCheck2.default)(this, TimeSeries);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TimeSeries).apply(this, arguments));
  }

  (0, _createClass2.default)(TimeSeries, [{
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
        width: "100%",
        height: this.props.height
      }, _react.default.createElement(_recharts.LineChart, {
        data: this.props.data,
        margin: {
          top: 20,
          right: 30,
          left: -10,
          bottom: 0
        }
      }, _react.default.createElement(_recharts.CartesianGrid, {
        strokeDasharray: "3 3"
      }), _react.default.createElement(_recharts.XAxis, {
        dataKey: "time",
        interval: 2,
        angle: 30,
        dx: 10
      }), _react.default.createElement(_recharts.YAxis, null), _react.default.createElement(_recharts.Tooltip, null), this.renderLine(this.props.dataKeys))));
    }
  }, {
    key: "renderLine",
    value: function renderLine(datakeys) {
      return datakeys.map(function (item, index) {
        return _react.default.createElement(_recharts.Line, {
          key: index,
          dataKey: item.dataKey,
          stackId: "a",
          stroke: item.color
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
  return TimeSeries;
}(_react.Component);

var _default = TimeSeries;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimeSeries, "TimeSeries", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Chart/TimeSeries/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Chart/TimeSeries/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();