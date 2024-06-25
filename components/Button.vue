<template>
  <button class="btn" :class="customClass">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    customClass: {
      type: String
    }
  }
}
</script>
