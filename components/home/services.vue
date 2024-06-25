<template>
  <Segment custom-class="services" :is-row="true">
    <template #row>
      <div class="segment__content">
        <h2 class="segment__title">
          {{ services.title }}
        </h2>
        <h3 class="segment__subtitle">
          {{ services.subtitle }}
        </h3>
        <p class="segment__description">
          {{ services.description }}
        </p>
      </div>

      <nuxt-img class="services__image" :src="services.image.src" :alt="services.image.alt" />
    </template>

    <ul class="services__cards">
      <li v-for="card in services.cards" :key="card.id">
        <CardSegment
          :title="card.title"
          :description="card.description"
          :image="card.image"
          :cta="card.cta"
          :link="card.link"
          custom-class="services"
          btn-class="services__card--btn"
        />
      </li>
    </ul>
  </Segment>
</template>

<script>
import services from '~/data/services.json'

export default {
  data () {
    return {
      services
    }
  }
}
</script>
