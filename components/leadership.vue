<template>
  <section class="leadership">
    <div class="ui container">
      <div class="leadership__wrapper">
        <div class="leadership__content">
          <div class="leadership__description">
            <h2 class="leadership__title">
              {{ leadershipData.title }}
            </h2>
            <h3 class="leadership__subtitle">
              {{ leadershipData.subtitle }}
            </h3>
          </div>
          <div class="leadership__members">
            <div
              v-for="member in leadershipData.members"
              class="leadership__member"
            >
              <CardStaff v-bind="member" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import leadershipData from '~/data/leadership.json';
export default {
  data() {
    return {
      leadershipData,
    };
  },
};
</script>
