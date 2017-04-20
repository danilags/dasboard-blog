import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Beranda from '@/components/Beranda'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Beranda
    },
    {
      path: '/signup',
      component: SignUp
    }
  ]
})
