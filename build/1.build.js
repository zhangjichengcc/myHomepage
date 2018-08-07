webpackJsonp([1,10],{

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(8)

	var Component = __webpack_require__(13)(
	  /* script */
	  __webpack_require__(14),
	  /* template */
	  __webpack_require__(25),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(11)("de606a8e", content, true);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".banner{text-align:center;padding:40px 0}.banner p{width:80%;color:hsla(0,0%,93%,.53);text-transform:uppercase;letter-spacing:1px;display:inline-block;border:4px double hsla(0,0%,100%,.25);border-width:4px 0;padding:30px 0}.banner p span{font:700 3em Oswald,sans-serif;letter-spacing:0;padding:.25em 0 .325em;display:block;margin:0 auto;text-shadow:0 0 80px hsla(0,0%,100%,.5);background:url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png) repeat-y;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:aitf 80s linear infinite;-webkit-transform:translateZ(0);-webkit-backface-visibility:hidden}", ""]);

	// exports


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _header = __webpack_require__(15);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				_login: true
			};
		},
		created: function created() {
			global.vue = this;
			this.$set(this.$data, '_login', this.$parent.$data.global.login);
		},
		computed: {},
		methods: {},
		components: {
			nvHeader: _header2.default
		}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    staticClass: "banner"
	  }, [_c('p', [_vm._v("NOT YET OPEN 2018.8.7\n\t\t\t"), _c('span', [_vm._v("IN DEVELOPMENT")]), _vm._v("\n\t\t— PLEASE LOOK FORWARD —")])])])
	}]}

/***/ })

});