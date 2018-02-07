<template>
	<div id="store">
		<h1>Vuex store</h1>
		Vuex serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.
		<br/>(See ./source/js/store.js)
		<h2>count:{{ count }}</h2>
		<button @click="$store.commit('increment')">increment (mutation)</button>
		<button @click="$store.dispatch('incrementAsync')">incrementAsync (action)</button>
	</div>
</template>

<script>


export default {
	name: 'store',
	computed: {
		count(){
			return this.$store.state.count
		}
	}
}
</script>
<style scoped lang="scss">
@import '../sass/variables';
#store{
	padding: 20px;
	button{
		appearance: none;
		width: 100%;
		height:60px;
		margin-bottom: 10px;
		background: $olive;
		color:#FFF;
		font-size: 1em;
		outline:0;
		border:0;
		border-radius: 4px;
		cursor: pointer;
	}
}
</style>