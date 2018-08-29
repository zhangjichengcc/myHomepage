import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const home = resolve => {
    require.ensure(['../vue/home.vue'], () => {
        resolve(require('../vue/home.vue'));
    });
};
const articleList = resolve => {
    require.ensure(['../vue/articleList.vue'], () => {
        resolve(require('../vue/articleList.vue'));
    });
};
const about = resolve => {
    require.ensure(['../vue/about.vue'], () => {
        resolve(require('../vue/about.vue'));
    });
};
const login = resolve => {
    require.ensure(['../vue/login.vue'], () => {
        resolve(require('../vue/login.vue'));
    });
}
const article = resolve => {
    require.ensure(['../vue/article.vue'], () => {
        resolve(require('../vue/article.vue'));
    });
}
const userhome = resolve => {
    require.ensure(['../vue/userhome.vue'], () => {
        resolve(require('../vue/userhome.vue'));
    });
}
const usermessage = resolve => {
    require.ensure(['../vue/usermessage.vue'], () => {
        resolve(require('../vue/usermessage.vue'));
    });
}
const createtopic = resolve => {
    require.ensure(['../vue/createtopic.vue'], () => {
        resolve(require('../vue/createtopic.vue'));
    });
}
const noPage = resolve => {
    require.ensure(['../vue/noPage.vue'], () => {
        resolve(require('../vue/noPage.vue'));
    });
}
const disboard = resolve => {
    require.ensure(['../vue/disboard.vue'], () => {
        resolve(require('../vue/disboard.vue'));
    });
}
const edittopic = resolve => {
    require.ensure(['../vue/edittopic.vue'], () => {
        resolve(require('../vue/edittopic.vue'));
    });
}
const routes = [{
        path: '/',
        name: 'homePage',
        component: home
    },{
        path: '/login',
        name: 'login',
        component: login
    },{
        path: '/about',
        name: 'about',
        component: about
    },{
        path: '/article/:id',
        name: 'article',
        component: article
    },{
        path: '/userhome/:username',
        name: 'userhome',
        component: userhome
    },{
        path: '/usermessage',
        name: 'usermessage',
        component: usermessage
    },{
        path: '/createtopic',
        name: 'createtopic',
        component: createtopic
    },{
        path: '/edittopic/:topicid',
        name: 'edittopic',
        component: edittopic
    },{
        path: '/noPage',
        name: 'noPage',
        component: noPage
    },{
        path: '/disboard',
        name: 'disboard',
        component: disboard
    },{
        path: '*',
        component: articleList
    }];

export default new Router({
    // vueRouter 默认为hash模式，可设置为H5的history模式，此时URL和正常的url一样，但需要后台配置路径，或者前端路由前添加空间名称
    // mode: 'history',
    base: __dirname,
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
});