<script setup>
const choiceList = [
  {
    image: {
      src: "/images/choice/dosvid.png",
      alt: "Clock",
    },
    title: "choice_section.experience.title",
    description: "choice_section.experience.description",
    bg: "bg-experience-card",
  },
  {
    image: {
      src: "/images/choice/efektyvni-rishennya.png",
      alt: "lightbulb",
    },
    title: "choice_section.solutions.title",
    description: "choice_section.solutions.description",
    bg: "bg-solutions-card",
  },
  {
    image: {
      src: "/images/choice/focus-na-klienta.png",
      alt: "focus",
    },
    title: "choice_section.customer-focus.title",
    description: "choice_section.customer-focus.description",
    bg: "bg-customer-focus-card",
  },
];
</script>

<template>
  <section>
    <div class="container mb-8">
      <h2
        v-text="$t('choice_section.title')"
        class="font-onest text-2xl font-bold text-white"
      />
    </div>

    <ul
      class="hide-scrollbar mx-auto grid w-full grid-cols-[1px_minmax(287px,287px)_minmax(287px,287px)_minmax(287px,287px)_1px] gap-4 overflow-x-scroll px-0 md:grid-cols-3 md:px-8 lg:px-[38px] xl:max-w-[1136px] xl:px-0"
    >
      <div class="h-1 w-1 md:hidden" />

      <li
        v-for="choice in choiceList"
        :key="choice.title"
        class="isolate flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-primary-100 bg-cover bg-no-repeat pb-8 pt-4 xl:pb-12"
        :class="choice.bg"
      >
        <img
          :src="choice.image.src"
          :alt="choice.image.alt"
          class="w-full max-w-[296px] md:max-w-[224px] lg:max-w-[284px] xl:max-w-[calc(100%-32px)]"
        />

        <div class="flex flex-col items-center gap-6 px-4 xl:px-8">
          <h3
            v-text="$t(choice.title)"
            class="font-onest text-lg font-bold text-white"
          />

          <p
            v-text="$t(choice.description)"
            class="text-center font-onest text-sm font-light text-white"
          />
        </div>
      </li>

      <div class="h-1 w-1 md:hidden" />
    </ul>
  </section>
</template>
