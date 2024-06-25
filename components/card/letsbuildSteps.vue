<script>
export default {
  props: {
    stepNumber: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    arrow: { type: String, default: '' }
  }
}
</script>

<template>
  <div class="build__perk">
    <div class="build__perk-content">
      <span class="build__perk-number">{{ stepNumber }}</span>
      <span class="build__perk-title">{{ title }}</span>
      <span class="build__perk-text">{{ description }}</span>
    </div>
    <nuxt-img v-if="arrow.length > 0" class="build__perk-image" :src="arrow" />
  </div>
</template>
