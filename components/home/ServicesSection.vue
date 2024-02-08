<script setup>
const serviceCards = [
  {
    img: "/images/svg/headephones.svg",
    title: "services_section.contact_center.title",
    description: "services_section.contact_center.description",
  },
  {
    img: "/images/svg/mail-icon.svg",
    title: "services_section.support.title",
    description: "services_section.support.description",
  },
  {
    img: "/images/svg/coin-icon.svg",
    title: "services_section.payment_and_anti-fraud.title",
    description: "services_section.payment_and_anti-fraud.description",
  },
  {
    img: "/images/svg/retention-icon.svg",
    title: "services_section.retention.title",
    description: "services_section.retention.description",
  },
];
</script>

<template>
  <section class="w-full overflow-hidden">
    <div class="container mb-14">
      <h2 class="text-2xl font-bold text-white md:text-4xl">
        {{ $t("services_section.title") }}
      </h2>
    </div>

    <ul
      class="hide-scrollbar mx-auto grid w-full grid-cols-[1px_minmax(272px,272px)_minmax(272px,272px)_minmax(272px,272px)_minmax(272px,272px)_1px] gap-4 overflow-x-scroll px-0 md:grid-cols-2 md:px-8 lg:px-[38px] xl:max-w-[1136px] xl:grid-cols-4 xl:px-0"
    >
      <div class="h-1 w-1 md:hidden" />

      <li
        v-for="(card, i) in serviceCards"
        :key="i"
        class="can-hover:hover:after:border-[5px] relative box-content flex cursor-pointer flex-col items-center gap-6 px-8 py-12 after:absolute after:left-0 after:top-0 after:z-[-1] after:h-full after:w-full after:rounded-2xl after:border after:border-primary-100 after:transition-all after:duration-300"
      >
        <img :src="card.img" alt="" class="h-20 w-20" />

        <h3
          v-text="$t(card.title)"
          class="text-center font-onest text-2xl font-bold text-white"
        />

        <p
          v-text="$t(card.description)"
          class="text-center font-onest text-sm font-light text-white"
        />

        <BaseButton onlyIcon iconRotate="rotate-90" class="mt-auto" />
      </li>

      <div class="h-1 w-1 md:hidden" />
    </ul>
  </section>
</template>
