<template>
	<div id="tags">
		<h2>How does it make you feel?</h2>
		<h3>Choose two or more words to describe the mood</h3>
		<br/><br/>
		<transition-group name="zoom">
			<div v-for="tag, key, i in group" class='tag' :class="{active:tag.active}" :key="key" @click="activate(tag)">{{key}}</div>
			<div @click="refresh" class='tag refresh' key="more" v-if="!isDone">+ More</div>
		</transition-group>
		
		<br/><br/>
		<div class='buttons'>
			<a href="#" @click="reset" class='button'>Reset</a>
			<a href="#" @click="done" class='button'>Done</a>
		</div>
		
	</div>
</template>

<script>

import tags from "./tags.js"

export default {
	name: 'tags',
	components: {
	},
	data() {
		return {
			tags: this.clone(tags),
			group: {},
			isDone: false,
			totalTags: 10
		}
	},
	methods: {
		clone(value){
			return JSON.parse(JSON.stringify(value));
		},
		activate(tag){
			tag.active = !tag.active
		},
		clean(){
			// Get the chosen items and add to a new group
			var count = 0;
			for(var i in this.group){
				if(!this.group[i].active){
					this.$delete(this.group, i)
				}else{
					count++;
				}
			}
			return count;
		},
		refresh(){
			var count = this.clean()
			for(var i = 0 ; i < this.totalTags-count && i < this.tags.length ; i++){
				var index = Math.floor(Math.random()*this.tags.length)
				var item = this.tags.splice(index, 1)[0]
				this.$set(this.group, item, {active:false})
			}
		},
		reset(){
			this.group = {};
			this.tags = this.clone(tags);
			this.isDone = false;
			this.refresh()
		},
		done(){
			this.clean()
			this.isDone = true;
		}
	},
	computed: {},
	mounted() {
		this.refresh()
	}
}
</script>

<style lang='scss'>
@import '../sass/variables';

#tags {
	text-align: center;
	position: relative;
	padding:20px;
	padding-top:0;
	min-height:450px;
	h2, h3{
		padding:0;
		margin:0;
		font-weight: normal;
	}
	h3{
		color:#999;
	}
	.tag{
		padding:10px 20px;
		margin-right: 10px;
		margin-bottom: 10px;
		border:1px solid dodgerblue;
		border-radius: 100px;
		display: inline-block;
		cursor: pointer;
		transition: transform 0.3s ease-in-out;
		color: dodgerblue;
		&:hover{
			background: rgba(dodgerblue, 0.1);
		}
		&.active{
			background: dodgerblue;
			color: #FFF;
		}
	}
	.done{
		position: absolute;
		left:20px;
		bottom:20px;
		opacity: 0.2;
		&:hover{
			opacity: 0.5;
		}
	}
	.refresh{
		text-decoration: none;
		font-weight: bold;
	}
	.buttons{
		margin-top:20px;
		position: absolute;
		bottom:0;
		left:0;
		width: 100%;
		.button{
			display: inline-block;
			border:2px solid #666;
			color:#666;
			font-weight: bold;
			width:80px;
			height:40px;
			line-height: 35px;
			border-radius: 4px;
			text-decoration: none;
			&:first-child{
				margin-right: 10px;
			}
		}
	}
}

.zoom-enter, .zoom-leave-to {
  opacity: 0;
  transform: scale(0)
}
.zoom-leave-active{
  position: absolute;
  opacity: 0;
}
</style>
