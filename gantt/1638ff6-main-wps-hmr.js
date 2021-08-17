webpackHotUpdategantt("main",{

/***/ "./src/lib/components/Gantt.react.js":
/*!*******************************************!*\
  !*** ./src/lib/components/Gantt.react.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dhtmlx_gantt_react_src_components_Gantt_Gantt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dhtmlx-gantt-react/src/components/Gantt/Gantt */ "./node_modules/dhtmlx-gantt-react/src/components/Gantt/Gantt.js");
/* harmony import */ var dhtmlx_gantt_react_src_components_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dhtmlx-gantt-react/src/components/Toolbar */ "./node_modules/dhtmlx-gantt-react/src/components/Toolbar/index.js");
/* harmony import */ var dhtmlx_gantt_react_src_components_MessageArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dhtmlx-gantt-react/src/components/MessageArea */ "./node_modules/dhtmlx-gantt-react/src/components/MessageArea/index.js");
/* harmony import */ var dhtmlx_gantt_react_src_components_Gantt_Gantt_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dhtmlx-gantt-react/src/components/Gantt/Gantt.css */ "./node_modules/dhtmlx-gantt-react/src/components/Gantt/Gantt.css");
/* harmony import */ var dhtmlx_gantt_react_src_components_Gantt_Gantt_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_gantt_react_src_components_Gantt_Gantt_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dhtmlx_gantt_react_src_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dhtmlx-gantt-react/src/App.css */ "./node_modules/dhtmlx-gantt-react/src/App.css");
/* harmony import */ var dhtmlx_gantt_react_src_App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_gantt_react_src_App_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var data = {
  data: [{
    id: 1,
    text: 'Task #1',
    start_date: '2020-02-12',
    duration: 3,
    progress: 0.6
  }, {
    id: 2,
    text: 'Task #2',
    start_date: '2020-02-16',
    duration: 3,
    progress: 0.4
  }],
  links: [{
    id: 1,
    source: 1,
    target: 2,
    type: '0'
  }]
};

var GanttApp = /*#__PURE__*/function (_Component) {
  _inherits(GanttApp, _Component);

  var _super = _createSuper(GanttApp);

  function GanttApp() {
    var _this;

    _classCallCheck(this, GanttApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentZoom: 'Days',
      messages: []
    });

    _defineProperty(_assertThisInitialized(_this), "logDataUpdate", function (type, action, item, id) {
      var text = item && item.text ? " (".concat(item.text, ")") : '';
      var message = "".concat(type, " ").concat(action, ": ").concat(id, " ").concat(text);

      if (type === 'link' && action !== 'delete') {
        message += " ( source: ".concat(item.source, ", target: ").concat(item.target, " )");
      }

      _this.addMessage(message);
    });

    _defineProperty(_assertThisInitialized(_this), "handleZoomChange", function (zoom) {
      _this.setState({
        currentZoom: zoom
      });
    });

    return _this;
  }

  _createClass(GanttApp, [{
    key: "addMessage",
    value: function addMessage(message) {
      var maxLogLength = 5;
      var newMessate = {
        message: message
      };
      var messages = [newMessate].concat(_toConsumableArray(this.state.messages));

      if (messages.length > maxLogLength) {
        messages.length = maxLogLength;
      }

      this.setState({
        messages: messages
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          currentZoom = _this$state.currentZoom,
          messages = _this$state.messages;
      var id = this.props.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "zoom-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dhtmlx_gantt_react_src_components_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        zoom: currentZoom,
        onZoomChange: this.handleZoomChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "gantt-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dhtmlx_gantt_react_src_components_Gantt_Gantt__WEBPACK_IMPORTED_MODULE_2__["default"], {
        tasks: data,
        zoom: currentZoom,
        onDataUpdated: this.logDataUpdate
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dhtmlx_gantt_react_src_components_MessageArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
        messages: messages
      }));
    }
  }]);

  return GanttApp;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

GanttApp.defaultProps = {};
GanttApp.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
    links: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
  })
};
/* harmony default export */ __webpack_exports__["default"] = (GanttApp);

/***/ })

})
//# sourceMappingURL=1638ff6-main-wps-hmr.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxNjM4ZmY2LW1haW4td3BzLWhtci5qcyIsInNvdXJjZVJvb3QiOiIifQ==