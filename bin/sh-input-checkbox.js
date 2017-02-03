(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["sh-input-checkbox"] = factory(require("react"), require("lodash"));
	else
		root["sh-input-checkbox"] = factory(root["React"], root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************!*\
  !*** ./src/sh-input-checkbox.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _iconCheckboxUnselected = __webpack_require__(/*! ./icons/icon-checkbox-unselected */ 2);
	
	var _iconCheckboxUnselected2 = _interopRequireDefault(_iconCheckboxUnselected);
	
	var _iconCheckboxSelected = __webpack_require__(/*! ./icons/icon-checkbox-selected */ 3);
	
	var _iconCheckboxSelected2 = _interopRequireDefault(_iconCheckboxSelected);
	
	var _shCore = __webpack_require__(/*! sh-core */ 4);
	
	var _shCore2 = _interopRequireDefault(_shCore);
	
	var _lodash = __webpack_require__(/*! lodash */ 5);
	
	var _ = _interopRequireWildcard(_lodash);
	
	__webpack_require__(/*! ./sh-input-checkbox.scss */ 6);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ShInputCheckbox = function (_Component) {
	    _inherits(ShInputCheckbox, _Component);
	
	    function ShInputCheckbox(props) {
	        _classCallCheck(this, ShInputCheckbox);
	
	        var _this = _possibleConstructorReturn(this, (ShInputCheckbox.__proto__ || Object.getPrototypeOf(ShInputCheckbox)).call(this, props));
	
	        _this.state = {
	            classList: { shDisabled: false }
	        };
	        _this.toggleChecked = _this.toggleChecked.bind(_this);
	        _this.toggleWithKey = _this.toggleWithKey.bind(_this);
	        _this.validate = _this.validate.bind(_this);
	        return _this;
	    }
	
	    _createClass(ShInputCheckbox, [{
	        key: 'validate',
	        value: function validate(onSubmit) {
	            if (onSubmit) {
	                this.state.classList.shTouched = true;
	            }
	            var rtn = { isValid: true };
	
	            this.state.classList.shInvalid = false;
	
	            if (this.props.required && this.state.value != true) {
	                this.state.classList.shInvalid = true;
	
	                rtn.isValid = false;
	                rtn.msg = 'Required';
	            }
	            var newState = _.clone(this.state);
	            this.setState(newState);
	            return rtn;
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var newState = {};
	            if (this.props.disabled) {
	                newState.classList = {};
	                newState.classList.shDisabled = this.props.disabled;
	            }
	
	            if (this.props.value) {
	                newState.value = this.props.value;
	            }
	
	            this.setState(newState);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            if (!_.isUndefined(props.value) && !_.isEqual(props.value, this.state.value)) {
	                var newState = _.clone(this.state);
	                newState.value = props.value;
	                this.setState(newState, this.validate);
	            }
	
	            if (!_.isUndefined(props.disabled)) {
	
	                var newClassList = _.clone(this.state.classList);
	                newClassList.shDisabled = props.disabled;
	                this.setState({
	                    classList: newClassList
	                });
	            }
	        }
	    }, {
	        key: 'toggleWithKey',
	        value: function toggleWithKey(event) {
	            if (event.keyCode === 32) {
	                this.toggleChecked();
	            }
	        }
	    }, {
	        key: 'toggleChecked',
	        value: function toggleChecked() {
	            var _this2 = this;
	
	            var newState = this.state;
	            newState.value = !newState.value;
	            this.setState({ value: newState.value }, function () {
	                if (_this2.props.validator) {
	                    _this2.props.validator.validate();
	                } else {
	                    _this2.validate();
	                }
	            });
	            this.props.onChange(this.state.value);
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.validator) {
	                this.props.validator.register(this, this.validate);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.validator) {
	                this.props.validator.unregister(this);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                required = _props.required,
	                validator = _props.validator,
	                other = _objectWithoutProperties(_props, ['required', 'validator']);
	
	            return _react2.default.createElement(
	                'div',
	                { className: "sh-input-checkbox " + _shCore2.default.getClassNames(this.state.classList),
	                    onKeyDown: this.toggleWithKey,
	                    tabIndex: '0',
	                    onClick: this.toggleChecked
	                },
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    this.state.value ? _react2.default.createElement(_iconCheckboxSelected2.default, null) : _react2.default.createElement(_iconCheckboxUnselected2.default, null)
	                )
	            );
	        }
	    }]);
	
	    return ShInputCheckbox;
	}(_react.Component);
	
	ShInputCheckbox.propTypes = {
	    validator: _react2.default.PropTypes.object,
	    value: _react2.default.PropTypes.any,
	    onChange: _react2.default.PropTypes.func,
	    required: _react2.default.PropTypes.bool
	};
	
	ShInputCheckbox.defaultProps = {
	    validator: null,
	    value: null,
	    onChange: _.noop
	};
	
	exports.default = ShInputCheckbox;

/***/ },
/* 1 */
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/*!***********************************************!*\
  !*** ./src/icons/icon-checkbox-unselected.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IconCheckboxUnselected = function IconCheckboxUnselected() {
	    return _react2.default.createElement(
	        "svg",
	        { viewBox: "0 0 24 24", style: { height: 24, width: 24 } },
	        _react2.default.createElement("path", { d: "M21.3,2.7v18.7H2.7V2.7H21.3 M21.3,0H2.7C1.2,0,0,1.2,0,2.7v18.7C0,22.8,1.2,24,2.7,24h18.7c1.5,0,2.7 -1.2,2.7 -2.7V2.7C24,1.2,22.8,0,21.3,0z" })
	    );
	};
	
	exports.default = IconCheckboxUnselected;

/***/ },
/* 3 */
/*!*********************************************!*\
  !*** ./src/icons/icon-checkbox-selected.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IconCheckboxSelected = function IconCheckboxSelected() {
	    return _react2.default.createElement(
	        "svg",
	        { viewBox: "0 0 24 24", style: { height: 24, width: 24 } },
	        _react2.default.createElement("path", { d: "M21.3,0H2.7C1.2,0,0,1.2,0,2.7v18.7C0,22.8,1.2,24,2.7,24h18.7c1.5,0,2.7 -1.2,2.7 -2.7V2.7C24,1.2,22.8,0,21.3,0z M9.3,18.7L2.7,12l1.9 -1.9l4.8,4.8L19.5,4.8l1.9,1.9L9.3,18.7z" })
	    );
	};
	
	exports.default = IconCheckboxSelected;

/***/ },
/* 4 */
/*!**********************************!*\
  !*** ./~/sh-core/bin/sh-core.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(/*! lodash */ 5));
		else if(typeof define === 'function' && define.amd)
			define(["lodash"], factory);
		else if(typeof exports === 'object')
			exports["sh-core"] = factory(require("lodash"));
		else
			root["sh-core"] = factory(root["_"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/*!**********************!*\
	  !*** ./src/index.js ***!
	  \**********************/
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.getDecimal = exports.getClassNames = undefined;
		
		var _getClassNames = __webpack_require__(/*! ./util/get-class-names */ 1);
		
		var _getClassNames2 = _interopRequireDefault(_getClassNames);
		
		var _getDecimal = __webpack_require__(/*! ./util/get-decimal */ 3);
		
		var _getDecimal2 = _interopRequireDefault(_getDecimal);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.getClassNames = _getClassNames2.default;
		exports.getDecimal = _getDecimal2.default;
		exports.default = {
		    getClassNames: _getClassNames2.default,
		    getDecimal: _getDecimal2.default
		};
	
	/***/ },
	/* 1 */
	/*!*************************************!*\
	  !*** ./src/util/get-class-names.js ***!
	  \*************************************/
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _lodash = __webpack_require__(/*! lodash */ 2);
		
		var _ = _interopRequireWildcard(_lodash);
		
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
		
		/**
		 * Get a string of classNames from the object passed in. Uses the keys for class names and only adds them if the value is true. Value of keys can be boolean, function, or strings. Functions are evaluated on call. Strings are appended to end of key.
		 *
		 * @param {object} classObject Object containing keys of class names.
		 * @returns {string}
		 */
		function getClassNames(classObject) {
		    var classNames = [];
		
		    for (var key in classObject) {
		        if (classObject.hasOwnProperty(key)) {
		            var check = classObject[key];
		            var className = _.kebabCase(key);
		            if (_.isFunction(check)) {
		                if (check()) {
		                    classNames.push(className);
		                }
		            } else if (_.isString(check)) {
		                if (className === 'include' || _.includes(check, ' ')) {
		                    classNames = _.concat(classNames, check.split(' '));
		                } else {
		                    classNames.push(className + '-' + _.kebabCase(check));
		                }
		            } else if (check) {
		                classNames.push(className);
		            }
		        }
		    }
		
		    classNames = _.uniq(classNames);
		
		    return classNames.join(' ');
		}
		
		exports.default = getClassNames;
	
	/***/ },
	/* 2 */
	/*!*************************************************************************************!*\
	  !*** external {"root":"_","commonjs2":"lodash","commonjs":"lodash","amd":"lodash"} ***!
	  \*************************************************************************************/
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/*!*********************************!*\
	  !*** ./src/util/get-decimal.js ***!
	  \*********************************/
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _lodash = __webpack_require__(/*! lodash */ 2);
		
		var _ = _interopRequireWildcard(_lodash);
		
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
		
		/**
		 * Get a decimal value from a string or number, remove any unnecessary characters.
		 *
		 * @param {string} value Alpha characters will be removed and a decimal will be returned. For example if you give it 'b.123' 0.123 will be returned.
		 * @returns {number}
		 */
		
		function getDecimal(value) {
		    if (!value) {
		        return 0;
		    }
		
		    var num = value;
		    if (!_.isNumber(value)) {
		        var isNeg = '-' && _.includes(value, '-');
		
		        var regExp = '[^0-9.]';
		        var numString = value.toString().replace(new RegExp(regExp, 'g'), '');
		
		        var numList = numString.split('.');
		
		        // numList will always have at least one value in array because we checked for an empty string earlier.
		        numList[0] += '.';
		        numString = numList.join('');
		        num = parseFloat(numString);
		
		        if (!num) {
		            num = 0;
		        } else if (isNeg) {
		            num *= -1;
		        }
		    }
		
		    return num;
		}
		
		exports.default = getDecimal;
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=sh-core.js.map

