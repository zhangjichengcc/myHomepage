<template>
	<div>
		<div v-if="this.$store.state.isPC" class="home_pc">
			<div class="banner">
				<div id="particles-banner" class="banner_bg"/>
				<div class="banner_title">
					<div class="user_icon" :style="{backgroundImage: `url(${require('../img/adminIcon.png')})`}" />
					<p>welcome to my homepage</p>
					<p>I'm Zhang jicheng</p>
				</div>
			</div>
		</div>
		<div v-else class="home_mobile">
			<!-- <div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" :style="{backgroundImage: `url(${require('../img/adminIcon.png')})`}" />
		      <div class="swiper-slide" :style="{backgroundImage: `url(${require('../img/adminIcon.png')})`}" />
		      <div class="swiper-slide" :style="{backgroundImage: `url(${require('../img/adminIcon.png')})`}" />
		    </div>
		    <div class="swiper-pagination"></div>
		  </div> -->
		  <div class="banner">
		  	<div class="banner_body">
			  	<div class="user_icon" :style="{backgroundImage: `url(${require('../img/adminIcon.png')})`}" />
			  	<p class="banner_info">
			  		<span class="u_name">zhang jicheng</span>
			  		<span>web前端开发</span>
			  		<i class="banner_info_point"/> 
			  		<span>6666666666</span>
			  	</p>
		  	</div>
		  </div>
		</div>
	</div>
</template>
<script>
	import Swiper from '../plagin/swiper/js/swiper.min.js';
	import particles from 'particles.js'
	export default {
		data: function() {
			return {
				_login: true,
				swiper: null,
			}
		},
		created: function(){
			// For Debug
			global.vm = this;
			console.log('isPC', this.$store.state.isPC);
		},
		mounted: function() {
			// this.initSwiper();
			this.initBanner();
		},
		computed: {
			
		},
		methods: {
			initSwiper(){
				const mySwiper = new Swiper ('.swiper-container', {
			    spaceBetween: 0,
			    loop: true,
		      centeredSlides: true,
		      autoplay: {
		        delay: 1000,
		        disableOnInteraction: false,
		      },
		      pagination: {
		        el: '.swiper-pagination',
		        clickable: true,
		      },
			  })  
			  this.$set(this, 'swiper', mySwiper);      
			},
			initBanner() {
				particlesJS('particles-banner',
				  {
					  "particles": {
					    "number": {
					      "value": 200,//数量
					      "density": {
					        "enable": true, //启用粒子的稀密程度
					        "value_area": 800 //区域散布密度大小
					      }
					    },
					    "color": {
					      "value": "#fff" //原子的颜色
					    },
					    "shape": {
					      "type": "circle", //原子的形状 "circle" ,"edge" ,"triangle" ,"polygon" ,"star" ,"image" ,["circle", "triangle", "image"]
					      "stroke": {
					        "width": 0, //原子的宽度
					        "color": "#362cff" //原子颜色
					      },
					      "polygon": {
					        "nb_sides": 5 // 原子的多边形边数
					      },
					      "image": {
					        "src": "img/github.svg", // 原子的图片可以使用自定义图片 "assets/img/yop.svg" , "http://mywebsite.com/assets/img/yop.png"
					        "width": 100, //图片宽度
					        "height": 100 //图片高度
					      }
					    },
					    "opacity": {
					      "value": 1, //不透明度
					      "random": true, //随机不透明度
					      "anim": {
					        "enable": true, //渐变动画
					        "speed": 1, // 渐变动画速度
					        "opacity_min": 0, //渐变动画不透明度
					        "sync": true 
					      }
					    },
					    "size": {
					      "value": 10, //原子大小
					      "random": true, // 原子大小随机
					      "anim": {
					        "enable": false, // 原子渐变
					        "speed": 4, //原子渐变速度
					        "size_min": 0.3, 
					        "sync": false
					      }
					    },
					    "line_linked": {
					      "enable": false, //连接线
					      "distance": 150, //连接线距离
					      "color": "#ffffff", //连接线颜色
					      "opacity": 0.4, //连接线不透明度
					      "width": 1 //连接线的宽度
					    },
					    "move": {
					      "enable": true, //原子移动
					      "speed": 1, //原子移动速度
					      "direction": "none", //原子移动方向   "none" ,"top" ,"top-right" ,"right" ,"bottom-right" ,"bottom" ,"bottom-left" ,"left" ,"top-left"
					      "random": true, //移动随机方向
					      "straight": false, //直接移动
					      "out_mode": "out", //是否移动出画布
					      "bounce": false, //是否跳动移动
					      "attract": { 
					        "enable": false, // 原子之间吸引
					        "rotateX": 600, //原子之间吸引X水平距离
					        "rotateY": 600  //原子之间吸引Y水平距离
					      }
					    }
					  },
					  "interactivity": {
					    "detect_on": "canvas", //原子之间互动检测 "canvas", "window"
					    "events": {
					      "onhover": {
					        "enable": true, //悬停
					        "mode": "bubble" //悬停模式      "grab"抓取临近的,"bubble"泡沫球效果,"repulse"击退效果,["grab", "bubble"]
					      },
					      "onclick": {
					        "enable": false,  //点击效果
					        "mode": "repulse"  //点击效果模式   "push" ,"remove" ,"bubble" ,"repulse" ,["push", "repulse"]
					      },
					      "resize": true // 互动事件调整
					    },
					    "modes": {
					      "grab": {
					        "distance": 100, //原子互动抓取距离
					        "line_linked": { 
					          "opacity": 0.8  //原子互动抓取距离连线不透明度
					        }
					      },
					      "bubble": {
					        "distance": 250, //原子抓取泡沫效果之间的距离
					        "size": 4, // 原子抓取泡沫效果之间的大小
					        "duration": 2, //原子抓取泡沫效果之间的持续事件
					        "opacity": 1, //原子抓取泡沫效果透明度
					        "speed": 3 
					      },
					      "repulse": {
					        "distance": 400, //击退效果距离
					        "duration": 0.4 //击退效果持续事件
					      },
					      "push": {
					        "particles_nb": 4 //粒子推出的数量
					      },
					      "remove": {
					        "particles_nb": 2
					      }
					    }
					  },
					  "retina_detect": true
					},
				);
			}
		},
		components : {
		}
	}
