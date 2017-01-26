<template>
  <div id="something">
    <h3> {{ msg }} </h3>
    <hr>
    <app-input :text="text"></app-input>
    <hr>
    <!-- bind the text so it can be used in the Input component -->
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
      msg: 'I\'m the Hook component',
      text: 'Bound from Hook, used as a prop in Input component and called there'
    }
  }
}
</script>

<style scoped>
  h3 {
    color: red;
  }

</style>