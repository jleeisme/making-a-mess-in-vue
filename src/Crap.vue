<template>
  <div id="something">
    <h1> {{ msg }} </h1>
    <!-- <app></app> -->
  </div>
</template>

<script>

// import App from './src/App.vue'

export default {
  name: 'something',
  // components: {
  //   App
  // },
  data() {
    return {
      msg: 'fdjkfdnsfndslfdsfldsfnlsd'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }

</style>