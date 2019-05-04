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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireWildcard(require("react"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var styles = {
  root: {
    width: 'inherit',
    position: 'fixed'
  }
};

var Loading =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Loading, _Component);

  function Loading(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Loading);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Loading).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "timer", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "progress", function () {
      var completed = _this.state.completed;

      if (completed < 100) {
        _this.setState({
          completed: Math.min(completed + 10, 100)
        });
      }
    });
    _this.state = {
      completed: 0
    };
    return _this;
  }

  (0, _createClass2.default)(Loading, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.timer = setInterval(this.progress, 1);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement(_LinearProgress.default, {
        classes: {
          root: classes.root
        },
        variant: "determinate",
        value: this.state.completed
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
  return Loading;
}(_react.Component);

Loading.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(Loading);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Loading/index.js");
  reactHotLoader.register(Loading, "Loading", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Loading/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Loading/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();