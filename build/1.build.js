webpackJsonp([1,12],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(8)

	var Component = __webpack_require__(15)(
	  /* script */
	  __webpack_require__(16),
	  /* template */
	  __webpack_require__(18),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(13)("06356ba0", content, true);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	exports.i(__webpack_require__(11), "");

	// module
	exports.push([module.id, ".home_pc .banner{text-align:center;padding:40px 0}.home_pc .banner p{width:80%;color:hsla(0,0%,93%,.53);text-transform:uppercase;letter-spacing:1px;display:inline-block;border:4px double hsla(0,0%,100%,.25);border-width:4px 0;padding:30px 0}.home_pc .banner p span{font:700 3em Oswald,sans-serif;letter-spacing:0;padding:.25em 0 .325em;display:block;margin:0 auto;text-shadow:0 0 80px hsla(0,0%,100%,.5);background:url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png) repeat-y;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;-webkit-animation:aitf 80s linear infinite;-webkit-transform:translateZ(0);-webkit-backface-visibility:hidden}.mobile_view{background-color:#fff}.home_mobile .banner{width:100%;height:65vw;position:absolute;background-image:url(" + __webpack_require__(12) + ");background-repeat:no-repeat;background-size:cover;background-position:50%}.home_mobile .banner:before{content:\"\";display:block;width:100%;height:100%;background-color:rgba(0,0,0,.2)}.home_mobile .banner .banner_body{position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}.home_mobile .banner .banner_body .user_icon{display:inline-block;width:20vw;height:20vw;background-size:cover;background-position:50%;background-repeat:no-repeat;box-shadow:1px 1px 10px 3px rgba(0,0,0,.3);border-radius:50%}.home_mobile .banner .banner_body .banner_info{display:block;text-align:center;color:#fff}.home_mobile .banner .banner_body .banner_info .u_name{display:block;padding:13px 0 3px}.home_mobile .banner .banner_body .banner_info .banner_info_point{display:inline-block;width:5px;height:5px;background-color:#fff;border-radius:50%;margin:0 5px;vertical-align:middle}.home_mobile .banner .banner_body .banner_info span{display:inline-block}.home_mobile .swiper-container{width:100%;height:210px;height:56vw}.home_mobile .swiper-slide{text-align:center;font-size:18px;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-repeat:no-repeat;background-size:cover;background-position:50%}", ""]);

	// exports


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".swiper-container{margin:0 auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-ms-flexbox;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-ms-flex-negative:0;flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-invisible-blank-slide{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-ms-flex-align:start;align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:10px;right:auto}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E\");right:10px;left:auto}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E\")}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:top .2s,-webkit-transform .2s;transition:transform .2s,top .2s;transition:transform .2s,top .2s,-webkit-transform .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:left .2s,-webkit-transform .2s;transition:transform .2s,left .2s;transition:transform .2s,left .2s,-webkit-transform .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:right .2s,-webkit-transform .2s;transition:transform .2s,right .2s;transition:transform .2s,right .2s,-webkit-transform .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-progressbar.swiper-pagination-white{background:hsla(0,0%,100%,.25)}.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s steps(12) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}", ""]);

	// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4860ccaa8c50b5b001e25b782a96a645.jpg";

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _swiperMin = __webpack_require__(17);

	var _swiperMin2 = _interopRequireDefault(_swiperMin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				_login: true,
				swiper: null
			};
		},
		created: function created() {
			// For Debug
			global.vm = this;
			console.log('isPC', this.$store.state.isPC);
		},
		mounted: function mounted() {
			// this.initSwiper();
		},
		computed: {},
		methods: {
			initSwiper: function initSwiper() {
				var mySwiper = new _swiperMin2.default('.swiper-container', {
					spaceBetween: 0,
					loop: true,
					centeredSlides: true,
					autoplay: {
						delay: 1000,
						disableOnInteraction: false
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				});
				this.$set(this, 'swiper', mySwiper);
			}
		},
		components: {}
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Swiper 4.3.5
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * http://www.idangero.us/swiper/
	 *
	 * Copyright 2014-2018 Vladimir Kharlampidi
	 *
	 * Released under the MIT License
	 *
	 * Released on: July 31, 2018
	 */
	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.Swiper = t();
	}(undefined, function () {
	  "use strict";
	  var f = "undefined" == typeof document ? { body: {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, activeElement: { blur: function blur() {}, nodeName: "" }, querySelector: function querySelector() {
	      return null;
	    }, querySelectorAll: function querySelectorAll() {
	      return [];
	    }, getElementById: function getElementById() {
	      return null;
	    }, createEvent: function createEvent() {
	      return { initEvent: function initEvent() {} };
	    }, createElement: function createElement() {
	      return { children: [], childNodes: [], style: {}, setAttribute: function setAttribute() {}, getElementsByTagName: function getElementsByTagName() {
	          return [];
	        } };
	    }, location: { hash: "" } } : document,
	      B = "undefined" == typeof window ? { document: f, navigator: { userAgent: "" }, location: {}, history: {}, CustomEvent: function CustomEvent() {
	      return this;
	    }, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, getComputedStyle: function getComputedStyle() {
	      return { getPropertyValue: function getPropertyValue() {
	          return "";
	        } };
	    }, Image: function Image() {}, Date: function Date() {}, screen: {}, setTimeout: function setTimeout() {}, clearTimeout: function clearTimeout() {} } : window,
	      l = function l(e) {
	    for (var t = 0; t < e.length; t += 1) {
	      this[t] = e[t];
	    }return this.length = e.length, this;
	  };function L(e, t) {
	    var a = [],
	        i = 0;if (e && !t && e instanceof l) return e;if (e) if ("string" == typeof e) {
	      var s,
	          r,
	          n = e.trim();if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
	        var o = "div";for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) {
	          a.push(r.childNodes[i]);
	        }
	      } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) {
	        s[i] && a.push(s[i]);
	      }
	    } else if (e.nodeType || e === B || e === f) a.push(e);else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) {
	      a.push(e[i]);
	    }return new l(a);
	  }function r(e) {
	    for (var t = [], a = 0; a < e.length; a += 1) {
	      -1 === t.indexOf(e[a]) && t.push(e[a]);
	    }return t;
	  }L.fn = l.prototype, L.Class = l, L.Dom7 = l;var t = { addClass: function addClass(e) {
	      if (void 0 === e) return this;for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
	        for (var i = 0; i < this.length; i += 1) {
	          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
	        }
	      }return this;
	    }, removeClass: function removeClass(e) {
	      for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
	        for (var i = 0; i < this.length; i += 1) {
	          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
	        }
	      }return this;
	    }, hasClass: function hasClass(e) {
	      return !!this[0] && this[0].classList.contains(e);
	    }, toggleClass: function toggleClass(e) {
	      for (var t = e.split(" "), a = 0; a < t.length; a += 1) {
	        for (var i = 0; i < this.length; i += 1) {
	          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
	        }
	      }return this;
	    }, attr: function attr(e, t) {
	      var a = arguments;if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var i = 0; i < this.length; i += 1) {
	        if (2 === a.length) this[i].setAttribute(e, t);else for (var s in e) {
	          this[i][s] = e[s], this[i].setAttribute(s, e[s]);
	        }
	      }return this;
	    }, removeAttr: function removeAttr(e) {
	      for (var t = 0; t < this.length; t += 1) {
	        this[t].removeAttribute(e);
	      }return this;
	    }, data: function data(e, t) {
	      var a;if (void 0 !== t) {
	        for (var i = 0; i < this.length; i += 1) {
	          (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
	        }return this;
	      }if (a = this[0]) {
	        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];var s = a.getAttribute("data-" + e);return s || void 0;
	      }
	    }, transform: function transform(e) {
	      for (var t = 0; t < this.length; t += 1) {
	        var a = this[t].style;a.webkitTransform = e, a.transform = e;
	      }return this;
	    }, transition: function transition(e) {
	      "string" != typeof e && (e += "ms");for (var t = 0; t < this.length; t += 1) {
	        var a = this[t].style;a.webkitTransitionDuration = e, a.transitionDuration = e;
	      }return this;
	    }, on: function on() {
	      for (var e, t = [], a = arguments.length; a--;) {
	        t[a] = arguments[a];
	      }var i = t[0],
	          r = t[1],
	          n = t[2],
	          s = t[3];function o(e) {
	        var t = e.target;if (t) {
	          var a = e.target.dom7EventData || [];if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) {
	            L(i[s]).is(r) && n.apply(i[s], a);
	          }
	        }
	      }function l(e) {
	        var t = e && e.target && e.target.dom7EventData || [];t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
	      }"function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
	        var u = this[c];if (r) for (d = 0; d < p.length; d += 1) {
	          var h = p[d];u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({ listener: n, proxyListener: o }), u.addEventListener(h, o, s);
	        } else for (d = 0; d < p.length; d += 1) {
	          var v = p[d];u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({ listener: n, proxyListener: l }), u.addEventListener(v, l, s);
	        }
	      }return this;
	    }, off: function off() {
	      for (var e, t = [], a = arguments.length; a--;) {
	        t[a] = arguments[a];
	      }var i = t[0],
	          s = t[1],
	          r = t[2],
	          n = t[3];"function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);for (var o = i.split(" "), l = 0; l < o.length; l += 1) {
	        for (var d = o[l], p = 0; p < this.length; p += 1) {
	          var c = this[p],
	              u = void 0;if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) {
	            var v = u[h];r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
	          }
	        }
	      }return this;
	    }, trigger: function trigger() {
	      for (var e = [], t = arguments.length; t--;) {
	        e[t] = arguments[t];
	      }for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1) {
	        for (var r = a[s], n = 0; n < this.length; n += 1) {
	          var o = this[n],
	              l = void 0;try {
	            l = new B.CustomEvent(r, { detail: i, bubbles: !0, cancelable: !0 });
	          } catch (e) {
	            (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i;
	          }o.dom7EventData = e.filter(function (e, t) {
	            return 0 < t;
	          }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData;
	        }
	      }return this;
	    }, transitionEnd: function transitionEnd(t) {
	      var a,
	          i = ["webkitTransitionEnd", "transitionend"],
	          s = this;function r(e) {
	        if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) {
	          s.off(i[a], r);
	        }
	      }if (t) for (a = 0; a < i.length; a += 1) {
	        s.on(i[a], r);
	      }return this;
	    }, outerWidth: function outerWidth(e) {
	      if (0 < this.length) {
	        if (e) {
	          var t = this.styles();return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
	        }return this[0].offsetWidth;
	      }return null;
	    }, outerHeight: function outerHeight(e) {
	      if (0 < this.length) {
	        if (e) {
	          var t = this.styles();return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
	        }return this[0].offsetHeight;
	      }return null;
	    }, offset: function offset() {
	      if (0 < this.length) {
	        var e = this[0],
	            t = e.getBoundingClientRect(),
	            a = f.body,
	            i = e.clientTop || a.clientTop || 0,
	            s = e.clientLeft || a.clientLeft || 0,
	            r = e === B ? B.scrollY : e.scrollTop,
	            n = e === B ? B.scrollX : e.scrollLeft;return { top: t.top + r - i, left: t.left + n - s };
	      }return null;
	    }, css: function css(e, t) {
	      var a;if (1 === arguments.length) {
	        if ("string" != typeof e) {
	          for (a = 0; a < this.length; a += 1) {
	            for (var i in e) {
	              this[a].style[i] = e[i];
	            }
	          }return this;
	        }if (this[0]) return B.getComputedStyle(this[0], null).getPropertyValue(e);
	      }if (2 === arguments.length && "string" == typeof e) {
	        for (a = 0; a < this.length; a += 1) {
	          this[a].style[e] = t;
	        }return this;
	      }return this;
	    }, each: function each(e) {
	      if (!e) return this;for (var t = 0; t < this.length; t += 1) {
	        if (!1 === e.call(this[t], t, this[t])) return this;
	      }return this;
	    }, html: function html(e) {
	      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;for (var t = 0; t < this.length; t += 1) {
	        this[t].innerHTML = e;
	      }return this;
	    }, text: function text(e) {
	      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;for (var t = 0; t < this.length; t += 1) {
	        this[t].textContent = e;
	      }return this;
	    }, is: function is(e) {
	      var t,
	          a,
	          i = this[0];if (!i || void 0 === e) return !1;if ("string" == typeof e) {
	        if (i.matches) return i.matches(e);if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);if (i.msMatchesSelector) return i.msMatchesSelector(e);for (t = L(e), a = 0; a < t.length; a += 1) {
	          if (t[a] === i) return !0;
	        }return !1;
	      }if (e === f) return i === f;if (e === B) return i === B;if (e.nodeType || e instanceof l) {
	        for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) {
	          if (t[a] === i) return !0;
	        }return !1;
	      }return !1;
	    }, index: function index() {
	      var e,
	          t = this[0];if (t) {
	        for (e = 0; null !== (t = t.previousSibling);) {
	          1 === t.nodeType && (e += 1);
	        }return e;
	      }
	    }, eq: function eq(e) {
	      if (void 0 === e) return this;var t,
	          a = this.length;return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]]);
	    }, append: function append() {
	      for (var e, t = [], a = arguments.length; a--;) {
	        t[a] = arguments[a];
	      }for (var i = 0; i < t.length; i += 1) {
	        e = t[i];for (var s = 0; s < this.length; s += 1) {
	          if ("string" == typeof e) {
	            var r = f.createElement("div");for (r.innerHTML = e; r.firstChild;) {
	              this[s].appendChild(r.firstChild);
	            }
	          } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) {
	            this[s].appendChild(e[n]);
	          } else this[s].appendChild(e);
	        }
	      }return this;
	    }, prepend: function prepend(e) {
	      var t,
	          a,
	          i = this;for (t = 0; t < this.length; t += 1) {
	        if ("string" == typeof e) {
	          var s = f.createElement("div");for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a -= 1) {
	            i[t].insertBefore(s.childNodes[a], i[t].childNodes[0]);
	          }
	        } else if (e instanceof l) for (a = 0; a < e.length; a += 1) {
	          i[t].insertBefore(e[a], i[t].childNodes[0]);
	        } else i[t].insertBefore(e, i[t].childNodes[0]);
	      }return this;
	    }, next: function next(e) {
	      return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]);
	    }, nextAll: function nextAll(e) {
	      var t = [],
	          a = this[0];if (!a) return new l([]);for (; a.nextElementSibling;) {
	        var i = a.nextElementSibling;e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
	      }return new l(t);
	    }, prev: function prev(e) {
	      if (0 < this.length) {
	        var t = this[0];return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
	      }return new l([]);
	    }, prevAll: function prevAll(e) {
	      var t = [],
	          a = this[0];if (!a) return new l([]);for (; a.previousElementSibling;) {
	        var i = a.previousElementSibling;e ? L(i).is(e) && t.push(i) : t.push(i), a = i;
	      }return new l(t);
	    }, parent: function parent(e) {
	      for (var t = [], a = 0; a < this.length; a += 1) {
	        null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
	      }return L(r(t));
	    }, parents: function parents(e) {
	      for (var t = [], a = 0; a < this.length; a += 1) {
	        for (var i = this[a].parentNode; i;) {
	          e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
	        }
	      }return L(r(t));
	    }, closest: function closest(e) {
	      var t = this;return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
	    }, find: function find(e) {
	      for (var t = [], a = 0; a < this.length; a += 1) {
	        for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) {
	          t.push(i[s]);
	        }
	      }return new l(t);
	    }, children: function children(e) {
	      for (var t = [], a = 0; a < this.length; a += 1) {
	        for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) {
	          e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
	        }
	      }return new l(r(t));
	    }, remove: function remove() {
	      for (var e = 0; e < this.length; e += 1) {
	        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
	      }return this;
	    }, add: function add() {
	      for (var e = [], t = arguments.length; t--;) {
	        e[t] = arguments[t];
	      }var a, i;for (a = 0; a < e.length; a += 1) {
	        var s = L(e[a]);for (i = 0; i < s.length; i += 1) {
	          this[this.length] = s[i], this.length += 1;
	        }
	      }return this;
	    }, styles: function styles() {
	      return this[0] ? B.getComputedStyle(this[0], null) : {};
	    } };Object.keys(t).forEach(function (e) {
	    L.fn[e] = t[e];
	  });var e,
	      a,
	      i,
	      X = { deleteProps: function deleteProps(e) {
	      var t = e;Object.keys(t).forEach(function (e) {
	        try {
	          t[e] = null;
	        } catch (e) {}try {
	          delete t[e];
	        } catch (e) {}
	      });
	    }, nextTick: function nextTick(e, t) {
	      return void 0 === t && (t = 0), setTimeout(e, t);
	    }, now: function now() {
	      return Date.now();
	    }, getTranslate: function getTranslate(e, t) {
	      var a, i, s;void 0 === t && (t = "x");var r = B.getComputedStyle(e, null);return B.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
	        return e.replace(",", ".");
	      }).join(", ")), s = new B.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = B.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = B.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
	    }, parseUrlQuery: function parseUrlQuery(e) {
	      var t,
	          a,
	          i,
	          s,
	          r = {},
	          n = e || B.location.href;if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
	        return "" !== e;
	      })).length, t = 0; t < s; t += 1) {
	        i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
	      }return r;
	    }, isObject: function isObject(e) {
	      return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && e.constructor && e.constructor === Object;
	    }, extend: function extend() {
	      for (var e = [], t = arguments.length; t--;) {
	        e[t] = arguments[t];
	      }for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
	        var s = e[i];if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
	          var l = r[n],
	              d = Object.getOwnPropertyDescriptor(s, l);void 0 !== d && d.enumerable && (X.isObject(a[l]) && X.isObject(s[l]) ? X.extend(a[l], s[l]) : !X.isObject(a[l]) && X.isObject(s[l]) ? (a[l] = {}, X.extend(a[l], s[l])) : a[l] = s[l]);
	        }
	      }return a;
	    } },
	      Y = (i = f.createElement("div"), { touch: B.Modernizr && !0 === B.Modernizr.touch || !!("ontouchstart" in B || B.DocumentTouch && f instanceof B.DocumentTouch), pointerEvents: !(!B.navigator.pointerEnabled && !B.PointerEvent), prefixedPointerEvents: !!B.navigator.msPointerEnabled, transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a), transforms3d: B.Modernizr && !0 === B.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e), flexbox: function () {
	      for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) {
	        if (t[a] in e) return !0;
	      }return !1;
	    }(), observer: "MutationObserver" in B || "WebkitMutationObserver" in B, passiveListener: function () {
	      var e = !1;try {
	        var t = Object.defineProperty({}, "passive", { get: function get() {
	            e = !0;
	          } });B.addEventListener("testPassiveListener", null, t);
	      } catch (e) {}return e;
	    }(), gestures: "ongesturestart" in B }),
	      s = function s(e) {
	    void 0 === e && (e = {});var t = this;t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
	      t.on(e, t.params.on[e]);
	    });
	  },
	      n = { components: { configurable: !0 } };s.prototype.on = function (e, t, a) {
	    var i = this;if ("function" != typeof t) return i;var s = a ? "unshift" : "push";return e.split(" ").forEach(function (e) {
	      i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
	    }), i;
	  }, s.prototype.once = function (i, s, e) {
	    var r = this;if ("function" != typeof s) return r;return r.on(i, function e() {
	      for (var t = [], a = arguments.length; a--;) {
	        t[a] = arguments[a];
	      }s.apply(r, t), r.off(i, e);
	    }, e);
	  }, s.prototype.off = function (e, i) {
	    var s = this;return s.eventsListeners && e.split(" ").forEach(function (a) {
	      void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a].forEach(function (e, t) {
	        e === i && s.eventsListeners[a].splice(t, 1);
	      });
	    }), s;
	  }, s.prototype.emit = function () {
	    for (var e = [], t = arguments.length; t--;) {
	      e[t] = arguments[t];
	    }var a,
	        i,
	        s,
	        r = this;return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
	      if (r.eventsListeners && r.eventsListeners[e]) {
	        var t = [];r.eventsListeners[e].forEach(function (e) {
	          t.push(e);
	        }), t.forEach(function (e) {
	          e.apply(s, i);
	        });
	      }
	    })), r;
	  }, s.prototype.useModulesParams = function (a) {
	    var i = this;i.modules && Object.keys(i.modules).forEach(function (e) {
	      var t = i.modules[e];t.params && X.extend(a, t.params);
	    });
	  }, s.prototype.useModules = function (i) {
	    void 0 === i && (i = {});var s = this;s.modules && Object.keys(s.modules).forEach(function (e) {
	      var a = s.modules[e],
	          t = i[e] || {};a.instance && Object.keys(a.instance).forEach(function (e) {
	        var t = a.instance[e];s[e] = "function" == typeof t ? t.bind(s) : t;
	      }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
	        s.on(e, a.on[e]);
	      }), a.create && a.create.bind(s)(t);
	    });
	  }, n.components.set = function (e) {
	    this.use && this.use(e);
	  }, s.installModule = function (t) {
	    for (var e = [], a = arguments.length - 1; 0 < a--;) {
	      e[a] = arguments[a + 1];
	    }var i = this;i.prototype.modules || (i.prototype.modules = {});var s = t.name || Object.keys(i.prototype.modules).length + "_" + X.now();return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
	      i.prototype[e] = t.proto[e];
	    }), t.static && Object.keys(t.static).forEach(function (e) {
	      i[e] = t.static[e];
	    }), t.install && t.install.apply(i, e), i;
	  }, s.use = function (e) {
	    for (var t = [], a = arguments.length - 1; 0 < a--;) {
	      t[a] = arguments[a + 1];
	    }var i = this;return Array.isArray(e) ? (e.forEach(function (e) {
	      return i.installModule(e);
	    }), i) : i.installModule.apply(i, [e].concat(t));
	  }, Object.defineProperties(s, n);var o = { updateSize: function updateSize() {
	      var e,
	          t,
	          a = this,
	          i = a.$el;e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), X.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
	    }, updateSlides: function updateSlides() {
	      var e = this,
	          t = e.params,
	          a = e.$wrapperEl,
	          i = e.size,
	          s = e.rtlTranslate,
	          r = e.wrongRTL,
	          n = e.virtual && t.virtual.enabled,
	          o = n ? e.virtual.slides.length : e.slides.length,
	          l = a.children("." + e.params.slideClass),
	          d = n ? e.virtual.slides.length : l.length,
	          p = [],
	          c = [],
	          u = [],
	          h = t.slidesOffsetBefore;"function" == typeof h && (h = t.slidesOffsetBefore.call(e));var v = t.slidesOffsetAfter;"function" == typeof v && (v = t.slidesOffsetAfter.call(e));var f = e.snapGrid.length,
	          m = e.snapGrid.length,
	          g = t.spaceBetween,
	          b = -h,
	          w = 0,
	          y = 0;if (void 0 !== i) {
	        var x, E;"string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({ marginLeft: "", marginTop: "" }) : l.css({ marginRight: "", marginBottom: "" }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));for (var T, S = t.slidesPerColumn, C = x / S, M = C - (t.slidesPerColumn * C - d), z = 0; z < d; z += 1) {
	          E = 0;var k = l.eq(z);if (1 < t.slidesPerColumn) {
	            var P = void 0,
	                $ = void 0,
	                L = void 0;"column" === t.slidesPerColumnFill ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), P = $ + L * x / S, k.css({ "-webkit-box-ordinal-group": P, "-moz-box-ordinal-group": P, "-ms-flex-order": P, "-webkit-order": P, order: P })) : $ = z - (L = Math.floor(z / C)) * C, k.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L);
	          }if ("none" !== k.css("display")) {
	            if ("auto" === t.slidesPerView) {
	              var I = B.getComputedStyle(k[0], null),
	                  D = k[0].style.transform,
	                  O = k[0].style.webkitTransform;D && (k[0].style.transform = "none"), O && (k[0].style.webkitTransform = "none"), E = e.isHorizontal() ? k[0].getBoundingClientRect().width + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right")) : k[0].getBoundingClientRect().height + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom")), D && (k[0].style.transform = D), O && (k[0].style.webkitTransform = O), t.roundLengths && (E = Math.floor(E));
	            } else E = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (E = Math.floor(E)), l[z] && (e.isHorizontal() ? l[z].style.width = E + "px" : l[z].style.height = E + "px");l[z] && (l[z].swiperSlideSize = E), u.push(E), t.centeredSlides ? (b = b + E / 2 + w / 2 + g, 0 === w && 0 !== z && (b = b - i / 2 - g), 0 === z && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + E + g), e.virtualSize += E + g, w = E, y += 1;
	          }
	        }if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({ width: e.virtualSize + t.spaceBetween + "px" }), Y.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" })), 1 < t.slidesPerColumn && (e.virtualSize = (E + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" }), t.centeredSlides)) {
	          T = [];for (var A = 0; A < p.length; A += 1) {
	            var H = p[A];t.roundLengths && (H = Math.floor(H)), p[A] < e.virtualSize + p[0] && T.push(H);
	          }p = T;
	        }if (!t.centeredSlides) {
	          T = [];for (var G = 0; G < p.length; G += 1) {
	            var N = p[G];t.roundLengths && (N = Math.floor(N)), p[G] <= e.virtualSize - i && T.push(N);
	          }p = T, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i);
	        }0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({ marginLeft: g + "px" }) : l.css({ marginRight: g + "px" }) : l.css({ marginBottom: g + "px" })), X.extend(e, { slides: l, snapGrid: p, slidesGrid: c, slidesSizesGrid: u }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
	      }
	    }, updateAutoHeight: function updateAutoHeight(e) {
	      var t,
	          a = this,
	          i = [],
	          s = 0;if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
	        var r = a.activeIndex + t;if (r > a.slides.length) break;i.push(a.slides.eq(r)[0]);
	      } else i.push(a.slides.eq(a.activeIndex)[0]);for (t = 0; t < i.length; t += 1) {
	        if (void 0 !== i[t]) {
	          var n = i[t].offsetHeight;s = s < n ? n : s;
	        }
	      }s && a.$wrapperEl.css("height", s + "px");
	    }, updateSlidesOffset: function updateSlidesOffset() {
	      for (var e = this.slides, t = 0; t < e.length; t += 1) {
	        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
	      }
	    }, updateSlidesProgress: function updateSlidesProgress(e) {
	      void 0 === e && (e = this && this.translate || 0);var t = this,
	          a = t.params,
	          i = t.slides,
	          s = t.rtlTranslate;if (0 !== i.length) {
	        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();var r = -e;s && (r = e), i.removeClass(a.slideVisibleClass);for (var n = 0; n < i.length; n += 1) {
	          var o = i[n],
	              l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);if (a.watchSlidesVisibility) {
	            var d = -(r - o.swiperSlideOffset),
	                p = d + t.slidesSizesGrid[n];(0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && i.eq(n).addClass(a.slideVisibleClass);
	          }o.progress = s ? -l : l;
	        }
	      }
	    }, updateProgress: function updateProgress(e) {
	      void 0 === e && (e = this && this.translate || 0);var t = this,
	          a = t.params,
	          i = t.maxTranslate() - t.minTranslate(),
	          s = t.progress,
	          r = t.isBeginning,
	          n = t.isEnd,
	          o = r,
	          l = n;0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), X.extend(t, { progress: s, isBeginning: r, isEnd: n }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s);
	    }, updateSlidesClasses: function updateSlidesClasses() {
	      var e,
	          t = this,
	          a = t.slides,
	          i = t.params,
	          s = t.$wrapperEl,
	          r = t.activeIndex,
	          n = t.realIndex,
	          o = t.virtual && i.virtual.enabled;a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
	    }, updateActiveIndex: function updateActiveIndex(e) {
	      var t,
	          a = this,
	          i = a.rtlTranslate ? a.translate : -a.translate,
	          s = a.slidesGrid,
	          r = a.snapGrid,
	          n = a.params,
	          o = a.activeIndex,
	          l = a.realIndex,
	          d = a.snapIndex,
	          p = e;if (void 0 === p) {
	        for (var c = 0; c < s.length; c += 1) {
	          void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
	        }n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
	      }if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
	        var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);X.extend(a, { snapIndex: t, realIndex: u, previousIndex: o, activeIndex: p }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange");
	      } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
	    }, updateClickedSlide: function updateClickedSlide(e) {
	      var t = this,
	          a = t.params,
	          i = L(e.target).closest("." + a.slideClass)[0],
	          s = !1;if (i) for (var r = 0; r < t.slides.length; r += 1) {
	        t.slides[r] === i && (s = !0);
	      }if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
	    } };var d = { getTranslate: function getTranslate(e) {
	      void 0 === e && (e = this.isHorizontal() ? "x" : "y");var t = this.params,
	          a = this.rtlTranslate,
	          i = this.translate,
	          s = this.$wrapperEl;if (t.virtualTranslate) return a ? -i : i;var r = X.getTranslate(s[0], e);return a && (r = -r), r || 0;
	    }, setTranslate: function setTranslate(e, t) {
	      var a = this,
	          i = a.rtlTranslate,
	          s = a.params,
	          r = a.$wrapperEl,
	          n = a.progress,
	          o = 0,
	          l = 0;a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (Y.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;var d = a.maxTranslate() - a.minTranslate();(0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
	    }, minTranslate: function minTranslate() {
	      return -this.snapGrid[0];
	    }, maxTranslate: function maxTranslate() {
	      return -this.snapGrid[this.snapGrid.length - 1];
	    } };var p = { setTransition: function setTransition(e, t) {
	      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
	    }, transitionStart: function transitionStart(e, t) {
	      void 0 === e && (e = !0);var a = this,
	          i = a.activeIndex,
	          s = a.params,
	          r = a.previousIndex;s.autoHeight && a.updateAutoHeight();var n = t;if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
	        if ("reset" === n) return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
	      }
	    }, transitionEnd: function transitionEnd(e, t) {
	      void 0 === e && (e = !0);var a = this,
	          i = a.activeIndex,
	          s = a.previousIndex;a.animating = !1, a.setTransition(0);var r = t;if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
	        if ("reset" === r) return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
	      }
	    } };var c = { slideTo: function slideTo(e, t, a, i) {
	      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);var s = this,
	          r = e;r < 0 && (r = 0);var n = s.params,
	          o = s.snapGrid,
	          l = s.slidesGrid,
	          d = s.previousIndex,
	          p = s.activeIndex,
	          c = s.rtlTranslate;if (s.animating && n.preventInteractionOnTransition) return !1;var u = Math.floor(r / n.slidesPerGroup);u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");var h,
	          v = -o[u];if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) {
	        -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
	      }if (s.initialized && r !== p) {
	        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1;
	      }return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && Y.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
	        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h));
	      }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0);
	    }, slideToLoop: function slideToLoop(e, t, a, i) {
	      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);var s = e;return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i);
	    }, slideNext: function slideNext(e, t, a) {
	      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var i = this,
	          s = i.params,
	          r = i.animating;return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
	    }, slidePrev: function slidePrev(e, t, a) {
	      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var i = this,
	          s = i.params,
	          r = i.animating,
	          n = i.snapGrid,
	          o = i.slidesGrid,
	          l = i.rtlTranslate;if (s.loop) {
	        if (r) return !1;i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
	      }function d(e) {
	        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
	      }var p,
	          c = d(l ? i.translate : -i.translate),
	          u = n.map(function (e) {
	        return d(e);
	      }),
	          h = (o.map(function (e) {
	        return d(e);
	      }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
	    }, slideReset: function slideReset(e, t, a) {
	      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
	    }, slideToClosest: function slideToClosest(e, t, a) {
	      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);var i = this,
	          s = i.activeIndex,
	          r = Math.floor(s / i.params.slidesPerGroup);if (r < i.snapGrid.length - 1) {
	        var n = i.rtlTranslate ? i.translate : -i.translate,
	            o = i.snapGrid[r];(i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
	      }return i.slideTo(s, e, t, a);
	    }, slideToClickedSlide: function slideToClickedSlide() {
	      var e,
	          t = this,
	          a = t.params,
	          i = t.$wrapperEl,
	          s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
	          r = t.clickedIndex;if (a.loop) {
	        if (t.animating) return;e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), X.nextTick(function () {
	          t.slideTo(r);
	        })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), X.nextTick(function () {
	          t.slideTo(r);
	        })) : t.slideTo(r);
	      } else t.slideTo(r);
	    } };var u = { loopCreate: function loopCreate() {
	      var i = this,
	          e = i.params,
	          t = i.$wrapperEl;t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();var s = t.children("." + e.slideClass);if (e.loopFillGroupWithBlank) {
	        var a = e.slidesPerGroup - s.length % e.slidesPerGroup;if (a !== e.slidesPerGroup) {
	          for (var r = 0; r < a; r += 1) {
	            var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);t.append(n);
	          }s = t.children("." + e.slideClass);
	        }
	      }"auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);var o = [],
	          l = [];s.each(function (e, t) {
	        var a = L(t);e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e);
	      });for (var d = 0; d < l.length; d += 1) {
	        t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
	      }for (var p = o.length - 1; 0 <= p; p -= 1) {
	        t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
	      }
	    }, loopFix: function loopFix() {
	      var e,
	          t = this,
	          a = t.params,
	          i = t.activeIndex,
	          s = t.slides,
	          r = t.loopedSlides,
	          n = t.allowSlidePrev,
	          o = t.allowSlideNext,
	          l = t.snapGrid,
	          d = t.rtlTranslate;t.allowSlidePrev = !0, t.allowSlideNext = !0;var p = -l[i] - t.getTranslate();i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));t.allowSlidePrev = n, t.allowSlideNext = o;
	    }, loopDestroy: function loopDestroy() {
	      var e = this.$wrapperEl,
	          t = this.params,
	          a = this.slides;e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index");
	    } };var h = { setGrabCursor: function setGrabCursor(e) {
	      if (!(Y.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
	        var t = this.el;t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
	      }
	    }, unsetGrabCursor: function unsetGrabCursor() {
	      Y.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
	    } };var v = { appendSlide: function appendSlide(e) {
	      var t = this,
	          a = t.$wrapperEl,
	          i = t.params;if (i.loop && t.loopDestroy(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) for (var s = 0; s < e.length; s += 1) {
	        e[s] && a.append(e[s]);
	      } else a.append(e);i.loop && t.loopCreate(), i.observer && Y.observer || t.update();
	    }, prependSlide: function prependSlide(e) {
	      var t = this,
	          a = t.params,
	          i = t.$wrapperEl,
	          s = t.activeIndex;a.loop && t.loopDestroy();var r = s + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
	        for (var n = 0; n < e.length; n += 1) {
	          e[n] && i.prepend(e[n]);
	        }r = s + e.length;
	      } else i.prepend(e);a.loop && t.loopCreate(), a.observer && Y.observer || t.update(), t.slideTo(r, 0, !1);
	    }, addSlide: function addSlide(e, t) {
	      var a = this,
	          i = a.$wrapperEl,
	          s = a.params,
	          r = a.activeIndex;s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));var n = a.slides.length;if (e <= 0) a.prependSlide(t);else if (n <= e) a.appendSlide(t);else {
	        for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
	          var p = a.slides.eq(d);p.remove(), l.unshift(p);
	        }if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "length" in t) {
	          for (var c = 0; c < t.length; c += 1) {
	            t[c] && i.append(t[c]);
	          }o = e < r ? r + t.length : r;
	        } else i.append(t);for (var u = 0; u < l.length; u += 1) {
	          i.append(l[u]);
	        }s.loop && a.loopCreate(), s.observer && Y.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
	      }
	    }, removeSlide: function removeSlide(e) {
	      var t = this,
	          a = t.params,
	          i = t.$wrapperEl,
	          s = t.activeIndex;a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));var r,
	          n = s;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "length" in e) {
	        for (var o = 0; o < e.length; o += 1) {
	          r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
	        }n = Math.max(n, 0);
	      } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);a.loop && t.loopCreate(), a.observer && Y.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
	    }, removeAllSlides: function removeAllSlides() {
	      for (var e = [], t = 0; t < this.slides.length; t += 1) {
	        e.push(t);
	      }this.removeSlide(e);
	    } },
	      m = function () {
	    var e = B.navigator.userAgent,
	        t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: B.cordova || B.phonegap, phonegap: B.cordova || B.phonegap },
	        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
	        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
	        s = e.match(/(iPad).*OS\s([\d_]+)/),
	        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
	        n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
	      var o = t.osVersion.split("."),
	          l = f.querySelector('meta[name="viewport"]');t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui");
	    }return t.pixelRatio = B.devicePixelRatio || 1, t;
	  }();function g() {
	    var e = this,
	        t = e.params,
	        a = e.el;if (!a || 0 !== a.offsetWidth) {
	      t.breakpoints && e.setBreakpoint();var i = e.allowSlideNext,
	          s = e.allowSlidePrev,
	          r = e.snapGrid;if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
	        var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
	      } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
	    }
	  }var b = { attachEvents: function attachEvents() {
	      var e = this,
	          t = e.params,
	          a = e.touchEvents,
	          i = e.el,
	          s = e.wrapperEl;e.onTouchStart = function (e) {
	        var t = this,
	            a = t.touchEventsData,
	            i = t.params,
	            s = t.touches;if (!t.animating || !i.preventInteractionOnTransition) {
	          var r = e;if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && (!a.isTouched || !a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
	            s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;var n = s.currentX,
	                o = s.currentY,
	                l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
	                d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;if (!l || !(n <= d || n >= B.screen.width - d)) {
	              if (X.extend(a, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }), s.startX = n, s.startY = o, a.touchStartTime = X.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
	                var p = !0;L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur(), p && t.allowTouchMove && r.preventDefault();
	              }t.emit("touchStart", r);
	            }
	          }
	        }
	      }.bind(e), e.onTouchMove = function (e) {
	        var t = this,
	            a = t.touchEventsData,
	            i = t.params,
	            s = t.touches,
	            r = t.rtlTranslate,
	            n = e;if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
	          if (!a.isTouchEvent || "mousemove" !== n.type) {
	            var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
	                l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (X.extend(s, { startX: o, startY: l, currentX: o, currentY: l }), a.touchStartTime = X.now()));if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
	              if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1);
	            } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1);if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
	              s.currentX = o, s.currentY = l;var d,
	                  p = s.currentX - s.startX,
	                  c = s.currentY - s.startY;if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;else if (a.startMoving) {
	                t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;var u = t.isHorizontal() ? p : c;s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;var h = !0,
	                    v = i.resistanceRatio;if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
	                  if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
	                }i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({ position: s[t.isHorizontal() ? "startX" : "startY"], time: a.touchStartTime }), a.velocities.push({ position: s[t.isHorizontal() ? "currentX" : "currentY"], time: X.now() })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate));
	              }
	            }
	          }
	        } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n);
	      }.bind(e), e.onTouchEnd = function (e) {
	        var t = this,
	            a = t.touchEventsData,
	            i = t.params,
	            s = t.touches,
	            r = t.rtlTranslate,
	            n = t.$wrapperEl,
	            o = t.slidesGrid,
	            l = t.snapGrid,
	            d = e;if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);var p,
	            c = X.now(),
	            u = c - a.touchStartTime;if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = X.nextTick(function () {
	          t && !t.destroyed && t.emit("click", d);
	        }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = X.now(), X.nextTick(function () {
	          t.destroyed || (t.allowClick = !0);
	        }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
	          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));if (i.freeModeMomentum) {
	            if (1 < a.velocities.length) {
	              var h = a.velocities.pop(),
	                  v = a.velocities.pop(),
	                  f = h.position - v.position,
	                  m = h.time - v.time;t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < X.now() - h.time) && (t.velocity = 0);
	            } else t.velocity = 0;t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;var g = 1e3 * i.freeModeMomentumRatio,
	                b = t.velocity * g,
	                w = t.translate + b;r && (w = -w);var y,
	                x,
	                E = !1,
	                T = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -T && (w = t.maxTranslate() - T), y = t.maxTranslate(), E = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > T && (w = t.minTranslate() + T), y = t.minTranslate(), E = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);else if (i.freeModeSticky) {
	              for (var S, C = 0; C < l.length; C += 1) {
	                if (l[C] > -w) {
	                  S = C;break;
	                }
	              }w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
	            }if (x && t.once("transitionEnd", function () {
	              t.loopFix();
	            }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);else if (i.freeModeSticky) return void t.slideToClosest();i.freeModeMomentumBounce && E ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
	              t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
	                t && !t.destroyed && t.transitionEnd();
	              }));
	            })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
	              t && !t.destroyed && t.transitionEnd();
	            }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses();
	          } else if (i.freeModeSticky) return void t.slideToClosest();(!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
	        } else {
	          for (var M = 0, z = t.slidesSizesGrid[0], k = 0; k < o.length; k += i.slidesPerGroup) {
	            void 0 !== o[k + i.slidesPerGroup] ? p >= o[k] && p < o[k + i.slidesPerGroup] && (z = o[(M = k) + i.slidesPerGroup] - o[k]) : p >= o[k] && (M = k, z = o[o.length - 1] - o[o.length - 2]);
	          }var P = (p - o[M]) / z;if (u > i.longSwipesMs) {
	            if (!i.longSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
	          } else {
	            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);"next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
	          }
	        }
	      }.bind(e), e.onClick = function (e) {
	        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
	      }.bind(e);var r = "container" === t.touchEventsTarget ? i : s,
	          n = !!t.nested;if (Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents) {
	        if (Y.touch) {
	          var o = !("touchstart" !== a.start || !Y.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, Y.passiveListener ? { passive: !1, capture: n } : n), r.addEventListener(a.end, e.onTouchEnd, o);
	        }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !Y.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1));
	      } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);(t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0);
	    }, detachEvents: function detachEvents() {
	      var e = this,
	          t = e.params,
	          a = e.touchEvents,
	          i = e.el,
	          s = e.wrapperEl,
	          r = "container" === t.touchEventsTarget ? i : s,
	          n = !!t.nested;if (Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents) {
	        if (Y.touch) {
	          var o = !("onTouchStart" !== a.start || !Y.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
	        }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !Y.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1));
	      } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);(t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g);
	    } };var w,
	      y = { setBreakpoint: function setBreakpoint() {
	      var e = this,
	          t = e.activeIndex,
	          a = e.initialized,
	          i = e.loopedSlides;void 0 === i && (i = 0);var s = e.params,
	          r = s.breakpoints;if (r && (!r || 0 !== Object.keys(r).length)) {
	        var n = e.getBreakpoint(r);if (n && e.currentBreakpoint !== n) {
	          var o = n in r ? r[n] : e.originalParams,
	              l = s.loop && o.slidesPerView !== s.slidesPerView;X.extend(e.params, o), X.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }), e.currentBreakpoint = n, l && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
	        }
	      }
	    }, getBreakpoint: function getBreakpoint(e) {
	      if (e) {
	        var t = !1,
	            a = [];Object.keys(e).forEach(function (e) {
	          a.push(e);
	        }), a.sort(function (e, t) {
	          return parseInt(e, 10) - parseInt(t, 10);
	        });for (var i = 0; i < a.length; i += 1) {
	          var s = a[i];s >= B.innerWidth && !t && (t = s);
	        }return t || "max";
	      }
	    } },
	      I = { isIE: !!B.navigator.userAgent.match(/Trident/g) || !!B.navigator.userAgent.match(/MSIE/g), isSafari: (w = B.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(B.navigator.userAgent) };var x = { init: !0, direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, preventInteractionOnTransition: !1, edgeSwipeDetection: !1, edgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: !0, watchOverflow: !1, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, allowTouchMove: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: !1, allowSlidePrev: !0, allowSlideNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: !0 },
	      E = { update: o, translate: d, transition: p, slide: c, loop: u, grabCursor: h, manipulation: v, events: b, breakpoints: y, checkOverflow: { checkOverflow: function checkOverflow() {
	        var e = this,
	            t = e.isLocked;e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update());
	      } }, classes: { addClasses: function addClasses() {
	        var t = this.classNames,
	            a = this.params,
	            e = this.rtl,
	            i = this.$el,
	            s = [];s.push(a.direction), a.freeMode && s.push("free-mode"), Y.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), I.isIE && (Y.pointerEvents || Y.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
	          t.push(a.containerModifierClass + e);
	        }), i.addClass(t.join(" "));
	      }, removeClasses: function removeClasses() {
	        var e = this.$el,
	            t = this.classNames;e.removeClass(t.join(" "));
	      } }, images: { loadImage: function loadImage(e, t, a, i, s, r) {
	        var n;function o() {
	          r && r();
	        }e.complete && s ? o() : t ? ((n = new B.Image()).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o();
	      }, preloadImages: function preloadImages() {
	        var e = this;function t() {
	          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
	        }e.imagesToLoad = e.$el.find("img");for (var a = 0; a < e.imagesToLoad.length; a += 1) {
	          var i = e.imagesToLoad[a];e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
	        }
	      } } },
	      T = {},
	      S = function (u) {
	    function h() {
	      for (var e, t, s, a = [], i = arguments.length; i--;) {
	        a[i] = arguments[i];
	      }1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = X.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(E).forEach(function (t) {
	        Object.keys(E[t]).forEach(function (e) {
	          h.prototype[e] || (h.prototype[e] = E[t][e]);
	        });
	      });var r = this;void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
	        var t = r.modules[e];if (t.params) {
	          var a = Object.keys(t.params)[0],
	              i = t.params[a];if ("object" != (typeof i === "undefined" ? "undefined" : _typeof(i))) return;if (!(a in s && "enabled" in i)) return;!0 === s[a] && (s[a] = { enabled: !0 }), "object" != _typeof(s[a]) || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = { enabled: !1 });
	        }
	      });var n = X.extend({}, x);r.useModulesParams(n), r.params = X.extend({}, n, T, s), r.originalParams = X.extend({}, r.params), r.passedParams = X.extend({}, s);var o = (r.$ = L)(r.params.el);if (t = o[0]) {
	        if (1 < o.length) {
	          var l = [];return o.each(function (e, t) {
	            var a = X.extend({}, s, { el: t });l.push(new h(a));
	          }), l;
	        }t.swiper = r, o.data("swiper", r);var d,
	            p,
	            c = o.children("." + r.params.wrapperClass);return X.extend(r, { $el: o, el: t, $wrapperEl: c, wrapperEl: c[0], classNames: [], slides: L(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: function isHorizontal() {
	            return "horizontal" === r.params.direction;
	          }, isVertical: function isVertical() {
	            return "vertical" === r.params.direction;
	          }, rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"), rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")), wrongRTL: "-webkit-box" === c.css("display"), activeIndex: 0, realIndex: 0, isBeginning: !0, isEnd: !1, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: !1, allowSlideNext: r.params.allowSlideNext, allowSlidePrev: r.params.allowSlidePrev, touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], Y.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : Y.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = { start: d[0], move: d[1], end: d[2] }, r.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }, Y.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, formElements: "input, select, option, textarea, button, video", lastClickTime: X.now(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: !0, allowTouchMove: r.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r.useModules(), r.params.init && r.init(), r;
	      }
	    }u && (h.__proto__ = u);var e = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
	      var e = this,
	          t = e.params,
	          a = e.slides,
	          i = e.slidesGrid,
	          s = e.size,
	          r = e.activeIndex,
	          n = 1;if (t.centeredSlides) {
	        for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
	          a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
	        }for (var p = r - 1; 0 <= p; p -= 1) {
	          a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0));
	        }
	      } else for (var c = r + 1; c < a.length; c += 1) {
	        i[c] - i[r] < s && (n += 1);
	      }return n;
	    }, h.prototype.update = function () {
	      var a = this;if (a && !a.destroyed) {
	        var e = a.snapGrid,
	            t = a.params;t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update");
	      }function i() {
	        var e = a.rtlTranslate ? -1 * a.translate : a.translate,
	            t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses();
	      }
	    }, h.prototype.init = function () {
	      var e = this;e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"));
	    }, h.prototype.destroy = function (e, t) {
	      void 0 === e && (e = !0), void 0 === t && (t = !0);var a = this,
	          i = a.params,
	          s = a.$el,
	          r = a.$wrapperEl,
	          n = a.slides;return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
	        a.off(e);
	      }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), X.deleteProps(a)), a.destroyed = !0), null;
	    }, h.extendDefaults = function (e) {
	      X.extend(T, e);
	    }, e.extendedDefaults.get = function () {
	      return T;
	    }, e.defaults.get = function () {
	      return x;
	    }, e.Class.get = function () {
	      return u;
	    }, e.$.get = function () {
	      return L;
	    }, Object.defineProperties(h, e), h;
	  }(s),
	      C = { name: "device", proto: { device: m }, static: { device: m } },
	      M = { name: "support", proto: { support: Y }, static: { support: Y } },
	      z = { name: "browser", proto: { browser: I }, static: { browser: I } },
	      k = { name: "resize", create: function create() {
	      var e = this;X.extend(e, { resize: { resizeHandler: function resizeHandler() {
	            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
	          }, orientationChangeHandler: function orientationChangeHandler() {
	            e && !e.destroyed && e.initialized && e.emit("orientationchange");
	          } } });
	    }, on: { init: function init() {
	        B.addEventListener("resize", this.resize.resizeHandler), B.addEventListener("orientationchange", this.resize.orientationChangeHandler);
	      }, destroy: function destroy() {
	        B.removeEventListener("resize", this.resize.resizeHandler), B.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
	      } } },
	      P = { func: B.MutationObserver || B.WebkitMutationObserver, attach: function attach(e, t) {
	      void 0 === t && (t = {});var a = this,
	          i = new P.func(function (e) {
	        if (1 !== e.length) {
	          var t = function t() {
	            a.emit("observerUpdate", e[0]);
	          };B.requestAnimationFrame ? B.requestAnimationFrame(t) : B.setTimeout(t, 0);
	        } else a.emit("observerUpdate", e[0]);
	      });i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.observer.observers.push(i);
	    }, init: function init() {
	      var e = this;if (Y.observer && e.params.observer) {
	        if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
	          e.observer.attach(t[a]);
	        }e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
	      }
	    }, destroy: function destroy() {
	      this.observer.observers.forEach(function (e) {
	        e.disconnect();
	      }), this.observer.observers = [];
	    } },
	      $ = { name: "observer", params: { observer: !1, observeParents: !1 }, create: function create() {
	      X.extend(this, { observer: { init: P.init.bind(this), attach: P.attach.bind(this), destroy: P.destroy.bind(this), observers: [] } });
	    }, on: { init: function init() {
	        this.observer.init();
	      }, destroy: function destroy() {
	        this.observer.destroy();
	      } } },
	      D = { update: function update(e) {
	      var t = this,
	          a = t.params,
	          i = a.slidesPerView,
	          s = a.slidesPerGroup,
	          r = a.centeredSlides,
	          n = t.virtual,
	          o = n.from,
	          l = n.to,
	          d = n.slides,
	          p = n.slidesGrid,
	          c = n.renderSlide,
	          u = n.offset;t.updateActiveIndex();var h,
	          v,
	          f,
	          m = t.activeIndex || 0;h = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (v = Math.floor(i / 2) + s, f = Math.floor(i / 2) + s) : (v = i + (s - 1), f = s);var g = Math.max((m || 0) - f, 0),
	          b = Math.min((m || 0) + v, d.length - 1),
	          w = (t.slidesGrid[g] || 0) - (t.slidesGrid[0] || 0);function y() {
	        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
	      }if (X.extend(t.virtual, { from: g, to: b, offset: w, slidesGrid: t.slidesGrid }), o === g && l === b && !e) return t.slidesGrid !== p && w !== u && t.slides.css(h, w + "px"), void t.updateProgress();if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, { offset: w, from: g, to: b, slides: function () {
	          for (var e = [], t = g; t <= b; t += 1) {
	            e.push(d[t]);
	          }return e;
	        }() }), void y();var x = [],
	          E = [];if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var T = o; T <= l; T += 1) {
	        (T < g || b < T) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
	      }for (var S = 0; S < d.length; S += 1) {
	        g <= S && S <= b && (void 0 === l || e ? E.push(S) : (l < S && E.push(S), S < o && x.push(S)));
	      }E.forEach(function (e) {
	        t.$wrapperEl.append(c(d[e], e));
	      }), x.sort(function (e, t) {
	        return e < t;
	      }).forEach(function (e) {
	        t.$wrapperEl.prepend(c(d[e], e));
	      }), t.$wrapperEl.children(".swiper-slide").css(h, w + "px"), y();
	    }, renderSlide: function renderSlide(e, t) {
	      var a = this,
	          i = a.params.virtual;if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
	    }, appendSlide: function appendSlide(e) {
	      this.virtual.slides.push(e), this.virtual.update(!0);
	    }, prependSlide: function prependSlide(e) {
	      var t = this;if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
	        var a = t.virtual.cache,
	            i = {};Object.keys(a).forEach(function (e) {
	          i[e + 1] = a[e];
	        }), t.virtual.cache = i;
	      }t.virtual.update(!0), t.slideNext(0);
	    } },
	      O = { name: "virtual", params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } }, create: function create() {
	      var e = this;X.extend(e, { virtual: { update: D.update.bind(e), appendSlide: D.appendSlide.bind(e), prependSlide: D.prependSlide.bind(e), renderSlide: D.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } });
	    }, on: { beforeInit: function beforeInit() {
	        var e = this;if (e.params.virtual.enabled) {
	          e.classNames.push(e.params.containerModifierClass + "virtual");var t = { watchSlidesProgress: !0 };X.extend(e.params, t), X.extend(e.originalParams, t), e.virtual.update();
	        }
	      }, setTranslate: function setTranslate() {
	        this.params.virtual.enabled && this.virtual.update();
	      } } },
	      A = { handle: function handle(e) {
	      var t = this,
	          a = t.rtlTranslate,
	          i = e;i.originalEvent && (i = i.originalEvent);var s = i.keyCode || i.charCode;if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
	        if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
	          var r = !1;if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;var n = B.innerWidth,
	              o = B.innerHeight,
	              l = t.$el.offset();a && (l.left -= t.$el[0].scrollLeft);for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
	            var c = d[p];0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0);
	          }if (!r) return;
	        }t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s);
	      }
	    }, enable: function enable() {
	      this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
	    }, disable: function disable() {
	      this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
	    } },
	      H = { name: "keyboard", params: { keyboard: { enabled: !1, onlyInViewport: !0 } }, create: function create() {
	      X.extend(this, { keyboard: { enabled: !1, enable: A.enable.bind(this), disable: A.disable.bind(this), handle: A.handle.bind(this) } });
	    }, on: { init: function init() {
	        this.params.keyboard.enabled && this.keyboard.enable();
	      }, destroy: function destroy() {
	        this.keyboard.enabled && this.keyboard.disable();
	      } } };var G = { lastScrollTime: X.now(), event: -1 < B.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
	      var e = "onwheel",
	          t = e in f;if (!t) {
	        var a = f.createElement("div");a.setAttribute(e, "return;"), t = "function" == typeof a[e];
	      }return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t;
	    }() ? "wheel" : "mousewheel", normalize: function normalize(e) {
	      var t = 0,
	          a = 0,
	          i = 0,
	          s = 0;return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), { spinX: t, spinY: a, pixelX: i, pixelY: s };
	    }, handleMouseEnter: function handleMouseEnter() {
	      this.mouseEntered = !0;
	    }, handleMouseLeave: function handleMouseLeave() {
	      this.mouseEntered = !1;
	    }, handle: function handle(e) {
	      var t = e,
	          a = this,
	          i = a.params.mousewheel;if (!a.mouseEntered && !i.releaseOnEdges) return !0;t.originalEvent && (t = t.originalEvent);var s = 0,
	          r = a.rtlTranslate ? -1 : 1,
	          n = G.normalize(t);if (i.forceToAxis) {
	        if (a.isHorizontal()) {
	          if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;s = n.pixelX * r;
	        } else {
	          if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;s = n.pixelY;
	        }
	      } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;if (0 === s) return !0;if (i.invert && (s = -s), a.params.freeMode) {
	        a.params.loop && a.loopFix();var o = a.getTranslate() + s * i.sensitivity,
	            l = a.isBeginning,
	            d = a.isEnd;if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = X.nextTick(function () {
	          a.slideToClosest();
	        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0;
	      } else {
	        if (60 < X.now() - a.mousewheel.lastScrollTime) if (s < 0) {
	          if (a.isEnd && !a.params.loop || a.animating) {
	            if (i.releaseOnEdges) return !0;
	          } else a.slideNext(), a.emit("scroll", t);
	        } else if (a.isBeginning && !a.params.loop || a.animating) {
	          if (i.releaseOnEdges) return !0;
	        } else a.slidePrev(), a.emit("scroll", t);a.mousewheel.lastScrollTime = new B.Date().getTime();
	      }return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
	    }, enable: function enable() {
	      var e = this;if (!G.event) return !1;if (e.mousewheel.enabled) return !1;var t = e.$el;return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(G.event, e.mousewheel.handle), e.mousewheel.enabled = !0;
	    }, disable: function disable() {
	      var e = this;if (!G.event) return !1;if (!e.mousewheel.enabled) return !1;var t = e.$el;return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(G.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1);
	    } },
	      N = { update: function update() {
	      var e = this,
	          t = e.params.navigation;if (!e.params.loop) {
	        var a = e.navigation,
	            i = a.$nextEl,
	            s = a.$prevEl;s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
	      }
	    }, init: function init() {
	      var e,
	          t,
	          a = this,
	          i = a.params.navigation;(i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", function (e) {
	        e.preventDefault(), a.isEnd && !a.params.loop || a.slideNext();
	      }), t && 0 < t.length && t.on("click", function (e) {
	        e.preventDefault(), a.isBeginning && !a.params.loop || a.slidePrev();
	      }), X.extend(a.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
	    }, destroy: function destroy() {
	      var e = this.navigation,
	          t = e.$nextEl,
	          a = e.$prevEl;t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), a && a.length && (a.off("click"), a.removeClass(this.params.navigation.disabledClass));
	    } },
	      V = { update: function update() {
	      var e = this,
	          t = e.rtl,
	          s = e.params.pagination;if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
	        var r,
	            a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
	            i = e.pagination.$el,
	            n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
	          var o,
	              l,
	              d,
	              p = e.pagination.bullets;if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
	            var a = L(t),
	                i = a.index();i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"));
	          });else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
	            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) {
	              p.eq(h).addClass(s.bulletActiveClass + "-main");
	            }c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next");
	          }if (s.dynamicBullets) {
	            var v = Math.min(p.length, s.dynamicMainBullets + 4),
	                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
	                m = t ? "right" : "left";p.css(e.isHorizontal() ? m : "top", f + "px");
	          }
	        }if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
	          var g;g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";var b = (r + 1) / n,
	              w = 1,
	              y = 1;"horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed);
	        }"custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
	      }
	    }, render: function render() {
	      var e = this,
	          t = e.params.pagination;if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
	        var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
	            i = e.pagination.$el,
	            s = "";if ("bullets" === t.type) {
	          for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) {
	            t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
	          }i.html(s), e.pagination.bullets = i.find("." + t.bulletClass);
	        }"fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
	      }
	    }, init: function init() {
	      var a = this,
	          e = a.params.pagination;if (e.el) {
	        var t = L(e.el);0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
	          e.preventDefault();var t = L(this).index() * a.params.slidesPerGroup;a.params.loop && (t += a.loopedSlides), a.slideTo(t);
	        }), X.extend(a.pagination, { $el: t, el: t[0] }));
	      }
	    }, destroy: function destroy() {
	      var e = this,
	          t = e.params.pagination;if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
	        var a = e.pagination.$el;a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
	      }
	    } },
	      R = { setTranslate: function setTranslate() {
	      var e = this;if (e.params.scrollbar.el && e.scrollbar.el) {
	        var t = e.scrollbar,
	            a = e.rtlTranslate,
	            i = e.progress,
	            s = t.dragSize,
	            r = t.trackSize,
	            n = t.$dragEl,
	            o = t.$el,
	            l = e.params.scrollbar,
	            d = s,
	            p = (r - s) * i;a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (Y.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (Y.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
	          o[0].style.opacity = 0, o.transition(400);
	        }, 1e3));
	      }
	    }, setTransition: function setTransition(e) {
	      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
	    }, updateSize: function updateSize() {
	      var e = this;if (e.params.scrollbar.el && e.scrollbar.el) {
	        var t = e.scrollbar,
	            a = t.$dragEl,
	            i = t.$el;a[0].style.width = "", a[0].style.height = "";var s,
	            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
	            n = e.size / e.virtualSize,
	            o = n * (r / e.size);s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), X.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
	      }
	    }, setDragPosition: function setDragPosition(e) {
	      var t,
	          a = this,
	          i = a.scrollbar,
	          s = a.rtlTranslate,
	          r = i.$el,
	          n = i.dragSize,
	          o = i.trackSize;t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses();
	    }, onDragStart: function onDragStart(e) {
	      var t = this,
	          a = t.params.scrollbar,
	          i = t.scrollbar,
	          s = t.$wrapperEl,
	          r = i.$el,
	          n = i.$dragEl;t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e);
	    }, onDragMove: function onDragMove(e) {
	      var t = this.scrollbar,
	          a = this.$wrapperEl,
	          i = t.$el,
	          s = t.$dragEl;this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e));
	    }, onDragEnd: function onDragEnd(e) {
	      var t = this,
	          a = t.params.scrollbar,
	          i = t.scrollbar.$el;t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = X.nextTick(function () {
	        i.css("opacity", 0), i.transition(400);
	      }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
	    }, enableDraggable: function enableDraggable() {
	      var e = this;if (e.params.scrollbar.el) {
	        var t = e.scrollbar,
	            a = e.touchEvents,
	            i = e.touchEventsDesktop,
	            s = e.params,
	            r = t.$el[0],
	            n = !(!Y.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
	            o = !(!Y.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents ? (Y.touch && (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !Y.touch && m.ios) && (r.addEventListener("mousedown", e.scrollbar.onDragStart, n), f.addEventListener("mousemove", e.scrollbar.onDragMove, n), f.addEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
	      }
	    }, disableDraggable: function disableDraggable() {
	      var e = this;if (e.params.scrollbar.el) {
	        var t = e.scrollbar,
	            a = e.touchEvents,
	            i = e.touchEventsDesktop,
	            s = e.params,
	            r = t.$el[0],
	            n = !(!Y.passiveListener || !s.passiveListeners) && { passive: !1, capture: !1 },
	            o = !(!Y.passiveListener || !s.passiveListeners) && { passive: !0, capture: !1 };Y.touch || !Y.pointerEvents && !Y.prefixedPointerEvents ? (Y.touch && (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !Y.touch && m.ios) && (r.removeEventListener("mousedown", e.scrollbar.onDragStart, n), f.removeEventListener("mousemove", e.scrollbar.onDragMove, n), f.removeEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
	      }
	    }, init: function init() {
	      var e = this;if (e.params.scrollbar.el) {
	        var t = e.scrollbar,
	            a = e.$el,
	            i = e.params.scrollbar,
	            s = L(i.el);e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));var r = s.find("." + e.params.scrollbar.dragClass);0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), X.extend(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }), i.draggable && t.enableDraggable();
	      }
	    }, destroy: function destroy() {
	      this.scrollbar.disableDraggable();
	    } },
	      F = { setTransform: function setTransform(e, t) {
	      var a = this.rtl,
	          i = L(e),
	          s = a ? -1 : 1,
	          r = i.attr("data-swiper-parallax") || "0",
	          n = i.attr("data-swiper-parallax-x"),
	          o = i.attr("data-swiper-parallax-y"),
	          l = i.attr("data-swiper-parallax-scale"),
	          d = i.attr("data-swiper-parallax-opacity");if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
	        var p = d - (d - 1) * (1 - Math.abs(t));i[0].style.opacity = p;
	      }if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");else {
	        var c = l - (l - 1) * (1 - Math.abs(t));i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")");
	      }
	    }, setTranslate: function setTranslate() {
	      var i = this,
	          e = i.$el,
	          t = i.slides,
	          s = i.progress,
	          r = i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
	        i.parallax.setTransform(t, s);
	      }), t.each(function (e, t) {
	        var a = t.progress;1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
	          i.parallax.setTransform(t, a);
	        });
	      });
	    }, setTransition: function setTransition(s) {
	      void 0 === s && (s = this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
	        var a = L(t),
	            i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;0 === s && (i = 0), a.transition(i);
	      });
	    } },
	      W = { getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
	      if (e.targetTouches.length < 2) return 1;var t = e.targetTouches[0].pageX,
	          a = e.targetTouches[0].pageY,
	          i = e.targetTouches[1].pageX,
	          s = e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
	    }, onGestureStart: function onGestureStart(e) {
	      var t = this,
	          a = t.params.zoom,
	          i = t.zoom,
	          s = i.gesture;if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !Y.gestures) {
	        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;i.fakeGestureTouched = !0, s.scaleStart = W.getDistanceBetweenTouches(e);
	      }s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0;
	    }, onGestureChange: function onGestureChange(e) {
	      var t = this.params.zoom,
	          a = this.zoom,
	          i = a.gesture;if (!Y.gestures) {
	        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;a.fakeGestureMoved = !0, i.scaleMove = W.getDistanceBetweenTouches(e);
	      }i.$imageEl && 0 !== i.$imageEl.length && (Y.gestures ? this.zoom.scale = e.scale * a.currentScale : a.scale = i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
	    }, onGestureEnd: function onGestureEnd(e) {
	      var t = this.params.zoom,
	          a = this.zoom,
	          i = a.gesture;if (!Y.gestures) {
	        if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;a.fakeGestureTouched = !1, a.fakeGestureMoved = !1;
	      }i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0));
	    }, onTouchStart: function onTouchStart(e) {
	      var t = this.zoom,
	          a = t.gesture,
	          i = t.image;a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
	    }, onTouchMove: function onTouchMove(e) {
	      var t = this,
	          a = t.zoom,
	          i = a.gesture,
	          s = a.image,
	          r = a.velocity;if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
	        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = X.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = X.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));var n = s.width * a.scale,
	            o = s.height * a.scale;if (!(n < i.slideWidth && o < i.slideHeight)) {
	          if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
	            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
	          }e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
	        }
	      }
	    }, onTouchEnd: function onTouchEnd() {
	      var e = this.zoom,
	          t = e.gesture,
	          a = e.image,
	          i = e.velocity;if (t.$imageEl && 0 !== t.$imageEl.length) {
	        if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);a.isTouched = !1, a.isMoved = !1;var s = 300,
	            r = 300,
	            n = i.x * s,
	            o = a.currentX + n,
	            l = i.y * r,
	            d = a.currentY + l;0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));var p = Math.max(s, r);a.currentX = o, a.currentY = d;var c = a.width * e.scale,
	            u = a.height * e.scale;a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
	      }
	    }, onTransitionEnd: function onTransitionEnd() {
	      var e = this.zoom,
	          t = e.gesture;t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1);
	    }, toggle: function toggle(e) {
	      var t = this.zoom;t.scale && 1 !== t.scale ? t.out() : t.in(e);
	    }, in: function _in(e) {
	      var t,
	          a,
	          i,
	          s,
	          r,
	          n,
	          o,
	          l,
	          d,
	          p,
	          c,
	          u,
	          h,
	          v,
	          f,
	          m,
	          g = this,
	          b = g.zoom,
	          w = g.params.zoom,
	          y = b.gesture,
	          x = b.image;(y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
	    }, out: function out() {
	      var e = this,
	          t = e.zoom,
	          a = e.params.zoom,
	          i = t.gesture;i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
	    }, enable: function enable() {
	      var e = this,
	          t = e.zoom;if (!t.enabled) {
	        t.enabled = !0;var a = !("touchstart" !== e.touchEvents.start || !Y.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };Y.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
	      }
	    }, disable: function disable() {
	      var e = this,
	          t = e.zoom;if (t.enabled) {
	        e.zoom.enabled = !1;var a = !("touchstart" !== e.touchEvents.start || !Y.passiveListener || !e.params.passiveListeners) && { passive: !0, capture: !1 };Y.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove);
	      }
	    } },
	      q = { loadInSlide: function loadInSlide(e, l) {
	      void 0 === l && (l = !0);var d = this,
	          p = d.params.lazy;if (void 0 !== e && 0 !== d.slides.length) {
	        var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
	            t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");!c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
	          var i = L(t);i.addClass(p.loadingClass);var s = i.attr("data-background"),
	              r = i.attr("data-src"),
	              n = i.attr("data-srcset"),
	              o = i.attr("data-sizes");d.loadImage(i[0], r || s, n, o, !1, function () {
	            if (null != d && d && (!d || d.params) && !d.destroyed) {
	              if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
	                var e = c.attr("data-swiper-slide-index");if (c.hasClass(d.params.slideDuplicateClass)) {
	                  var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");d.lazy.loadInSlide(t.index(), !1);
	                } else {
	                  var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');d.lazy.loadInSlide(a.index(), !1);
	                }
	              }d.emit("lazyImageReady", c[0], i[0]);
	            }
	          }), d.emit("lazyImageLoad", c[0], i[0]);
	        });
	      }
	    }, load: function load() {
	      var i = this,
	          t = i.$wrapperEl,
	          a = i.params,
	          s = i.slides,
	          e = i.activeIndex,
	          r = i.virtual && a.virtual.enabled,
	          n = a.lazy,
	          o = a.slidesPerView;function l(e) {
	        if (r) {
	          if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
	        } else if (s[e]) return !0;return !1;
	      }function d(e) {
	        return r ? L(e).attr("data-swiper-slide-index") : L(e).index();
	      }if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
	        var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();i.lazy.loadInSlide(a);
	      });else if (1 < o) for (var p = e; p < e + o; p += 1) {
	        l(p) && i.lazy.loadInSlide(p);
	      } else i.lazy.loadInSlide(e);if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
	        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) {
	          l(f) && i.lazy.loadInSlide(f);
	        }for (var m = v; m < e; m += 1) {
	          l(m) && i.lazy.loadInSlide(m);
	        }
	      } else {
	        var g = t.children("." + a.slideNextClass);0 < g.length && i.lazy.loadInSlide(d(g));var b = t.children("." + a.slidePrevClass);0 < b.length && i.lazy.loadInSlide(d(b));
	      }
	    } },
	      j = { LinearSpline: function LinearSpline(e, t) {
	      var a,
	          i,
	          s,
	          r,
	          n,
	          o = function o(e, t) {
	        for (i = -1, a = e.length; 1 < a - i;) {
	          e[s = a + i >> 1] <= t ? i = s : a = s;
	        }return a;
	      };return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
	        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
	      }, this;
	    }, getInterpolateFunction: function getInterpolateFunction(e) {
	      var t = this;t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid));
	    }, setTranslate: function setTranslate(e, t) {
	      var a,
	          i,
	          s = this,
	          r = s.controller.control;function n(e) {
	        var t = s.rtlTranslate ? -s.translate : s.translate;"slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
	      }if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
	        r[o] !== t && r[o] instanceof S && n(r[o]);
	      } else r instanceof S && t !== r && n(r);
	    }, setTransition: function setTransition(t, e) {
	      var a,
	          i = this,
	          s = i.controller.control;function r(e) {
	        e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && X.nextTick(function () {
	          e.updateAutoHeight();
	        }), e.$wrapperEl.transitionEnd(function () {
	          s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd());
	        }));
	      }if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) {
	        s[a] !== e && s[a] instanceof S && r(s[a]);
	      } else s instanceof S && e !== s && r(s);
	    } },
	      K = { makeElFocusable: function makeElFocusable(e) {
	      return e.attr("tabIndex", "0"), e;
	    }, addElRole: function addElRole(e, t) {
	      return e.attr("role", t), e;
	    }, addElLabel: function addElLabel(e, t) {
	      return e.attr("aria-label", t), e;
	    }, disableEl: function disableEl(e) {
	      return e.attr("aria-disabled", !0), e;
	    }, enableEl: function enableEl(e) {
	      return e.attr("aria-disabled", !1), e;
	    }, onEnterKey: function onEnterKey(e) {
	      var t = this,
	          a = t.params.a11y;if (13 === e.keyCode) {
	        var i = L(e.target);t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click();
	      }
	    }, notify: function notify(e) {
	      var t = this.a11y.liveRegion;0 !== t.length && (t.html(""), t.html(e));
	    }, updateNavigation: function updateNavigation() {
	      var e = this;if (!e.params.loop) {
	        var t = e.navigation,
	            a = t.$nextEl,
	            i = t.$prevEl;i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
	      }
	    }, updatePagination: function updatePagination() {
	      var i = this,
	          s = i.params.a11y;i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
	        var a = L(t);i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
	      });
	    }, init: function init() {
	      var e = this;e.$el.append(e.a11y.liveRegion);var t,
	          a,
	          i = e.params.a11y;e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
	    }, destroy: function destroy() {
	      var e,
	          t,
	          a = this;a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey);
	    } },
	      U = { init: function init() {
	      var e = this;if (e.params.history) {
	        if (!B.history || !B.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);var t = e.history;t.initialized = !0, t.paths = U.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || B.addEventListener("popstate", e.history.setHistoryPopState));
	      }
	    }, destroy: function destroy() {
	      this.params.history.replaceState || B.removeEventListener("popstate", this.history.setHistoryPopState);
	    }, setHistoryPopState: function setHistoryPopState() {
	      this.history.paths = U.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
	    }, getPathValues: function getPathValues() {
	      var e = B.location.pathname.slice(1).split("/").filter(function (e) {
	        return "" !== e;
	      }),
	          t = e.length;return { key: e[t - 2], value: e[t - 1] };
	    }, setHistory: function setHistory(e, t) {
	      if (this.history.initialized && this.params.history.enabled) {
	        var a = this.slides.eq(t),
	            i = U.slugify(a.attr("data-history"));B.location.pathname.includes(e) || (i = e + "/" + i);var s = B.history.state;s && s.value === i || (this.params.history.replaceState ? B.history.replaceState({ value: i }, null, i) : B.history.pushState({ value: i }, null, i));
	      }
	    }, slugify: function slugify(e) {
	      return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
	    }, scrollToSlide: function scrollToSlide(e, t, a) {
	      var i = this;if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
	        var n = i.slides.eq(s);if (U.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
	          var o = n.index();i.slideTo(o, e, a);
	        }
	      } else i.slideTo(0, e, a);
	    } },
	      _ = { onHashCange: function onHashCange() {
	      var e = this,
	          t = f.location.hash.replace("#", "");t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index());
	    }, setHash: function setHash() {
	      var e = this;if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && B.history && B.history.replaceState) B.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");else {
	        var t = e.slides.eq(e.activeIndex),
	            a = t.attr("data-hash") || t.attr("data-history");f.location.hash = a || "";
	      }
	    }, init: function init() {
	      var e = this;if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
	        e.hashNavigation.initialized = !0;var t = f.location.hash.replace("#", "");if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) {
	          var s = e.slides.eq(a);if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
	            var r = s.index();e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
	          }
	        }e.params.hashNavigation.watchState && L(B).on("hashchange", e.hashNavigation.onHashCange);
	      }
	    }, destroy: function destroy() {
	      this.params.hashNavigation.watchState && L(B).off("hashchange", this.hashNavigation.onHashCange);
	    } },
	      Z = { run: function run() {
	      var e = this,
	          t = e.slides.eq(e.activeIndex),
	          a = e.params.autoplay.delay;t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = X.nextTick(function () {
	        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
	      }, a);
	    }, start: function start() {
	      var e = this;return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
	    }, stop: function stop() {
	      var e = this;return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
	    }, pause: function pause(e) {
	      var t = this;t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
	    } },
	      Q = { setTranslate: function setTranslate() {
	      for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
	        var i = e.slides.eq(a),
	            s = -i[0].swiperSlideOffset;e.params.virtualTranslate || (s -= e.translate);var r = 0;e.isHorizontal() || (r = s, s = 0);var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);i.css({ opacity: n }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
	      }
	    }, setTransition: function setTransition(e) {
	      var a = this,
	          t = a.slides,
	          i = a.$wrapperEl;if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
	        var s = !1;t.transitionEnd(function () {
	          if (!s && a && !a.destroyed) {
	            s = !0, a.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) {
	              i.trigger(e[t]);
	            }
	          }
	        });
	      }
	    } },
	      J = { setTranslate: function setTranslate() {
	      var e,
	          t = this,
	          a = t.$el,
	          i = t.$wrapperEl,
	          s = t.slides,
	          r = t.width,
	          n = t.height,
	          o = t.rtlTranslate,
	          l = t.size,
	          d = t.params.cubeEffect,
	          p = t.isHorizontal(),
	          c = t.virtual && t.params.virtual.enabled,
	          u = 0;d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({ height: r + "px" })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));for (var h = 0; h < s.length; h += 1) {
	        var v = s.eq(h),
	            f = h;c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));var m = 90 * f,
	            g = Math.floor(m / 360);o && (m = -m, g = Math.floor(-m / 360));var b = Math.max(Math.min(v[0].progress, 1), -1),
	            w = 0,
	            y = 0,
	            x = 0;f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);var E = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
	          var T = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
	              S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");0 === T.length && (T = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
	        }
	      }if (i.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
	        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
	            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
	            z = d.shadowScale,
	            k = d.shadowScale / M,
	            P = d.shadowOffset;e.transform("scale3d(" + z + ", 1, " + k + ") translate3d(0px, " + (n / 2 + P) + "px, " + -n / 2 / k + "px) rotateX(-90deg)");
	      }var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)");
	    }, setTransition: function setTransition(e) {
	      var t = this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
	    } },
	      ee = { setTranslate: function setTranslate() {
	      for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
	        var s = t.eq(i),
	            r = s[0].progress;e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));var n = -180 * r,
	            o = 0,
	            l = -s[0].swiperSlideOffset,
	            d = 0;if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
	          var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
	              c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0));
	        }s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
	      }
	    }, setTransition: function setTransition(e) {
	      var a = this,
	          t = a.slides,
	          i = a.activeIndex,
	          s = a.$wrapperEl;if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
	        var r = !1;t.eq(i).transitionEnd(function () {
	          if (!r && a && !a.destroyed) {
	            r = !0, a.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) {
	              s.trigger(e[t]);
	            }
	          }
	        });
	      }
	    } },
	      te = { setTranslate: function setTranslate() {
	      for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
	        var v = i.eq(u),
	            f = r[u],
	            m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
	            g = o ? p * m : 0,
	            b = o ? 0 : p * m,
	            w = -c * Math.abs(m),
	            y = o ? 0 : n.stretch * m,
	            x = o ? n.stretch * m : 0;Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);var E = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";if (v.transform(E), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
	          var T = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
	              S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");0 === T.length && (T = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0);
	        }
	      }(Y.pointerEvents || Y.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%");
	    }, setTransition: function setTransition(e) {
	      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
	    } },
	      ae = [C, M, z, k, $, O, H, { name: "mousewheel", params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } }, create: function create() {
	      var e = this;X.extend(e, { mousewheel: { enabled: !1, enable: G.enable.bind(e), disable: G.disable.bind(e), handle: G.handle.bind(e), handleMouseEnter: G.handleMouseEnter.bind(e), handleMouseLeave: G.handleMouseLeave.bind(e), lastScrollTime: X.now() } });
	    }, on: { init: function init() {
	        this.params.mousewheel.enabled && this.mousewheel.enable();
	      }, destroy: function destroy() {
	        this.mousewheel.enabled && this.mousewheel.disable();
	      } } }, { name: "navigation", params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } }, create: function create() {
	      X.extend(this, { navigation: { init: N.init.bind(this), update: N.update.bind(this), destroy: N.destroy.bind(this) } });
	    }, on: { init: function init() {
	        this.navigation.init(), this.navigation.update();
	      }, toEdge: function toEdge() {
	        this.navigation.update();
	      }, fromEdge: function fromEdge() {
	        this.navigation.update();
	      }, destroy: function destroy() {
	        this.navigation.destroy();
	      }, click: function click(e) {
	        var t = this.navigation,
	            a = t.$nextEl,
	            i = t.$prevEl;!this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass));
	      } } }, { name: "pagination", params: { pagination: { el: null, bulletElement: "span", clickable: !1, hideOnClick: !1, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: !1, type: "bullets", dynamicBullets: !1, dynamicMainBullets: 1, formatFractionCurrent: function formatFractionCurrent(e) {
	          return e;
	        }, formatFractionTotal: function formatFractionTotal(e) {
	          return e;
	        }, bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", modifierClass: "swiper-pagination-", currentClass: "swiper-pagination-current", totalClass: "swiper-pagination-total", hiddenClass: "swiper-pagination-hidden", progressbarFillClass: "swiper-pagination-progressbar-fill", progressbarOppositeClass: "swiper-pagination-progressbar-opposite", clickableClass: "swiper-pagination-clickable", lockClass: "swiper-pagination-lock" } }, create: function create() {
	      var e = this;X.extend(e, { pagination: { init: V.init.bind(e), render: V.render.bind(e), update: V.update.bind(e), destroy: V.destroy.bind(e), dynamicBulletIndex: 0 } });
	    }, on: { init: function init() {
	        this.pagination.init(), this.pagination.render(), this.pagination.update();
	      }, activeIndexChange: function activeIndexChange() {
	        this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
	      }, snapIndexChange: function snapIndexChange() {
	        this.params.loop || this.pagination.update();
	      }, slidesLengthChange: function slidesLengthChange() {
	        this.params.loop && (this.pagination.render(), this.pagination.update());
	      }, snapGridLengthChange: function snapGridLengthChange() {
	        this.params.loop || (this.pagination.render(), this.pagination.update());
	      }, destroy: function destroy() {
	        this.pagination.destroy();
	      }, click: function click(e) {
	        var t = this;t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
	      } } }, { name: "scrollbar", params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } }, create: function create() {
	      var e = this;X.extend(e, { scrollbar: { init: R.init.bind(e), destroy: R.destroy.bind(e), updateSize: R.updateSize.bind(e), setTranslate: R.setTranslate.bind(e), setTransition: R.setTransition.bind(e), enableDraggable: R.enableDraggable.bind(e), disableDraggable: R.disableDraggable.bind(e), setDragPosition: R.setDragPosition.bind(e), onDragStart: R.onDragStart.bind(e), onDragMove: R.onDragMove.bind(e), onDragEnd: R.onDragEnd.bind(e), isTouched: !1, timeout: null, dragTimeout: null } });
	    }, on: { init: function init() {
	        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
	      }, update: function update() {
	        this.scrollbar.updateSize();
	      }, resize: function resize() {
	        this.scrollbar.updateSize();
	      }, observerUpdate: function observerUpdate() {
	        this.scrollbar.updateSize();
	      }, setTranslate: function setTranslate() {
	        this.scrollbar.setTranslate();
	      }, setTransition: function setTransition(e) {
	        this.scrollbar.setTransition(e);
	      }, destroy: function destroy() {
	        this.scrollbar.destroy();
	      } } }, { name: "parallax", params: { parallax: { enabled: !1 } }, create: function create() {
	      X.extend(this, { parallax: { setTransform: F.setTransform.bind(this), setTranslate: F.setTranslate.bind(this), setTransition: F.setTransition.bind(this) } });
	    }, on: { beforeInit: function beforeInit() {
	        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
	      }, init: function init() {
	        this.params.parallax && this.parallax.setTranslate();
	      }, setTranslate: function setTranslate() {
	        this.params.parallax && this.parallax.setTranslate();
	      }, setTransition: function setTransition(e) {
	        this.params.parallax && this.parallax.setTransition(e);
	      } } }, { name: "zoom", params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }, create: function create() {
	      var t = this,
	          a = { enabled: !1, scale: 1, currentScale: 1, isScaling: !1, gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 } };"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
	        a[e] = W[e].bind(t);
	      }), X.extend(t, { zoom: a });
	    }, on: { init: function init() {
	        this.params.zoom.enabled && this.zoom.enable();
	      }, destroy: function destroy() {
	        this.zoom.disable();
	      }, touchStart: function touchStart(e) {
	        this.zoom.enabled && this.zoom.onTouchStart(e);
	      }, touchEnd: function touchEnd(e) {
	        this.zoom.enabled && this.zoom.onTouchEnd(e);
	      }, doubleTap: function doubleTap(e) {
	        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
	      }, transitionEnd: function transitionEnd() {
	        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
	      } } }, { name: "lazy", params: { lazy: { enabled: !1, loadPrevNext: !1, loadPrevNextAmount: 1, loadOnTransitionStart: !1, elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }, create: function create() {
	      X.extend(this, { lazy: { initialImageLoaded: !1, load: q.load.bind(this), loadInSlide: q.loadInSlide.bind(this) } });
	    }, on: { beforeInit: function beforeInit() {
	        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
	      }, init: function init() {
	        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
	      }, scroll: function scroll() {
	        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
	      }, resize: function resize() {
	        this.params.lazy.enabled && this.lazy.load();
	      }, scrollbarDragMove: function scrollbarDragMove() {
	        this.params.lazy.enabled && this.lazy.load();
	      }, transitionStart: function transitionStart() {
	        var e = this;e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
	      }, transitionEnd: function transitionEnd() {
	        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
	      } } }, { name: "controller", params: { controller: { control: void 0, inverse: !1, by: "slide" } }, create: function create() {
	      var e = this;X.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: j.getInterpolateFunction.bind(e), setTranslate: j.setTranslate.bind(e), setTransition: j.setTransition.bind(e) } });
	    }, on: { update: function update() {
	        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
	      }, resize: function resize() {
	        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
	      }, observerUpdate: function observerUpdate() {
	        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
	      }, setTranslate: function setTranslate(e, t) {
	        this.controller.control && this.controller.setTranslate(e, t);
	      }, setTransition: function setTransition(e, t) {
	        this.controller.control && this.controller.setTransition(e, t);
	      } } }, { name: "a11y", params: { a11y: { enabled: !0, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}" } }, create: function create() {
	      var t = this;X.extend(t, { a11y: { liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }), Object.keys(K).forEach(function (e) {
	        t.a11y[e] = K[e].bind(t);
	      });
	    }, on: { init: function init() {
	        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
	      }, toEdge: function toEdge() {
	        this.params.a11y.enabled && this.a11y.updateNavigation();
	      }, fromEdge: function fromEdge() {
	        this.params.a11y.enabled && this.a11y.updateNavigation();
	      }, paginationUpdate: function paginationUpdate() {
	        this.params.a11y.enabled && this.a11y.updatePagination();
	      }, destroy: function destroy() {
	        this.params.a11y.enabled && this.a11y.destroy();
	      } } }, { name: "history", params: { history: { enabled: !1, replaceState: !1, key: "slides" } }, create: function create() {
	      var e = this;X.extend(e, { history: { init: U.init.bind(e), setHistory: U.setHistory.bind(e), setHistoryPopState: U.setHistoryPopState.bind(e), scrollToSlide: U.scrollToSlide.bind(e), destroy: U.destroy.bind(e) } });
	    }, on: { init: function init() {
	        this.params.history.enabled && this.history.init();
	      }, destroy: function destroy() {
	        this.params.history.enabled && this.history.destroy();
	      }, transitionEnd: function transitionEnd() {
	        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
	      } } }, { name: "hash-navigation", params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } }, create: function create() {
	      var e = this;X.extend(e, { hashNavigation: { initialized: !1, init: _.init.bind(e), destroy: _.destroy.bind(e), setHash: _.setHash.bind(e), onHashCange: _.onHashCange.bind(e) } });
	    }, on: { init: function init() {
	        this.params.hashNavigation.enabled && this.hashNavigation.init();
	      }, destroy: function destroy() {
	        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
	      }, transitionEnd: function transitionEnd() {
	        this.hashNavigation.initialized && this.hashNavigation.setHash();
	      } } }, { name: "autoplay", params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } }, create: function create() {
	      var t = this;X.extend(t, { autoplay: { running: !1, paused: !1, run: Z.run.bind(t), start: Z.start.bind(t), stop: Z.stop.bind(t), pause: Z.pause.bind(t), onTransitionEnd: function onTransitionEnd(e) {
	            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
	          } } });
	    }, on: { init: function init() {
	        this.params.autoplay.enabled && this.autoplay.start();
	      }, beforeTransitionStart: function beforeTransitionStart(e, t) {
	        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
	      }, sliderFirstMove: function sliderFirstMove() {
	        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
	      }, destroy: function destroy() {
	        this.autoplay.running && this.autoplay.stop();
	      } } }, { name: "effect-fade", params: { fadeEffect: { crossFade: !1 } }, create: function create() {
	      X.extend(this, { fadeEffect: { setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this) } });
	    }, on: { beforeInit: function beforeInit() {
	        var e = this;if ("fade" === e.params.effect) {
	          e.classNames.push(e.params.containerModifierClass + "fade");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };X.extend(e.params, t), X.extend(e.originalParams, t);
	        }
	      }, setTranslate: function setTranslate() {
	        "fade" === this.params.effect && this.fadeEffect.setTranslate();
	      }, setTransition: function setTransition(e) {
	        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
	      } } }, { name: "effect-cube", params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 } }, create: function create() {
	      X.extend(this, { cubeEffect: { setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this) } });
	    }, on: { beforeInit: function beforeInit() {
	        var e = this;if ("cube" === e.params.effect) {
	          e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };X.extend(e.params, t), X.extend(e.originalParams, t);
	        }
	      }, setTranslate: function setTranslate() {
	        "cube" === this.params.effect && this.cubeEffect.setTranslate();
	      }, setTransition: function setTransition(e) {
	        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
	      } } }, { name: "effect-flip", params: { flipEffect: { slideShadows: !0, limitRotation: !0 } }, create: function create() {
	      X.extend(this, { flipEffect: { setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this) } });
	    }, on: { beforeInit: function beforeInit() {
	        var e = this;if ("flip" === e.params.effect) {
	          e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };X.extend(e.params, t), X.extend(e.originalParams, t);
	        }
	      }, setTranslate: function setTranslate() {
	        "flip" === this.params.effect && this.flipEffect.setTranslate();
	      }, setTransition: function setTransition(e) {
	        "flip" === this.params.effect && this.flipEffect.setTransition(e);
	      } } }, { name: "effect-coverflow", params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } }, create: function create() {
	      X.extend(this, { coverflowEffect: { setTranslate: te.setTranslate.bind(this), setTransition: te.setTransition.bind(this) } });
	    }, on: { beforeInit: function beforeInit() {
	        var e = this;"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
	      }, setTranslate: function setTranslate() {
	        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
	      }, setTransition: function setTransition(e) {
	        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
	      } } }];return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ae), S;
	});
	//# sourceMappingURL=swiper.min.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(this.$store.state.isPC) ? _c('div', {
	    staticClass: "home_pc"
	  }, [_vm._m(0)]) : _c('div', {
	    staticClass: "home_mobile"
	  }, [_c('div', {
	    staticClass: "banner"
	  }, [_c('div', {
	    staticClass: "banner_body"
	  }, [_c('div', {
	    staticClass: "user_icon",
	    style: ({
	      backgroundImage: ("url(" + (__webpack_require__(19)) + ")")
	    })
	  }), _vm._v(" "), _vm._m(1)])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "banner"
	  }, [_c('p', [_vm._v("NOT YET OPEN 2018.8.7\n\t\t\t\t"), _c('span', [_vm._v("IN DEVELOPMENT")]), _vm._v("\n\t\t\t— PLEASE LOOK FORWARD —")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', {
	    staticClass: "banner_info"
	  }, [_c('span', {
	    staticClass: "u_name"
	  }, [_vm._v("zhang jicheng")]), _vm._v(" "), _c('span', [_vm._v("web前端开发")]), _vm._v(" "), _c('i', {
	    staticClass: "banner_info_point"
	  }), _vm._v(" "), _c('span', [_vm._v("6666666666")])])
	}]}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ })
]);