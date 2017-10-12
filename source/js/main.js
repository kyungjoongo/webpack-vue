import Vue from 'vue'
import App from 'components/Device' // or App

import 'sass/global' // Import global styles
import 'inobounce' // Disable elastic scrolling on iOS

// Remove click delay on touch devices
import FastClick from 'fastclick'
if ('addEventListener' in document) {
	document.addEventListener(
		'DOMContentLoaded',
		function () {
			FastClick.attach(document.body)
		},
		false
	)
}

// Vue Awesome Swiper
import 'swiper/dist/css/swiper.css'
import Swiper from 'vue-awesome-swiper'
Vue.use(Swiper)

// Event Bus
Object.defineProperty(Vue.prototype, '$bus', {
	get () {
		return this.$root.bus
	}
})
var bus = new Vue({})

// Set up Vue
void new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	data: {
		bus: bus
	}
})
