<template>
  <main>
    <hero
      custom-class="home"
      title="Boost your Software team with LATAM talent. "
      subtitle="Staff augmentation made easy."
      description="Whether you need one developer or an entire team, we have the expertise to find the right fit for your project. Plus, with our flexible engagement models, you can choose the level of support that works best for your needs."
      cta="Get in Touch"
      image-src="/images/clutch-batch.png"
    >
      <div class="hero__carousel">
        <Swiper
          :modules="[SwiperAutoplay]"
          :loop="true"
          :slides-per-view="1"
          :space-between="25"
          :autoplay="{
            delay: 6000,
            disableOnInteraction: true,
          }"
        >
          <SwiperSlide v-for="(heroCard, index) in homeHeroCards" :key="index">
            <devCard
              :image-src="heroCard.image"
              :name="heroCard.name"
              :position="heroCard.position"
              :description="heroCard.description"
              :skills="heroCard.skills"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </hero>
    <segment>
      <marquee
        title="our stack"
        :AImages="clientLogos"
        custom-class="clients"
      />
    </segment>
    <HomeServices />
    <HomeOurModel />
    <HomeLetsBuild />
    <HomeReviews />
    <HomeBlog />
  </main>
</template>

<script>
import clientLogos from '~/data/clientsLogos.json';
import homeHeroCards from '~/data/homeHeroCards.json';
import { metaHead } from '~/hooks/metaHead.ts';

export default {
  data() {
    return {
      clientLogos,
      homeHeroCards,
    };
  },
  beforeMount() {
    metaHead('Home');
  },
};
</script>
