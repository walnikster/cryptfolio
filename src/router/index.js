import Vue from 'vue'
import Router from 'vue-router'
import overview from '@/components/overview'
import add from '@/components/add'
import edit from '@/components/edit'
import details from '@/components/details'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: overview
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
