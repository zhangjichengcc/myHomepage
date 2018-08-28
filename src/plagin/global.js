/**
 * create by zhangjicheng
 * 定义全局方法
 **/

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


export {
	message,
	mask,
}
