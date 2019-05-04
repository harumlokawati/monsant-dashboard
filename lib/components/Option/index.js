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

require("./option.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var styles = {
  input: {
    fontSize: "15px"
  }
};

var Option =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Option, _Component);

  function Option() {
    (0, _classCallCheck2.default)(this, Option);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Option).apply(this, arguments));
  }

  (0, _createClass2.default)(Option, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return _react.default.createElement("div", {
        className: "option-container mr-3 mb-3"
      }, _react.default.createElement("div", {
        className: "title-container"
      }, _react.default.createElement("p", {
        className: "option-title-text"
      }, this.props.title)), _react.default.createElement(_core.FormControl, {
        className: "option-form",
        style: {
          paddingLeft: '10px',
          className: {
            input: {
              color: 'white'
            }
          }
        }
      }, _react.default.createElement(_core.TextField, {
        InputProps: {
          disableUnderline: true,
          className: classes.input
        },
        id: "interval-form",
        select: true,
        name: this.props.optionName ? this.props.optionName : "option",
        className: "option-field w-100",
        value: this.props.optionValue ? this.props.optionValue : "10s",
        onChange: this.props.handleChange,
        SelectProps: {
          MenuProps: {
            className: "w-200"
          }
        },
        margin: "normal"
      }, this.renderOption(this.props.menu))));
    }
  }, {
    key: "renderOption",
    value: function renderOption(menu) {
      return menu.map(function (item, index) {
        return _react.default.createElement(_core.MenuItem, {
          className: "option-item",
          key: index,
          value: item.value
        }, item.text);
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
  return Option;
}(_react.Component);

Option.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(Option);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Option/index.js");
  reactHotLoader.register(Option, "Option", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Option/index.js");
  reactHotLoader.register(_default, "default", "/Users/harumlokawati/WebstormProjects/monsant-dashboard/src/components/Option/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();