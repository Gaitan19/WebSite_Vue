<template>
  <section class="reviews" :class="customClass">
    <div class="container">
      <div class="wrapper">
        <h2 class="title reviews__title">
          {{ title }}
        </h2>
        <h3 class="title title--secondary reviews__subtitle">
          {{ subtitle }}
        </h3>
        <p class="text reviews__text">
          {{ text }}
        </p>
        <div class="reviews__cards">
          <Swiper
            slides-per-view="1.33"
            :space-between="25"
            :breakpoints="responsiveReviews"
            loop
          >
            <slot />
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    customClass: { type: String, default: '' },
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    text: { type: String, default: '' },
    responsiveReviews: { type: Object, default: '' },
    qualification: { type: String, default: '' },
  },
};
</script>
