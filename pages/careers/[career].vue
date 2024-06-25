<template>
  <segment custom-class="careers__looking">
    <h2 class="segment__title">WE’RE LOOKING FOR A</h2>
    <h3 class="segment__subtitle">{{ offer.title }}</h3>

    <div class="careers__looking-icons">
      <p class="career__looking--location">
        <Icon name="fa-solid:map-marker-alt" class="careers__looking-icon" />
        {{ offer.location }}
      </p>
      <p class="career__looking--english">
        <Icon name="fa-solid:comment" class="careers__looking-icon" />
        {{ offer.englishLevel }}
      </p>
      <p>
        <Icon name="fa-solid:calendar-alt" class="careers__looking-icon" />
        {{ offer.experience }}
      </p>
    </div>
  </segment>

  <segment custom-class="career__about">
    <h2 class="segment__title">About you</h2>
    <p class="career__description">{{ offer.description }}</p>

    <p class="career__competencies">
      You bring to SMBS the following competencies:
    </p>

    <ul class="career__competencies--list">
      <li
        v-for="(competencie, idx) in offer.competencies"
        :key="idx"
        class="career__competencies--item"
      >
        {{ competencie }}
      </li>
    </ul>

    <p class="career__responsabilities">
      You will be accountable for the following responsabilities:
    </p>

    <ul class="career__responsabilities--list">
      <li
        v-for="(responsability, idx) in offer.responsabilities"
        :key="idx"
        class="career__responsabilities--item"
      >
        {{ responsability }}
      </li>
    </ul>

    <h3 class="career__benefits">Perks and Benefits</h3>

    <ul class="career__benefits--list">
      <li
        v-for="(benefit, idx) in benefits"
        :key="idx"
        class="career__benefits--item"
      >
        {{ benefit.description }}
      </li>
    </ul>
  </segment>

  <segment custom-class="career__journey" is-row>
    <template #row>
      <div class="career__apply--content">
        <h2 class="segment__title">{{ careerDetails.START_JOURNEY.title }}</h2>
        <h3 class="segment__subtitle">
          {{ careerDetails.START_JOURNEY.subtitle }}
        </h3>
        <p class="career__apply--description">
          {{ careerDetails.START_JOURNEY.description }}
        </p>
      </div>

      <div class="career__apply--form">
        <applyForm />
      </div>
    </template>
  </segment>
</template>

<script setup>
import { metaHead } from '~/hooks/metaHead.ts';
import careers from '~/data/careers.json';
import careerDetails from '~/data/careerDetails';

const offers = careers.OPENINGLIST.offers;
const benefits = careers.BENEFITS.cards;
let offer = {};

const route = useRoute();
const selectedCountry = useState('selectedCountry');

onBeforeMount(() => {
  const offerLink = route.fullPath.split('/').pop();
  offer = offers.find((offer) => offer.link.includes(offerLink));

  selectedCountry.value = {};
});

onMounted(() => {
  metaHead(`Careers - ${offer.title}`);
});
</script>
