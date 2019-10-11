import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Home from '../components/Home'
import Menu from '../components/Menu'
import Admin from '../components/Admin'
import Login from '../components/Login'
import Register from '../components/Register'
import LeaverMessage from '../components/LeaverMessage'
import Vip from '../components/Vip'
import About from '../components/about/About'
import Details from '../components/Details'
import PersonalDetails from '../components/PersonalDetails'
import ShowMsg from '../components/Showmsg'
import Write from '../components/Write'
import ShowArticle from '../components/ShowArticle'
import Forget from '../components/Forget'
import ResetPass from '../components/ResetPass'




//二级路由
import Contact from '../components/about/Contact'
import Delivery from '../components/about/Delivery'
import History from '../components/about/History'
import OrderingGuide from '../components/about/OrderingGuide'


//三级路由
import PersonName from '../components/about/contact/PersonName'
import Phone from '../components/about/contact/Phone'

Vue.use(Router)
export default new Router({
	routes: [{
			path: '/',
			name: 'homeLink',
			component: Home,
			// component: () => import('@/components/Home')    //懒加载有时会出现Loading chunk {n} failed.
		}, {
			path: '/pizza/menu',
			name: 'menuLink',
			component: Menu,
			// component: () => import('@/components/Menu')
		}, {
			path: '/pizza/admin',
			name: 'adminLink',
			component: Admin,
			// component: () => import('@/components/Admin')
		}, {
			path: '/pizza/leaverMessage',
			name: "leaverMessage",
			component: LeaverMessage,
			// component: () => import('@/components/LeaverMessage')
		}, {
			path: '/pizza/vip',
			name: "vip",
			component: Vip,
			// component: () => import('@/components/Vip')
		}, {
			path: '/pizza/login',
			name: 'loginLink',
			component: Login,
			// component: () => import('@/components/Login')
		}, {
			path: '/pizza/register',
			name: 'registerLink',
			component: Register,
			// component: () => import('@/components/Register')
		}, {
			path: '/pizza/forget',
			name: 'forgetLink',
			component: Forget,
			// component: () => import('@/components/Forget')
		}, {
			path: '/pizza/resetPass',
			name: 'resetPassLink',
			component: ResetPass,
			// component: () => import('@/components/ResetPass')
		}, {
			path: '/pizza/personalDetails',
			name:'personalDetails',
			component: PersonalDetails,
			// component: () => import('@/components/PersonalDetails')
		}, {
			path: '/pizza/details',
			name: 'details',
			component: Details,
			// component: () => import('@/components/Details')
		}, {
			path: '/pizza/showMsg',
			name:'showMsgLink',
			component: ShowMsg,
			// component: () => import('@/components/Showmsg')
		}, {
			path: '/pizza/write',
			name: 'write',
			component: Write,
			// component: () => import('@/components/Write')
		}, {
			path: '/pizza/showArticle/:id',
			// name:'showArticle',
			component: ShowArticle,
			// component: () => import('@/components/ShowArticle')
		}, {
			path: '/pizza/about',
			name: 'aboutLink',
			component: About,
			// component: () => import('@/components/about/About'),
			redirect: '/pizza/about/contact',
			children: [{
					path: '/pizza/about/contact',
					name: 'contactLink',
					component: Contact,
					// component: () => import('@/components/about/Contact'),
					redirect: '/pizza/about/phone',
					children: [{
							path: '/pizza/about/personName',
							name: 'personName',
							component: PersonName,
							// component: () => import('@/components/about/contact/PersonName')
						},
						{
							path: '/pizza/about/phone',
							name: 'phoneNumber',
							component: Phone,
							// component: () => import('@/components/about/contact/Phone')
						}
					]
				},
				{
					path: '/pizza/about/delivery',
					name: 'deliveryLink',
					component: Delivery,
					// component: () => import('@/components/about/Delivery')
				},
				{
					path: '/pizza/about/history',
					name: 'historyLink',
					component: History,
					// component: () => import('@/components/about/History')
				}, {
					path: '/pizza/about/orderingGuide',
					name: 'orderingGuideLink',
					component: OrderingGuide,
					// component: () => import('@/components/about/OrderingGuide')
				}
			]
		},
		//当路由输入错误时，默认主页
		{
			path: '*',
			redirect: '/'
		},
	],
	mode: 'history'
})
