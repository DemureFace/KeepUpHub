<script setup>
const tickerText = [
  "contact center",
  "SUPPORT",
  "anti-fraud",
  "payments",
  "RETENTION",
];
</script>

<template>
  <section class="relative">
    <div class="container relative">
      <div class="md:w-[363px] lg:w-[434px] xl:w-full">
        <h1 class="mb-1 text-5xl font-bold uppercase text-white">
          {{ $t("welcome_section.welcome_to") }}
          <span class="text-primary-100">keepuphub</span>
        </h1>

        <p class="mb-9 text-base font-bold text-white">
          Впевненість у кожному слові, ефективність у кожному вчинку
        </p>

        <p class="mb-12 w-full text-sm font-light text-white xl:w-[463px]">
          KeepUpHub – ваш <span class="text-primary-100">партнер</span> у
          створенні міцних зв'язків через ​високоефективну телефонну та онлайн
          комунікацію. Ми робимо кожен дзвінок важливим для вашого успіху!
        </p>

        <BaseButton widthClass="w-full md:w-fit">Замовити послуги</BaseButton>
      </div>

      <img
        src="/images/wellcom/astronaut.png"
        alt="astronaut"
        class="pointer-events-none absolute -top-8 right-8 hidden h-[494px] w-[344px] animate-levitation md:block lg:-top-32 lg:h-[650px] lg:w-[452px] xl:-top-28 xl:right-36 2xl:right-[108px]"
      />
    </div>

    <BaseTicker
      :text="tickerText"
      class="absolute -bottom-[100px] -left-2 -z-20 w-[110%] -rotate-2"
    />
  </section>
</template>
