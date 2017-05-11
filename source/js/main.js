import Vue from "vue";
import App from "components/Device"; // or App

// -- JS utilities --

// Disable elastic scrolling on iOS
// import inobounce from 'inobounce';

// Remove click delay on touch devices
import FastClick from "fastclick";
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}

// -- Vue components --
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

// -- Styles --
import globalStyle from "sass/main";

// Event Bus
Object.defineProperty(Vue.prototype, "$bus", {
  get() {
    return this.$root.bus;
  }
});
var bus = new Vue({});

// Set up Vue
var vm = new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
  data: {
    bus: bus
  }
});
