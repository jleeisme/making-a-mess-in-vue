<template>
  <div>
    <form class="user-input-form">
      <p>Input component called through the Hook component</p>
      <p class="text">{{ text }}</p>
      <input type="text" v-model="message" id="user-input" placeholder="No typing" v-on:keyup="pressed">
      <!-- to= can be bound by :to and then direct to the link via a variable, but this is the whole path, so for now nbd -->
      <p class="message">{{ message }}</p>
      <p class="order">{{ order }}</p>
      <router-link to="/users">To Users component</router-link>
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
    },
    computed: {
      order() {
        return this.message != `stop` ? `What's the opposite of go?` : `Stop!`
      }
    }
  }
</script>

<style>
  input:focus {
    outline: none;
  }

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