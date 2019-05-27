import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/Index.vue'
import Live from '../components/live/Live.vue'
import UserCenter from './usercenter'
import Barrage from '../components/barrage/Barrage.vue'
import Classification from '../components/classification/Classification.vue'
import Classificationdetail from '../components/classificationdetail/Classificationdetail.vue'
import File from '../components/file/file.vue'
import About from '../components/about/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/barrage',
      name: 'barrage',
      component: Barrage
    },
    // 直播详情
    {
      path: '/live/:id',
      name: 'live',
      component: Live
    },
    // 分类
    {
      path: '/classification',
      name: 'classification',
      component: Classification
    },
    //分类详情
    {
      path: '/classificationdetail/:id',
      name: 'classificationdetail',
      component: Classificationdetail
    },
    // 归档
    {
      path: '/file',
      name: 'file',
      component: File
    },
    //关于
    {
      path: '/about',
      name: 'about',
      component: About
    },
    UserCenter
  ]
})
