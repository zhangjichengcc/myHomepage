<template>
  <div class="bg">
    <tips></tips>
    <div class="login_con">
      <div class="login_main" :class="{active: classControl.active1, 'move_left': classControl.active2}">
        <span class="user_icon" :style="{ backgroundImage: userIcon }"></span>
        <span class="input_item">
          <i class="icon-user" />
          <input v-if="$store.state.isPC" v-focus placeholder="username" @keyup="inputUserName" v-model="display.userName" type="" name="">
          <input v-else v-focus placeholder="username" @keyup="inputUserName" v-model="display.userName" type="" name="">
        </span>
        <span class="input_item">
          <i class="icon-lock" :style="{left: '11px'}" />
          <input placeholder="password" @keyup.enter="login" v-model="display.userPsd" :type="showPsd ? '' : 'password'" name="">
          <i :class="['icon_eye', showPsd ? 'icon-eye' : 'icon-eye-blocked']" @mouseenter="checkShowPsd(1)" @mouseleave="checkShowPsd(0)"/>
        </span>
        <span class="log_btn" @click="login">登录</span>
        <span class="getPsd_btn" @click="getPsd">忘记密码</span>
        <span class="log_info" @click="psdAlert">其实登录了也并没什么卵用。。。</span>
      </div>
      <div class="login_loading" :class="{active: classControl.active2}">
      	<div class="loader">
					<div class="loader_inner">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
				<p>认证中...</p>
      </div>
      <div class="psd_getter">
        aaa
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import nvHeader from '../components/header.vue';
  import tips from '../components/tips.vue';
  import { message } from '../plagin/global.js';
  // 导入登陆信息
  import { userLoginInfo } from '@mock/login.js';

  export default {
    data : function(){
      return {
        strToken : '',
        loadingTime: 3000,
        classControl: {
          active1: false,
          active2: false,
          adminName: false,
        },
        // 请求满足的登陆数据
        userInfo: {
          userName: null,
          userPsd: null,
          icon: null,
        },
        // 记录输入的登陆数据
        display: {
          userName: null,
          userPsd: null,
          icon: null,
        },
        // 默认密码不可见
        showPsd: false,
        test: '',
      }
    },
    created: function () {
      // for debug
      global.vm = this;
    },
    methods : {
      login : function() {
        const { userInfo, display } = this;
        const infoArr = [['用户名不能为空！','密码不能为空！'], '该用户名不存在！', '密码错误！', '登陆成功！'];
        const that = this;
        let infoKey = 0;
        if (display.userName && display.userPsd) {
          if (!userInfo.userName) {
            infoKey = 1;
          } else {
            if (display.userPsd === userInfo.userPsd) {
              infoKey = 3;
            } else {
              infoKey = 2;
            }
          }
        // 当用户名或密码为空时不做校验，直接拦截 
        } else {
          if (display.userName) {
            message.warning(infoArr[infoKey][1]);
          } else {            
            message.warning(infoArr[infoKey][0]);
          }
          return;
        }
        this.animate(1);
        setTimeout(() => {
          that.animate(0);
          if (infoKey === 1) {
            message.error(infoArr[infoKey]);
          } else if (infoKey === 2) {
            message.error(infoArr[infoKey]);
          } else if (infoKey === 3) {
            message.success(infoArr[infoKey]);
            this.loginSuc();
          } else {
            message.warning('未知错误！');
          }
        }, 5000);


        // if (this.strToken.trim() === '') {
        //   this.$store.dispatch('setTipShow', true);
        //   this.$store.dispatch('setTipContent', 'accessToken不能为空！');
        //   return;
        // }
        // const rqdata = {
        //   'accesstoken' : this.strToken.trim()
        // }
        // axios.post('https://cnodejs.org/api/v1/accesstoken?accesstoken='+ this.strToken)
        // .then((response_info) => {
        //   if (response_info.data.success) {
        //     const data = response_info.data;
        //     // 登入成功改变isLogin的状态为true
        //     this.$store.dispatch('isLogin');
        //     const userInfo = {
        //       'name' : data.loginname,
        //       'avatar' : data.avatar_url,
        //       'id' : data.id,
        //       'accesstoken' : this.strToken.trim()
        //     }
        //     this.$store.dispatch('setUserInfo', userInfo);
        //     // 登录成功记录账户信息存放至localStorage已备下次自动登录
        //     localStorage.setItem("cnode_accesstoken", userInfo.accesstoken);
        //     localStorage.setItem("cnode_avatar", userInfo.avatar);
        //     localStorage.setItem("cnode_id", userInfo.id);
        //     localStorage.setItem("cnode_name", userInfo.name);
        //     // 获取未读消息，并设置vuex
        //     axios.get('https://cnodejs.org/api/v1/message/count?accesstoken='+ this.strToken.trim())
        //     .then((response_count) => {
        //       if (response_count.data.success) {
        //         this.$store.dispatch('setNotMessageCount', response_count.data.data);
        //         window.history.back();
        //       }
        //     })
        //     .catch(function(error) {
        //       console.log(error);
        //     });
        //   }else{
        //     // 失败
        //   }
        // })
        // .catch((error) => {
        //   console.log(error);
        //   this.$store.dispatch('setTipShow', true);
        //   this.$store.dispatch('setTipContent', '错误的accessToken!');
        // })
      },
      loginSuc: function() {
        const { userInfo } = this;
        const now = new Date().getTime();
        const params = {
          userName: userInfo.userName || null,
          userPsd: userInfo.userPsd || null,
          icon: userInfo.icon || null,
          id: now,
        }
        this.$store.dispatch('isLogin');
        this.$store.dispatch('setUserInfo', params);
        this.$router.push('noPage');
      },
      inputUserName: function() {
        const { userName } = this.display;
        for (let key in userLoginInfo) {
          const item = userLoginInfo[key];
          if (userName === item.userName) {
            this.$set(this, 'userInfo', item);
            return;
          }
        }
        this.$set(this, 'userInfo', {});
        // if (userName === 'admin') {
        //   this.$set(this.classControl, 'adminName', true);
        // } else {
        //   this.$set(this.classControl, 'adminName', false);
        // };
      },
      // 登陆验证动画
      animate: function(key, loadingTime = 3000) {
        console.log('animate');
        const that = this;
        if (key) { 
          this.$set(this.classControl, 'active1', true);
          const timer = setTimeout(() => {
            that.$set(this.classControl, 'active2', true);
            clearTimeout(timer);
          }, 500);
        } else {
          this.$set(this.classControl, 'active2', false);
          const timer = setTimeout(() => {
            that.$set(this.classControl, 'active1', false);
            clearTimeout(timer);
          }, 500);
        }
      },
      getPsd() {

      },
      // 是否显示密码
      checkShowPsd: function(v) {
        this.$set(this, 'showPsd', !!v);
        this.$nextTick();
      },
      // 密码提示
      psdAlert() {
        console.log(userLoginInfo);
        const { visitor } = userLoginInfo;
        const cont = `用户名：${visitor.userName}，密码：${visitor.userPsd}`;
        message.success(cont, 5000);
      }
    },
    computed: {
      userIcon: function() {
        const { icon } = this.userInfo;
        if (!icon) return '';
        // require 语法要求参数必须为字符串拼接
        return `url(${require(`../img/${icon}`)})`;
      },
      displayPsd() {}
    },
    watch: {

    },
    components : {
      nvHeader,
      tips,
    }
  }
