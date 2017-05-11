<template>
	<div id="app">
		<h1>{{ title }}</h1>
		cordovaReady: <b>{{ cordovaReady }}</b>
	</div>
</template>


<script>
	export default {
		name: "app",
		data() {
			return {
				title: "Welcome!",
				cordovaReady: false
			};
		},
		methods: {},
		computed: {},
		mounted() {
			document.addEventListener("deviceready", () => {
				this.cordovaReady = true;
			},false);
		}
	};
</script>


<style lang="scss">
	#app{
		text-align: center;
	}
</style>