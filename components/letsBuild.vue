<template>
  <section class="build" :class="customClass">
    <div class="container">
      <div class="wrapper">
        <h2 class="build__title">
          {{ title }}
        </h2>
        <h3 class="build__subtitle">
          {{ subtitle }}
        </h3>
        <div class="build__content">
          <div class="build__perks">
            <slot />
          </div>
          <NuxtLink class="build__link"> SCHEDULE A CALL </NuxtLink>
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
  },
};
</script>
