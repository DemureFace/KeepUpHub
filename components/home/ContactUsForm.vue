<script setup>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  alpha,
  numeric,
} from "@vuelidate/validators";

const formData = reactive({
  name: "",
  phone: "",
  email: "",
});

const formFields = ref([
  {
    id: "name",
    name: "name",
    placeholder: "contac_us_section.form.inputs.name",
  },
  {
    id: "phone",
    name: "phone",
    type: "tel",
    placeholder: "contac_us_section.form.inputs.phone",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "contac_us_section.form.inputs.email",
  },
]);

const rules = {
  name: { required, alpha, minLength: minLength(5) },
  phone: { required, numeric, minLength: minLength(5) },
  email: { required, email },
};

const v$ = useVuelidate(rules, formData);

async function submitForm() {
  const result = await v$.value.$validate();

  console.log(result);
}
</script>

<template>
  <form class="flex flex-col gap-4" @submit.prevent="submitForm">
    <BaseInput
      v-for="{ id, name, type, placeholder } in formFields"
      :key="id"
      v-model="v$[name].$model"
      :id="id"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :errors="v$[name].$errors"
      :is-valid="!v$[name].$invalid && v$[name].$dirty && !!v$[name].$model"
      :is-invalid="v$[name].$error"
    />

    <BaseButton type="submit">
      {{ $t("contac_us_section.form.button_text") }}
    </BaseButton>
  </form>
</template>
