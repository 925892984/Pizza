import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {
	store
} from './store/store'
import CookieUtil from './common/cookie.js'

Vue.use(CookieUtil);
const getBaseUrl = process.env.VUE_APP_URL

//设置axios
axios.defaults.baseURL = getBaseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios

//全局守卫
router.beforeEach((to, from, next) => {
	//已登陆
	if (store.state.isLogin) {
		next()
	} else {
		//未登录
		if (to.path == '/pizza/login' || to.path == '/pizza/register' || to.path == '/' || to.path == '/pizza/forget' ||
			to.path == '/pizza/resetPass') {
			next();
		} else {
			alert("还没登陆，请登陆")
			next('/pizza/login')
		}
	}
})

//注册全局自定义指令v-focus自动聚焦
Vue.directive('focus', {
	// 当被绑定的元素插入到 DOM 中时……
	inserted: function(el) {
		// 聚焦元素
		el.focus()
	}
})
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
