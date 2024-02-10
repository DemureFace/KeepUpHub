<script setup>
import { useVuelidate } from "@vuelidate/core";
const { t } = useI18n();

import { useForm } from "./useForm";

const { rules, formData, formFields, fieldComponent, generateText } = useForm();

const v$ = useVuelidate(rules, formData);

async function submitForm() {
  const result = await v$.value.$validate();

  if (!result) return;

  const {
    public: { botUrl, botToken, chatId },
  } = useRuntimeConfig();

  const text = generateText();

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

function setFieldPosition(name) {
  switch (name) {
    case "name":
      return "col-start-1 col-end-1";
    case "phone":
      return "col-start-1 col-end-1";
    case "email":
      return "col-start-1 col-end-1";
    case "comment":
      return "md:col-start-2 md:col-end-2 md:row-start-1 md:row-end-4";
    case "time":
      return "md:col-start-1 md:col-end-1";
    case "request":
      return "md:col-start-1 md:col-end-1";
  }
}
</script>

<template>
  <form class="flex flex-col" @submit.prevent="submitForm">
    <div
      class="grid grid-cols-1 gap-4 md:grid-flow-row md:auto-rows-fr md:grid-cols-2 md:gap-6"
    >
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
        :class="setFieldPosition(field.name)"
      />
    </div>

    <BaseButton type="submit">
      {{ $t("contac_us_section.form.button_text") }}
    </BaseButton>
  </form>
</template>
