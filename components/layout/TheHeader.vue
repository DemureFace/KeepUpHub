<script setup>
const selectedValue = ref("");
</script>

<template>
  <header
    class="container flex items-center justify-between pt-6 md:items-start md:pt-14"
  >
    <div class="flex gap-1.5">
      <img class="h-4 w-[26px]" src="/images/svg/logo.svg" alt="logo" />

      <span class="font-onest text-base font-bold uppercase text-white">
        Keep<span class="text-primary-100">up</span>HUB
      </span>
    </div>

    <BaseSelect
      :options="[
        {
          label: 'EN',
          value: 'EN',
          image: {
            src: '/images/svg/gb.svg',
            alt: 'GB',
          },
        },
        {
          label: 'UA',
          value: 'UA',
          image: {
            src: '/images/svg/ua.svg',
            alt: 'UA',
          },
        },
      ]"
      v-model="selectedValue"
    />
  </header>
</template>
