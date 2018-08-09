<template>
  <div class="bg">
    <tips></tips>
    <div class="login_con">
      <div class="login_main">
        <span class="user_icon"></span>
        <span class="input_item"><i class="icon-user"></i><input placeholder="username" type="" name=""></span>
        <span class="input_item"><i class="icon-lock" :style="{left: '11px'}"></i><input placeholder="password" type="" name=""></span>
        <span class="log_btn" @click="login">登录</span>
        <span class="log_info">其实登录了也并没什么卵用。。。</span>
      </div>
      <!-- <div class="login_loading">
      	<div class="loader">
					<div class="loader-inner ball-clip-rotate-multiple">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<p>认证中...</p>
      </div> -->
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import nvHeader from '../components/header.vue';
  import tips from '../components/tips.vue';
  export default {
    data : function(){
      return {
        strToken : ''
      }
    },
    methods : {
      login : function() {
        if (this.strToken.trim() === '') {
          this.$store.dispatch('setTipShow', true);
          this.$store.dispatch('setTipContent', 'accessToken不能为空！');
          return;
        }
        const rqdata = {
          'accesstoken' : this.strToken.trim()
        }
        axios.post('https://cnodejs.org/api/v1/accesstoken?accesstoken='+ this.strToken)
        .then((response_info) => {
          if (response_info.data.success) {
            const data = response_info.data;
            // 登入成功改变isLogin的状态为true
            this.$store.dispatch('isLogin');
            const userInfo = {
              'name' : data.loginname,
              'avatar' : data.avatar_url,
              'id' : data.id,
              'accesstoken' : this.strToken.trim()
            }
            this.$store.dispatch('setUserInfo', userInfo);
            // 登录成功记录账户信息存放至localStorage已备下次自动登录
            localStorage.setItem("cnode_accesstoken", userInfo.accesstoken);
            localStorage.setItem("cnode_avatar", userInfo.avatar);
            localStorage.setItem("cnode_id", userInfo.id);
            localStorage.setItem("cnode_name", userInfo.name);
            // 获取未读消息，并设置vuex
            axios.get('https://cnodejs.org/api/v1/message/count?accesstoken='+ this.strToken.trim())
            .then((response_count) => {
              if (response_count.data.success) {
                this.$store.dispatch('setNotMessageCount', response_count.data.data);
                window.history.back();
              }
            })
            .catch(function(error) {
              console.log(error);
            });
          }else{
            // 失败
          }
        })
        .catch((error) => {
          console.log(error);
          this.$store.dispatch('setTipShow', true);
          this.$store.dispatch('setTipContent', '错误的accessToken!');
        })
      }
    },
    components : {
      nvHeader,
      tips
    }
  }
</script>
<style lang="sass">
  @import '../css/default.scss';
  @import '../css/common.scss';
  @import '../css/style.css'; 
  .bg {
    background-color: #eee;
    background-image: url(../img/bg-image.jpg);
    background-position: center;
    background-size: cover;
  }
  .login_con {
    @include cont-center-x;
    // width: 240px;
    height: 440px;
    top: 50%;
    margin-top: -180px;
    .login_main {
      width: 320px;
      height: 440px;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
      transition-property: transform,opacity,box-shadow,top,left;
      transition-duration: .5s;
      transform-origin: 161px 100%;
      transform: rotateX(0deg);
      background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgba(0, 0, 0, .8) 100%);
      .user_icon {
        display: block;
        width: 90px;
        height: 90px;
        margin: 0 auto;
        background-color: #eee;
        background-image: url(../img/userIcon.jpg);
        background-size: cover;
    		background-position: center;
        border-radius: 50%;
      }
      .input_item {
  			display: block;
  			position: relative;
    		width: 100%;
    		margin-top: 10px;
      	>i {
      		position: absolute;
			    font-size: 20px;
			    color: #fff;
			    left: 8px;
    			top: 13px;
      	}
      	>input {
      		font-size: 16px;
      		box-sizing: border-box;
      		color: #61BFFF;
    			width: 100%;
      		background-color: rgba(255,255,255,.1);
      		padding: 10px 35px;
			    border-top: 2px solid rgba(57, 61, 82, 0);
			    border-bottom: 2px solid rgba(57, 61, 82, 0);
			    border-right: none;
			    border-left: none;
			    border-radius: 10px;
      	}
      }
      .log_btn {
      	display: inline-block;
      	border-radius: 50px;
		    background: transparent;
		    padding: 10px 50px;
		    border: 2px solid #4FA1D9;
		    color: #4FA1D9;
		    text-transform: uppercase;
		    font-size: 11px;
		    transition: all ease .3s;
		    margin-top: 70px;
		    cursor: pointer;
		    &:hover {
		    	padding: 12px 52px;
		    }
      }
      .log_info {
      	color: rgba(211, 215, 247, 0.45);
		    font-size: 10px;
		    display: block;
		    position: absolute;
		    bottom: 20px;
      }
    }
    .login_loading {
    	box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
	    display: none;
	    background: #35394a;
	    background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
	    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(53, 57, 74, 0)', endColorstr='rgb(0, 0, 0)',GradientType=1 );
	    position: absolute;
	    left: 0;
	    right: 90px;
	    margin: auto;
	    width: 100px;
	    color: white;
	    text-transform: uppercase;
	    letter-spacing: 1px;
	    text-align: center;
	    padding: 20px 70px;
	    top: 200px;
	    bottom: 0;
	    height: 70px;
	    opacity: 0;
    }
  }
</style>