<template>
  <div class="card card--staff">
    <nuxt-img :src="image" class="card--staff__image" />
    <div class="card--staff__content">
      <span class="card--staff__name">{{ name }}</span>
      <div class="card--staff__charge">
        <span class="card--staff__position">{{ position }}</span>
        <Icon v-if="icon.length > 0" class="card--staff__icon" :name="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
}
</script>
