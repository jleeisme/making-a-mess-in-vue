<template>
  <div>
    <h2>This is Users</h2>
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