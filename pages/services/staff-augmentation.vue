<template>
  <hero
    custom-class="staffAugmentation"
    :title="staffAugmentation.HERO.title"
    :subtitle="staffAugmentation.HERO.subtitle"
    :cta="staffAugmentation.HERO.btnLabel"
  >
    <div class="staffAugmentation__map">
      <img src="/images/staff-augmentation-map.png" alt="map image">

      <div class="staffAugmentation__map--point" />
      <div class="staffAugmentation__map--point" />
      <div class="staffAugmentation__map--point" />
      <div class="staffAugmentation__map--point" />
      <div class="staffAugmentation__map--point" />
      <div class="staffAugmentation__map--point" />
      <div class="staffAugmentation__map--point" />
    </div>
  </hero>

  <segment custom-class="technologies">
    <marquee
      :AText="staffAugmentation.TECHNOLOGIES.marqueeTop"
      custom-class="technologies"
    />
    <marquee
      :AText="staffAugmentation.TECHNOLOGIES.marqueeBot"
      custom-class="technologies"
      direction="reverse"
    />

    <p class="segment__subtitle">
      {{ staffAugmentation.TECHNOLOGIES.description }}
    </p>
  </segment>

  <remoteTeams
    :title="staffAugmentation.REMOTETEAMS.title"
    :description="staffAugmentation.REMOTETEAMS.description"
    :elements="staffAugmentation.REMOTETEAMS.cards"
  />

  <letsBuild
    custom-class="staffAugmentation"
    :title="staffAugmentation.REMOTESTEPS.title"
    :subtitle="staffAugmentation.REMOTESTEPS.description"
  >
    <CardLetsbuildSteps
      v-for="step in remoteSteps"
      v-bind="step"
      :key="step.title"
    />
  </letsBuild>

  <segment :title="staffAugmentation.BLOGS.title" custom-class="industry">
    <p class="segment__description">
      {{ staffAugmentation.BLOGS.description }}
    </p>

    <ul class="staffAugmentation__blogs">
      <li v-for="(item, index) in blogPost" :key="index">
        <CardPost :card="item" />
      </li>
    </ul>
  </segment>
</template>

<script setup>
import staffAugmentation from '~/data/staff-augmentation.json'
import { metaHead } from '~/hooks/metaHead.ts'

const remoteSteps = staffAugmentation.REMOTESTEPS.cards
const blogPost = staffAugmentation.BLOGS.posts

metaHead('Staff Augmentation')
</script>