</script>
<style lang="sass">
	// @import '../plagin/swiper/css/swiper.min.css';
	$border-color: rgba(54, 191, 196, .7);
	.home_pc {
		.banner {
			position: relative;
			height: 50vw;
			max-height: 70vh;
			background-color: #000;
			text-align: center;
			.banner_bg {
				height: 100%;
			}
			.banner_title {
				width: 60%;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%); 
				// opacity: .8;
				.user_icon {
					width: 3rem;
					height: 3rem;
					position: relative;
					display: inline-block;
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
					border: rgba(255, 255, 255, .3) solid 3px;
					border-radius: 5px;
					&:before,
					&:after {
						content: '';
						display: blick;
						position: absolute;
						width: 30%;
						height: 30%;
					}
					&:before {
						top: -10px;
						left: -10px;
						border-top: $border-color solid 3px;
						border-left: $border-color solid 3px;
					}
					&:after {
						right: -10px;
						bottom: -10px;
						border-right: $border-color solid 3px;
						border-bottom: $border-color solid 3px;
					}
				}
				p {
					text-align: center;
					font-size: 1.1rem;
					&:nth-child(2) {
						&:before,
						&:after {
							content: '';
							display: inline-block;
							width: 2rem;
							height: 3px;
							vertical-align: middle;
							background-color: #fff;
							margin: 0 5px;
						}
					}
					&:nth-child(3) {
						font-size: 1.2rem;
					}
				}
			}
		}
	}
	// for mobile
	.mobile_view {
		background-color: #fff;
	}
	.home_mobile {
		.banner {
			width: 100%;
			height: 65vw;
			position: absolute;
			background-image: url('../img/mobile_banner.jpg');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			&:before {
				content: '';
				display: block;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, .3);
			}
			.banner_body {
				position: absolute;
				width: 100%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				text-align: center;
				.user_icon {
					display: inline-block;
					width: 20vw;
					height: 20vw;
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
					box-shadow: rgba(0, 0, 0, .3) 1px 1px 10px 3px;
					border-radius: 50%;
				}
				.banner_info {
					display: block;
					text-align: center;
					color: #fff;
					.u_name {
						display: block;
						padding: 13px 0 3px;
					}
					.banner_info_point {
						display: inline-block;
				    width: 5px;
				    height: 5px;
				    background-color: #fff;
				    border-radius: 50%;
				    margin: 0 5px;
				    vertical-align: middle;
					}
					span {
						display: inline-block; 	
					}
				}
			}
		}
		.swiper-container {
			width: 100%;
	    height: 210px;
			height: 56vw;
		}
		.swiper-slide {
	    text-align: center;
	    font-size: 18px;
	    background: #fff;
	    /* Center slide text vertically */
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    -webkit-justify-content: center;
	    justify-content: center;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	    background-repeat: no-repeat;
	    background-size: cover;
	    background-position: center;
	  }
	}
</style>