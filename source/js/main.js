import Vue from 'vue';
import App from 'components/Device'; // or App

import inobounce from 'inobounce';

import FastClick from 'fastclick';
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


import globalStyle from 'sass/main';

import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);


// Event Bus
Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return this.$root.bus;
  }
});
var bus = new Vue({});

var store = {
  state:{
    demoMode: false
  },
  setMode(demo){
    this.state.demoMode = demo || false;
  }
};

// Set up Vue
var vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    bus: bus,
    store: store
  }
});
