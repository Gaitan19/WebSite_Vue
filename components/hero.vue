<template>
  <section class="hero" :class="customClass">
    <div class="container">
      <div class="hero__wrapper">
        <div class="hero__info">
          <h2 class="hero__title">
            {{ title }}
          </h2>
          <h3 v-if="subtitle" class="hero__subtitle">
            {{ subtitle }}
          </h3>
          <p v-if="description" class="hero__description">
            {{ description }}
          </p>

          <div v-if="cta" class="hero__footer">
            <cta :to="ctaPath" custom-class="hero__footer--btn">
              {{ cta }}
            </cta>
            <nuxt-img
              v-if="imageSrc"
              :src="imageSrc"
              class="hero__footer--img"
            />
          </div>
        </div>
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String },
    subtitle: { type: String },
    customClass: { type: String },
    description: { type: String },
    cta: { type: String },
    ctaPath: { type: String },
    imageSrc: { type: String },
  },
};
</script>
