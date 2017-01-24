import Vue from 'vue'
import App from './App.vue'
import Crap from './Crap.vue'

Vue.component('app-crap', Crap)//this is now a global component

new Vue({
  el: '#app',//the div in index.html which we change
  render: h => h(App)//replace with some other code
  // overrides to not use the DOM as template but as a hook
  // other templates can be used
})
