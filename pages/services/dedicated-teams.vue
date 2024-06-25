<template>
  <hero
    custom-class="dedicated"
    :title="dedicatedTeams.HERO.title"
    :description="dedicatedTeams.HERO.description"
    :cta="dedicatedTeams.HERO.btnLabel"
  >
    <figure class="hero__image">
      <nuxt-img :src="dedicatedTeams.HERO.image" />
    </figure>
  </hero>

  <segment custom-class="technologies">
    <marquee
      :AText="dedicatedTeams.TECHNOLOGIES.marqueeTop"
      custom-class="technologies"
    />
    <marquee
      :AText="dedicatedTeams.TECHNOLOGIES.marqueeBot"
      custom-class="technologies"
      direction="reverse"
    />

    <p class="segment__subtitle">
      {{ dedicatedTeams.TECHNOLOGIES.description }}
    </p>
  </segment>

  <remoteTeams
    :title="dedicatedTeams.REMOTETEAMS.title"
    :description="dedicatedTeams.REMOTETEAMS.description"
    :elements="dedicatedTeams.REMOTETEAMS.cards"
  />

  <letsBuild
    custom-class="dedicated"
    :title="dedicatedTeams.REMOTESTEPS.title"
    :subtitle="dedicatedTeams.REMOTESTEPS.description"
  >
    <CardLetsbuildSteps
      v-for="step in remoteSteps"
      v-bind="step"
      :key="step.title"
    />
  </letsBuild>

  <segment :title="dedicatedTeams.BLOGS.title" custom-class="industry">
    <p class="segment__description">
      {{ dedicatedTeams.BLOGS.description }}
    </p>

    <ul class="dedicatedTeams__blogs">
      <li v-for="(item, index) in blogPost" :key="index">
        <CardPost :card="item" />
      </li>
    </ul>
  </segment>
</template>

<script setup>
import dedicatedTeams from '~/data/dedicated-teams.json';
import { metaHead } from '~/hooks/metaHead.ts';
const remoteSteps = dedicatedTeams.REMOTESTEPS.cards;

const blogPost = dedicatedTeams.BLOGS.posts;

metaHead('Dedicated Teams');
</script>
