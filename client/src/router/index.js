import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Beranda from '@/components/Beranda'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import UserProfile from '@/components/UserProfile'
import NewArticle from '@/components/NewArticle'

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
    },
    {
      path: '/login',
      component: SignIn
    },
    {
      path: '/user/:id',
      component: UserProfile
    },
    {
      path: '/user/:id/new-article',
      component: NewArticle
    }
  ]
})
