import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import Login from '../pages/Come/login.vue'
import Register from '../pages/Come/register.vue'
import Shanping from '../pages/Come/shanping.vue'



import Home from '../pages/Home/home.vue'
import Tuijian from '../pages/Home/tuijian.vue'
import Canpaihang from '../pages/Home/canpaihang.vue'
import Youhui from '../pages/Home/youhui.vue'
import Dianping from '../pages/Home/dianping.vue'
import Music from '../pages/Home/music.vue'
import Search from '../pages/Home/search.vue'
import Fupart1 from '../pages/Home/fupart1.vue'
import Fupart2 from '../pages/Home/fupart2.vue'
import Fupart3 from '../pages/Home/fupart3.vue'


import Find from '../pages/Find/find.vue'
import Friends from '../pages/Find/friends.vue'
import Distance from '../pages/Find/distance.vue'
import Goodfriends from '../pages/Find/goodfriends.vue'


import Tian from '../pages/Tian/tian.vue'
import Tian1 from '../pages/Tian/tian1.vue'
import Tian2 from '../pages/Tian/tian2.vue'
import Tian3 from '../pages/Tian/tian3.vue'



import Shopping from '../pages/Shopping/shopping.vue'



import Mine from '../pages/Mine/mine.vue'
import Mytianshi from '../pages/Mine/mytianshi.vue'
import Myshoucang from '../pages/Mine/myshoucang.vue'
import Suipai from '../pages/Mine/suipai.vue'
import Rizhi from '../pages/Mine/rizhi.vue'
import Farizhi from '../pages/Mine/farizhi.vue'
import Toutu from '../pages/Mine/toutu.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shanping',
      name: 'shanping',
      component: Shanping
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
	      {
	        path: '/home/music',
	        name: 'music',
	        component: Music
	      }
      ]
    },
  	{
      path: '/home/tuijian',
      component: Tuijian
    },
		{
      path: '/home/canpaihang',
      component: Canpaihang
    },
		{
      path: '/home/youhui',
      component: Youhui
    },
		{
      path: '/home/dianping',
      component: Dianping
  	},
		{
      path: '/goodfriends',
      component: Goodfriends
  	},
		{
      path: '/home/fupart1',
      component: Fupart1
  	},
		{
      path: '/home/fupart2',
      component: Fupart2
  	},
		{
      path: '/home/fupart3',
      component: Fupart3
  	},
    {
      path: '/find',
      name: 'find',
      component: Find,
      children:[
	      {
		      path: '/find',
		      component: Friends
		    },
      	{
		      path: '/find/friends',
		      component: Friends
		    },
      	{
		      path: '/find/distance',
		      component: Distance
		    }
      ]
    },
    {
      path: '/tian',
      name: 'tian',
      component: Tian
    },
    {
      path: '/tian/tian1',
      name: 'tian1',
      component: Tian1
    },
    {
      path: '/tian/tian2',
      name: 'tian2',
      component: Tian2
    },
    {
      path: '/tian/tian3',
      name: 'tian3',
      component: Tian3
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/farizhi',
      name: 'farizhi',
      component: Farizhi
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      children:[
	      {
		      path: '/mine',
		      component: Mytianshi
		    },
	      {
		      path: '/mine/mytianshi',
		      component: Mytianshi
		    },
      	{
		      path: '/mine/myshoucang',
		      component: Myshoucang
		    },
      	{
		      path: '/mine/suipai',
		      component: Suipai
		    },
      	{
		      path: '/mine/rizhi',
		      component: Rizhi
		    }
      ]
    },
  	{
      path: '/toutu',
      component: Toutu
    }
  ]
})
