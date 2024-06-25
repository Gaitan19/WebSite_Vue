<template>
  <section class="about">
    <div class="ui container">
      <div class="about__wrapper">
        <div class="about__content">
          <div class="about__description">
            <h2 class="about__title">
              {{ aboutUsData.title }}
            </h2>
            <h3 class="about__subtitle">
              {{ aboutUsData.subtitle }}
            </h3>
          </div>
          <p class="about__text">
            {{ aboutUsData.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutUsData from '~/data/aboutUs.json';

export default {
  data() {
    return { aboutUsData };
  },
};
</script>
