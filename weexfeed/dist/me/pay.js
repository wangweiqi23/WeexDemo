/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115)
	var __weex_template__ = __webpack_require__(116)
	var __weex_style__ = __webpack_require__(117)
	var __weex_script__ = __webpack_require__(118)

	__weex_define__('@weex-component/63fb5e6a82442fe5f6c0186ae36e6550', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/63fb5e6a82442fe5f6c0186ae36e6550',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(9);
	__webpack_require__(13);
	__webpack_require__(17);
	__webpack_require__(21);
	__webpack_require__(25);
	__webpack_require__(66);
	__webpack_require__(70);
	__webpack_require__(74);
	__webpack_require__(78);
	__webpack_require__(79);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(6)
	var __weex_style__ = __webpack_require__(7)
	var __weex_script__ = __webpack_require__(8)

	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(10)
	var __weex_style__ = __webpack_require__(11)
	var __weex_script__ = __webpack_require__(12)

	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(14)
	var __weex_style__ = __webpack_require__(15)
	var __weex_script__ = __webpack_require__(16)

	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(18)
	var __weex_style__ = __webpack_require__(19)
	var __weex_script__ = __webpack_require__(20)

	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(22)
	var __weex_style__ = __webpack_require__(23)
	var __weex_script__ = __webpack_require__(24)

	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(26)
	var __weex_style__ = __webpack_require__(27)
	var __weex_script__ = __webpack_require__(28)

	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var _assign = __webpack_require__(29);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }

	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);

	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);

	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	module.exports = __webpack_require__(34).Object.assign;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(32);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(47)});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(33)
	  , core      = __webpack_require__(34)
	  , ctx       = __webpack_require__(35)
	  , hide      = __webpack_require__(37)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 33 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 34 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(36);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(38)
	  , createDesc = __webpack_require__(46);
	module.exports = __webpack_require__(42) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(39)
	  , IE8_DOM_DEFINE = __webpack_require__(41)
	  , toPrimitive    = __webpack_require__(45)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(42) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(42) && !__webpack_require__(43)(function(){
	  return Object.defineProperty(__webpack_require__(44)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(43)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(40)
	  , document = __webpack_require__(33).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(40);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(48)
	  , gOPS     = __webpack_require__(63)
	  , pIE      = __webpack_require__(64)
	  , toObject = __webpack_require__(65)
	  , IObject  = __webpack_require__(52)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(43)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(49)
	  , enumBugKeys = __webpack_require__(62);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(50)
	  , toIObject    = __webpack_require__(51)
	  , arrayIndexOf = __webpack_require__(55)(false)
	  , IE_PROTO     = __webpack_require__(59)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(52)
	  , defined = __webpack_require__(54);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(53);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(51)
	  , toLength  = __webpack_require__(56)
	  , toIndex   = __webpack_require__(58);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(57)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(57)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(60)('keys')
	  , uid    = __webpack_require__(61);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(33)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 63 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 64 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(54);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(67)
	var __weex_style__ = __webpack_require__(68)
	var __weex_script__ = __webpack_require__(69)

	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(71)
	var __weex_style__ = __webpack_require__(72)
	var __weex_script__ = __webpack_require__(73)

	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',

	    backgroundColor: 'black',

	    height: 88,

	    title: "",

	    titleColor: 'black',

	    rightItemSrc: '',

	    rightItemTitle: '',

	    rightItemColor: 'black',

	    leftItemSrc: '',

	    leftItemTitle: '',

	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70)
	var __weex_template__ = __webpack_require__(75)
	var __weex_style__ = __webpack_require__(76)
	var __weex_script__ = __webpack_require__(77)

	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79)
	var __weex_template__ = __webpack_require__(83)
	var __weex_style__ = __webpack_require__(84)
	var __weex_script__ = __webpack_require__(85)

	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(80)
	var __weex_style__ = __webpack_require__(81)
	var __weex_script__ = __webpack_require__(82)

	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);

	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);

	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */
