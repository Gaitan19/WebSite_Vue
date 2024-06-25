<template>
  <footer class="footer">
    <div class="container">
      <contactUs v-if="!isCareerDetails" />
      <div class="footer__content">
        <div class="footer__wrapper">
          <div class="footer__social">
            <nuxt-img class="footer__logo" src="/images/image3.png" />
            <div class="footer__social-icons">
              <Icon
                v-for="(icon, index) in footer.icons"
                :key="index"
                :name="icon"
              />
            </div>
          </div>

          <div class="footer__menu">
            <ul class="footer__menu-list">
              <li v-for="(option, index) in footer.menu" :key="index">
                <NuxtLink class="footer__menu-option" :to="option.link">
                  {{ option.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer__contacts">
            <div
              v-for="contact in footer.contacts"
              :key="contact.id"
              class="footer__contacts-field"
            >
              <Icon
                :is="contact.icon"
                class="footer__contacts-icons"
                :name="contact.icon"
              />
              <NuxtLink class="footer__contacts-links" :to="contact.link">
                {{ contact.text }}
              </NuxtLink>
            </div>
          </div>

          <div class="footer__subscribe">
            <span class="footer__subscribe-title">{{
              footer.subscribeTitle
            }}</span>
            <span class="footer__subscribe-text">{{
              footer.subscribeText
            }}</span>
            <form class="footer__form">
              <input class="footer__form-input" placeholder="Enter e-mail" />
              <button class="footer__button">Subscribe</button>
            </form>
          </div>
        </div>

        <div class="footer__copyright">
          <p>
            <span>&copy; {{ year }} SMBS.</span>
            {{ " " }}
            <span>{{ footer.copyright }}</span>
          </p>
          <p>
            <span class="no-mob" style="margin-inline: 5px">|</span>
            <span class="footer__copyright-policy">
              {{ footer.privacyPolicy }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import footer from "~/data/footer.json";

export default {
  data() {
    return {
      currentUrl: this.$route.fullPath,
      footer,
      isCareerDetails: false,
      year: new Date().getFullYear(),
    };
  },
  watch: {
    $route(to, _) {
      this.currentUrl = to.fullPath;
      this.checkPath();
    },
  },
  beforeMount() {
    this.checkPath();
  },

  methods: {
    checkPath() {
      const regex = /\/careers\/.+/;
      this.isCareerDetails = regex.test(this.currentUrl);
    },
  },
};
</script>
