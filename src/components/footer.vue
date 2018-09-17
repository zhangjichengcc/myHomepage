<template>
	<div class="vm_footer">
		<router-link class="nv_item" to="/">
			<i class="icon-home" />
			<span>首页</span>
		</router-link>
		<router-link class="nv_item" to="/login">
			<i class="icon-user-tie" />
			<span>登录</span>
		</router-link>
		<router-link class="nv_item" to="/disboard">
			<i class="icon-stats-bars" />
			<span>仪表盘</span>
		</router-link>
		<router-link class="nv_cool" to="/about">
			<i class="icon-newspaper" />
			<span>关于</span>
		</router-link>
	</div>
</template>
<script>
	// import { device, message, $alert } from './plagin/global.js';
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
    },
	}
</script>
<style lang="sass">
	@import '../css/default.scss';
	.vm_footer {
		position: fixed;
    width: 100vw;
    height: 45px;
    bottom: 0;
    left: 0;
		background-color: #fff;
		font-size: 0;
		border-top: #eee solid 1px;
		>a {
			color: $font-color;
			display: inline-block;
			width: 25%;
			height: 45px;
			text-align: center;
			font-size: 12px;
			transition: all ease .3s;
			&.router-link-exact-active {
				color: #faad14;
			}
			>i {
				display: block;
		    padding-top: 5px;
		    font-size: 20px;
			}
			>span {
				display: inline-block;
				padding-top: 1px;
			}
		}
	}
</style>
