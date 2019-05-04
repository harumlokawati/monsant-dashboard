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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _TableOverviewTenant = _interopRequireDefault(require("components/Tenant/TableOverviewTenant"));

var _BarStack = _interopRequireDefault(require("components/Chart/BarStack"));

var _Number = _interopRequireDefault(require("components/Chart/Number"));

var _Option = _interopRequireDefault(require("components/Option"));

var _overview = require("../../../actions/tenant/overview");

var _reactRedux = require("react-redux");

var _TimeSeries = _interopRequireDefault(require("../../Chart/TimeSeries"));

require("./tenantoverview.css");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var TenantOverview =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TenantOverview, _Component);
  (0, _createClass2.default)(TenantOverview, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;
      dispatch((0, _overview.pageRequest)());
    }
  }]);

  function TenantOverview(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TenantOverview);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TenantOverview).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      age: 10,
      labelWidth: 100
    });
    return _this;
  }

  (0, _createClass2.default)(TenantOverview, [{
    key: "render",
    value: function render() {
      var status = this.props.tenantPlan;
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
      var planDataKeys = [{
        "dataKey": "annual",
        "color": "#8884d8"
      }, {
        "dataKey": "monthly",
        "color": "#82ca9d"
      }, {
        "dataKey": "semester",
        "color": "#ed86ae"
      }];
      var loginKeys = [{
        "dataKey": "login",
        "color": "#82ca9d"
      }];
      var loginAct = [{
        "time": "2019-04-14T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-14T12:00:00Z",
        "login": 15
      }, {
        "time": "2019-04-15T00:00:00Z",
        "login": 1
      }, {
        "time": "2019-04-15T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-16T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-16T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-17T00:00:00Z",
        "login": 3
      }, {
        "time": "2019-04-17T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-18T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-18T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-19T00:00:00Z",
        "login": 2
      }, {
        "time": "2019-04-19T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-20T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-20T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-21T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-21T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-22T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-22T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-23T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-23T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-24T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-24T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-25T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-25T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-26T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-26T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-27T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-27T12:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-28T00:00:00Z",
        "login": 0
      }, {
        "time": "2019-04-28T12:00:00Z",
        "login": 0
      }];
      var rows = [{
        "id": 1,
        "name": "tenant_1",
        "plan": "home",
        "status": "paid",
        "SLA": {
          "property": {
            "provider": 1,
            "tenant": 1,
            "service_parameter": "premium",
            "period": "2019-04-24T10:42:05.518767957+07:00"
          },
          "slo": [{
            "parameter": "user_number",
            "value": 150
          }, {
            "parameter": "service_number",
            "value": 10
          }, {
            "parameter": "billing_type",
            "value": "monthly"
          }],
          "services": [{
            "name": "service1",
            "max_latency": 2000
          }, {
            "name": "service2",
            "max_latency": 3000
          }]
        },
        "usage_status": "OK"
      }, {
        "id": 2,
        "name": "tenant_2",
        "plan": "individual",
        "status": "paid",
        "SLA": {
          "property": {
            "provider": 0,
            "tenant": 0,
            "service_parameter": "",
            "period": "0001-01-01T00:00:00Z"
          },
          "slo": null,
          "services": null
        },
        "usage_status": "OK"
      }, {
        "id": 5,
        "name": "tenant_3",
        "plan": "enterprise",
        "status": "not paid",
        "SLA": {
          "property": {
            "provider": 0,
            "tenant": 0,
            "service_parameter": "",
            "period": "0001-01-01T00:00:00Z"
          },
          "slo": null,
          "services": null
        },
        "usage_status": "OK"
      }, {
        "id": 6,
        "name": "tenant_4",
        "plan": "enterprise",
        "status": "paid",
        "SLA": {
          "property": {
            "provider": 0,
            "tenant": 0,
            "service_parameter": "",
            "period": "0001-01-01T00:00:00Z"
          },
          "slo": null,
          "services": null
        },
        "usage_status": "OK"
      }, {
        "id": 6,
        "name": "tenant_4",
        "plan": "home",
        "status": "paid",
        "SLA": {
          "property": {
            "provider": 0,
            "tenant": 0,
            "service_parameter": "",
            "period": "0001-01-01T00:00:00Z"
          },
          "slo": null,
          "services": null
        },
        "usage_status": "OK"
      }];
      return _react.default.createElement("div", {
        className: "app"
      }, _react.default.createElement("div", {
        className: "header"
      }, _react.default.createElement("div", {
        className: "dashboard-text"
      }, "DASHBOARD"), _react.default.createElement("div", {
        className: "dashboard-title"
      }, "Tenant Overview")), _react.default.createElement(_Option.default, {
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
      }, _react.default.createElement(_Number.default, {
        title: "Number Of User",
        value: this.props.tenantOverview['number_of_users']
      })), _react.default.createElement("div", {
        className: "partition-20"
      }, _react.default.createElement(_Number.default, {
        title: "Number Of Tenants",
        value: this.props.tenantOverview['number_of_tenants']
      })), _react.default.createElement("div", {
        className: "partition-20"
      }, _react.default.createElement(_Number.default, {
        title: "Usage Status",
        value: this.props.tenantOverview['usage_status'],
        unit: "%"
      })), _react.default.createElement("div", {
        className: "partition-20"
      }, _react.default.createElement(_Number.default, {
        title: "Active Tenant",
        value: this.props.tenantOverview['active_tenant'],
        unit: "%"
      })), _react.default.createElement("div", {
        className: "partition-20"
      }, _react.default.createElement(_Number.default, {
        title: "New User",
        value: this.props.tenantOverview['new_user']
      })), _react.default.createElement("div", {
        className: "partition-33"
      }, _react.default.createElement(_BarStack.default, {
        data: status,
        axis: "package",
        dataKeys: planDataKeys,
        title: "Tenant Plans",
        height: 250
      })), _react.default.createElement("div", {
        className: "partition-66"
      }, _react.default.createElement(_TimeSeries.default, {
        data: loginAct,
        dataKeys: loginKeys,
        title: "Login Activity",
        height: 250
      })), _react.default.createElement("div", {
        className: "partition-66"
      }, _react.default.createElement(_TableOverviewTenant.default, {
        rows: this.props.tenantOverview['number_of_tenants'],
        title: "Tenant List"
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return TenantOverview;
}(_react.Component);

function mapStateToProps(state) {
  var _state$tenantOverview = state.tenantOverview,
      tenantOverview = _state$tenantOverview.tenantOverview,
      tenantPlan = _state$tenantOverview.tenantPlan;
  return {
    tenantOverview: tenantOverview,
    tenantPlan: tenantPlan
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TenantOverview);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TenantOverview, "TenantOverview", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Tenant/TenantOverview/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Tenant/TenantOverview/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Tenant/TenantOverview/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Tenant/TenantOverview/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();