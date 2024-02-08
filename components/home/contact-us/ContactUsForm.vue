<script setup>
import { useVuelidate } from "@vuelidate/core";
const { t } = useI18n();

import { useForm } from "./useForm";

const { rules, formData, formFields, fieldComponent } = useForm();

const v$ = useVuelidate(rules, formData);

async function submitForm() {
  const result = await v$.value.$validate();

  if (!result) return;

  const {
    public: { botUrl, botToken, chatId },
  } = useRuntimeConfig();

  const text = `*Name*: ${formData.name}\n*Phone*: ${formData.phone}\n*Email*: ${formData.email}\n*Time*: ${formData.time}\n*Request*: ${formData.request}`;

  try {
    const response = await fetch(`${botUrl}${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (response.ok) {
      useNuxtApp().$toast.success(t("notification.success"));
    } else {
      throw new Error({ message: t("notification.error") });
    }
  } catch (error) {
    useNuxtApp().$toast.error(error.message);
  }
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
