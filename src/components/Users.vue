<template>
  <div id="users">
    <h2>This is Users</h2>

    <!-- a click will activate the appropriate method which pushes the url link -->
    <button @click="goHome">Go to Home component</button>
    <button @click="goLosers">Go to Losers component</button>
    <button @click="goHello">Go to Hello component</button>    
    <div class="box" @click="attachColour = !attachColour" 
      :class="switchClasses" :style="[boxChange, {height: width + 'px'}]">
      <!-- in the array, the height is set to be what the width has been set to. -->
       
      Click... !> 300 
    </div>
    
    <input type="text" v-model="width" placeholder="adjust the box width">
  </div>  
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')//home url can be changed to whatever is entered here
    },  
    goLosers() {
      this.$router.push('/losers')
    },
    goHello() {
      this.$router.push('/hello')
    }
  },
  data() {
    return {
      // color: 'red',
      attachColour: false,
      width: 100
    }
  },
  computed: {
    switchClasses() {
      return {
        red: this.attachColour,
        black: !this.attachColour
      }
    },
    boxChange() {
      return{
        width: this.width + 'px'
      }
    }
  }  
}
</script>

<style>
  .box {
    max-width: 300px;
    max-height: 300px;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
    margin: 10px auto;
    color: white;
  }

  .black {
    background-color: black;
  }

  .red {
    background-color: red;
  }
</style>