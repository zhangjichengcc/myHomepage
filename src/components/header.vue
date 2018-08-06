<template>
	<div>
		<div class="header">
			<nv-menu :showm="menuShow"></nv-menu>
			<div class="user_img">aa</div>
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
	}
</style>
