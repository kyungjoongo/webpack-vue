<template>
	<device>
		<div id="home">
			<h1>{{ title }}</h1>
			<router-link to="/examples">Examples</router-link>
		</div>
	</device>
</template>

<script>
import device from 'vue-device'

export default {
	name: 'home',
	components: {
		device
	},
	data() {
		return {
			title: 'Hello World!',
			cordovaReady: false
		}
	},
	methods: {},
	computed: {},
	watch: {},
	mounted() {
		document.addEventListener(
			'deviceready',
			() => {
				this.cordovaReady = true
			},
			false
		)
	}
}
</script>

<style lang='scss'>
@import '../sass/variables';
#home {
	padding: 20px;
}
</style>
