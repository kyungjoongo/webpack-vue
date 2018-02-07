<template>
	<div id='list'>
		<div v-for='item in list' @click='tap(item)' :key='item'>
			{{item}}.vue
		</div>
	</div>
</template>

<script>
export default {
	name: 'list',
	props: ['list'],
	methods: {
		tap(id) {
			this.$emit('onTap', id)
		}
	}
}
</script>

<style lang='scss' scoped>
#list {
	div {
		height: 60px;
		line-height: 60px;
		border-bottom: 1px solid #eee;
		padding: 0 20px;
		position: relative;
		cursor: pointer;
		&:active {
			background-color: #eee;
		}
		&:after {
			content: '';
			display: block;
			position: absolute;
			width: 10px;
			height: 10px;
			right: 20px;
			top: 25px;
			border: solid #999;
			border-width: 0 1px 1px 0;
			transform: rotate(-45deg);
		}
	}
}
</style>
