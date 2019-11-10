<template>
  <main>
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
  data() {
    return {
      currentTime: null,
      date: new Date()
    };
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