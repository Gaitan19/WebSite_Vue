<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/" class="header__logo" @click="closeMenu">
          <img
            src="~/assets/images/smbs-logo.png"
            alt="SMBS Logo"
            class="header__image"
          />
        </NuxtLink>

        <label class="header__hamburger" for="menuCheck">
          <button class="header__hamburger--btn" @click="toggleOpenMenu">
            <Icon name="fa6-solid:bars" size="22px" />
          </button>
        </label>
        <input
          id="menuCheck"
          v-model="isMenuOpen"
          type="checkbox"
          name="menuCheck"
          class="header__hamburger--check"
        />

        <div class="header__row">
          <nav class="header__menu">
            <ul class="header__menu--list">
              <template v-for="link in Links" :key="link.id">
                <li
                  v-if="!link.children"
                  class="header__menu--item"
                  @click="closeMenu"
                >
                  <NuxtLink class="header__menu--link" :to="link.path">
                    {{ link.text }}
                  </NuxtLink>
                </li>

                <li v-else class="header__menu--item">
                  <DropdownLinks
                    custom-class="headerMenu"
                    :item="link"
                    @toggle-menu="isOpen = $event"
                  />
                </li>
              </template>
            </ul>
          </nav>

          <cta custom-class="header__button" path="#Contact">
            SCHEDULE A CALL
          </cta>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Links from "~/data/headerLinks.json";

export default {
  data() {
    return {
      Links,
      isMenuOpen: useState("isMenuOpen", () => false),
      subMenuOpen: useState("subMenuOpen"),
    };
  },
  methods: {
    toggleOpenMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.checkMenuOpen();
    },

    openMenu() {
      this.isMenuOpen = true;
      this.checkMenuOpen();
    },

    closeMenu() {
      this.isMenuOpen = false;
      this.subMenuOpen = false;
      this.checkMenuOpen();
    },

    checkMenuOpen() {
      if (this.isMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>
