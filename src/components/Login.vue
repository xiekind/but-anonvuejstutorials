
    <script src="./node_modules/jquery/dist/jquery.js"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<template>
  <div class="login">
    <h1>{{ "Login Page" }}</h1>
    <!--  @click="showModalLogin"  -->
    <button
      @click="swal()"
      class="btn btn-success mx-auto"
      id="modal-login"
      style="width:auto;"
    >Login</button>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />
  </div>
</template>



<script>
// import swal from "sweetalert";
import swal from 'sweetalert';

  $(document).ready(function(){
    $("#modal-login").click(function(){
      alert("The paragraph was clicked.");
      // swal("Hello world!");
    });
  });

</script>

