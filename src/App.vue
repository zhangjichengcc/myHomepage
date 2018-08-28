<template>
	<div>
		<vm-header />
		<transition name="fade" class="router">
			<router-view class="r" />
		</transition>
		<div id="vm_message" />
		<div id="vm_mask" />
	</div>
</template>
<script>
	import vmHeader from './components/header.vue';
	export default {
		data : function() {
			return {
				global: {
					userName: 'zhangjichengcc',
					psd: '39104930',
					login: false,
				}
			}
		},
		computed : {
			
		},
		methods : {
			
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
		height: 100%;
		padding-top: 52px;
		position: absolute;
		box-sizing: border-box;
		transition: transform .3s ease;
		transform: translateX(0);
	}
	.fade-enter-active {
		transform: translateX(-100%);
	}
	// .fade-enter, .fade-leave-active {
	// 	transform: translateX(-100%);
	// 	opacity: 0;
	// }
	.fade-enter-to, .fade-leave-active {
		transform: translateX(0);
		// opacity: 0;
	}
	.fade-leave-to {
		transform: translateX(100%);
		// opacity: 0;
	}
	.router {
		width: 100%;
		/*transform: translateX(-300px);*/
		/*position: absolute;*/
		/*transition: all .9s cubiz-bezier(.55, 0, .1, 1);*/
	}
</style>