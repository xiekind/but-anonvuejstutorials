<template>
  <div class="login">
    <h1>{{ "Login Page" }}</h1>
    <!--  @click="showModalLogin"  -->
    <button class="btn btn-success mx-auto" id="modal-login" style="width:auto;">Login</button>

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="icon" type="image/png" href="images/bugattiLogo.png" />
  </div>
</template>

    <script src="./node_modules/jquery/dist/jquery.js"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
    <script src="sweetalert2.all.min.js"></script>
<!-- Optional: include a polyfill for ES6 Promises for IE11 and Android browser -->
    <script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>


<script>
// import swal from 'sweetalert';
import 'sweetalert2/dist/sweetalert2.min.css';

import swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')

export default {
  name: "Login",
  methods: {
  }
};

swal({
  title: "An input!",
  text: "Write something interesting:",
  type: "input",
  showCancelButton: true,
  closeOnConfirm: false,
  inputPlaceholder: "Write something"
}, function (inputValue) {
  if (inputValue === false) return false;
  if (inputValue === "") {
    swal.showInputError("You need to write something!");
    return false
  }
  swal("Nice!", "You wrote: " + inputValue, "success");
});

</script>

