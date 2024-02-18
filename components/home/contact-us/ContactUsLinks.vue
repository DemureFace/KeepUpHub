<script setup>
const linksList = [
  {
    link: "mailto:",
    image: {
      src: "/images/svg/e-mail.svg",
      alt: "Email",
    },
  },
  {
    link: "https:",
    image: {
      src: "/images/svg/whatsapp.svg",
      alt: "Whatsapp",
    },
  },
  {
    link: "https:",
    image: {
      src: "/images/svg/telegram.svg",
      alt: "Telegram",
    },
  },
];
</script>

<template>
  <div class="flex flex-col gap-6">
    <h3 class="font-vinnytsia text-2xl font-bold uppercase text-white">
      {{ $t("contac_us_section.links.title") }}
    </h3>

    <ul class="flex gap-6">
      <li v-for="{ link, image } in linksList" :key="link">
        <a :href="link" target="_blank">
          <img :src="image.src" :alt="image.alt" class="aspect-square w-14" />
        </a>
      </li>
    </ul>
  </div>
</template>
