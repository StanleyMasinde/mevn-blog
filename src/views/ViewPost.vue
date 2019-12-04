<template>
<div class="container">
  <div class="blog-post">
    <h2 class="blog-post-title">{{ post.title }}</h2>
    <p class="blog-post-meta">
      December 23, 2013 by
      <a href="#">Jacob</a>
    </p>

    <p>{{ post.body }}</p>
  </div>
  <!-- /.blog-post -->
</div>
</template>

<script>
export default {
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: this.title,
      titleTemplate: null,
      meta: [{ name: "description", content: "Welcome to my blog" }]
    };
  },
  data() {
    return {
      title: "Post",
      post: {}
    };
  },
  methods: {
    getPosts() {
      this.$store.state.loading = true;
      axios
        .get(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.post}`
        )
        .then(res => {
          this.post = res.data;
          this.title = res.data.title
        })
        .catch(err => {
          console.error(err);
        })
        .finally((this.$store.state.loading = false));
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style>
</style>