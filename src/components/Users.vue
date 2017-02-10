<template>
  <div>
    <h2>This is Users</h2>
    <!-- a click will activate the appropriate method which pushes the url link -->
    <button @click="goHome">Go to Home component</button>
    <button @click="goLosers">Go to Losers component</button>
    <button @click="goHello">Go to Hello component</button>
  </div>
</template>

<script>

export default {
  methods: {
    goHome() {
      this.$router.push('/')//home url can be changed to whatever is entered here
    },  
    goLosers() {
      this.$router.push('/losers')
    },
    goHello() {
      this.$router.push('/hello')
    }
  }
}
</script>