/***/ },
/* 5 */
/*!*************************************************************************************!*\
  !*** external {"root":"_","commonjs2":"lodash","commonjs":"lodash","amd":"lodash"} ***!
  \*************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/*!************************************!*\
  !*** ./src/sh-input-checkbox.scss ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/sass-loader!./sh-input-checkbox.scss */ 7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./sh-input-checkbox.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./sh-input-checkbox.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/*!*******************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/sh-input-checkbox.scss ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 8)();
	// imports
	
	
	// module
	exports.push([module.id, ".sh-input-checkbox {\n  outline: 0;\n  transition: color 0.25s ease-in-out; }\n  .sh-input-checkbox svg {\n    fill: white;\n    height: 30px;\n    width: 30px;\n    transition: fill 0.25s ease-in-out;\n    border-radius: 4px; }\n  .sh-input-checkbox.sh-invalid svg {\n    fill: #b25245;\n    transition: fill 0.25s ease-in-out; }\n  .sh-input-checkbox:hover svg {\n    fill: color-primary;\n    transition: fill 0.25s ease-in-out; }\n  .sh-input-checkbox:focus svg {\n    -webkit-box-shadow: inset 0 1px 1px transparent, 0 0 5px rgba(255, 255, 255, 0.6);\n    box-shadow: inset 0 1px 1px transparent, 0 0 5px rgba(255, 255, 255, 0.6); }\n  .sh-input-checkbox.sh-disabled {\n    pointer-events: none; }\n    .sh-input-checkbox.sh-disabled svg {\n      fill: rgba(255, 255, 255, 0.4); }\n  .sh-input-checkbox i {\n    border-radius: 2px; }\n", ""]);
	
	// exports


/***/ },
/* 8 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=sh-input-checkbox.js.map