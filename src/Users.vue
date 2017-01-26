<template>
  <div>
    <h2>Users Overview</h2>
    <button @click="goHome">To Home component</button>
  </div>
</template>

<script>
  export default {
    methods: {
      goHome() {
        this.$router.push('/')
      }
    }
  }
</script>