import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {store} from './store/store'

const getBaseUrl = process.env.VUE_APP_URL

//设置axios
axios.defaults.baseURL = getBaseUrl
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios

//定义全局函数  
//作用:操作cookie
Vue.prototype.CookieUtil = {
	get: function(name){
		var cookieName = encodeURIComponent(name) + "=",
				cookieStart = document.cookie.indexOf(cookieName),
				cookieValue = null;
				
				if(cookieStart > -1){
					var cookieEnd = document.cookie.indexOf(";",cookieStart);
					if(cookieEnd == -1){  //即只有一个cookie
						cookieEnd = document.cookie.length;
					}
					cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length,cookieEnd));
				}
				return cookieValue;
	},
	
	
	set: function(name,value,expires,path,domain,secure) {
		var cookieText = encodeURIComponent(name) + "=" +encodeURIComponent(value);
		if(expires instanceof Date) {
			cookieText += "; exprice=" + expires.toGMTString();
		}
		if(path){
			cookieText += "; path=" + path;
		}
		if(domain){
			cookieText += "; domain=" + domain;
		}
		if(secure){
			cookieText += "; secure";
		}
		document.cookie = cookieText;
	},
	unset: function(name,path,domain,secure){
		this.set(name, "", new Date(0), path, domain, secure);
	}
}
//全局守卫
router.beforeEach((to,from,next)=>{
  //已登陆
  if(store.state.isLogin){
    next()
  }else{
    //未登录
    if(to.path == '/login' || to.path == '/register' || to.path == '/'){
      next();
    }else{
      alert("还没登陆，请登陆")
      next('/login')
    }
  } 
})

//注册全局自定义指令v-focus自动聚焦
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
