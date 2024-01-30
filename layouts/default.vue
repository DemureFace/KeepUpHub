<script setup>
import baseDropDownSelect from "~/base/baseDropDownSelect.vue";

const dropdownOptions = [
  { value: "option1", label: "UA" },
  { value: "option2", label: "EN" },
];
</script>

<template>
  <header>
    <h1 class="font-onest text-2xl font-medium">Header</h1>
    <baseDropDownSelect :options="dropdownOptions" />
  </header>
  <main>
    <slot />
  </main>
  <footer>Footer</footer>
</template>
