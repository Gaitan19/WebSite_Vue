<template>
  <div class="devCard">
    <nuxt-img :src="imageSrc" alt="Developer profile picture" class="devCard__image" />
    <h4 class="devCard__name">
      {{ name }}
    </h4>
    <span class="devCard__position">{{ position }}</span>
    <p class="devCard__description">
      {{ description }}
    </p>
    <cta custom-class="devCard__cta" btn-type="outlined">
      Engage
    </cta>
    <span class="devCard--skills devCard--skills-uppercase">Skills:</span>
    <p class="devCard--skills">
      {{ techSkills() }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: { type: String },
    name: { type: String },
    position: { type: String },
    description: { type: String },
    skills: { type: Array }
  },
  methods: {
    techSkills () {
      return this.skills.join(', ')
    }
  }
}
</script>
