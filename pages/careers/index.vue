<template>
	<hero
		class="careers"
		:title="careers.HERO.title"
		:description="careers.HERO.description"
		:cta="careers.HERO.btnLabel">
		<figure class="hero__image">
			<nuxt-img :src="careers.HERO.image" />
		</figure>
	</hero>

	<segment custom-class="careers__services" :title="careers.WORK_WITH_US.title">
		<p class="segment__subtitle">
			{{ careers.WORK_WITH_US.subtitle }}
		</p>

		<ul class="careers__services--list">
			<li v-for="card in serviceList" :key="card.id">
				<CardSegment
					:title="card.title"
					:description="card.description"
					:image="card.image"
					:html-text="card.htmlText"
					custom-class="careers-service" />
			</li>
		</ul>
	</segment>

	<segment class="openingList" :title="careers.OPENINGLIST.title">
		<h3 class="segment__subtitle">{{ careers.OPENINGLIST.subtitle }}</h3>

		<tabs custom-class="openingList" :tabs="careers.OPENINGLIST.positions" />

		<dropdown-options :options="positions" custom-class="openingList"></dropdown-options>

		<ul
			v-if="filteredOffers.length"
			class="openinglist__offers"
			:style="{
				justifyContent: paginatedOffers.length > 1 ? 'center' : 'left',
			}">
			<li v-for="offer in paginatedOffers" :key="offer.id">
				<nuxt-link :to="`/${offer.link}`" class="openinglist__offer">
					<CardJobOffer :card="offer" custom-class="openinglist--offer" />
				</nuxt-link>
			</li>
		</ul>

		<h2 v-else class="openinglist__offers--empty">
			No offers for
			<span style="text-transform: capitalize">
				{{ selectedPosition }}
			</span>
		</h2>

		<pagination
			v-if="filteredOffers.length > itemsPerPage"
			:current-page="currentOffersPage"
			:items-per-page="itemsPerPage"
			:total-items="filteredOffers.length"
			@change-page="changePage" />
	</segment>

	<segment :title="careers.RECRUITMENT.title" custom-class="recruitment">
		<h3 class="segment__subtitle">
			{{ careers.RECRUITMENT.subtitle }}
		</h3>
		<ul class="recruitment__list">
			<li v-for="item in careers.RECRUITMENT.cards" :key="item.id" class="recruitment__list--item">
				<CardNumber :card="item" custom-class="recruitment" />
			</li>
		</ul>
	</segment>

	<review
		custom-class="teams"
		:title="careers.REVIEWS.title"
		:subtitle="careers.REVIEWS.subtitle"
		:text="careers.REVIEWS.text"
		:responsive-reviews="careers.REVIEWS.responsiveReviews">
		<SwiperSlide v-for="(card, index) in careers.REVIEWS.cards" :key="index">
			<article class="card--review">
				<div class="card--review__information">
					<span class="card--review__name">{{ card.name }}</span>
					<span class="card--review__position">{{ card.position }}</span>
				</div>

				<p class="card--review__description">
					{{ card.description }}
				</p>

				<a class="card--review__link" :href="card.link">
					<nuxt-img class="card--review__logo" :src="card.image" />
				</a>
			</article>
		</SwiperSlide>
	</review>

	<segment custom-class="benefits" :title="careers.BENEFITS.title">
		<h3 class="segment__subtitle benefits__subtitle">
			{{ careers.BENEFITS.subtitle }}
		</h3>

		<div class="benefits__perks">
			<div v-for="(perk, index) in careers.BENEFITS.cards" :key="index" class="benefits__perk">
				<nuxt-img class="benefits__perk-image" :src="perk.image" />
				<span class="benefits__perk-description">{{ perk.description }}</span>
			</div>
		</div>
	</segment>
	<section class="segment careers">
		<div class="careers__gallery">
			<nuxt-img v-for="(picture, index) in careers.GALLERY" :key="index" class="careers__picture" :src="picture" />
		</div>
	</section>
</template>

<script setup>
import { metaHead } from '~/hooks/metaHead.ts';
import careers from '~/data/careers.json';

metaHead('Careers');

const serviceList = careers.WORK_WITH_US.cards;
const jobList = careers.OPENINGLIST.offers;
const positions = careers.OPENINGLIST.positions;

const selectedPosition = useState('currentTab');

const currentOffersPage = useState('offersPage', () => 1);
const itemsPerPage = 4;

const filteredOffers = computed(() => {
	if (selectedPosition.value === 'all') {
		return jobList;
	} else {
		return jobList.filter((offer) => offer.position === selectedPosition.value);
	}
});

const paginatedOffers = computed(() => {
	const startIndex = (currentOffersPage.value - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	return filteredOffers.value.slice(startIndex, endIndex);
});

const changePage = (newPage) => {
	currentOffersPage.value = newPage;
};
</script>
