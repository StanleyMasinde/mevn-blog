<template>
  <div>
    <b-jumbotron class="text-center">
      <template v-slot:header>Awesome App</template>

      <template v-slot:lead>Introduce Your Blog</template>

      <hr class="my-4" />

      <p>Add Your Catchy Phrase Here</p>

      <b-button variant="primary" href="#">Primary Action</b-button>
      <b-button variant="success" href="#">Secondary Action</b-button>
    </b-jumbotron>

    <div class="container">
      <b-card-group deck>
        <b-card
          v-for="n in 3"
          :key="n"
          title="Your Post Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in to additional content.
            This card has even longer content than the first to show that equal height action.
          </b-card-text>
          <template v-slot:footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>