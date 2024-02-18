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
    <img
      src="/images/background/1.jpg"
      alt=""
      class="absolute top-[-100px] z-[-20]"
    />
    <div class="container relative">
      <div class="md:w-[363px] lg:w-[434px] xl:w-full">
        <h1 class="mb-1 font-vinnytsia text-5xl font-bold uppercase text-white">
          {{ $t("welcome_section.welcome_to") }}
          <span class="text-primary-100">{{
            $t("welcome_section.keepuphub")
          }}</span>
        </h1>

        <p class="mb-9 text-base font-bold text-white">
          {{ $t("welcome_section.sub_title") }}
        </p>

        <p class="mb-12 w-full text-sm font-light text-white xl:w-[463px]">
          <span class="text-primary-100">{{
            $t("welcome_section.partner")
          }}</span
          >{{ $t("welcome_section.description") }}
        </p>

        <BaseButton widthClass="w-full md:w-fit">{{
          $t("welcome_section.button_text")
        }}</BaseButton>
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
