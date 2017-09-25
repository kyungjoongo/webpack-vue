<template>
	<div id='transitions'>
		<div class='container'>
			<transition :name="transition">
				<div class='panel' :key="panel" :class="{p2:panel}">{{panel}}</div>
			</transition>
		</div>
		<div class='control'>
			Transition: <b>{{ transition }}</b><br/><br/>
			<button v-for="button in types" @click="selectTransition(button)">{{button}}</button>
		</div>
	</div>
</template>

<script>

export default {
	name: 'transitions',
	props: [],
	data(){
		return {
			transition: 'fade',
			panel: false,
			types: [
				'fade',
				'pop',
				'slide-left',
				'slide-right',
				'slide-up',
				'slide-down',
				'flow-left',
				'flow-right',
				'flow-up',
				'flow-down',
				'flip-left',
				'flip-right',
				'flip-up',
				'flip-down',
			]
		}
	},
	methods: {
		selectTransition(item){
			this.transition = item
			this.toggleTransition()
		},
		toggleTransition(){
			this.panel = !this.panel
		}
	}
}

</script>

<style lang='scss' scoped>
@import '../sass/variables';

#transitions {
	.control{
		padding:40px;
		button{
			padding:10px;
			appearance: none;
			margin-bottom: 10px;
			margin-right: 10px;
			background: #FFF;
			border: 1px solid #CCC;
			font-size: 0.85em;
		}
	}
	.container{
		height:200px;
		width:100%;
		position: relative;
		overflow: hidden;
		perspective: 1000px;
		transform-style: preserve-3d;
	}
	.panel{
		width:100%;
		height:200px;
		background: $red;
		text-align: center;
		vertical-align: 200px;
		line-height: 200px;
		font-size: 2em;
		position: absolute;
		&.p2{
			background: $green;
		}
	}
}
</style>
