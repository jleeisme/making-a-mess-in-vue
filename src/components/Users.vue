<template>
  <div id="users">
    <h2>This is Users</h2>
    <!-- a click will activate the appropriate method which pushes the url link -->
    <button @click="goHome">Go to Home component</button>
    <button @click="goLosers">Go to Losers component</button>
    <button @click="goHello">Go to Hello component</button>
    <div class="box" @click="attachColour = !attachColour" :class="{black: attachColour}"> Click </div>

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
  },
  data() {
    return {
      attachColour: false
    }
  }
}

</script>

<style>
  .box {
    height: 100px;
    width: 100px;
    background-color: grey;
    margin: 10px auto;
    color: white;
  }

  .black {
    background-color: black;
  }
</style>