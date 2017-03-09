<template>
  <div>
    <form class="user-input-form">
      <p>Input component called through the Hook component</p>
      <p class="text">{{ text }}</p>
      <form autocomplete="off">
        <input type="text" v-model="message" id="user-input" placeholder="No typing" v-on:keyup="pressed">
      </form>
      <p class="message">{{ message }}</p>
      <p class="order">{{ order }}</p>
      <router-link class="linky" to="/users">To Users component</router-link>
    </form>
  </div>
</template>  

<script>
  export default {
    props: ['text'], // this props is from Hook.vue
    data() {
      return {
        message: ''
      }
    },

    methods: { 
      pressed(e) {
        console.log(e.target.value);
      }
    },

    computed: {
      order() {
        return this.message != `stop` ? `What's the opposite of go?` : `Stop of course!`;
      }
    }
  };
</script>

<style>
  input:focus {
    outline: none;
  }

  p {
    color: purple;
  }

  .order {
    color: red;
  }

  .message {
    color: blue;
  }

  .text {
    color: pink;
  }

  .linky {
    color: #a2bc55;
  }
</style>