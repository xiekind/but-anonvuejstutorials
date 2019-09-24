<template>
  <!-- THIS IS FOR THE NAVAGATION BAR -->
  <div class="container">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand id="title" href="#">MyFirstNav</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Login</b-nav-item>
          <b-nav-item id="item" href="#">Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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