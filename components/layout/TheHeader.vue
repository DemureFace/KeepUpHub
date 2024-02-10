<script setup>
const { locale } = useI18n();

const localeRoute = useLocaleRoute();

function setHtmlLang(locale) {
  useHead({
    htmlAttrs: {
      lang: locale,
    },
  });
}

watch(
  () => locale.value,
  (newLocale, oldLocale) => {
    setHtmlLang(newLocale);

    const route = localeRoute();

    if (route) {
      return navigateTo(route.fullPath);
    }
  },
);

onMounted(() => {
  setHtmlLang(locale.value);
});
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
      v-model="locale"
      :options="[
        {
          label: 'EN',
          value: 'en',
          image: {
            src: '/images/svg/gb.svg',
            alt: 'GB',
          },
        },
        {
          label: 'UA',
          value: 'uk',
          image: {
            src: '/images/svg/ua.svg',
            alt: 'UA',
          },
        },
      ]"
    />
  </header>
</template>
