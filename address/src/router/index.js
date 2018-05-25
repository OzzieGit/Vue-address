import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Detail from '@/components/detail'
import Redact from '@/components/redact'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    },{
      path: '/redact',
      name: 'Redact',
      component: Redact
    }
  ]
})
