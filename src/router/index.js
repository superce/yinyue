import Vue from 'vue'
import Router from 'vue-router'
import Show from '@/components/Show'
import Home from '@/components/Home'
import Rank from '@/components/Rank'
import Hot from '@/components/Hot'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Show',
      component: Show
    },
    {
      path:'/home',
      component:Home
    }
  ]
})
