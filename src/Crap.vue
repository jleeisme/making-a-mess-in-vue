<template>
  <div id="something">
    <h1> {{ msg }} </h1>
    <app-input></app-input>
  </div>
</template>

<script>
import Input from './Input.vue'

export default {
  name: 'something',
  components: {
    'app-input': Input//app-input is the selector - basically the name. A locally registered component
  },
  data() {
    return {
      msg: 'I\'m the Crap component'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }

</style>