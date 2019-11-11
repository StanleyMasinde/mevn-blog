<template>
  <main>
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
    <!-- /.container -->

    <footer class="blog-footer">
      <p>
        Blog template built for
        <a href="https://getbootstrap.com/">Bootstrap</a> by
        <a href="https://twitter.com/mdo">@mdo</a>.
      </p>
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