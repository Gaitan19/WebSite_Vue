<script>
export default {
  props: {
    image: { type: String, default: '' },
    text: { type: String, default: '' },
    author: { type: String, default: '' },
    charge: { type: String, default: '' },
    site: { type: String, default: '' },
    qualification: { type: String, default: '' }
  }
}
</script>

<template>
  <article class="card card--review">
    <nuxt-img
      :src="image"
      width="120"
      height="34"
      class="card--review__image"
    />
    <p class="card--review__description">
      {{ text }}
    </p>
    <div class="card--review__contact">
      <span class="card--review__author">{{ author }}</span>
      <span class="card--review__charge">{{ charge }}</span>
    </div>
    <div class="card--review__qualifications">
      <nuxt-img :src="site" width="97" height="50" />
      <nuxt-img
        class="card--review__stars"
        :src="qualification"
        width="360"
        height="106"
      />
    </div>
  </article>
</template>
