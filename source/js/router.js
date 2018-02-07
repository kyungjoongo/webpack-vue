import Vue from 'vue'
import Router from 'vue-router'

import home from '../views/Home'

// Remove examples below for production
import examples from '../examples/App'
import page1 from '../examples/Page1'
import page2 from '../examples/Page2'

Vue.use(Router)

const router = new Router({
	mode: 'hash',
	routes: [
		{ path: '/', component: home, name: 'home' },

		// Remove examples below for production
		{
			path: '/examples',
			component: examples,
			name: 'examples',
			children: [
				{
					path: 'page1',
					component: page1
				},
				{
					path: 'page2',
					component: page2
				}
			]
		}
	]
})

export default router
