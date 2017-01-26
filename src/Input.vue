<template>
  <div>
    <form class="user-input-form">
      <p>Input component called through the Hook component</p>
      <p class="text">{{ text }}</p>
      <input type="text" v-model="message" id="user-input" placeholder="No typing" v-on:keyup="pressed">
      <router-link to="/users">To Users component</router-link>
      <!-- not yet linked -->
      <p class="message">{{ message }}</p>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['text'],
    data() {
      return {
        message: ''
      }
    },
    methods: {
      pressed(e) {
        console.log(e.target.value)
      }
    }
  }
</script>

<style>
  p {
    color: purple;
  }

  .message {
    color: blue;
  }

  .text {
    color: pink;
  }
</style>