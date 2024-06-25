<template>
  <segment class="newsletter" is-row>
    <template #row>
      <h3 class="segment__title">
        {{ title }}
      </h3>
      <p class="segment__subtitle">
        {{ subtitle }}
      </p>
    </template>

    <VeeForm class="newsletter__form" :validation-schema="schema" @submit="onSubmit">
      <label class="newsletter__form--label" for="email">Your e-mail address</label>
      <div class="newsletter__form--block">
        <div class="newsletter__form--group">
          <Field id="email" class="newsletter__form--email" name="email" type="email" placeholder="Enter e-mail" />
          <button class="newsletter__form--btn">
            Subscribe
          </button>
        </div>
        <ErrorMessage ref="errorMessage" class="newsletter__form--error" name="email" />
      </div>

      <div class="newsletter__form--block check">
        <Field id="check" name="check" class="newsletter__form--check" type="checkbox" />
        <label
          class="newsletter__form--labelcheck"
          for="check"
        >By subscribing I accept the
          <NuxtLink to="#" class="newsletter__form--policy">Privacy Policy</NuxtLink>
        </label>
      </div>
    </VeeForm>
  </segment>
</template>

<script setup>
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const { title, subtitle } = defineProps({
  title: { type: String },
  subtitle: { type: String, default: '' }
})

const schema = yup.object({
  email: yup.string().required('*Email is a required field').email()
})

function onSubmit (values) {
  console.log(values)
}
</script>
