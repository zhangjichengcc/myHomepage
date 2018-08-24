// 定义全局方法

// 全局信息通知
class Message{
	constructor(n) {
		this.title = 'show message';
		this.delay = 1200;
		this.icon = '';
	}
	setTitle(t) {
		this.title = t;
	}
	setTime(t) {
		this.delay = t;
	}
	setIcon(type) {
		const obj = {
			success: '<i class="icon-wink2"></i>',
			warning: '<i class="icon-neutral2"></i>',
			error: '<i class="icon-crying2"></i>',
		}
		this.icon = obj[type] || '';
	}
	show(title = 'show message', delay = 1200) {
		title && this.setTitle(title);
		delay && this.setTime(delay);
		const msgDom = document.getElementById('vm_message');
		msgDom.innerHTML = `${this.icon}${this.title}`;
		msgDom.setAttribute('class', 'active');
		setTimeout(() => {
			msgDom.setAttribute('class', '');
		}, this.delay);
	}
	info(title, delay) {
		this.setIcon();
		this.show(title, delay);
	}
	success(title, delay) {
		this.setIcon('success');
		this.show(title, delay);
	}
	error(title, delay) {
		this.setIcon('error');
		this.show(title, delay);
	}
	warning(title, delay) {
		this.setIcon('warning');
		this.show(title, delay);
	}
}

const message = new Message();

export {
	message,
}
