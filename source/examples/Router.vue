<template>
	<div id="router">
		<router-link to="/examples/page1" class='button' :class="{active:active('/examples/page1')}">Page1</router-link><router-link to="/examples/page2" class='button' :class="{active:active('/examples/page2')}">Page2</router-link>
		<router-view class='view'></router-view>
	</div>
</template>

<script>
export default {
	name: 'router',
	methods: {
		active(path){
			return this.$route.path===path
		}
	}
}
</script>

<style scoped lang="scss">
@import '../sass/variables';
#router{
	.button{
		appearance: none;
		display: inline-block;
		height:60px;
		line-height: 60px;
		width: 50%;
		text-align: center;
		background: #CCC;
		font-size: 1em;
		outline:0;
		border:0;
		padding: 0 20px;
		text-decoration: none;
		&.active{
			background: #FFF;
		}
	}
}
</style>