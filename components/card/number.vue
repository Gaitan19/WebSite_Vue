<template>
  <article class="card-number" :class="customClass">
    <div class="card-number__wrapper">
      <div class="card-number__num">
        {{ card.number }}
      </div>
      <div class="card-number__info">
        <h3 class="card-number__title">
          {{ card.title }}
        </h3>
        <p v-if="card.description" class="card-number__description">
          {{ card.description }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    customClass: { type: String },
    card: {
      type: Object,
      default: () => ({
        number: { type: number },
        title: { type: String },
        description: { type: String }
      })
    }
  }
}
</script>
