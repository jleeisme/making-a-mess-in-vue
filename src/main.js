import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Hook from './Hook.vue'
import Users from './Users.vue'
import Home from './Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/users', component: Users },
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  mode: 'history'//eliminates the # from the url
})

Vue.component('app-hook', Hook)//this is now a global component
// you can also create the template right here, but it's 
// already been made in the Hook.vue file

new Vue({
  el: '#app',//the div in index.html which we change
  router,
  render: h => h(App)//replace with some other code
  // overrides to not use the DOM as template but as a hook
  // other templates can be used
})
