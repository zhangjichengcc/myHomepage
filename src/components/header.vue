<template>
	<div>
		<div class="header">
			<div class="logo">
				<svg viewBox="0 0 200 51">
			    <symbol id="s-text">
		        <text text-anchor="middle" x="70" y="44">ZJC</text>
			    </symbol>
			    <g class = "g-ants">
		        <use xlink:href="#s-text" class="text-copy"></use>
		        <use xlink:href="#s-text" class="text-copy"></use>
		        <use xlink:href="#s-text" class="text-copy"></use>
		        <use xlink:href="#s-text" class="text-copy"></use>
		        <use xlink:href="#s-text" class="text-copy"></use>
			    </g>
				</svg>
			</div>
			<nv-menu :showm="menuShow"></nv-menu>
			<!-- <div class="user_img">aa</div> -->
		</div>
	</div>
</template>
<script>
	import nvMenu from './menu.vue';
	export default {
		data: function() {
			return {
				coverShow : false,
				menuShow : false
			}
		},
		methods: {
			showMenu: function() {
				this.coverShow = true;
				this.menuShow = true;
			},
			hideMenu: function() {
				this.coverShow = false;
				this.menuShow = false;
			},
		},
		components: {
      nvMenu
    },
	}
</script>
<style lang="sass">
	@import '../css/default.scss';
	.header {
		position: fixed;
		width: 100%;
		border-bottom: rgba(238, 238, 238, 0.37) solid 1px;
		float: right;
		z-index: 10;
		padding: 10px;
		box-sizing: border-box;
		background-color: $bg_main_color;
		.logo {
			width: 200px;
			height: 51px;
			position: absolute;
			left: 0;
			top: 0;
			svg {
		    display: block;
		    font: 46px 'Montserrat';
		    width: 200px;
		    height: 51px;
		    letter-spacing: 10px;
		    margin: 0 auto;
			}
			.text-copy {
		    fill: none;
		    stroke: white;
		    stroke-dasharray: 6% 29%;
		    stroke-width: 2px;
		    stroke-dashoffset: 0%;
		    animation: stroke-offset 5.5s infinite linear;
			}
			.text-copy:nth-child(1){
		    stroke: #4D163D;
		    animation-delay: -1;
			}
			.text-copy:nth-child(2){
		    stroke: #840037;
		    animation-delay: -2s;
			}
			.text-copy:nth-child(3){
		    stroke: #BD0034;
		    animation-delay: -3s;
			}
			.text-copy:nth-child(4){
		    stroke: #BD0034;
		    animation-delay: -4s;
			}
			.text-copy:nth-child(5){
		    stroke: #FDB731;
		    animation-delay: -5s;
			}
			@keyframes stroke-offset{
			  100% {stroke-dashoffset: -35%;}
			}
			// background-image: url(../img/logo.png);
			// background-repeat: no-repeat;
			// background-size: auto 80px;
			// background-position: left center;
		}
	}
</style>
