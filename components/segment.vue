<template>
  <section :class="customClass" class="segment">
    <div class="container">
      <div class="segment__wrapper">
        <template v-if="isRow">
          <div class="segment__info">
            <slot name="row" />
          </div>
        </template>

        <template v-else>
          <h2 v-if="title" class="segment__title">
            {{ title }}
          </h2>
        </template>

        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    customClass: { type: String, default: '' },
    isRow: { type: Boolean, default: false },
    title: { type: String, default: '' },
  },
};
</script>
