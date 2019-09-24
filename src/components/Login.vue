
<template>
  <div class="login page">
    <h1>{{ "Login Page" }}</h1><mdb-container>
    <mdb-btn color="default" @click.native="login=true">launch login modal <mdb-icon icon="eye" class="ml-1"/></mdb-btn>
    <mdb-modal :show="login" @close="login = false">
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Sign in</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <mdb-input id="emailAdd" label="Your email" icon="envelope" type="email" class="mb-5"/>
        <mdb-input id="" label="Your password" icon="lock" type="password"/>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click.native="login = false">Login</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.6/css/mdb.min.css" />

  </div>
</template>


<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.6/js/mdb.min.js"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
// // import swal from "sweetalert";
// import swal from "sweetalert";
var eAdd = document.getElementById('#emailAdd').val();
 import { mdbContainer, mdbBtn, mdbIcon, mdbModal, mdbModalHeader, mdbModalBody, mdbModalFooter, mdbInput, mdbModalTitle } from 'mdbvue';
  export default {
    name: 'ModalExamplesPage',
    components: {
      mdbContainer,
      mdbBtn,
      mdbModal,
      mdbModalHeader,
      mdbModalBody,
      mdbModalFooter,
      mdbInput,
      mdbModalTitle,
      mdbIcon
    },
    data() {
      return {
        login: false
      }
    }
  }


</script>
