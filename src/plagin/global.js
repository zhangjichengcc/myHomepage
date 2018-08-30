/**
 * create by zhangjicheng
 * 定义全局方法
 **/
import Vue from 'vue';

// 全局信息通知
class Message{
  constructor() {
    this._title = 'show message';
    this._delay = 2000;
    this._icon = '';
  }
  _setTitle(t) {
    this._title = t;
  }
  _setTime(t) {
    this._delay = t;
  }
  _setIcon(type) {
    const obj = {
      success: '<i class="icon-wink2"></i>',
      warning: '<i class="icon-neutral2"></i>',
      error: '<i class="icon-crying2"></i>',
      loading: '<i class="icon-spinner2"></i>',
    }
    this._icon = obj[type] || '';
  }
  _show(title = 'show message', delay = 2000) {
    title && this._setTitle(title);
    delay && this._setTime(delay);
    const msgDom = document.getElementById('vm_message');
    msgDom.innerHTML = `${this._icon}${this._title}`;
    msgDom.setAttribute('class', 'active');
    setTimeout(() => {
      msgDom.setAttribute('class', '');
    }, this._delay);
  }
  info(title, delay) {
    this._setIcon();
    this._show(title, delay);
  }
  success(title, delay) {
    this._setIcon('success');
    this._show(title, delay);
  }
  error(title, delay) {
    this._setIcon('error');
    this._show(title, delay);
  }
  warning(title, delay) {
    this._setIcon('warning');
    this._show(title, delay);
  }
  loading(title, delay) {
    this._setIcon('loading');
    this._show(title, delay);
  }
}
const message = new Message();

// 全局弹框
class Alert{
  constructor() {
  	this._message = 'alert message';
  	this._bodyDom = null;
  	this._conDom = null;
  	this._iconObj = {
  		info: 'icon-hipster',
  	};
  	this._type = 'info';
  }
  _show(message, type = 'info', icon ) {
  	if(this._conDom) {
  		console.warn('重复弹窗将被替换！');
  		this._bodyDom.removeChild(this._conDom);
  		this._conDom = null;
  	}
  	const that = this;
  	if (message) this._message = message;
  	this._bodyDom = document.getElementById('vm_body');
  	this._conDom = document.createElement('dev');
  	this._type = type;
  	this._conDom.setAttribute('id', 'vm_alert');
  	this._conDom.setAttribute('class', this._type);
  	setTimeout(function(){
  		that._conDom.setAttribute('class', `${that._type} active`);
  	}, 10);
  	this._conDom.innerHTML = icon ? `<i class="icon-cross close_btn"></i><i class="${this._iconObj[type]} icon_flg"></i><span>${this._message}</span>` : `<i class="icon-cross close_btn"></i><span>${this._message}</span>`;
  	this._conDom.children[0].onclick = this.close.bind(this);
  	this._bodyDom.appendChild(this._conDom);
  }
  info(message, icon) {
  	if (icon) {
  		this._show(message, 'info', 1);
  	} else {
  		this._show(message, 'info', 0);
  	}
  }
  success() {

  }
  error() {

  }
  warning() {

  }
  close() {
  	const that = this;
  	if (!that._conDom) {
  		console.warn('当前无可关闭弹窗！');
  		return;
  	}
  	this._conDom.setAttribute('class', this._type);
  	setTimeout(function(){
  		that._bodyDom.removeChild(that._conDom);
  		that._conDom = null;
  	}, 500);
  }
}
const $alert = new Alert();
global.$alert = $alert;

// 全局mask
class Mask{
  constructor() {
    this._MaskDom = document.getElementById('vm_mask');
  }
  show() {
    this._MaskDom.setAttribute('class', 'active');
  }
  hide() {
    this._MaskDom.setAttribute('class', '');
  }
}
const mask = new Mask();

//device 设备类型判断
const device = {
  getType : function(o){
    return Object.prototype.toString.call(o).slice(8, -1)
  },

  isIos: function() {
    const u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
      // return "Android";
      return false
    } else if (u.indexOf('iPhone') > -1) { //苹果手机
      // return "iPhone";
      return true
    } else if (u.indexOf('iPad') > -1) { //iPad
      // return "iPad";
      return false
    } else if (u.indexOf('Windows Phone') > -1) { //winphone手机
      // return "Windows Phone";
      return false
    }else{
      return false
    }
  },

  isPC: function() { //是否为PC端
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  },

  browserType: function(){
    const userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
    const isOpera = userAgent.indexOf("Opera") > -1; // 判断是否Opera浏览器
    const isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; // 判断是否IE浏览器
    const isEdge = userAgent.indexOf("Edge") > -1; // 判断是否IE的Edge浏览器
    const isFF = userAgent.indexOf("Firefox") > -1; // 判断是否Firefox浏览器
    const isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; // 判断是否Safari浏览器
    const isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; // 判断Chrome浏览器
    if (isIE) {
      const reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      const fIEVersion = parseFloat(RegExp["$1"]);
      if(fIEVersion == 7) return "IE7"
      else if(fIEVersion == 8) return "IE8";
      else if(fIEVersion == 9) return "IE9";
      else if(fIEVersion == 10) return "IE10";
      else if(fIEVersion == 11) return "IE11";
      else return "IE7以下"// IE版本过低
    }
    if (isFF) return "FF";
    if (isOpera) return "Opera";
    if (isEdge) return "Edge";
    if (isSafari) return "Safari";
    if (isChrome) return "Chrome";
  }
}

export {
  message,
  mask,
  device,
}
