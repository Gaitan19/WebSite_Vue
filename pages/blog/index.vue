<template>
  <hero
    custom-class="blog"
    :title="blogData.HERO.title"
    :description="blogData.HERO.description"
    :cta="blogData.HERO.btnLabel"
  />

  <segment custom-class="blogs">
    <div class="blogs__posts block--first">
      <CardPost
        v-for="(post, index) in blogPostTop"
        :key="index"
        :card="post"
        :not-arrow="true"
      />
      <div class="blogs__posts-right">
        <CardPost
          v-for="(post, index) in blogPostRigth"
          :key="index"
          :card="post"
          :not-arrow="true"
          is-row
        />
      </div>
    </div>
  </segment>

  <newsletter
    :title="blogData.NEWSLETTER.title"
    :subtitle="blogData.NEWSLETTER.subtitle"
  />

  <segment custom-class="blogs bot">
    <div class="blogs__posts bot">
      <CardPost
        v-for="(post, index) in blogPostBot.inlinePosts"
        :key="index"
        :card="post"
        not-arrow
      />
      <CardPost
        key="blockPost1"
        custom-class="block"
        :card="blogPostBot.blockPost.firstPost"
        not-arrow
        is-row
      >
        <template #body>
          <CardPost
            key="blockPost2"
            custom-class="block nested"
            :card="blogPostBot.blockPost.secondPost"
            not-arrow
          />
        </template>
      </CardPost>
    </div>
  </segment>
</template>

<script setup>
import { metaHead } from '~/hooks/metaHead.ts';
import blogData from '~/data/blog.json';

const blogPostTop = blogData.TOPPOSTS;
const blogPostRigth = blogData.postsRight;
const blogPostBot = blogData.BOTPOSTS;

metaHead('Blog');
</script>
