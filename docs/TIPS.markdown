# Vue.js tips

Things we've learned about Vue that are useful and whatnot.

### HTTP requests

Standard [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) might do what you need. Here's a [blog post](https://medium.com/the-vue-point/retiring-vue-resource-871a82880af4) about handling ajax requests in Vue. And [here's an example](https://github.com/Normally/workbot-frontend/blob/d8fffe8754f0f3ea66169d1c826a1c24669768ee/source/components/Camera.vue#L128) of fetch in use.

### Arrow functions pass scope

If you find yourself using `var that = this` so that you can use the parent scope in a function, use [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) instead. Arrow functions use the same scope as their parent. Here's an [example](https://github.com/Normally/workbot-frontend/blob/d8fffe8754f0f3ea66169d1c826a1c24669768ee/source/components/Camera.vue#L73) from a Normally project.

### Firebase

If you're using Firebase, use [Vue Fire](https://github.com/vuejs/vuefire).

### Structuring projects

A big example project with lots of best practices including routing is maintained at [RealWorld Vue](https://github.com/mchandleraz/realworld-vue).

### Code editor

Use what you like...

Editor        | Vue Support 
:------------- | :-------------
__[Atom](https://atom.io/)__ | [Install](https://atom.io/packages/language-vue)
__[Sublime](https://www.sublimetext.com/)__ | [Install](https://github.com/vuejs/vue-syntax-highlight)
__[Vim](https://media.giphy.com/media/f5BwvEFBcgzU4/giphy.gif)__ | [Install](https://github.com/posva/vim-vue)
__[VS Code](https://code.visualstudio.com/)__ | [Install](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

(but Sublime is best)