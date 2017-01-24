<template>
  <div id="something">
    <h3> {{ msg }} </h3>
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
      msg: 'I\'m the Hook component'
    }
  }
}
</script>

<style scoped>
  h3 {
    color: red;
  }

</style>