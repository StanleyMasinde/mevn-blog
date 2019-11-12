<template>
  <div class="text-center">
    <form class="form-signin">
      <router-link class="btn btn-outline-info" to="/">Home</router-link>
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

      <div class="form-group">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      </div>

      <div class="form-group">
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      />
      </div>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      or
      <router-link to="/register" v-slot="{ href, route, navigate, isActive, isExactActive }">
        <a class="btn btn-lg btn-success btn-block" :href="href" type="submit">Sign Up</a>
      </router-link>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
    </form>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Sign In"
  }
};
</script>

<style scoped>
html,
body {
  height: 100%!important;
}

body {
  display: -ms-flexbox;
  display: flex!important;
  -ms-flex-align: center!important;
  align-items: center!important;
  padding-top: 40px!important;
  padding-bottom: 40px!important;
  background-color: #f5f5f5!important;
}

.form-signin {
  width: 100%!important;
  max-width: 330px!important;
  padding: 15px!important;
  margin: auto!important;
}
.form-signin .checkbox {
  font-weight: 400!important;
}
.form-signin .form-control {
  position: relative!important;
  box-sizing: border-box!important;
  height: auto!important;
  padding: 10px!important;
  font-size: 16px!important;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>