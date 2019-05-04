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

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TablePagination = _interopRequireDefault(require("@material-ui/core/TablePagination"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _overview = require("actions/tenant/overview");

var _reactRedux = require("react-redux");

var _react = _interopRequireWildcard(require("react"));

require("./table.css");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var TableOverviewTenant =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TableOverviewTenant, _Component);
  (0, _createClass2.default)(TableOverviewTenant, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;
      console.log("dispatch");
      dispatch((0, _overview.getTenantList)(this.state.page + 1, this.state.rowsPerPage));
    }
  }]);

  function TableOverviewTenant(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TableOverviewTenant);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableOverviewTenant).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      page: 0,
      rowsPerPage: 5
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChangePage", function (event, page) {
      _this.setState({
        page: page
      });

      var dispatch = _this.props.dispatch;
      dispatch((0, _overview.getTenantList)(page + 1, _this.state.rowsPerPage));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChangeRowsPerPage", function (event) {
      _this.setState({
        rowsPerPage: event.target.value
      });

      var dispatch = _this.props.dispatch;
      dispatch((0, _overview.getTenantList)(_this.state.page + 1, event.target.value));
    });
    return _this;
  }

  (0, _createClass2.default)(TableOverviewTenant, [{
    key: "render",
    value: function render() {
      var rows = this.props.tenantList;
      console.log(rows);
      return _react.default.createElement(_Paper.default, {
        className: "table-paper",
        style: {
          borderRadius: "7pt"
        }
      }, _react.default.createElement("p", {
        className: "table-title"
      }, this.props.title), _react.default.createElement("hr", null), _react.default.createElement("div", {
        className: "table-container"
      }, _react.default.createElement(_Table.default, {
        className: "table"
      }, _react.default.createElement(_TableHead.default, {
        className: "table-header"
      }, _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, null, "ID"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "Tenant"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "Plan"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "Status"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "Usage"), _react.default.createElement(_TableCell.default, {
        align: "left"
      }, "SLA"))), _react.default.createElement(_TableBody.default, null, rows.map(function (row) {
        return _react.default.createElement(_TableRow.default, {
          key: row.id
        }, _react.default.createElement(_TableCell.default, {
          component: "th",
          scope: "row"
        }, "#", row.id), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, row.name), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, row.plan), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, row.status), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, _react.default.createElement("p", {
          className: "status-ok"
        }, row.usage_status)), _react.default.createElement(_TableCell.default, {
          align: "left"
        }, _react.default.createElement("p", {
          className: "view-sla"
        }, "view")));
      }), rows.length < this.state.rowsPerPage && _react.default.createElement(_TableRow.default, {
        style: {
          height: 49 * (this.state.rowsPerPage - rows.length)
        }
      }, _react.default.createElement(_TableCell.default, {
        colSpan: 6
      })))), _react.default.createElement(_TablePagination.default, {
        rowsPerPageOptions: [5, 10, 25],
        component: "div",
        count: this.props.rows ? this.props.rows : 0,
        rowsPerPage: this.state.rowsPerPage,
        page: this.state.page,
        backIconButtonProps: {
          'aria-label': 'Previous Page'
        },
        nextIconButtonProps: {
          'aria-label': 'Next Page'
        },
        onChangePage: this.handleChangePage,
        onChangeRowsPerPage: this.handleChangeRowsPerPage
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return TableOverviewTenant;
}(_react.Component);

function mapStateToProps(state) {
  var tenantList = state.tenantOverview.tenantList;
  return {
    tenantList: tenantList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TableOverviewTenant);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TableOverviewTenant, "TableOverviewTenant", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Tenant/TableOverviewTenant/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Tenant/TableOverviewTenant/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Tenant/TableOverviewTenant/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Tenant/TableOverviewTenant/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();