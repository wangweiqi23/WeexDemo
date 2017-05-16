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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(87)
	var __weex_style__ = __webpack_require__(88)
	var __weex_script__ = __webpack_require__(89)

	__weex_define__('@weex-component/563d8bb91dacc3dc3894fcc609f29f5a', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/563d8bb91dacc3dc3894fcc609f29f5a',undefined,undefined)

/***/ },

/***/ 87:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "root"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "page"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title-left"
	          ],
	          "style": {
	            "color": function () {return this.leftTextColor}
	          },
	          "attr": {
	            "index": function () {return this.pages[0].index},
	            "value": function () {return this.pages[0].title}
	          },
	          "events": {
	            "click": "onItemClick"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title-middle"
	          ],
	          "style": {
	            "color": function () {return this.middleTextColor}
	          },
	          "attr": {
	            "index": function () {return this.pages[1].index},
	            "value": function () {return this.pages[1].title}
	          },
	          "events": {
	            "click": "onItemClick"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title-right"
	          ],
	          "style": {
	            "color": function () {return this.rightTextColor}
	          },
	          "attr": {
	            "index": function () {return this.pages[2].index},
	            "value": function () {return this.pages[2].title}
	          },
	          "events": {
	            "click": "onItemClick"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "id": "block",
	      "classList": [
	        "indicator"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "image"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 88:
/***/ function(module, exports) {

	module.exports = {
	  "page": {
	    "height": 40,
	    "flexDirection": "row"
	  },
	  "indicator": {
	    "position": "absolute",
	    "bottom": 10,
	    "width": 250,
	    "height": 5,
	    "alignItems": "center",
	    "transformOrigin": "'center center'"
	  },
	  "image": {
	    "width": 70,
	    "height": 5,
	    "borderRadius": 5,
	    "MozBorderRadius": 5,
	    "backgroundColor": "#1da2ff",
	    "justifyContent": "center"
	  },
	  "title-left": {
	    "width": 250,
	    "textAlign": "center",
	    "fontSize": 32
	  },
	  "title-middle": {
	    "width": 250,
	    "textAlign": "center",
	    "fontSize": 32
	  },
	  "title-right": {
	    "width": 250,
	    "textAlign": "center",
	    "fontSize": 32
	  }
	}

/***/ },

/***/ 89:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var animation = __weex_require__('@weex-module/animation');
	module.exports = {
	  data: function () {return {
	    pages: [],
	    img_data: '',
	    current_index: 0,
	    leftTextColor: '#3381e3',
	    middleTextColor: '#999999',
	    rightTextColor: '#999999'
	  }},
	  ready: function ready() {
	    console.log("page ready height:" + this.titleHeight);
	  },
	  methods: {
	    channelChange: function channelChange(index) {
	      if (this.current_index != index) {
	        this.animIndicator(index);
	        this.changeTextColor(index);
	        this.current_index = index;
	        console.log("page channelChange index:" + index);
	      }
	    },
	    onItemClick: function onItemClick(e) {
	      var indexValue = e.target.attr.index;
	      console.log("page onItemClick index:" + indexValue + " current_index:" + this.current_index);
	      if (this.current_index != indexValue) {
	        this.animIndicator(indexValue);
	        this.$dispatch('pageItemClick', { index: indexValue });
	        this.changeTextColor(indexValue);
	        this.current_index = indexValue;
	      }
	    },
	    changeTextColor: function changeTextColor(index) {
	      switch (index) {
	        case 0:
	          this.leftTextColor = '#1da2ff';
	          this.middleTextColor = '#999999';
	          this.rightTextColor = '#999999';
	          break;
	        case 1:
	          this.leftTextColor = '#999999';
	          this.middleTextColor = '#1da2ff';
	          this.rightTextColor = '#999999';
	          break;
	        case 2:
	          this.leftTextColor = '#999999';
	          this.middleTextColor = '#999999';
	          this.rightTextColor = '#1da2ff';
	          break;
	      }
	    },
	    animIndicator: function animIndicator(index) {
	      var translate = '';
	      switch (index) {
	        case 0:
	          translate = 'translateX(0)';
	          break;
	        case 1:
	          translate = 'translateX(100%)';
	          break;
	        case 2:
	          translate = 'translateX(200%)';
	          break;
	      }

	      var block = this.$el('block');
	      animation.transition(block, {
	        styles: {
	          transform: translate,
	          transformOrigin: 'center center'
	        },
	        duration: 200,
	        timingFunction: 'linear',
	        delay: 0 }, function () {
	        console.log("page animIndicator finished index:" + index);
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });