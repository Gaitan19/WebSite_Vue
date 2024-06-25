<template>
  <article class="card" :class="customClass">
    <div class="card__wrapper">
      <header v-if="image.src || title" class="card__heading">
        <nuxt-img v-if="image.src" :src="image.src" :alt="image.alt" class="card__image" />
        <h4 v-if="title" class="card__title">
          {{ title }}
        </h4>
        <slot name="cardHeading" />
      </header>

      <div class="card__body">
        <p v-if="description && !htmlText" class="card__description">
          {{ description }}
        </p>
        <p v-if="htmlText" class="card__description" v-html="description" />
        <slot name="cardBody" />
      </div>

      <footer v-if="cta" class="card__footer">
        <cta v-if="cta" :path="link" :custom-class="btnClass" btn-type="secondary">
          {{ cta }}
        </cta>
        <slot name="cardFooter" />
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => ({
        src: '',
        alt: ''
      })
    },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    cta: { type: String, default: '' },
    btnClass: { type: String, default: '' },
    customClass: { type: String, default: '' },
    htmlText: { type: Boolean, default: false },
    link: { type: String, default: '' }
  }
}
</script>
