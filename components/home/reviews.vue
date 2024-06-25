<template>
  <review v-bind="reviewsData">
    <SwiperSlide v-for="(clientReview, index) in clientReviews" :key="index">
      <CardRating v-bind="clientReview" />
    </SwiperSlide>
  </review>
</template>

<script>
import reviewsData from '~/data/reviews.json'
import clientReviews from '~/data/clientReviews.json'

export default {
  data() {
    return {
      reviewsData,
      clientReviews
    }
  }
}
</script>