/***/ function(module, exports) {

	/**
	 * Created by weiqi on 16/6/8.
	＊ 网络接口
	 */


	// var stream = require('@weex-module/stream');//说是0.15已经支持,但是我没生效

	var stream
	__weex_define__('@weex-temp/api', function (__weex_require__) {
	    stream = __weex_require__('@weex-module/stream')
	});

	var endPointCdn = {
	        baseUrlOfficial: 'https://sns..com',
	        baseUrlTest: 'https://qas..com:8101',
	        baseCdnUrlOfficial: 'http://cdn..com',
	        baseCdnUrlTest: 'http://51jinyi.top'
	    };

	var apiURL = {
	    feedBack: '/LVBPages/api/ApiSuggest/Suggest?reqtype=Server',
	    mostHotLive: '/Home/Channel/GetMostHotLive',
	    bannerList: '/Home/Channel/GetBannerList',
	    getHomePageOperation: '/Home/Channel/GetHomePageOperation'
	};

	exports.postFeedback = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.baseUrlOfficial, endPointCdn.baseUrlTest) + apiURL.feedBack, body, callback);
	};
	exports.getMostHotLive = function (env, flag, callback) {
	    getData(getEndPoint(env, endPointCdn.baseCdnUrlOfficial, endPointCdn.baseCdnUrlTest) + apiURL.mostHotLive + flag, callback);
	};
	exports.getBannerList = function (env, callback) {
	    getData(getEndPoint(env, endPointCdn.baseCdnUrlOfficial, endPointCdn.baseCdnUrlTest) + apiURL.bannerList, callback);
	};
	exports.getHomePageOperation = function (env, callback) {
	    getData(getEndPoint(env, endPointCdn.baseCdnUrlOfficial, endPointCdn.baseCdnUrlTest)+ apiURL.getHomePageOperation, callback);
	};
	exports.postPayPageInfo = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.payPageInfo, body, callback);
	};
	exports.postCreateOrderInfoAli = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.createOrderInfoAli, body, callback);
	};
	exports.postCreateOrderInfoWechat = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest)+ apiURL.createOrderInfoWechat, body, callback);
	};
	exports.postPayCallBackAli = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.payCallBackAli, body, callback);
	};
	exports.postPayCallBackWechat = function (env, body, callback) {
	    postData(getEndPoint(env, endPointCdn.basePayUrlOfficial, endPointCdn.basePayUrlTest) + apiURL.payCallBackWechat, body, callback);
	};

	function getData(url, callback) {
	    console.log("https get url="+url);
	    stream.fetch({
	        method: 'GET',
	        type:'json',
	        url: url
	    }, function (ret) {
	        // var retdata = JSON.parse(ret);
	        callback(ret.data);
	    });
	}
	function postData(url, body, callback) {
	    console.log("https post url="+url+" body="+body);
	    stream.fetch({
	        method: 'POST',
	        url: url,
	        type:'json',
	        body: body
	    }, function (ret) {
	        //var retdata = JSON.stringify(ret.data);
	        callback(ret.data);
	    });
	}

	function getEndPoint(env, officialUrl, testUrl) {
	    env = new String(env);
	    if('official' == env){
	        return officialUrl;
	    }else{
	        return testUrl;
	    }
	}

	exports.getBaseUrl = function (bundleUrl, isnav) {
	    bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexFeed.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/dist/';
	    }
	    else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    }
	    else {
	        var host = 'localhost:8888';
	        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	        if (matches && matches.length >= 2) {
	            host = matches[1];
	        }

	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        if (typeof window === 'object') {
	            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
	        } else {
	            nativeBase = 'http://' + host + '/dist/';
	        }
	    }

	    return nativeBase;
	};

