"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

require("./tenant.css");

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _overview = require("../../actions/service/overview");

var _reactstrap = require("reactstrap");

var _recharts = require("recharts");

var _reactRedux = require("react-redux");

var _Number = _interopRequireDefault(require("../../components/Chart/Number"));

var _Option = _interopRequireDefault(require("../../components/Option"));

var _BarStack = _interopRequireDefault(require("../../components/Chart/BarStack"));

var _TimeSeries = _interopRequireDefault(require("../../components/Chart/TimeSeries"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function compare(a, b) {
  if (a.usage > b.usage) {
    return -1;
  }

  if (a.usage < b.usage) {
    return 1;
  }

  return 0;
}

var Service =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Service, _Component);
  (0, _createClass2.default)(Service, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;
      dispatch((0, _overview.getServiceOverview)('2019-03-30T00:00:00Z', '2019-05-02T00:00:00Z'));
      dispatch(_overview.getServiceIO, '2019-03-30T00:00:00Z', '2019-05-03T00:00:00Z', '1d');
    }
  }]);

  function Service(props) {
    (0, _classCallCheck2.default)(this, Service);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Service).call(this, props));
  }

  (0, _createClass2.default)(Service, [{
    key: "render",
    value: function render() {
      var serviceOverview = this.props.serviceOverview;
      var serviceIO = this.props.serviceIO;
      console.log(serviceIO);
      var serviceDataKeys = [{
        "dataKey": "usage",
        "color": "#8884d8"
      }];
      var IOkeys = [{
        "dataKey": "bytes_in",
        "color": "#82ca9d"
      }, {
        "dataKey": "bytes_out",
        "color": "#ed86ae"
      }];
      var options = [{
        "text": "1s",
        "value": "1s"
      }, {
        "text": "5s",
        "value": "5s"
      }, {
        "text": "10s",
        "value": "10s"
      }, {
        "text": "1m",
        "value": "1m"
      }, {
        "text": "10m",
        "value": "10m"
      }, {
        "text": "30m",
        "value": "30m"
      }, {
        "text": "1h",
        "value": "1h"
      }, {
        "text": "12h",
        "value": "12h"
      }, {
        "text": "1d",
        "value": "1d"
      }];
      var rows = [{
        "service": "service1",
        "usage": 25,
        "latency": 1.000,
        "error_rate": 33,
        "bytes_in": 104,
        "bytes_out": 198
      }, {
        "service": "service2",
        "usage": 16.6,
        "latency": 0.566,
        "error_rate": 100,
        "bytes_in": 76,
        "bytes_out": 147
      }, {
        "service": "service3",
        "usage": 16.6,
        "latency": 0.876,
        "error_rate": 100,
        "bytes_in": 81,
        "bytes_out": 158
      }, {
        "service": "service4",
        "usage": 33.3,
        "latency": 1.781,
        "error_rate": 100,
        "bytes_in": 276,
        "bytes_out": 509
      }, {
        "service": "service5",
        "usage": 8.3,
        "latency": 0.583,
        "error_rate": 100,
        "bytes_in": 76,
        "bytes_out": 147
      }, {
        "service": "service6",
        "usage": 0,
        "latency": 0,
        "error_rate": 100,
        "bytes_in": 0,
        "bytes_out": 0
      }];
      return _react.default.createElement("div", {
        className: "app"
      }, _react.default.createElement("div", {
        className: "header"
      }, _react.default.createElement("div", {
        className: "dashboard-text"
      }, "DASHBOARD"), _react.default.createElement("div", {
        className: "dashboard-title"
      }, "Service Overview")), _react.default.createElement(_Option.default, {
        className: "mr-1",
        optionValue: "10s",
        optionName: "interval",
        title: "interval",
        menu: options
      }), _react.default.createElement(_Option.default, {
        className: "mr-1",
        optionValue: "10s",
        optionName: "interval",
        title: "time start",
        menu: options
      }), _react.default.createElement(_Option.default, {
        className: "mr-1",
        optionValue: "10s",
        optionName: "interval",
        title: "time end",
        menu: options
      }), _react.default.createElement(_reactstrap.Row, null, _react.default.createElement("div", {
        className: "partition-20"
      }, console.log("yoo", serviceOverview), _react.default.createElement(_Number.default, {
        title: "Latency",
        value: serviceOverview.latency ? serviceOverview.latency : 0,
        unit: "ms"
      })), _react.default.createElement("div", {
        className: "partition-20"
      }, _react.default.createElement(_Number.default, {
        title: "Error Rate",
        value: serviceOverview.error_rate ? serviceOverview.error_rate : 0,
        unit: "%"
      })), _react.default.createElement("div", {
        className: "partition-20"
      }, _react.default.createElement(_Number.default, {
        title: "Bytes In",
        value: serviceOverview.bytes_in ? serviceOverview.bytes_in : 0,
        unit: "bytes"
      })), _react.default.createElement("div", {
        className: "partition-20"
      }, _react.default.createElement(_Number.default, {
        title: "Bytes Out",
        value: serviceOverview.bytes_out ? serviceOverview.bytes_out : 0,
        unit: "bytes"
      })), _react.default.createElement("div", {
        className: "partition-20"
      }, _react.default.createElement(_Number.default, {
        title: "Access/Request",
        value: serviceOverview.request ? serviceOverview.request : 0
      })), _react.default.createElement("div", {
        className: "partition-33"
      }, console.log(rows.sort(compare)), _react.default.createElement(_BarStack.default, {
        data: rows.sort(compare),
        axis: "service",
        dataKeys: serviceDataKeys,
        title: "Service Usage",
        height: 250
      })), _react.default.createElement("div", {
        className: "partition-66"
      }, _react.default.createElement(_TimeSeries.default, {
        data: serviceIO,
        dataKeys: IOkeys,
        title: "Data In/Out",
        height: 250
      }))), _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
        md: "3"
      }, _react.default.createElement(_Paper.default, {
        style: {
          borderRadius: "7pt",
          marginBottom: "10px"
        }
      }, _react.default.createElement(_recharts.ResponsiveContainer, {
        aspect: 5.0 / 4.0,
        width: "100%"
      }, _react.default.createElement(_recharts.PieChart, null, _react.default.createElement(_recharts.Tooltip, null), _react.default.createElement(_recharts.Pie, {
        data: rows,
        dataKey: "usage",
        cx: "50%",
        cy: "50%",
        fill: "#82ca9d",
        label: true
      }))))), _react.default.createElement(_reactstrap.Col, {
        md: "3"
      }, _react.default.createElement(_Paper.default, {
        className: "paper",
        style: {
          borderRadius: "7pt"
        }
      }, _react.default.createElement("p", {
        className: "graph-title"
      }, "Data IO"), _react.default.createElement(_recharts.ResponsiveContainer, {
        aspect: 5.0 / 4.0,
        width: "100%"
      }, _react.default.createElement(_recharts.LineChart, {
        data: rows,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }
      }, _react.default.createElement(_recharts.Tooltip, null), _react.default.createElement(_recharts.Line, {
        dataKey: "bytes_in",
        stroke: "#8884d8"
      }), _react.default.createElement(_recharts.Line, {
        dataKey: "bytes_out",
        stroke: "#82ca9d"
      }))))), _react.default.createElement(_reactstrap.Col, {
        md: "3"
      }, _react.default.createElement(_Paper.default, {
        className: "paper",
        style: {
          borderRadius: "7pt"
        }
      }, _react.default.createElement("p", {
        className: "graph-title"
      }, "Latency"), _react.default.createElement("h1", {
        className: "number-graph"
      }, serviceOverview.latency), _react.default.createElement(_recharts.ResponsiveContainer, {
        aspect: 8.0 / 4.0,
        width: "80%"
      }, _react.default.createElement(_recharts.LineChart, {
        data: rows,
        margin: {
          top: 20,
          right: 10,
          left: 50,
          bottom: 5
        }
      }, _react.default.createElement(_recharts.Tooltip, null), _react.default.createElement(_recharts.Line, {
        dataKey: "active",
        stroke: "#8884d8",
        strokeWidth: 2
      }))))), _react.default.createElement(_reactstrap.Col, {
        md: "3"
      }, _react.default.createElement(_Paper.default, {
        className: "paper",
        style: {
          borderRadius: "7pt"
        }
      }, _react.default.createElement("p", {
        className: "graph-title"
      }, "Error rate"), _react.default.createElement("h1", {
        className: "number-graph"
      }, "83.33"), _react.default.createElement(_recharts.ResponsiveContainer, {
        aspect: 8.0 / 4.0,
        width: "80%"
      }, _react.default.createElement(_recharts.LineChart, {
        data: rows,
        margin: {
          top: 20,
          right: 10,
          left: 50,
          bottom: 5
        }
      }, _react.default.createElement(_recharts.Tooltip, null), _react.default.createElement(_recharts.Line, {
        dataKey: "active",
        stroke: "#8884d8",
        strokeWidth: 2
      })))))), _react.default.createElement(_Paper.default, {
        className: "root",
        style: {
          borderRadius: "7pt"
        }
      }, _react.default.createElement(_Table.default, {
        className: "table"
      }, _react.default.createElement(_TableHead.default, null, _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, null, "Service"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "Usage"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "Latency"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "Error rate"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "Bytes In"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "Bytes Out "))), _react.default.createElement(_TableBody.default, null, rows.map(function (row) {
        return _react.default.createElement(_TableRow.default, {
          key: row.id
        }, _react.default.createElement(_TableCell.default, {
          component: "th",
          scope: "row"
        }, row.service), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, row.usage), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, row.latency), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, row.error_rate), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, row.bytes_in), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, row.bytes_out));
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Service;
}(_react.Component);

function mapStateToProps(state) {
  var _state$serviceOvervie = state.serviceOverview,
      serviceOverview = _state$serviceOvervie.serviceOverview,
      serviceIO = _state$serviceOvervie.serviceIO;
  return {
    serviceOverview: serviceOverview,
    serviceIO: serviceIO
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Service);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(compare, "compare", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/pages/Service/index.js");
  reactHotLoader.register(Service, "Service", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/pages/Service/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/pages/Service/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/pages/Service/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/pages/Service/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();