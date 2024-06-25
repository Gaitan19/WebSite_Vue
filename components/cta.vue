<template>
  <NuxtLink :to="path" class="cta" :class="`${customClass ?? ''} ${getButtonType(btnType)}`">
    <slot />
  </NuxtLink>
</template>

<script>
import { NuxtLink } from '#components';

export default {
  components: { NuxtLink },
  props: {
    path: { type: String, default: '' },
    customClass: { type: String, default: '' },
    btnType: {
      type: String,
      validator: (value) =>
        ['medium', 'small', 'outlined', 'secondary', ''].includes(value),
      default: "",
    },
  },

  methods: {
    getButtonType(type) {
      switch (type) {
        case 'medium':
          return 'cta--type-medium';
        case 'small':
          return 'cta--type-small';
        case 'outlined':
          return 'cta--type-outlined';
        case 'secondary':
          return 'cta--type-secondary';
        case undefined:
          return '';

        default:
          return '';
      }
    },
  },
};
</script>
