<template>
  <div>
    <h2>This is Users</h2>
    <button @click="goHome">To Home component</button>
    <button @click="goLosers">Go to Losers</button>
    <router-link to="/hello">To Hello component</router-link>
  </div>
</template>

<script>
// import Losers from './Losers.vue'

export default {
  methods: {
    goHome() {
      this.$router.push('/')//home url can be changed to whatever is entered here
    },  
    goLosers() {
      this.$router.push('/losers')
    }
  }
}
</script>