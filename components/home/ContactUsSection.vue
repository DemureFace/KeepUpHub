<script setup>
import ContactUsForm from "./ContactUsForm.vue";
import ContactUsLinks from "./ContactUsLinks.vue";
</script>

<template>
  <section class="container">
    <h2
      v-text="$t('contac_us_section.title')"
      class="font-onest text-4xl font-bold uppercase text-white"
    />

    <h2
      v-text="$t('contac_us_section.sub_title')"
      class="mb-4 font-onest text-4xl font-bold uppercase text-white"
    />

    <p
      v-text="$t('contac_us_section.description')"
      class="mb-6 font-onest text-sm font-light text-white"
    />

    <ContactUsForm class="mb-4" />

    <ContactUsLinks />
  </section>
</template>
