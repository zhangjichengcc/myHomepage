/**
 * create by zhangjicheng
 * vuex 状态管理器声明
 **/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// const moduleA = {
//   state: { ... },
//   mutations: { ... },
//   actions: { ... },
//   getters: { ... }
// }

// const moduleB = {
//   state: { ... },
//   mutations: { ... },
//   actions: { ... }
// }
const store = new Vuex.Store({
	// 模块，允许将臃肿的state分割为多个模块
	modules: {
    // a: moduleA,
    // b: moduleB
	},
	// 单一状态树
	state: {
		// 页面打开默认设置登录状态为否
		isLogin : false,
		// 保存登录信息
		userInfo : {
			userName: '',
			userIcon: '',
			userPsd: '',
			id: '',
		},
	},
	// 提交的是 mutation，而不是直接变更状态；可以包含任意异步操作
	actions: {
		isLogin({commit}) {
			commit('ISLOGIN');
		},
		signOut({commit}) {
			commit('SIGNOUT');
		},
		setUserInfo({commit}, userInfo) {
			commit('SETUSERINFO', userInfo);
		},
	},
	// 修改状态的方法
	mutations: {
		// 设置登录
		ISLOGIN (state) {
			state.isLogin = true;
		},
		// 退出登录
		SIGNOUT (state) {
			state.isLogin = false;
		},
		// 设置登录用户信息
		SETUSERINFO (state, userInfo) {
			state.userInfo.userName = userInfo.userName;
			state.userInfo.userIcon = userInfo.icon;
			state.userInfo.userPsd = userInfo.userPsd;
			state.userInfo.id = userInfo.id;
		},
	},
	// 派生状态，类似vue的计算属性
	getters: {
		getLoginState (state) {
			return state.isLogin;
		},
		getUserInfo (state) {
			return state.userInfo;
		},
	}
})

export default store;
