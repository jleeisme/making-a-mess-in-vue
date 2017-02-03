<template>
  <div id="app">
    <h2>{{ info }}</h2>
    <h1>{{ msg }}</h1>
    <h3>{{ hey }}</h3>
    <!-- <router-view></router-view> -->
    <hr>
    <app-hook></app-hook>    
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'app',
  props: {
    hey: {
      type: String,
      default: `I'm in the props in the App component`
    }
  },
  data() {
    return {
      msg: `Data msg returned in the App component`,
      info: `App component, the entry point`
      // text: 'Maybe you should text a friend...'
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

h1 {
  font-weight: normal;
  color: orange;
}

h3 {
  color: green;
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
