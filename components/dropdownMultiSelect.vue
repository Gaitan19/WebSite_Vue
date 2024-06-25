<template>
  <Field v-slot="{ field }" :name="name" :value="multiSelectValues">
    <Multiselect
      v-bind="field"
      :no-results-text="noResultsMessage"
      :placeholder="placeholder"
      :caret="false"
      :class="customClass"
      mode="tags"
      :close-on-select="false"
      :searchable="true"
      :create-option="true"
      :options="options"
      @change="selectOnChange($event)"
    />
  </Field>
</template>

<script>
import Multiselect from '@vueform/multiselect';
import { Field } from 'vee-validate';

export default {
  components: {
    Multiselect,
    Field,
  },
  props: {
    customClass: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: [],
    },
    noResultsMessage: {
      type: String,
      default: 'No options available',
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
  },
  data() {
    return {
      multiSelectValues: useState('multiSelectValues', () => []),
    };
  },
  methods: {
    selectOnChange(event) {
      console.log(event);
      this.multiSelectValues.value = event;
    },
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
