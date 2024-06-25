<template>
	<div class="dropdown-country">
		<Field id="country" class="dropdown-country__select" as="select" name="country" @change="onChange($event)">
			<option value="" selected disabled class="select-first">Country</option>
			<option v-for="country in countries" :key="country.code" :value="country.id" class="dropdown-country__item">
				{{ country.name }}
			</option>
		</Field>
		<ErrorMessage class="apply__form--error" name="country" />
	</div>
</template>

<script setup>
import { Field, ErrorMessage } from 'vee-validate';

import countries from '~/data/countries.json';

const selectedCountry = useState('selectedCountry', () => '');

const onChange = (event) => {
	const selectId = Number(event.target.value);
	selectedCountry.value = getCountry(selectId);
};

const getCountry = (id) => {
	return countries.find((country) => country.id === id);
};
</script>
