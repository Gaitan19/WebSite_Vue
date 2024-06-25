<template>
  <VeeForm class="apply__form" :validation-schema="schema" @submit="onSubmit">
    <div class="apply__form--group">
      <Field
        id="name"
        class="apply__form--input"
        name="name"
        type="text"
        placeholder="Sofia"
      />
      <ErrorMessage class="apply__form--error" name="name" />
    </div>

    <div class="apply__form--group">
      <Field
        id="email"
        class="apply__form--input"
        name="email"
        type="email"
        placeholder="Enter e-mail"
      />
      <ErrorMessage class="apply__form--error" name="email" />
    </div>

    <div class="apply__form--block">
      <dropdown-country />

      <div class="apply__form--group phone">
        <div class="phone-group">
          <span v-if="selectedCountry" class="phone-code">{{
            selectedCountry.code
          }}</span>
          <Field
            id="phone"
            class="apply__form--input phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
          />
        </div>
        <ErrorMessage class="apply__form--error" name="phone" />
      </div>
    </div>

    <div class="apply__form--group">
      <Field
        id="portfolio"
        class="apply__form--input"
        name="portfolio"
        type="text"
        placeholder="Link to online portfolio, repository, website, social media"
      />
      <ErrorMessage class="apply__form--error" name="portfolio" />
    </div>

    <div class="apply__form--group">
      <Field
        id="referred"
        class="apply__form--input"
        name="referred"
        type="text"
        placeholder="Referred By"
      />
      <ErrorMessage class="apply__form--error" name="referred" />
    </div>

    <div class="apply__form--group">
      <dropdownMultiSelect
        custom-class="skills"
        placeholder="Top Skills"
        name="skills"
        :options="multiselectOptions"
      />
      <ErrorMessage class="apply__form--error" name="skills" />
    </div>

    <div class="apply__form--group">
      <Field
        v-slot="{ value }"
        name="english"
        as="select"
        class="apply__form--english"
      >
        <option value="" selected disabled class="select-first">
          English Level (Select an option)
        </option>
        <option
          v-for="level in englishLevel"
          :key="level"
          :value="level"
          :selected="value && value.includes(level)"
          style="color: black"
          class="apply__form--english-item"
        >
          {{ level }}
        </option>
      </Field>
      <ErrorMessage class="apply__form--error" name="english" />
    </div>

    <div class="apply__form--button">
      <button type="submit" class="apply__form--submit">Apply</button>
    </div>
  </VeeForm>
</template>

<script setup>
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('*Name is a required field').min(3).max(25),
  email: yup.string().required('*Email is a required field').email(),
  country: yup.number().required('*Country is a required field'),
  phone: yup.string().required('*Phone is a required field').min(7).max(20),
  english: yup.string().required('*English Level is a required field'),
  referred: yup.string().required('*Referred By is a required field'),
  skills: yup.array().of(yup.string()).required().min(1, '*Field is required'),
});

const englishLevel = ['basic', 'intermediate', 'advanced'];
const multiselectOptions = [
  { value: 'javascript', label: 'Javascript' },
  { value: 'html', label: 'HTML' },
  { value: 'react', label: 'React' },
  { value: 'css', label: 'CSS' },
];
const selectedCountry = useState('selectedCountry');

function onSubmit(values) {
  console.log(values);
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
