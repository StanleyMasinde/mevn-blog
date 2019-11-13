<template>
  <main>
    <vue-progress-bar></vue-progress-bar>
    <div class="container">
      <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a class="text-muted" href="#">Subscribe</a>
          </div>
          <div class="col-4 text-center">
            <router-link to="/" class="blog-header-logo text-dark">Blog</router-link>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="mx-3"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
            <router-link to="/login" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <a
                class="btn btn-sm m-1"
                :class="isActive ? 'btn-primary': 'btn-link'"
                :href="href"
                @click="navigate"
              >Sign In</a>
            </router-link>
            <router-link to="/register" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <a
                class="btn btn-sm"
                :class="isActive ? 'btn-success': 'btn-outline-secondary'"
                :href="href"
                @click="navigate"
              >Sign up</a>
            </router-link>
          </div>
        </div>
      </header>
    </div>
    <router-view></router-view>
    <!-- /.container -->

    <footer class="blog-footer">
      <p>
        Blog Designed with ❤️ by
        <a href="https://stanleymasinde.tech">Stanley Masinde</a> by
        <a href="https://twitter.com/StanleyMasinde_">@StanleyMasinde_</a>.
      </p>
      <p class="mt-5 mb-3 text-muted">&copy; {{ new Date().getFullYear() }}</p>
      <p>
        <a href="#">Back to top</a>
      </p>
    </footer>
  </main>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: "%s | Blog"
  },
  data() {
    return {
      currentTime: null,
      date: new Date()
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    progress() {
      if (this.loading == true) {
        this.$Progress.start();
      }
    }
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
  },
  mounted() {}
};
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>