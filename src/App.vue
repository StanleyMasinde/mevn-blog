<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/">Awesome Blog</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"></b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>

    <div class="text-center mt-5">&copy; Your App {{ new Date().getFullYear() }}, All Rights reserved</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>