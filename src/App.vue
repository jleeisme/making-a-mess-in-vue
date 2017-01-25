<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <!-- <h2>{{ text }}</h2> -->
    <!-- <h3>{{ text2 }}</h3> -->
    <h2>{{ hey }}</h2>
    <app-hook></app-hook>    
  </div>
</template>

<script>

export default {
  name: 'app',
  props: {
    hey: {
      type: String,
      default: 'I\'m in the props in the App component'
    }
  },
  data() {
    return {
      msg: 'Data msg returned in the App component',
      // text: 'Maybe you should text a friend...'
      // text2: 'Or not...'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2, h3 {
  font-weight: normal;
  color: orange;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
