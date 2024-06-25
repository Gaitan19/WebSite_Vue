<template>
  <article class="card--blog">
    <nuxt-img class="card--blog__image" :src="image" />
    <div class="card--blog__content">
      <span class="card--blog__date"> SMBS Solutions • {{ date }}</span>
      <h4 class="card--blog__title">
        {{ title }}
      </h4>
      <p class="card--blog__text">
        {{ text }}
      </p>
      <NuxtLink class="card--blog__link" :href="link">
        {{ linkText }}
      </NuxtLink>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    image: { type: String, default: '' },
    date: { type: String, default: '' },
    title: { type: String, default: '' },
    text: { type: String, default: '' },
    href: { type: String, default: '' },
    linkText: { type: String, default: '' }
  }
}
</script>
