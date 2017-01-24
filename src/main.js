import Vue from 'vue'
import App from './App.vue'
import Hook from './Hook.vue'

Vue.component('app-hook', Hook)//this is now a global component

new Vue({
  el: '#app',//the div in index.html which we change
  render: h => h(App)//replace with some other code
  // overrides to not use the DOM as template but as a hook
  // other templates can be used
})