/***/ },
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "btn"
	  ],
	  "children": [
	    {
	      "type": "progresswheel",
	      "classList": [
	        "loading-wheel"
	      ],
	      "attr": {
	        "width": "30",
	        "height": "30",
	        "barwidth": "3",
	        "barcolor": "blue"
	      },
	      "shown": function () {return this.loadingWheelShown}
	    },
	    {
	      "type": "text",
	      "classList": [
	        "btn-loading-text"
	      ],
	      "shown": function () {return this.loadingTextShown},
	      "attr": {
	        "value": function () {return this.loadingbuttontext}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "btn-text"
	      ],
	      "shown": function () {return this.textShown},
	      "attr": {
	        "value": function () {return this.buttontext}
	      }
	    }
	  ]
	}

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginRight": 24,
	    "borderWidth": 2,
	    "borderColor": "#1da2ff",
	    "borderRadius": 30,
	    "backgroundColor": "#FFFFFF"
	  },
	  "btn-text": {
	    "color": "#1da2ff",
	    "fontSize": 28,
	    "textAlign": "center"
	  },
	  "btn-loading-text": {
	    "color": "#1da2ff",
	    "fontSize": 28,
	    "textAlign": "center",
	    "marginLeft": 10
	  },
	  "loading-wheel": {
	    "width": 30,
	    "height": 30
	  }
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);

	module.exports = {
	  data: function () {return {
	    buttontext: 'test',
	    loadingbuttontext: 'ing',

	    loadingTextShown: false,
	    loadingWheelShown: false,
	    textShown: true

	  }},

	  created: function created() {},

	  ready: function ready() {},

	  destroyed: function destroyed() {},

	  methods: {
	    showLoadingText: function showLoadingText() {
	      this.loadingTextShown = true;
	    },

	    hideLoadingText: function hideLoadingText() {
	      this.loadingTextShown = false;
	    },

	    showLoadingWheel: function showLoadingWheel() {
	      this.loadingWheelShown = true;
	    },

	    hideLoadingWheel: function hideLoadingWheel() {
	      this.loadingWheelShown = false;
	    },

	    showButtonText: function showButtonText() {
	      this.textShown = true;
	    },

	    hideButtonText: function hideButtonText() {
	      this.textShown = false;
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(112)
	var __weex_style__ = __webpack_require__(113)
	var __weex_script__ = __webpack_require__(114)

	__weex_define__('@weex-component/loading-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "style": {
	    "width": 750,
	    "height": function () {return this.sHeight},
	    "backgroundColor": "#f6f6f6"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "my-wave"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "my-wave-text"
	          ],
	          "attr": {
	            "value": "我的浪花："
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "my-wave-image"
	          ],
	          "attr": {
	            "quality": "high",
	            "src": function () {return this.waveImage}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "my-wave-coin"
	          ],
	          "attr": {
	            "value": function () {return this.waveNumber}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.isPayInfoShown},
	      "style": {
	        "flex": 1
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "divider"
	          ]
	        },
	        {
	          "type": "clickview",
	          "classList": [
	            "pay-channel-item"
	          ],
	          "id": "item-alipay",
	          "shown": function () {return this.isAlipayShown},
	          "events": {
	            "click": "alipayClick"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "pay-channel-info"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "pay-channel-img"
	                  ],
	                  "attr": {
	                    "quality": "high",
	                    "src": function () {return this.alipayImage}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "pay-channel-text"
	                  ],
	                  "attr": {
	                    "value": "支付宝"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "image",
	              "classList": [
	                "pay-channel-check"
	              ],
	              "attr": {
	                "quality": "high",
	                "src": function () {return this.checkImage}
	              },
	              "id": "check-alipay"
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "divider-short"
	          ],
	          "shown": function () {return this.isChannelDividerShown}
	        },
	        {
	          "type": "clickview",
	          "classList": [
	            "pay-channel-item"
	          ],
	          "id": "item-wechatpay",
	          "shown": function () {return this.isWechatShown},
	          "events": {
	            "click": "wechatClick"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "pay-channel-info"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "pay-channel-img"
	                  ],
	                  "attr": {
	                    "quality": "high",
	                    "src": function () {return this.wechatImage}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "pay-channel-text"
	                  ],
	                  "attr": {
	                    "value": "微信支付"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "image",
	              "classList": [
	                "pay-channel-check"
	              ],
	              "attr": {
	                "quality": "high",
	                "src": function () {return this.uncheckImage}
	              },
	              "id": "check-wechat"
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "recharge-title"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "recharge-title-text"
	              ],
	              "attr": {
	                "value": "充 值"
	              }
	            }
	          ]
	        },
	        {
	          "type": "list",
	          "style": {
	            "width": 750,
	            "height": function () {return this.listHeight}
	          },
	          "children": [
	            {
	              "type": "cell",
	              "append": "tree",
	              "repeat": function () {return this.payDiamondInfoList},
	              "children": [
	                {
	                  "type": "clickview",
	                  "classList": [
	                    "pay-item"
	                  ],
	                  "attr": {
	                    "index": function () {return this.$index}
	                  },
	                  "events": {
	                    "click": "payItemClick"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "pay-item-info"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "pay-wave-img"
	                          ],
	                          "attr": {
	                            "quality": "high",
	                            "src": function () {return this.waveImage}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "pay-wave-number"
	                          ],
	                          "attr": {
	                            "value": function () {return this.buy_diamond_num}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "loading-button",
	                      "classList": [
	                        "pay-loading-btn"
	                      ],
	                      "id": function () {return 'loading-' + (this.$index)},
	                      "attr": {
	                        "buttontext": function () {return '¥ ' + (this.amount)}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "divider-short"
	                  ],
	                  "shown": function () {return this.isDividerShown(this.$index)}
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.isNetworkErrorShown},
	      "children": [
	        {
	          "type": "swiperefresh",
	          "id": "network-error-refresh",
	          "style": {
	            "height": function () {return this.networkErrorDivHeight}
	          },
	          "attr": {
	            "color": "blue",
	            "eventname": "payRefresh",
	            "refreshing": "false"
	          },
	          "children": [
	            {
	              "type": "scroller",
	              "id": "network-error",
	              "classList": [
	                "network-error"
	              ],
	              "style": {
	                "height": function () {return this.networkErrorDivHeight}
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "network-error-content"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "network-error-img"
	                      ],
	                      "attr": {
	                        "quality": "high",
	                        "src": function () {return this.networkErrorImage}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "network-error-text"
	                      ],
	                      "attr": {
	                        "value": "网络不给力，请重新加载"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "init-loading"
	      ],
	      "style": {
	        "height": function () {return this.networkErrorDivHeight}
	      },
	      "shown": function () {return this.isInitLoadingWheelShown},
	      "children": [
	        {
	          "type": "progresswheel",
	          "classList": [
	            "init-loading-wheel"
	          ],
	          "attr": {
	            "width": "110",
	            "height": "110",
	            "barwidth": "4",
	            "barcolor": "blue"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = {
	  "my-wave": {
	    "flexDirection": "row",
	    "backgroundColor": "#FFFFFF",
	    "height": 88,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "my-wave-text": {
	    "fontSize": 32,
	    "color": "#888888"
	  },
	  "my-wave-image": {
	    "width": 32,
	    "height": 32,
	    "marginRight": 10
	  },
	  "my-wave-coin": {
	    "fontSize": 32,
	    "color": "#1da2ff"
	  },
	  "refresh-view": {
	    "width": 750,
	    "display": "flex",
	    "MsFlexAlign": "center",
	    "WebkitAlignItems": "center",
	    "WebkitBoxAlign": "center",
	    "alignItems": "center",
	    "backgroundColor": "rgba(0,0,0,0)"
	  },
	  "indicator": {
	    "height": 70,
	    "width": 70,
	    "color": "#1da2ff"
	  },
	  "pay-channel-item": {
	    "justifyContent": "space-between",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "backgroundColor": "#FFFFFF",
	    "height": 88
	  },
	  "pay-channel-info": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 88
	  },
	  "pay-channel-img": {
	    "width": 40,
	    "height": 40,
	    "marginLeft": 24
	  },
	  "pay-channel-text": {
	    "fontSize": 32,
	    "marginLeft": 24,
	    "color": "#333333"
	  },
	  "pay-channel-check": {
	    "width": 40,
	    "height": 40,
	    "marginRight": 24
	  },
	  "recharge-title": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 48
	  },
	  "recharge-title-text": {
	    "color": "#333333",
	    "fontSize": 24,
	    "marginLeft": 20
	  },
	  "pay-item": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "backgroundColor": "#FFFFFF",
	    "height": 88
	  },
	  "pay-item-info": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginLeft": 24,
	    "height": 88
	  },
	  "pay-wave-img": {
	    "width": 32,
	    "height": 32
	  },
	  "pay-wave-number": {
	    "marginLeft": 24,
	    "fontSize": 32
	  },
	  "btn-pay": {
	    "justifyContent": "center",
	    "marginRight": 24,
	    "width": 112,
	    "height": 48,
	    "borderWidth": 2,
	    "borderColor": "#1da2ff",
	    "borderRadius": 8,
	    "backgroundColor": "#FFFFFF"
	  },
	  "btn-pay-text": {
	    "color": "#1da2ff",
	    "fontSize": 28,
	    "textAlign": "center"
	  },
	  "pay-loading-btn": {
	    "marginRight": 24,
	    "width": 112,
	    "height": 48
	  },
	  "divider": {
	    "height": 1,
	    "backgroundColor": "#cccccc"
	  },
	  "divider-short": {
	    "height": 1,
	    "backgroundColor": "#cccccc",
	    "marginLeft": 24
	  },
	  "network-error": {
	    "justifyContent": "center"
	  },
	  "network-error-content": {
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "network-error-img": {
	    "width": 450,
	    "height": 410
	  },
	  "network-error-text": {
	    "fontSize": 28,
	    "color": "#888888",
	    "marginTop": 16
	  },
	  "init-loading": {
	    "justifyContent": "center",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "init-loading-wheel": {
	    "width": 110,
	    "height": 110
	  }
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	__webpack_require__(4);
	var dom = __weex_require__('@weex-module/dom');
	var modal = __weex_require__('@weex-module/modal');
	var payModule = __weex_require__('@weex-module/payModule');
	var utilModule = __weex_require__('@weex-module/utilModule');
	var apis = __webpack_require__(108);
	var globalEvent = __weex_require__('@weex-module/globalEvent');
	var stream;
	__weex_define__('@weex-temp/api', function (__weex_require__) {
	  stream = __weex_require__('@weex-module/stream');
	});

	module.exports = {
	  data: function () {return {
	    sHeight: '',
	    listHeight: '',

	    current_rotate: 0,
	    stop_rotate: 0,
	    showCircle: false,
	    loadingDuration: 1000,

	    appType: '3',
	    ctoken: '',
	    utoken: '',
	    network: '',
	    version: '',
	    deviceId: '',
	    plat: 'Android',
	    productType: 'EMLive',
	    reqtype: 'server',

	    wechatTradeNo: '',
	    clickIndex: -1,

	    waveNumber: 0,

	    isPayInfoShown: false,
	    isNetworkErrorShown: false,
	    networkErrorDivHeight: 0,
	    isInitLoadingWheelShown: true,
	    refresh_display: 'hide',

	    isAlipayShown: false,
	    isWechatShown: false,
	    isChannelDividerShown: false,

	    isAlipay: true,
	    isWechat: false,

	    payDiamondInfoList: [],
	    payDiamondInfoListCount: 0,

	    alipayImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MkY0QzU5NTEzNkQxMUU2OERCN0M5QkM2RTNFMkNDNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MkY0QzU5NjEzNkQxMUU2OERCN0M5QkM2RTNFMkNDNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYyRjRDNTkzMTM2RDExRTY4REI3QzlCQzZFM0UyQ0M0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYyRjRDNTk0MTM2RDExRTY4REI3QzlCQzZFM0UyQ0M0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qyqzjQAADNtJREFUeNrsXHlsFNcd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',

	    wechatImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RTk4NUY5NTEzNkQxMUU2Qjk0N0YzRTI3NUUyQjBGNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RTk4NUY5NjEzNkQxMUU2Qjk0N0YzRTI3NUUyQjBGNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZFOTg1RjkzMTM2RDExRTZCOTQ3RjNFMjc1RTJCMEY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZFOTg1Rjk0MTM2RDExRTZCOTQ3RjNFMjc1RTJCMEY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bWT4sgAACalJREFUeNrsXXtwXFUd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',

	    waveImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNEREMzg2ODlBOTYxMUU2QTUxNDhFM0U3OUVGQUVEMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNEREMzg2OTlBOTYxMUU2QTUxNDhFM0U3OUVGQUVEMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU0REQzODY2OUE5NjExRTZBNTE0OEUzRTc5RUZBRUQwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0REQzODY3OUE5NjExRTZBNTE0OEUzRTc5RUZBRUQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gHllPgAADDdJREFUeNq0WWlsXOUV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',

	    checkImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRjMxNENFRTRDQ0QxMUU2OTVEN0RCQzY0OUVDM0I4MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRjMxNENFRjRDQ0QxMUU2OTVEN0RCQzY0OUVDM0I4MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGMzE0Q0VDNENDRDExRTY5NUQ3REJDNjQ5RUMzQjgxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGMzE0Q0VENENDRDExRTY5NUQ3REJDNjQ5RUMzQjgxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m6dVDgAABChJREFUeNrkm9tvDFEcx3+9IKJUBHFro2+kEXEJUcWipBJBSyvhDxCXiBcP3sqTiKRCEOKSiEuiwYMQxLVK4xYSGp7cIhWCFPWAKt9v5zerVtvZncvOmfabfNJss+fs79PuzJxz5kx23pHfElBywTQwGRSCAjASDAQ5+p5m0AQawXPQAO6DevA5iKKyfe5vFFgOysFUkOXw/hyF7aa0+/0vcAecBjXgtV8FZvrUz0xwFrwE20FRErJdJUv72K7/efY9ywThGKgFN8BCj5JdybPv6/pZsTCEh4Oj4BqYIenLDP3Mo1pDWoQrwFOwUsLLSq2hIkjh3mAXOKln4LCTq7Wwpj5+C/cH58E6MS+s6RIY5JfwED1u5oq54VXiqtbqSZhfmwtgkpif8eCi0+GW6XDM8sI/UaKTCVpzbzfC1WCORC9ztPaUhHm6XyPRDWuvTFaYA/z9Ev3s0zG6o/AundFEPXTY6SQ8G5RJ90lZ4uU0UXiLdL9UdSbMi3exiRXn9PLUvFjd/hPeaKJs0TCROnwxi4d76mZjovBQUGqi7GGcVQZhanAw5km6VB3jwivE/+UeX2T7alX86UE6Wx3jwktNlrXD1wcgPaKfq26X2sL26qLRsgzXV7c9FGn85qprOuZS2OuCW9pkN98TOfTMdfdtC4OZpsyGApa1M5nC43qILFNI4YIeIssUUHhED5FtmwlmhjUzCkGWGUDhHK+99MmKhCzT3/O9pVH4c11ZJLJ4tD+yVcHJMj8o3OxFtma+SD5+7ih2lk5G9vCzQI+kZgo3uWmZp7IjdZiXldG1tAGyzFcKN6baqhdaHSv5KxsfynQibYgs847CL1Jt9bNVZCvGtC2tHYzfVHpJgXGyzAsKP3HT8vwrkXV1nUtXTxfZNNEoWaaBwg/ctnaSXl1olCxzn8K3xdpT4bt0RwlRlo71FOZumXovPSUrHaKsqGOTPfA45bU3J+mQZeOOtvBx0BKUtAGyLeoYF34v1r1V8VvaAFlRt/fthZltfvXeJn3Tul4bIPuPW0bC1kOU6d/dB46xXzeHLovv29+tVYmzpSo/P8kAWWZz+xeJwlfAGek+ocvlroSZ9W5nUIalSV3ESfgNWNUNhFepi6Mwwx1ueyMsu1cdJFlhZoNYO1ijllqtXVIV/gGWgccRkmWt5Vp7ysLMR1ACHkVEtkRrFrfC9rCTu9GvGSzLAVPMHj56FWa+gAVgt4Gye8A88CmZN6eyLv1drK26lRLQEycp5ovWslZrE7+F7fApk7H2dCuknABjtJaU4vbOw1uxtuHP1sF5unJLrM2jK7QGSZewnes6E+EJ4xxoDUCyVfuO6UzO08nTr507N5R8Pa54LeSDV263UnDB7a5Ye585YvLtQa2MND2Kx10GXJofLB0/ivdBrBsCvJYG+ijeHwEGAOP1PN1qLB+rAAAAAElFTkSuQmCC',

	    uncheckImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0MxRjcxMzE0MTYxMUU2OTYyQUJCOUNEQjg2RkExNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0MxRjcxNDE0MTYxMUU2OTYyQUJCOUNEQjg2RkExNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdDQzFGNzExMTQxNjExRTY5NjJBQkI5Q0RCODZGQTE3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDQzFGNzEyMTQxNjExRTY5NjJBQkI5Q0RCODZGQTE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B7FMEQAABZ1JREFUeNrsnd9rW2UYx5+kZXZJHKVZf1hDTbtYHVTnjwsZ4oVVZwR3ozed7KK6m4ETprA5/wO7C7eLVtjFxkBwXunFhFVl80YGg6IyYdPa0No1IJsrVpPVlrL6fJvndGfpaZJz8p7kvCfnC19SGvK+z/NJzo/3fc95TmhiYoLqqO3sp9mPsR+X14fZcXaEHWMvs3Psv+X1Jvs39q/y+hP7r3ol0Fzj/gDlJfYg+0X2k+xQmc9sYbeJDb1s+nuVfZX9PfsS+yL7jp8AhtmvsIfZe9lRxe3jC9glPszOs8+zz7K/Y991Ozm3FJOEMuxx9pAL8KwUlb7Gpe/DEos2ALeyj7Cn2SfYyTruY5MSA2I5KrF5GuCQ7NyPywHCK0IsIxLbkBcBPsK+wD7H7iHvqkdiHJeYPQFwvxwF06SPXpWY99cTYAv7NPsz9jbST9sk9jOSS00Bdsg51zukv96WXDpqBbCXfZm9m/yj3ZJTr9sAd7J/YO8g/2mH5LbTLYAp9rfsbvKvuiXHlGqA7XKakiD/KyG5tqsCuEXGlilqHKUk5wdUAPyU/Rw1npDzWLUAcaJ5gBpXB8qdbIfLDM/GKNBYqWFfKYCnNB1huDFiOWUX4JCMFwPdGzvvqxQgpt1HAmYb9LGwKQvwEHl7Sqpe6hE2JQFi6vtIwGpTHaWi5YGwxczEdr9k29ysfM0sLowsAeLv9/0Cr7OzkwYGBigSiahu+gMzNzNALD32+gVeIpGgpqYm6u/vVw0xyd5jBXDYT/AMuQRxuBggWt/rN3guQnydZI3bALiHarPoXXN4xRBbWlpUdBeVXd46wLSf4RnK5XK0tLSkqtu0GeCg3+EtLCxQJpOh1dVVVV0PGgCxGvVoAM+2wKwDAJ8J4DnWswD4VADPsXYBYCqA51ipsE6jD4/Bg/oAsDuA51gPAWBbAM+x2gBwawDPsSIA+KBbrWP45GN4UAwAl11pORZbm49rbW31K7z12Zh/3YCXSqXWZoT7+vpsQ9QFHobXygEa8IzNNxQK2YKoETzojlKAxfAMVQpRM3jQPADeUtFSNBq1hFcpRA3hQX8C4LSKljDPtrxc+ni0GURN4UEZAJxS0dLKygpNTk7S4uKiLYgaw4OmAPBnVa3ZhZhMJnWGB10FwB9VtmgHYjwe1xkeNAGAN1VtxnYhag7vd7Az1kQuqW69Wogeh7fOzAB4wY0enELUAB40bgaIO7vzXoCoCby8MFsHiH987VZvlULUBB4Jq7wZIHTWzR7LQdQI3n2szABxi9NMPSBqBu8PYbUBIKpbfOJ278UQNYMHnSBTJZBQUeGdmPwK425HgbnCrq4uymazOsG7TYXrA3NWv0CSN47XIhL8Eufm5nSCR8ImZ/6H1VX6o+xZClSsWWFD5QCibNKxgNcGfUQWJaU2u1MJpUG+CZjdd4byudUbpe6VO8j+J2C3xuDgZm+WAoij8aGA3xqDaScAIdRVOd3A8M4IA3IKEHqXfaUB4V2R3KlagLgqG7dATDUQvCnJ+T8VACEsfb7GzjYAvKzkWtFyb9jmt4J7I274GN4NybHirc1u5aLr7OfZ13wI75rkdt3Oh8IOv6UXqFBryi+6LDnZ3rqcVm+bp8KNJqM+gDcqucw7+XA19QNxdH6P/QYVajzrJsT8puTg+P4vFRUsv6LCvSY6jZ0RKwqAf1ltQ6pqqGKaGzffvUXengqblRjTpGj5QnUVX8zioKT7h1TH8uwWQizHJLZzKht2o440Fjswc9tHhRoMM3UENyMxIJYRiY28DtAQrnw9SYXKkNhkviCXFu+LlJe+0tL3SXLhOnBDtailf1d22rDxMAIYDyN4gso/jKCcsKjyCxUeRnCRfPgwArOQ2Hkx1C5Hw37a+DiMKN0rQ5AX35axqvE4jEkqPA7jVr32Ef8LMADZH0ivmPDZ0gAAAABJRU5ErkJggg==',

	    networkErrorImage: 'data:image/png;base64,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',

	    testctoken: 'COm3I5_XwI0qSme-RPmYoW52CecS-nbYDKI1LaIfNkoWwpwhRNnCBas21G9glPrALpuPAk0N5smdmt5K00L6_zupw37z6pPP2DPwseNmpmhlu4MPj6ci7wWARZ1G8okbhNHprGXp1ICEijVBN6ncsNqzlwVFXrLTfbgFosJduTI',
	    testutoken: 's3wlV4neEHu1YShrYdzP2jAok3TzhJM1EPIgAuOB5b-C3tY_NT8T9BIY6EuZtpd2g76KtYPd3bQXlA1DKTa9ZsNqGMGvNNf_3zZh1Z9VY1G-AtW6_6Kv-vaP3OmWSizmHSD9yL2s9-M15I8qtQvKKSf2VN7NBHqyRnd6rRoIhl0ExRtJcZWtOk6BidQd60y0tDsrlxFW_ut1-QRfFlfEExYes3XygHJCbu95_OsfhMJIgbdcoWsieSQ_HdB4QbGNG9G6sRSqX00orIuQgBrBm9pmSev4x1zb1qBDLLUwa7e8uz686qmcg5X1R36ypRZiE6-qqxyA0SSYCXJKBOvYU9emByQBT7GZ',
	    testdeviceId: 'NeceamU3Y2M4M2MzNmM2ZTA5ZDNjMTEzNzdmZjIyYzQyZjN8fDcwNTA1NjAyMDAwODg2OA=130f=',
	    testnetwork: 'Wifi',
	    testversion: '1.5.0',

	    dataresult: '',
	    msg2: '',
	    msg3: '',
	    msg4: '',

	    testlist: [{ buy_diamond_num: 11, amount: 111 }, { buy_diamond_num: 22, amount: 222 }]
	  }},

	  created: function created() {
	    console.log("pay created");
	    var self = this;

	    globalEvent.addEventListener("payRefresh", function (ret) {
	      self.getPayInfo();
	    });

	    globalEvent.addEventListener("getUserInfo", function (ret) {
	      console.log("get getUserInfo deviceId:" + ret.device_id);
	      self.msg4 = 'get globalEvent getUserInfo';

	      self.isNetworkErrorShown = false;
	      self.isInitLoadingWheelShown = true;

	      self.waveNumber = ret.coin_number;
	      self.ctoken = ret.ctoken;
	      self.utoken = ret.utoken;
	      self.network = ret.network;
	      self.version = ret.version;
	      self.deviceId = ret.device_id;
	      self.getPayInfo();
	    });

	    globalEvent.addEventListener("wechatPayCallBack", function (ret) {
	      console.log("get wechatPayCallBack callBackCode:" + ret.callBackCode);
	      self.msg4 = 'get globalEvent wechatPayCallBack';

	      var callBackCode = ret.callBackCode;
	      var body = '';


	      body = self.getPayCallBackBody('', callBackCode, self.wechatTradeNo, self.ctoken, self.utoken, self.network, self.version, self.deviceId);

	      self.payCallBackWechat(body);
	    });
	  },

	  ready: function ready() {
	    var config = this.$getConfig();
	    var screenHeight = this.$getConfig().env.deviceHeight;
	    var contentHeight = this.$getConfig().contentHeight;
	    if (contentHeight > 0) {
	      this.sHeight = 750 / config.env.deviceWidth * contentHeight;
	    } else {
	      this.sHeight = 750 / config.env.deviceWidth * config.env.deviceHeight;
	    }
	    console.log("pay ready height:" + this.sHeight + "  screenHeight:" + screenHeight + " contentHeight:" + contentHeight);

	    this.networkErrorDivHeight = this.sHeight - 248;
	    this.listHeight = this.sHeight - 89 - 48;
	  },

	  destroyed: function destroyed() {
	    console.log("pay destroyed");
	    globalEvent.removeEventListener("getUserInfo");
	  },

	  methods: {
	    alipayClick: function alipayClick() {
	      if (!this.isAlipay) {
	        this.isAlipay = !this.isAlipay;
	        var alipay = this.$el('check-alipay');
	        alipay.setAttr('src', this.checkImage);

	        this.isWechat = !this.isWechat;
	        var wechat = this.$el('check-wechat');
	        wechat.setAttr('src', this.uncheckImage);
	      }
	    },

	    wechatClick: function wechatClick() {
	      if (!this.isWechat) {
	        this.isWechat = !this.isWechat;
	        var wechat = this.$el('check-wechat');
	        wechat.setAttr('src', this.checkImage);

	        this.isAlipay = !this.isAlipay;
	        var alipay = this.$el('check-alipay');
	        alipay.setAttr('src', this.uncheckImage);
	      }
	    },

	    payItemClick: function payItemClick(event) {
	      if (this.clickIndex != -1) {
	        return;
	      }

	      var self = this;
	      var index = event.target.attr.index;
	      var diamondNo = this.payDiamondInfoList[index].diamond_no;
	      var buyDiamondNum = this.payDiamondInfoList[index].buy_diamond_num;
	      var amount = this.payDiamondInfoList[index].amount;
	      var timestamp = new Date().valueOf();

	      this.clickIndex = index;
	      this.startButtonLoading();

	      var msg = '浪花：' + buyDiamondNum + "  金额：" + amount;
	      this.dataresult = msg;
	      this.msg3 = diamondNo;

	      var body = '';


	      body = this.getCreateOrderInfoBody(diamondNo, timestamp, this.ctoken, this.utoken, this.network, this.version, this.deviceId);

	      if (this.isAlipay != this.isWechat) {
	        if (this.isAlipay) {
	          this.msg2 = '支付宝';
	          this.createOrderInfoAli(body);
	        } else {
	          this.msg2 = '微信支付';
	          this.createOrderInfoWechat(body);
	        }
	      } else {
	        utilModule.showToast('请选择支付方式');
	      }
	    },

	    networkErrClick: function networkErrClick() {
	      this.isNetworkErrorShown = false;
	      this.isInitLoadingWheelShown = true;
	      this.getPayInfo();
	    },
	    createOrderInfoAli: function createOrderInfoAli(body) {
	      var self = this;

	      apis.postCreateOrderInfoAli(this.$getConfig().endPointCdn, body, function (ret) {
	        if (typeof ret != "undefined" && ret != null && ret.result == 1) {
	          console.log("request successed count:" + ret.count + " result:" + ret.result + " message:" + ret.message + " data:" + ret.data);
	          self.msg3 = ret.data.out_trade_no + "   " + ret.data.time;

	          var out_trade_no = ret.data.out_trade_no;
	          var orderinfo = ret.data.orderinfo;
	          payModule.callAliPay(out_trade_no, orderinfo, function (ret) {
	            console.log("callback ret:" + ret.code);
	            if (ret.code == 1) {
	              var result = ret.result;
	              var payResultStatus = ret.payResultStatus;
	              var orderNo = ret.ordr_no;

	              self.msg3 = 'call alipay result:' + result + ',status:' + payResultStatus + ',orderNo:' + orderNo;

	              var body = '';

	              body = self.getPayCallBackBody(result, payResultStatus, orderNo, self.ctoken, self.utoken, self.network, self.version, self.deviceId);

	              self.payCallBackAli(body);
	            } else {

	              if (self.clickIndex != -1) {
	                self.stopButtonLoading();

	                self.clickIndex = -1;
	              }

	              var result = ret.result;
	              self.callBackPayStatus(result, 0);
	            }
	          });
	        } else {
	          utilModule.showToast('网络不佳');
	          console.log("request failed");

	          if (self.clickIndex != -1) {
	            self.stopButtonLoading();
	            self.clickIndex = -1;
	          }
	        }
	      });
	    },

	    payCallBackAli: function payCallBackAli(body) {
	      var self = this;

	      apis.postPayCallBackAli(this.$getConfig().endPointCdn, body, function (ret) {
	        if (typeof ret != "undefined" && ret != null && ret.result == 1) {
	          self.msg4 = "trade:" + ret.data.trade_state + "   " + ret.data.my_diamond_num;

	          var status = ret.data.trade_state;
	          var myDiamondNum = ret.data.my_diamond_num;

	          self.callBackPayStatus(status, myDiamondNum);
	        } else {
	          utilModule.showToast('网络不佳');
	          console.log("request failed");
	        }
	      });

	      if (self.clickIndex != -1) {
	        self.stopButtonLoading();
	        self.clickIndex = -1;
	      }
	    },

	    createOrderInfoWechat: function createOrderInfoWechat(body) {
	      var self = this;

	      apis.postCreateOrderInfoWechat(this.$getConfig().endPointCdn, body, function (ret) {
	        if (typeof ret != "undefined" && ret != null && ret.result == 1) {
	          console.log("request successed count:" + ret.count + " result:" + ret.result + " message:" + ret.message + " data:" + ret.data);
	          self.msg3 = ret.data.out_trade_no + "   " + ret.time;
	          self.wechatTradeNo = ret.data.out_trade_no;

	          var json = self.getWechatJson(ret.data);
	          self.msg4 = 'call wechat pay json:' + json;
	          payModule.callWechatPay(json);
	        } else {
	          utilModule.showToast('网络不佳');
	          console.log("request failed");

	          if (self.clickIndex != -1) {
	            self.stopButtonLoading();
	            self.clickIndex = -1;
	          }
	        }
	      });
	    },

	    payCallBackWechat: function payCallBackWechat(body) {
	      var self = this;

	      apis.postPayCallBackWechat(this.$getConfig().endPointCdn, body, function (ret) {

	        if (typeof ret != "undefined" && ret != null && ret.result == 1) {
	          self.msg4 = "trade:" + ret.data.trade_state + "   " + ret.data.my_diamond_num;
	          var status = ret.data.trade_state;
	          var myDiamondNum = ret.data.my_diamond_num;

	          self.callBackPayStatus(status, myDiamondNum);
	        } else {
	          utilModule.showToast('网络不佳');
	          console.log("request failed");
	        }
	      });

	      if (self.clickIndex != -1) {
	        self.stopButtonLoading();
	        self.clickIndex = -1;
	      }
	    },

	    callBackPayStatus: function callBackPayStatus(status, waveNumber) {
	      if (status == 1) {

	        utilModule.showToast('支付成功');
	        this.waveNumber = waveNumber;

	        payModule.callBackPayStatus(waveNumber);
	      } else if (status == 2) {
	        utilModule.showToast('支付失败');
	      } else if (status == 3) {
	        utilModule.showToast('支付处理中');
	      } else if (status == 4) {
	        utilModule.showToast('支付取消');
	      }
	    },

	    getPayInfo: function getPayInfo() {
	      var self = this;

	      var body = '';

	      body = this.getPayInfoBody(this.ctoken, this.utoken, this.network, this.version, this.deviceId);

	      apis.postPayPageInfo(this.$getConfig().endPointCdn, body, function (ret) {

	        if (typeof ret != "undefined" && ret != null && ret.result == 1) {
	          console.log("request successed count:" + ret.count + " result:" + ret.result + " message:" + ret.message + " data:" + ret.data);
	          var error = self.$el('network-error-refresh');

	          dom.updateAttrs(error, { refreshing: 'false' });
	          self.isInitLoadingWheelShown = false;
	          self.isNetworkErrorShown = false;
	          self.showPayInfo(ret);
	        } else {
	          console.log("request failed");

	          self.isNetworkErrorShown = true;
	          var error = self.$el('network-error-refresh');
	          dom.updateAttrs(error, { refreshing: 'false' });
	          self.isInitLoadingWheelShown = false;
	        }
	      });
	    },

	    showPayInfo: function showPayInfo(info) {
	      this.isPayInfoShown = true;

	      if (this.waveNumber != info.data.diamond_num) {
	        this.waveNumber = info.data.diamond_num;
	      }

	      this.payDiamondInfoList = info.data.pay_diamondinfo_list;
	      this.payDiamondInfoListCount = info.data.pay_diamondinfo_list_count;

	      this.setPayChannel(info.data.pay_channel_list, info.data.pay_channel_list_count);
	    },

	    startButtonLoading: function startButtonLoading() {

	      var loadingButton = this.$vm('loading-' + this.clickIndex);
	      loadingButton.showLoadingWheel();
	      loadingButton.hideButtonText();
	    },

	    stopButtonLoading: function stopButtonLoading() {

	      var loadingButton = this.$vm('loading-' + this.clickIndex);
	      loadingButton.hideLoadingWheel();
	      loadingButton.showButtonText();
	    },

	    isDividerShown: function isDividerShown(index) {
	      return index + 1 != this.payDiamondInfoListCount;
	    },

	    setPayChannel: function setPayChannel(channelList, channelListCount) {
	      console.log("setPayChannel start listHeight:" + this.listHeight);
	      var AliPayStr = 'AliPay';
	      var WechatPayStr = 'WechatPay';

	      for (var i = 0; i < channelListCount; i++) {
	        if (channelList[i].pay_channel_no == AliPayStr) {
	          this.isAlipayShown = true;
	          this.listHeight = this.listHeight - 88;
	        } else if (channelList[i].pay_channel_no == WechatPayStr) {
	          this.isWechatShown = true;
	          this.listHeight = this.listHeight - 88;
	        }
	      }

	      if (channelListCount == 2) {
	        this.isChannelDividerShown = true;
	        this.listHeight = this.listHeight - 1;
	      }
	      console.log("setPayChannel end listHeight:" + this.listHeight);
	    },

	    checkParamsNull: function checkParamsNull() {
	      return this.ctoken.length == 0 || this.utoken.length == 0 || this.network.length == 0 || this.version.length == 0 || this.deviceId.length == 0;
	    },

	    getPayInfoBody: function getPayInfoBody(ctoken, utoken, network, version, deviceId) {

	      var new_version = version.split("_")[0];

	      var body = '{"app_type":"' + this.appType + '","ctoken":"' + ctoken + '","device_id":"' + deviceId + '","network":"' + network + '","plat":"' + this.plat + '","productType":"' + this.productType + '","reqtype":"' + this.reqtype + '","utoken":"' + utoken + '","version":"' + new_version + '"}';

	      return body;
	    },

	    getCreateOrderInfoBody: function getCreateOrderInfoBody(diamondId, guid, ctoken, utoken, network, version, deviceId) {

	      var body = '{"diamond_id":"' + diamondId + '","guid":"' + guid + '","ctoken":"' + ctoken + '","device_id":"' + deviceId + '","network":"' + network + '","plat":"' + this.plat + '","productType":"' + this.productType + '","reqtype":"' + this.reqtype + '","utoken":"' + utoken + '","version":"' + version + '"}';

	      return body;
	    },

	    getPayCallBackBody: function getPayCallBackBody(result, payResultStatus, orderNo, ctoken, utoken, network, version, deviceId) {

	      var body = '{"result":"' + encodeURI(result) + '","result_status":"' + payResultStatus + '","out_trade_no":"' + orderNo + '","ctoken":"' + ctoken + '","device_id":"' + deviceId + '","network":"' + network + '","plat":"' + this.plat + '","productType":"' + this.productType + '","reqtype":"' + this.reqtype + '","utoken":"' + utoken + '","version":"' + version + '"}';

	      return body;
	    },

	    getWechatJson: function getWechatJson(data) {
	      var json = '{"out_trade_no":"' + data.out_trade_no + '",' + '"appid":"' + data.appid + '",' + '"appiddes":"' + data.appiddes + '",' + '"partnerid":"' + data.partnerid + '",' + '"partneriddes":"' + data.partneriddes + '",' + '"prepayid":"' + data.prepayid + '",' + '"package":"' + data.package + '",' + '"noncestr":"' + data.noncestr + '",' + '"timestamp":"' + data.timestamp + '",' + '"sign":"' + data.sign + '"}';

	      return json;
	    }

	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);