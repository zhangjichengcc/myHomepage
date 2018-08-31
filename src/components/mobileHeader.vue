<template>
	<div class="mobile_header">
		<div class="vm_login">
			
		</div>
		<!-- <router-link class="nv_item" to="/login">
			<i class="icon-user-tie" />
			<span>登录</span>
		</router-link> -->
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				
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
	.mobile_header {
		position: fixed;
	  top: 0;
	  z-index: 100;
	  left: 0;
	  width: 100vw;
	  height: 45px;
	  background-color: #fff;
	  border-bottom: #eee solid 1px;
	  .vm_login {
	  	width: 40px;
	    height: 40px;
	    position: absolute;
	    top: 2px;
	    right: 3px;
	    background-color: #eee;
	    border-radius: 50%;
	    background-image: url(../img/userIcon.jpg);
	    background-size: cover;
	  }
	}
	
</style>
