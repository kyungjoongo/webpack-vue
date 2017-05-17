<template>
	<div>
		<header @click="show('List')">
			<div class='back' v-if="contentHeader">← Back</div>
			<div class='title'>{{ contentHeader ? view+'.vue' : 'Examples'}}</div>
			<div class='source' @click.stop='toggleSrc' v-if="contentHeader">src</div>
		</header>

		<transition :name="transition">
			<component :is="view" @onTap="show" :list="list" class="page"></component>
		</transition>
	</div>
</template>


<script>

	// Add new examples here

	const examples = {
		List: 			require('./List.vue'),
		HeadersFooters: require('./HeadersFooters.vue'),
		Swipers: 		require('./Swipers.vue')
	};

	export default {
		name: "examples",
		components:examples,
		data() {
			return {
				list: Object.keys(examples).slice(1),
				view: 'List'
			};
		},
		methods: {
			show(page){
				this.view = page
			},
			toggleSrc(){
				window.open('https://github.com/Normally/webpack-vue/blob/master/source/examples/'+this.view+'.vue')
			}
		},
		computed:{
			transition(){
				return this.view === 'List' ? 'slide-out' : 'slide-in'
			},
			contentHeader(){
				return this.view !== 'List'
			}
		}
	};

</script>


<style lang="scss" scoped>

	header{
		height: 60px;
		color:#FFF;
		background-color: dodgerblue;
		line-height: 75px;
		padding: 0 20px;
		cursor: pointer;
		.title{
			position: absolute;
			top:0;
			left:0;
			width: 100%;
			text-align: center;
			font-weight: 600;
		}
		.source{
			position: absolute;
			top:0;
			right:20px;
		}
	}

	.page{
		position: absolute;
		width:100%;
		bottom:0;
		top:60px;
		left:0;
	}

	.slide-in-enter-active, .slide-in-leave-active, .slide-out-enter-active, .slide-out-leave-active {
	  transition: all .3s ease-in-out;
	}
	.slide-in-enter, .slide-out-leave-to{
	   transform:translate3d(100%, 0, 0);
	}
	.slide-in-enter-to, .slide-in-leave, .slide-out-enter-to, .slide-out-leav{
		transform:translate3d(0, 0, 0);
	}
	.slide-in-leave-to, .slide-out-enter{
		transform:translate3d(-100%, 0, 0);
	}
</style>