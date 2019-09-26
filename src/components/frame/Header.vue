<template>
  <!-- THIS IS FOR THE NAVAGATION BAR -->
  <div class="container">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand id="title" href="#">MyFirstNav</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item id="loginBtn" v-on:click="login" href="/Login.vue">Login</b-nav-item>
          <!--v-click="Login()"-->
          <b-nav-item id="item" href="#">Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    
<!-- 
<div>
  <b-button v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div> -->


  </div>
  </template>
<style scoped lang="scss">
@import "assets/colors.scss";
.container {
  color: $gray !important;
}
#title {
  color: $pink !important;
  // color: $titleColor;
}
</style>

<script>
import Router from 'vue-router'

if(loginBtn){

}


export default {
  name: "Header",
  components:{
  },
  methods:{
    login:function () {
      this.Router.go('./Login')
    }
  },
  routes:[
    {
      path:'./Login',
      name:'Login'
    }
  ]
};


</script>