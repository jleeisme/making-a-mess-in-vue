<template>
  <div id="users">
    <h2>This is Users</h2>
    <!-- a click will activate the appropriate method which pushes the url link -->
    <button @click="goHome">Go to Home component</button>
    <button @click="goLosers">Go to Losers component</button>
    <button @click="goHello">Go to Hello component</button>
    
    <transition name="slide-fade" mode="out-in">
    <div class="box" @click="attachColour = !attachColour" :class="switchClasses" :style="boxChange"> Click </div>
    </transition>
    <input type="text" placeholder="adjust the box width" v-model="width">

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
      return {
        width: this.width + 'px'
      }
    }
  }
}
</script>

<style>
  
  /*.slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }*/

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;
/*    background-color: grey;*/
    margin: 10px auto;
    color: white;
    /*transition: opacity .5s;*/
  }

  .black {
    background-color: black;
  }

  .red {
    background-color: red;
  }
</style>