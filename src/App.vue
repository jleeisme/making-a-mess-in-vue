<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <h3>{{ text2 }}</h3>
    <form class="user-input-form">
      <input type="text" id="user-input" placeholder="message">
      <button>send</button>
    </form>
  </div>
</template>

<script>
// import Crap from './Crap.vue'

export default {
  // components: {
  //   Crap
  // },
  name: 'app',
  data () {
    return {
      msg: 'This is not the framework you\'re looking for',
      text: 'Maybe you should text a friend...',
      text2: 'Or not...'
    }
  }
}
</script>

<style>
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
