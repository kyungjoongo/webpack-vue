<template>
    <device>
        <header>
            <div v-if='isContent' @click="show('List')">back</div>
            <div v-if='!isContent' @click="$router.push('/')">../</div>
            <div class='title'>{{ title }}</div>
            <div v-if='isContent' @click='toggleSrc'>src</div>
            <div v-if='!isContent'></div>
        </header>

        <transition :name='transition'>
            <component :is='view' @onTap='show' :list='list' class='page'></component>
        </transition>
    </device>
</template>

<script>
import device from 'vue-device'

// Add new examples here

import List from './List.vue'
import HeadersFooters from './HeadersFooters.vue'
import Router from './Router.vue'
import Store from './Store.vue'
import Swipers from './Swipers.vue'
import Tags from './Tags.vue'
import Transitions from './Transitions.vue'

const examples = {
    List: List,
    HeadersFooters: HeadersFooters,
    Router: Router,
    Store: Store,
    Swipers: Swipers,
    Tags: Tags,
    Transitions: Transitions
}

export default {
    name: 'examples',
    components: {
        device,
        ...examples
    },
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
    color: #fff;
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
    transition: all 0.3s ease-in-out;
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
