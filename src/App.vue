<template>
  <div id="app">
    <Header></Header>
    <!-- <AppBody></AppBody> -->
    <Login></Login>
  </div>
</template>

<script>
import Header from './components/frame/Header.vue'
// import AppBody from './components/frame/Body.vue'
// import Login from './components/Login.vue'
// import HelloWorld from './components/HelloWorld.vue'
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
