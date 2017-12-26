import Vue from 'vue'
import Router from 'vue-router'
import overview2 from '@/components/overview2'
import add2 from '@/components/add2'
import edit2 from '@/components/edit2'
import details2 from '@/components/details2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview2',
      component: overview2
    },
    {
      path: '/add',
      name: 'add2',
      component: add2
    },
    {
      path: '/edit',
      name: 'edit2',
      component: edit2
    },
    {
      path: '/details',
      name: 'details2',
      component: details2
    }
  ]
})
