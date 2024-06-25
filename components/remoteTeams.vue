<template>
  <segment :title="title" class="remoteTeams">
    <p class="segment__description">
      {{ description }}
    </p>

    <ul class="remoteTeams__list">
      <li v-for="(card, index) in elements" :key="index">
        <article class="remoteTeams__card">
          <div class="remoteTeams__card--wrapper">
            <span class="remoteTeams__card--square"></span>

            <div class="remoteTeams__card--info">
              <h3 class="remoteTeams__card--title">
                {{ card.title }}
              </h3>
              <p class="remoteTeams__card--description">
                {{ card.description }}
              </p>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </segment>
</template>

<script>
export default {
  props: {
    title: { type: String , default: ''},
    description: { type: String, default: '' },
    elements: { type: Array, default: [] },
  },
};
</script>
