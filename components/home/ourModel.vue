<template>
  <segment class="ourModel" :is-row="true">
    <template #row>
      <h2 class="segment__title">
        {{ letUsHandle.title }}
      </h2>
      <h3 class="segment__subtitle">
        {{ letUsHandle.subtitle }}
      </h3>
      <p class="segment__description">
        {{ letUsHandle.first_paragraph }}
      </p>
      <p class="segment__description">
        {{ letUsHandle.second_paragraph }}
      </p>
    </template>
    <nuxt-img class="ourModel__img" src="/images/rate-covers.png" alt="inclusive rate cover image" />
  </segment>
</template>

<script setup>
import letUsHandle from '~/data/letUsHandle.json'
</script>
