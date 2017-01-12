<template>
	<div id="app">
		<h1>{{ title }}</h1>
		<h2>Items on: {{ count }}</h2>
		<ul>
			<li v-for="item in items" >
				{{ item.label }}
				<div class='toggle' @click="toggle(item)" :class="{on: item.value}">
					<div class='dot'></div>
				</div>
			</li>
		</ul>
		<transition 
			enter-active-class="animated slideInLeft"
    		leave-active-class="animated slideOutRight">
			<div v-if="count==3">Show me</div>
		</transition>
	</div>
</template>

<script>
	import Store from '../js/store';
	export default {
	  name: 'app',
	  data: Store.state,
	  methods: Store.methods,
	  computed: Store.computed
	}
</script>

<style lang="sass"> @import "../style/style"; </style>