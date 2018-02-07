<template>
	<div class="app">
		<h1>{{ title }}</h1>
		<a href="#" @click="toggleCounter">Toggle Counter</a>
		<div v-if="counterVisible">
			<h2>{{ counter }}</h2>
			<button @click="decrement">Decrease</button>
			<button @click="increment">Increase</button>
			<h2>Squared: {{ squared }} </h2>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Welcome!',
			counter: 0,
			counterVisible: true
		}
	},
	methods: {
		increment() {
			this.counter++
		},
		decrement() {
			this.counter--
		},
		toggleCounter() {
			this.counterVisible = !this.counterVisible
		}
	},
	computed: {
		squared() {
			return this.counter * this.counter
		}
	}
}
</script>

<style>
.app {
	text-align: center;
}

button {
	font-size: 20px;
}
</style>