</script>
<style lang="sass">
  @import '../css/common.scss';
  @import '../css/animate.scss';
  .bg {
    background-color: #eee;
    background-image: url(../img/bg-image.jpg);
    background-position: center;
    background-size: cover;
  }
  .login_con {
    @include cont-center-x;
    width: 640px;
    height: 440px;
    top: 50%;
    margin-top: -180px;
    .login_main {
      position: absolute;
      z-index: 1;
      left: 160px;
      width: 320px;
      height: 440px;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
      transition-property: transform,opacity,box-shadow,top,left;
      transition-duration: .5s;
      transform-origin: center;
      transform: rotateX(0deg);
      background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgba(0, 0, 0, .8) 100%);
      .user_icon {
        display: block;
        transition: all ease .3s;
        width: 90px;
        height: 90px;
        margin: 0 auto;
        background-color: #eee;
        background-image: url(../img/userIcon.jpg);
        background-size: cover;
    		background-position: center;
        border-radius: 50%;
        box-shadow: -5px 6px 15px rgba(6, 17, 47, 0.7);
        &.admin {
          background-image: url(../img/adminIcon.png);
        }
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
          &.icon_eye {
            left: auto;
            right: 10px;
            cursor: pointer;
            font-size: 16px;
            top: 17px;
          }
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
		    background-color: transparent;
		    padding: 10px 50px;
		    border: 2px solid #4FA1D9;
		    color: #4FA1D9;
		    text-transform: uppercase;
		    font-size: 11px;
		    transition: all ease .3s;
		    margin-top: 70px;
		    cursor: pointer;
		    &:hover {
		    	color: #fff;
          background-color: #4FA1D9;
		    }
      }
      .getPsd_btn {
        font-size: 12px;
        color: #ddd;
        cursor: pointer;
      }
      .log_info {
      	color: rgba(211, 215, 247, 0.45);
		    font-size: 10px;
		    display: block;
		    position: absolute;
		    bottom: 20px;
        cursor: help;
      }
      &.active {
        transform: skew(-5deg) scale(0.5, 0.2) perspective(100px) rotateX(10deg);
      }
      &.move_left {
        left: 0;
      }
    }
    .login_loading {
	    position: absolute;
      transition: all ease .3s;
      box-shadow: 0px 20px 30px 3px rgba(0, 0, 0, 0.55);
      background: #35394a;
      background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='rgba(53, 57, 74, 0)', endColorstr='rgb(0, 0, 0)',GradientType=1 );
	    left: 190px;
	    width: 100px;
	    height: 70px;
      color: white;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
      padding: 20px 70px;
      top: 176px;
	    opacity: 0;
      font-size: 12px;
      >.loader {
        height: 44px;
        width: 44px;
        margin-left: 28px;
        >.loader_inner {
          position: relative;
          >div {
            animation-fill-mode: both;
            position: absolute;
            left: 0px;
            top: 0px;
            border: 2px solid #fff;
            border-bottom-color: transparent;
            border-top-color: transparent;
            border-radius: 100%;
            height: 35px;
            width: 35px;
            animation: rotate 1s 0s ease-in-out infinite;
            &:last-child {
              display: inline-block;
              top: 10px;
              left: 10px;
              width: 15px;
              height: 15px;
              animation-duration: 0.5s;
              border-color: #fff transparent #fff transparent;
              animation-direction: reverse;
            }
          }
        }
      }
      &.active {
        left: 400px;
        opacity: 1;
      }
    }
  }
</style>