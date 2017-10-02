import Vue from 'vue'
import Router from 'vue-router'

import App from '../components/App'
import Examples from '../components/Something'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: App, name: 'home' },
    { path: '/examples', component: Examples, name: 'examples' },
  ]
})

export default router