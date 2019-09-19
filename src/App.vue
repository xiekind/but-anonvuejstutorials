<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/frame/Header.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    Header
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
  /* margin-top: 60px; */
}
</style>
