webpackJsonp([3,12],{

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(68)

	var Component = __webpack_require__(14)(
	  /* script */
	  __webpack_require__(70),
	  /* template */
	  __webpack_require__(71),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(12)("5c5506a8", content, true);

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".box{max-width:70vw;padding:30px;position:relative;top:50%;font-size:30px;line-height:1.5;transform:translateY(-50%);perspective:400px}.box,.source{margin:0 auto}.source{color:skyblue}", ""]);

	// exports


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _header = __webpack_require__(50);

	var _header2 = _interopRequireDefault(_header);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			nvHeader: _header2.default
		},
		mounted: function mounted() {}
	}; //
	//
	//
	//
	//
	//

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "box"
	  }, [_c('p', {
	    staticClass: "split"
	  }, [_vm._v("Animation is the process of creating the illusion of motion and shape change by means of the rapid display of a sequence of static images that minimally differ from each other. The illusion—as in motion pictures in general—is thought to rely on the phi phenomenon. Animators are artists who specialize in the creation of animation.\n\t")])])
	}]}

/***/ })

});