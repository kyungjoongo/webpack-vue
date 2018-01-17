<template>
	<div>
		<device background='#FFF'>
			<div id="app">
				<h1>{{ title }}</h1>
				cordovaReady: <b>{{ cordovaReady }}</b>
			</div>
		</device>
	</div>
</template>

<script>

import device from 'vue-device'

export default {
	name: 'app',
	components: {
		device
	},
	data() {
		return {
			title: 'Hello!',
			cordovaReady: false
		}
	},
	methods: {},
	computed: {},
	watch: {},
	mounted() {
		document.addEventListener('deviceready', () => {
			this.cordovaReady = true
		}, false)
	}
}
</script>

<style lang='scss'>
	@import '../sass/variables';
	#app {
		padding: 20px;
	}
</style>
