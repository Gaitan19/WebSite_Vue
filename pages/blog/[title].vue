<template>
  <section class="posts">
    <div class="container">
      <div class="posts__wrapper information top">
        <h2 class="posts__title">
          {{ openPost.title }}
        </h2>
        <p class="posts__description">
          {{ openPost.description }}
        </p>

        <div class="posts__author">
          By
          <span class="posts__author-name">{{ openPost.author }} | </span>
          <span class="posts__author-category">{{ openPost.category }}</span>
        </div>
        <nuxt-img :src="openPost.image.src" class="posts__image" />
        <div class="posts__content">
          <template
            v-for="(post, index) in openPost.content.slice(0, 6)"
            :key="index"
          >
            <div class="posts__item">
              <h3 v-if="post.title" class="posts__item-title">
                {{ post.title }}
              </h3>
              <p
                v-if="post.text"
                class="posts__item-text"
                v-html="formatText(post.text, post.linkText, post.link)"
              />
            </div>
          </template>
        </div>
      </div>
    </div>

    <newsletter
      :title="data.NEWSLETTER.title"
      :subtitle="data.NEWSLETTER.subtitle"
    />

    <div class="container">
      <div class="posts__wrapper">
        <div class="posts__content">
          <template
            v-for="(post, index) in openPost.content.slice(6)"
            :key="index"
          >
            <div class="posts__item">
              <h3 v-if="post.title" class="posts__item-title">
                {{ post.title }}
              </h3>
              <p
                v-if="post.text"
                class="posts__item-text"
                v-html="formatText(post.text, post.linkText, post.link)"
              />
            </div>
          </template>
        </div>

        <ul class="posts__socials">
          <li
            v-for="(icon, index) in data.icons"
            :key="index"
            class="posts__socials-item"
          >
            <nuxt-img :src="icon" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from "~/data/posts.json";
import { getTitleSlug } from "~/utils/getSlug";

const route = useRoute();

const openPost = data.posts.find(
  (post) => route.params.title === getTitleSlug(post.title)
);

const formatText = (text, linkText, link) =>
  link
    ? text.replace(
        linkText,
        `<a href="${link}" class="posts__link">${linkText}</a>`
      )
    : text;
</script>
