<template>
  <div class="container">
    <div class="row full-height justify-content-center align-content-center">
      <div class="col-md-6">
        <div class="card p-md-5">
          <div class="card-body">
            <form action method="post">
              <div class="form-group">
                <label for="email">E-mail Address</label>
                <input class="form-control" type="email" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" type="password" />
              </div>
              <button class="btn btn-outline-primary btn-block">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.full-height {
  height: 80vh;
}
</style>