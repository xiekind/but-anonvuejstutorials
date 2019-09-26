<template>
  <div id="app">
    <Header></Header>
    <Login></Login>
  </div>
</template>

<script>
import Header from './components/frame/Header.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    Header,
    Login
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
