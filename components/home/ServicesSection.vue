<script setup>
const serviceCards = [
  {
    img: "/images/svg/headephones.svg",
    title: "Contact Center",
    description:
      "Профейсійна онлайн підтримка, ведення чатів та онлайн спілкування з клієнтами",
  },
  {
    img: "/images/svg/headephones.svg",
    title: "Contact Center",
    description:
      "Профейсійна онлайн підтримка, ведення чатів та онлайн спілкування з клієнтами",
  },
  {
    img: "/images/svg/headephones.svg",
    title: "Contact Center",
    description:
      "Профейсійна онлайн підтримка, ведення чатів та онлайн спілкування з клієнтами",
  },
  {
    img: "/images/svg/headephones.svg",
    title: "Contact Center",
    description:
      "Профейсійна онлайн підтримка, ведення чатів та онлайн спілкування з клієнтами",
  },
];
</script>

<template>
  <section class="w-full overflow-hidden">
    <div class="container mb-14">
      <h2 class="text-2xl font-bold text-white md:text-4xl">Наші послуги</h2>
    </div>

    <ul
      class="hide-scrollbar mx-auto grid w-full grid-cols-[1px_minmax(272px,272px)_minmax(272px,272px)_minmax(272px,272px)_minmax(272px,272px)_1px] gap-4 overflow-x-scroll px-0 md:grid-cols-2 md:px-8 lg:px-[38px] xl:max-w-[1136px] xl:grid-cols-4 xl:px-0"
    >
      <div class="h-1 w-1 md:hidden" />

      <li
        v-for="(card, i) in serviceCards"
        :key="i"
        class="flex flex-col items-center gap-6 rounded-2xl border border-primary-100 px-8 py-12"
      >
        <img :src="card.img" alt="" class="" />

        <h3
          v-text="card.title"
          class="font-onest text-2xl font-bold text-white"
        />

        <p
          v-text="card.description"
          class="text-center font-onest text-sm font-light text-white"
        />

        <BaseButton onlyIcon iconRotate="rotate-90" />
      </li>

      <div class="h-1 w-1 md:hidden" />
    </ul>
  </section>
</template>
