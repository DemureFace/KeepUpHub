<script setup>
import { useVuelidate } from "@vuelidate/core";

import { useForm } from "./useForm";

const { rules, formData, formFields, fieldComponent } = useForm();

const v$ = useVuelidate(rules, formData);

async function submitForm() {
  const result = await v$.value.$validate();

  console.log(result);
}
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="submitForm">
    <component
      v-for="field in formFields"
      :key="field.id"
      :is="fieldComponent[field.name]"
      v-model="v$[field.name].$model"
      v-bind="field"
      :errors="v$[field.name].$errors"
      :is-valid="
        !v$[field.name].$invalid &&
        v$[field.name].$dirty &&
        !!v$[field.name].$model
      "
      :is-invalid="v$[field.name].$error"
    />

    <BaseButton type="submit">
      {{ $t("contac_us_section.form.button_text") }}
    </BaseButton>
  </form>
</template>
