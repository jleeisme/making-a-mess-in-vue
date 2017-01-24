<template>
  <div>
    <form class="user-input-form">
      <p>Input component called through the Crap component</p>
      <input type="text" v-model="message" id="user-input" placeholder="No typing" v-on:keyup="pressed">
      <button>send</button>
      <p>{{ message }}</p>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: ''
      }
    },
    methods: {
    pressed: (e) => {
      console.log(e.target.value)
    }
  }
  }
</script>