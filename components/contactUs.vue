<script>
import contactUs from "~/data/contactUs.json";

export default {
  data() {
    return {
      contactUs,
    };
  },

  methods: {
    validatePhoneNumber(event) {
      if (event.charCode < 48 || event.charCode > 57) {
        event.preventDefault();
      }
    },
  },
};
</script>

<template>
  <section id="Contact" class="contact">
    <div class="contact__content">
      <div class="contact__wrapper">
        <div class="contact__information">
          <h2 class="title contact__title">
            {{ contactUs.title }}
          </h2>
          <h3 class="title contact__subtitle">
            {{ contactUs.subtitle }}
          </h3>
          <p class="contact__text">
            <span>
              {{ contactUs.text }}
            </span>
            {{ " " }}
            <span class="contact__text--secondary">
              {{ contactUs.secondary_text }}
            </span>
          </p>
        </div>

        <form class="contact__form">
          <template v-for="(field, idx) in contactUs.fields" :key="idx">
            <textarea
              v-if="field.isTextarea"
              class="contact__input contact__input-message"
              :placeholder="field.placeholder"
              :type="field.type"
              required
            />
            <input
              v-else-if="field.type === 'tel'"
              class="contact__input"
              :placeholder="field.placeholder"
              :type="field.type"
              :maxlength="field.maxlength"
              pattern="^[578]\d{7}$"
              required
              @keypress="validatePhoneNumber"
            />
            <input
              v-else
              class="contact__input"
              :placeholder="field.placeholder"
              :type="field.type"
              required
            />
          </template>

          <button class="button contact__button">SEND</button>
        </form>
      </div>
    </div>
  </section>
</template>
