<template>
  <article :class="customClass" class="post">
    <div class="post__wrapper" :class="isRow ? 'row' : ''">
      <header class="post__head">
        <NuxtLink
          :to="{ name: link, params: { title: slug } }"
          class="post__link"
        >
          <nuxt-img
            v-if="card.image"
            class="post__head--image"
            :src="card.image.src"
            :alt="card.image.alt"
          />
        </NuxtLink>

        <slot name="head" />
      </header>

      <div class="post__body">
        <NuxtLink
          :to="{ name: link, params: { title: slug } }"
          class="post__link"
        >
          <p class="post__head--author">
            {{ card.author }} • {{ formatDate(date) }}
          </p>
          <div class="post__head--redirect">
            <h3 class="post__head--title">
              {{ card.title }}
            </h3>
            <Icon
              v-if="!notArrow"
              class="post__head--icon"
              name="fa6-solid:arrow-up"
            />
          </div>
        </NuxtLink>
        <p class="post__body--description">
          {{ card.description }}
        </p>

        <ul class="post__footer--categories">
          <li
            v-for="(cat, index) in card.category"
            :key="index"
            class="post__footer--item"
          >
            <badge :text="cat" />
          </li>
        </ul>
        <slot name="body" />
      </div>
    </div>
  </article>
</template>

<script>
import dayjs from 'dayjs'
import { getTitleSlug } from '~/utils/getSlug'

export default {
  props: {
    customClass: { type: String },
    notArrow: { type: Boolean },
    isRow: { type: Boolean, default: false },
    card: {
      type: Object,
      default: () => ({
        link: { type: String },
        title: { type: String },
        description: { type: String },
        category: {
          type: Array,
          validator: value =>
            ['Product', 'Research', 'Frameworks'].includes(value)
        },
        author: { type: String },
        date: { type: Date, default: new Date() },
        image: {
          type: Object,
          default: () => ({
            src: '/images/blog_post.png',
            alt: 'post image'
          })
        }
      })
    }
  },
  data () {
    return {
      link: `${this.card.link}-title`,
      slug: getTitleSlug(this.card.title)
    }
  },
  methods: {
    formatDate (date) {
      return dayjs(date).format('DD MMM YYYY')
    }
  }
}
</script>
