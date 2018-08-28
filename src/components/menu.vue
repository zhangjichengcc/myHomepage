<template>
	<div class="nav">
		<router-link class="nv_item" to="/">首页</router-link>
		<router-link class="nv_item" to="/login">登录</router-link>
		<router-link class="nv_item" to="/disboard">仪表盘</router-link>
		<router-link class="nv_item" to="/createtopic">发布话题</router-link>
		<router-link class="nv_item" to="/about">关于</router-link>
		<router-link class="nv_item" to="/undefined">404</router-link>
		<div class="nv_item" v-enter>
			<span>Games</span>
			<div class="link_body">
				<router-link class="link_child" to="/login">登录</router-link>
				<a class="nv_item" href="../../myHomepage/games/index.html">射箭</a>
				<router-link class="link_child" to="/undefined">射箭</router-link>
				<router-link class="link_child" to="/undefined">404</router-link>
				<router-link class="link_child" to="/undefined">404</router-link>
				<router-link class="link_child" to="/undefined">404</router-link>
			</div>
		</div>
		<!-- <a class="nv_item" href="../../myHomepage/games/index.html">Games</a> -->
	</div>
</template>
<script>
	export default {
		props : ['showm'],
		mounted : function() {
			if (localStorage.cnode_accesstoken) {
				// 存在本地游accesstoken记录，自动登录
				const userInfo = {
					'name' : localStorage.cnode_name,
					'avatar' : localStorage.cnode_avatar,
					'id' : localStorage.cnode_id,
					'accesstoken' : localStorage.cnode_accesstoken
				}
				this.$store.dispatch('isLogin');
				this.$store.dispatch('setUserInfo', userInfo);
			}
		},
		computed : {
			loginStatus() {
				return this.$store.getters.getLoginState;
			},
			messageCount() {
				return this.$store.getters.getNotMessageCount;
			},
			userInfo() {
				return this.$store.getters.getUserInfo;
			}
		},
		methods : {
			gotoUserhome : function() {
				this.$router.push({ name: 'userhome', params: { username: this.userInfo.loginname }});
			},
			signOut : function() {
				// 退出登录清除localStorage以及设置vuex的登录状态和用户信息
				localStorage.removeItem('cnode_name');
				localStorage.removeItem('cnode_avatar');
				localStorage.removeItem('cnode_id');
				localStorage.removeItem('cnode_accesstoken');
				const userInfo = {
					'name' : '',
					'avatar' : '',
					'id' : '',
					'accesstoken' : ''
				}
				this.$store.dispatch('signOut');
				this.$store.dispatch('setUserInfo', userInfo);
			}
		},
		directives: {
	    enter: {
	      inserted: function (el) {
	        el.onmouseenter = () => {
	        	console.log('aaaa');
	        	el.children[1].setAttribute('class', 'link_body active');
	        }
	        el.onmouseleave = () => {
	        	console.log('aaaa');
	        	el.children[1].setAttribute('class', 'link_body');
	        }
	      }
	    }
	  }
	}
</script>
<style lang="sass">
  .nav {
	  float: right;
	  font-size: 0;
	}
	.nav .nv_item {
	  display: inline-block;
	  position: relative;
	  background: -moz-linear-gradient(center top, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.34) 100%) repeat scroll 0 0 transparent;
	  border: 1px solid #121212;
	  border-right: none;
	  box-shadow: 0 2px 3px rgba(255, 255, 255, 0.05) inset, 0 1px 0 rgba(255, 255, 255, 0.1);
	  color: #777;
	  cursor: pointer;
	  font-size: 14px;  /*line-height: 21px;*/
	  padding: 5px 20px;
	  text-decoration: none;
	  text-shadow: 0 -1px #0f0f0f;
	  vertical-align: top;
	  -webkit-transition: all .5s ease;
	  -moz-transition: all .5s ease;
	  -ms-transition: all .5s ease;
	  -o-transition: all .5s ease;
	  transition: all .5s ease;
	  -webkit-touch-callout: none;
	  -webkit-user-select: none;
	  -khtml-user-select: none;
	  -moz-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
	  outline: none;
	  .link_body {
	  	position: absolute;
	    width: 100%;
	    left: 0;
	    text-align: center;
	    background-color: #222930;
	    border: 1px solid #121212;
	    border-top: 0;
	    color: #777;
		  border-radius: 0 0 4px 4px;
		  box-shadow: -1px 2px 3px rgba(255, 255, 255, 0.05) inset, 1px 1px 0 rgba(255, 255, 255, 0.1);
		  top: 0px;
    	transform: translateY(-100%);
    	transition: all ease .3s;
    	opacity: 0;
    	&.active {
    		transform: translateY(0);
	    	top: 31px;
    		opacity: 1;
    	}
	    .link_child {
	    	color: #777;
	    	display: block;
		    padding: 5px;
		    border-bottom: 1px solid #121212;
		    &:last-child {
		    	border-bottom: 0;
		    }
	    }
	  }
	}
	.nav .nv_item:first-child {
	  border-radius: 6px 0 0 6px;
	}
	.nav .nv_item:last-child {
	  border-radius: 0 6px 6px 0;
	  border-right: 1px solid #121212;
	}
	.nav .nv_item.highlight,
	.nav .nv_item.router-link-exact-active {
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 rgba(255, 255, 255, 0.1);
	  background: -moz-linear-gradient(center top, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.44) 100%) repeat scroll 0 0 transparent;
	  color: #ccc;
	}
</style>