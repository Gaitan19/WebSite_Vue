<template>
  <section class="blog">
    <div class="container">
      <div class="wrapper">
        <h2 class="blog__title">
          {{ homeBlog.title }}
        </h2>
        <h3 class="blog__subtitle">
          {{ homeBlog.subtitle }}
        </h3>

        <div class="blog__posts">
          <CardHomeBlog v-for="blog in blogs" v-bind="blog" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import homeBlog from "~/data/homeBlog.json";
import blogs from "~/data/homePosts.json";

export default {
  data() {
    return { homeBlog, blogs };
  },
};
</script>
