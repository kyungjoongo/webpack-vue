<template>
	<div>
		<header>
			<div v-if='isContent' @click="show('List')">back</div>
			<div class='title'>{{ title }}</div>
			<div v-if='isContent' @click='toggleSrc'>src</div>
		</header>

		<transition :name='transition'>
			<component :is='view' @onTap='show' :list='list' class='page'></component>
		</transition>
	</div>
</template>

<script>

// Add new examples here

const examples = {
	List: require('./List.vue'),
	HeadersFooters: require('./HeadersFooters.vue'),
	Swipers: require('./Swipers.vue'),
	Tags: require('./Tags.vue'),
	Transitions: require('./Transitions.vue')
}

export default {
	name: 'examples',
	components: examples,
	data() {
		return {
			list: Object.keys(examples).slice(1),
			view: 'List'
		}
	},
	methods: {
		show(page) {
			this.view = page
		},
		toggleSrc() {
			window.open('https://github.com/Normally/webpack-vue/blob/master/source/examples/' + this.view + '.vue')
		}
	},
	computed: {
		transition() {
			return this.isContent ? 'slide-in' : 'slide-out'
		},
		isContent() {
			return this.view !== 'List'
		},
		title() {
			return this.isContent ? this.view + '.vue' : 'Examples'
		}
	}
}

</script>

<style lang='scss' scoped>
header {
	display: flex;
	align-items: stretch;
	height: 60px;
	text-align: center;
	color: #FFF;
	background-color: dodgerblue;
	line-height: 75px;
	div {
		min-width: 60px;
		cursor: pointer;
		&.title {
			flex: 1;
			font-weight: 500;
			cursor: default;
		}
	}
}

.page {
	position: absolute;
	width: 100%;
	bottom: 0;
	top: 60px;
	left: 0;
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
	transition: all .3s ease-in-out;
}

.slide-in-enter,
.slide-out-leave-to {
	transform: translate3d(100%, 0, 0);
}

.slide-in-enter-to,
.slide-in-leave,
.slide-out-enter-to,
.slide-out-leav {
	transform: translate3d(0, 0, 0);
}

.slide-in-leave-to,
.slide-out-enter {
	transform: translate3d(-100%, 0, 0);
}
</style>
