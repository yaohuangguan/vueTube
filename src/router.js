import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Video from './components/Video/VideoDetail'
Vue.use(Router)

const router = new Router({
  mode:'history',
  base:'/',
  routes:[
    {
      path:'/',
      name:'home',
      component: Home
    },
    {
      path:'/video/:id',
      component:Video
    }
  ]
})

export default router