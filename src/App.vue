<template>
	<div id="vm_body">
		<vm-header />
		<transition :name="transitionName" class="router">
			<router-view class="r" />
		</transition>
		<div id="vm_message" />
		<div id="vm_mask" />
	</div>
</template>
<script>
	import vmHeader from './components/header.vue';
	// 路由名称排序，用于生成过渡动画
	const routerArr = ['homePage', 'login', 'disboard', 'shejiao', 'about', 'noPage', 'games'];
	export default {
		data : function() {
			return {
				// global: {
				// 	userName: 'zhangjichengcc',
				// 	psd: '39104930',
				// 	// login: false,
				// },
				transitionName: 'fade',
			}
		},
		created() {
			// for debug
			global.APP = this;
		},
		computed : {
	
		},
		methods : {
			
		},
		watch: {
			// 监听路由变化，动态改变过渡动画
			$route(to, from) {
				const f_idx = routerArr.indexOf(from.name);
				const t_idx = routerArr.indexOf(to.name);
				if (t_idx < 0) {
					this.$set(this, 'transitionName', 'fade');
					return;
				}
				if (t_idx > f_idx) {
					this.$set(this, 'transitionName', 'slide-left');
				} else {
					this.$set(this, 'transitionName', 'slide-right');
				}
			}
		},
		components : {
			vmHeader,
		}
	}
</script>
<style lang="sass">
	@import './css/common.scss';
	@import './css/style.css';
	.r {
		width: 100%;
		min-height: 100vh;
		padding-top: 52px;
		position: relative;
		box-sizing: border-box;
		transform: translateX(0);
		transition: transform .3s ease;
	}
	.fade-enter-active {
		opacity: 0;
	}
	.fade-enter-to, .fade-leave-active {
		opacity: 1;
	}
	.fade-leave-to {
		opacity: 0;
	}
	.router {
		width: 100%;
	}

	.slide-left-enter-active,
	.slide-right-leave-to {
		position: absolute;
		transform: translateX(100%);
	}
	.slide-left-leave-active,
	.slide-right-leave-active,
	.slide-left-enter-to,
	.slide-right-enter-to {
		position: absolute;
		transform: translateX(0);
	}
	.slide-left-leave-to,
	.slide-right-enter-active {
		position: absolute;
		transform: translateX(-100%);
	}
</style>