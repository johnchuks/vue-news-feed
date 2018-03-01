import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Source from '../components/Source'
import Headline from '@/components/Headline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sources',
      name: 'Source',
      component: Source
    },
    {
      path: '/headlines',
      name: 'Headline',
      component: Headline
    }
  ]
})
