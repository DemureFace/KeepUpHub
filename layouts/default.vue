<script setup>
import TheHeader from "~/components/layout/TheHeader.vue";
</script>

<template>
  <TheHeader />

  <main class="pt-14 md:pt-20">
    <slot />
  </main>

  <footer>Footer</footer>
</template>
