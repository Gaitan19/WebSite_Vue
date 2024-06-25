<template>
  <review v-bind="testimonialsData">
    <SwiperSlide v-for="(clientReview, index) in clientReviews" :key="index">
      <CardRating v-bind="clientReview" />
    </SwiperSlide>
  </review>
</template>

<script>
import testimonialsData from '~/data/testimonials.json'
import clientReviews from '~/data/clientReviews.json'

export default {
  data () {
    return {
      testimonialsData,
      clientReviews
    }
  }
}
</script>
