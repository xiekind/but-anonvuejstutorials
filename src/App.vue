<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/kind.png">
    <HelloWorld msg="hi Judy Welcome to your first Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/Login.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
