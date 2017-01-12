// Main file

import Vue from 'vue';
import App from '../components/App';
import Animate from 'animate.css';

var vm = new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
});
