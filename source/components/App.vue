<template>
	<div id="app">
		<h1>{{ title }}</h1>
		Webpack running + Hot Reload
	</div>
</template>

<script>
	export default {
	  name: 'app',
	  data(){
	  	return {
	  		title: "Welcome!"
	  	}
	  },
	  methods: {

	  },
	  computed: {

	  }
	}
</script>

<style lang="scss">
	#app{
		padding:20px;
	}
</style>