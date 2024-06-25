<template>
  <div :class="customClass" class="marquee">
    <div class="ui container">
      <Vue3Marquee
        v-if="AImages"
        :clone="clone"
        :direction="direction"
        :duration="duration"
      >
        <img
          v-for="image in AImages"
          :key="image.id"
          :src="image.src"
          :alt="image.alt"
          class="marquee__image"
        />
      </Vue3Marquee>

      <Vue3Marquee
        v-if="AText"
        :clone="clone"
        :direction="direction"
        :duration="duration"
      >
        <p v-for="(item, index) in AText" :key="index" class="marquee__text">
          {{ item }}
        </p>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customClass: { type: String },
    title: { type: String },
    AImages: { type: Array },
    AText: { type: Array },
    clone: { type: Boolean, default: true },
    duration: { type: Number, default: 50 },
    direction: {
      type: String,
      default: 'normal',
      validator: (value) => ['normal', 'reverse'].includes(value),
    },
  },
};
</script>
