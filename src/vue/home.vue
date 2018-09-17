<template>
	<div>
		<div v-if="this.$store.state.isPC" class="home_pc">
			<div class="banner">
				<p>NOT YET OPEN 2018.8.7
					<span>IN DEVELOPMENT</span>
				&mdash; PLEASE LOOK FORWARD &mdash;</p>
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
			  	<div class="user_icon" :style="{backgroundImage: `url(${require('../img/adminIcon.png')})`}"></div>
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
			}
		},
		components : {
		}
	}
</script>
<style lang="sass">
	@import '../plagin/swiper/css/swiper.min.css';
	.home_pc {
		.banner {
			text-align: center;
			padding: 40px 0;
			p {
				width: 80%;
				color: rgba(238, 238, 238, 0.53);
		    text-transform: uppercase;
		    letter-spacing: 1px;
		    display: inline-block;
		    border: 4px double rgba(255,255,255,.25);
		    border-width: 4px 0;
		    padding: 30px 0;
			  span {
			    font: 700 3em "Oswald", sans-serif;
			    letter-spacing: 0;
			    padding: .25em 0 .325em;
			    display: block;
			    margin: 0 auto;
			    text-shadow: 0 0 80px rgba(255,255,255,.5);
					/* Clip Background Image */
			    background: url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png) repeat-y;
			    -webkit-background-clip: text;
			    background-clip: text;
					/* Animate Background Image */
			    -webkit-text-fill-color: transparent;
			    -webkit-animation: aitf 80s linear infinite;
					/* Activate hardware acceleration for smoother animations */
			    -webkit-transform: translate3d(0,0,0);
			    -webkit-backface-visibility: hidden;
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
	/* Animate Background Image */
	@-webkit-keyframes aitf {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
	}
</style>