<script setup>
import ContactUsForm from "./ContactUsForm.vue";
import ContactUsLinks from "./ContactUsLinks.vue";
</script>

<template>
  <section class="container relative">
    <img
      src="/images/background/7.jpg"
      alt="Background"
      class="absolute right-[-1663px] top-[69px] -z-20 h-[1239px] min-w-[1059px] xl:right-[-715px] 2xl:right-[-523px]"
    />
    <img
      src="/images/background/8.jpg"
      alt="Background"
      class="absolute left-[-1663px] top-[63px] -z-20 h-[1327px] min-w-[1001px] 2xl:left-[-1001px]"
    />
    <h2
      v-text="$t('contac_us_section.title')"
      class="font-vinnytsia text-4xl font-bold uppercase text-white"
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
