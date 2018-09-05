/**
 * create by zhangjicheng
 * 定义全局方法 预加载
 **/

// 时间方法
const date = new function(){
	const now = new Date();
	/**
	 * 格式化时间
	 * create by zhangjicheng 2018/01/29
	 * @param  {time} 时间
	 * @param  {cFormat} 格式
	 * @return {String} 字符串
	 *
	 * @example _getDate('formatDate'||'date'||'time', {Date} ,'y-m-d h:i:s') // -> 2018-01-29 00:00:00
	 */
	const _getDate = function(type, time, cFormat){
		if(['formatDate','date','time'].indexOf(type) < 0) return;
		const _this = time || now;
		const _cFormat = {
			'formatDate': 'y-m-d h:i:s',
			'date': 'y-m-d',
			'time': 'h:i:s',
		}
		const _type = {
			'formatDate': {
				'y': _this.getFullYear(),
				'm': _this.getMonth()+1,
				'd': _this.getDate(),
				'h': _this.getHours(),
				'i': _this.getMinutes(),
				's': _this.getSeconds(),
			},
			'date': {
				'y': _this.getFullYear(),
				'm': _this.getMonth()+1,
				'd': _this.getDate(),
			},
			'time': {
				'h': _this.getHours(),
				'i': _this.getMinutes(),
				's': _this.getSeconds(),
			}
		}
		const _fmt = _type[type];
		let _format = cFormat || _cFormat[type];
		for(let i in _fmt){
			const _t = _fmt[i].toString().replace(/^([0-9]{1})$/,'0$1');
			_format = _format.replace(i, _t);
		}
		return _format;
	}
	const _addDay= function(time, days){
		if(!time) return;
		return new Date(time.getTime()+days*24*60*60*1e3);
	}
	return {
		_getDate: _getDate,
		_addDay: _addDay,
	}
}
Date.prototype.$formatDate = function(cFormat){
	console.log('@param  {cFormat} 格式, "y-m-d h:i:s"');
	return date._getDate('formatDate', this, cFormat);
};
Date.prototype.$getDate = function(cFormat){
	console.log('@param  {cFormat} 格式, "y-m-d"');
	return date._getDate('date', this, cFormat);
};
Date.prototype.$getTime = function(cFormat){
	console.log('@param  {cFormat} 格式, "h:i:s"');
	return date._getDate('time', this, cFormat);
};
Date.prototype.$addDay = function(days){
	console.log('@param  {days} 天数');
	return date._addDay(this, days);
};

// dom =>> string
const nodeToString = function(node) {
  let tmpNode = document.createElement( "div" );
  tmpNode.appendChild( node.cloneNode( true ) );
  const str = tmpNode.innerHTML;
  tmpNode = node = null; // prevent memory leaks in IE
  return str;
}
global.$nodeToString = nodeToString;
