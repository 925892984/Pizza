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
  routes:[{
    path: '/',
    name: 'homeLink',
    component: Home,
  },{
    path:'/menu',
    name:'menuLink',
    component:Menu
  },{
    path:'/admin',
    name:'adminLink',
    component:Admin
  },{
    path:'/leaverMessage',
    name:"leaverMessage",
    component:LeaverMessage
  },{
    path:'/vip',
    name:"vip",
    component:Vip
  },{
    path:'/login',
    name:'loginLink',
    component:Login
  },{
    path:'/register',
    name:'registerLink',
    component:Register
  },{
    path:'/forget',
    name:'forgetLink',
    component:Forget
  },{
    path:'/resetPass',
    name:'resetPassLink',
    component:ResetPass
  },{
    path:'/personalDetails',
    // name:'personalDetails',
    component:PersonalDetails
  },{
    path:'/details',
    name:'details',
    component:Details
  },{
    path:'/showMsg',
    // name:'showMsgLink',
    component:ShowMsg
  },{
    path:'/write',
    name:'write',
    component:Write
  },{
    path:'/showArticle/:id',
    // name:'showArticle',
    component:ShowArticle
  },{
    path:'/about',
    name:'aboutLink',
    component:About,
    redirect:'/contact',
    children:[
      {
        path:'/contact',
        name:'contactLink',
        component:Contact,
        redirect:'/phone',
        children:[
          {
            path:'/personName',
            name:'personName',
            component:PersonName
          },
          {
            path:'/phone',
            name:'phoneNumber',
            component:Phone
          }
        ]
      },
      {
        path:'/delivery',
        name:'deliveryLink',
        component:Delivery
      },
      {
        path:'/history',
        name:'historyLink',
        component:History
      },{
        path:'/orderingGuide',
        name:'orderingGuideLink',
        component:OrderingGuide
      }
    ]
  },
  //当路由输入错误时，默认主页
  {
    path:'*',
    redirect:'/'
  },
	],
  mode:'history'
})