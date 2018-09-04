
// 将指定区域生成canvas/img
import html2canvas from 'html2canvas';
class MkCanvas{
	constructor() {
		this._dom = '';
	}
	_res(re) {
		html2canvas(this._dom).then(function(canvas) {
    	canvas.id = "mycanvas"; 
			if(re === 'canvas') {
    		return canvas;
			} else {
				const dataUrl = canvas.toDataURL();    
	      const newImg = document.createElement("img");    
	      newImg.src =  dataUrl;
	      return {
	      	url: dataUrl,
	      	img: newImg,
	      }
			}
    });
	}
	getCanvas(dom) {
		this._dom = dom || document.body;
		return this._res('canvas');
	}
	getImg(dom) {
		this._dom = dom || document.body;
		return this._res('image');
	}
}

const mkCanvas = new MkCanvas();

export {
	mkCanvas,
}