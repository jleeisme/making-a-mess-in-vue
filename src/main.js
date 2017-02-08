import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Hook from './components/Hook.vue'
import Users from './components/Users.vue'
import Home from './components/Home.vue'
import Losers from './components/Losers.vue'
import Hello from './components/Hello.vue'
import End from './components/End.vue'

Vue.use(VueRouter)

// these two components share the same 'space' through
// the <router-view> so their views show when called on and 
// the other, doesn't
const routes = [
  { path: '/', component: Home },//changing the path url here has no effect on the actual url it seems
  { path: '/users', component: Users },
  { path: '/losers', component: Losers },
  { path: '/hello', component: Hello },
  { path: '/end', component: End }
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
