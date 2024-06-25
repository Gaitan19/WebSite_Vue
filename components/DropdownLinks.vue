<template>
  <div
    class="dropdownLinks"
    :class="`${customClass} ${subMenuOpen ? 'open' : 'close'} ${
      inServices ? 'active' : ''
    }`"
  >
    <span @click="toggleSubMenu">
      {{ item.text }}
    </span>
    <ul class="dropdownLinks__list">
      <li
        v-for="element in item.children"
        :key="element.id"
        class="dropdownLinks__list--item"
        @click="
          () => {
            subMenuOpen = false;
            closeMenu();
          }
        "
      >
        <NuxtLink :to="element.path" class="dropdownLinks__list--link">
          {{ element.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object },
    customClass: { type: String },
  },
  data() {
    return {
      subMenuOpen: useState("subMenuOpen", () => false),
      inServices: false,
      currentUrl: this.$route.fullPath,
      isMenuOpen: useState("isMenuOpen"),
    };
  },

  watch: {
    $route(to, _) {
      this.currentUrl = to.fullPath;
      this.checkServicePath();
    },
  },

  mounted() {
    this.checkServicePath();
  },
  methods: {
    toggleSubMenu() {
      this.subMenuOpen = !this.subMenuOpen;
    },

    closeMenu() {
      this.isMenuOpen = false;
      this.checkMenuOpen();
    },

    checkServicePath() {
      const servicesRoutes = [
        "/services/staff-augmentation",
        "/services/dedicated-teams",
      ];

      this.inServices = servicesRoutes.includes(this.currentUrl);
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
