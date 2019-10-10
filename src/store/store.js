import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		//设置属性
		//pizza
		menuItems: {},
		//登陆状态
		isLogin: false,
		//留言数据
		user: {}
	},
	getters: {
		//获取属性的状态
		getMenuItems: state => state.menuItems,
		isLogin: state => state.isLogin,
		user: state => state.user
	},
	mutations: {
		//改变属性的状态
		setMenuItems(state, data) {
			state.menuItems = data
		},
		setUser(state, data) {
			state.user = data
		},
		removeMenuItems(state, data) {
			state.menuItems.forEach((element, index) => {
				if (element === data) {
					state.menuItems.splice(index, 1)
				}
			});
		},
		//添加pizza
		pushToMenuItems(state, data) {
			state.menuItems.push(data)
		},
		//在线用户状态
		userStatus(state, user) {
			if (user) {
				state.user = user
				state.isLogin = true
			} else {
				state.user = null
				state.isLogin = false
			}
		}
	},
	actions: {
		//应用mutations
		
		//在线用户信息
		setUser({
			commit
		}, user) {
			commit("userStatus", user)
		},
		
		addMenu({
			commit
		}, item) {
			commit("pushToMenuItems", item)
		},
		
		setMenu({
			commit
		},menu) {
			commit('setMenuItems',menu)
		}
	}
})
