<template>
  <div class="text-center">
    <form class="form-signin">
      <router-link class="btn btn-outline-info" to="/">Home</router-link>
      <h1 class="h3 mb-3 font-weight-normal">Please sign up</h1>

      <div class="form-group">
        <label for="inputEmail" class="sr-only">First Name</label>
        <input
          type="text"
          id="inputFirstName"
          class="form-control"
          placeholder="First Name"
          required
          autofocus
        />
      </div>

      <div class="form-group">
        <label for="inputEmail" class="sr-only">Last Name</label>
        <input type="text" id="lastName" class="form-control" placeholder="Last Name" required />
      </div>

      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
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

      <div class="form-group">
        <label for="inputPassword" class="sr-only">Confirm Password</label>
        <input
          type="password"
          id="inputPasswordConfirmation"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
      or
      <router-link to="/login">Login</router-link>
    </form>
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Sign Up"
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
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