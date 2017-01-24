<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <h3>{{ text2 }}</h3>
    <h2>{{ hey }}</h2>
    <app-crap></app-crap>
    <!-- <something></something> -->
    
  </div>
</template>

<script>
// import Crap from './src/Crap'

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
      msg: 'This is not the framework you\'re looking for',
      text: 'Maybe you should text a friend...',
      text2: 'Or not...'
    }
    // components: {
    //   App, Crap
    // }
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

h1, h2 {
  font-weight: normal;
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
