import Vue from 'vue'
import App from 'components/Device' // or App

import router from './router'
import store from './store'

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
import Swiper from 'vue-awesome-swiper'
Vue.use(Swiper)

// Set up Vue
void new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
})

