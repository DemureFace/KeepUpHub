<script setup>
const data = [
  {
    title: "Contact center",
    image: {
      src: "/images/svg/headephones.svg",
      alt: "headephones",
    },
    options: [
      {
        number: "01",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
      {
        number: "02",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
      {
        number: "03",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
    ],
  },
  {
    title: "Contact center",
    image: {
      src: "/images/svg/mail-icon.svg",
      alt: "headephones",
    },
    options: [
      {
        number: "01",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
      {
        number: "02",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
      {
        number: "03",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
    ],
  },
  {
    title: "Contact center",
    image: {
      src: "/images/svg/coin-icon.svg",
      alt: "headephones",
    },
    options: [
      {
        number: "01",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
      {
        number: "02",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
      {
        number: "03",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
    ],
  },
  {
    title: "Contact center",
    image: {
      src: "/images/svg/retention-icon.svg",
      alt: "headephones",
    },
    options: [
      {
        number: "01",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
      {
        number: "02",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
      {
        number: "03",
        subtitle: "Збір інформації по новому продукту чи послузі",
        description: {
          first:
            "Надаємо послуги зібрання детальної інформації  від користувачів щодо нових продуктів чи послуг,  допомагаючи бізнесу ",
          second: "зрозуміти реакцію аудиторії",
          third: "та вдосконалити свою пропозицію.",
        },
      },
    ],
  },
];
</script>

<template>
  <section class="container">
    <ul class="flex flex-col gap-[100px]">
      <li v-for="item in data" :key="item.title" class="flex flex-col gap-8">
        <div class="flex items-center gap-8">
          <img
            class="h-14 w-14 object-cover"
            :src="item.image.src"
            :alt="item.image.alt"
          />

          <h3
            v-text="item.title"
            class="font-onest text-2xl font-bold text-white"
          />
        </div>

        <div class="flex flex-col gap-8 xl:px-[90px]">
          <div
            class="flex w-full flex-col justify-between gap-3 md:flex-row md:gap-8"
            v-for="option in item.options"
            :key="option.number"
          >
            <div class="flex justify-between gap-8 md:hidden">
              <span
                class="text-stroke min-w-[46px] max-w-[46px] font-onest text-4xl font-bold"
                v-text="option.number"
              />

              <div class="flex flex-col gap-3">
                <h4
                  class="font-onest text-2xl font-bold text-white"
                  v-text="option.subtitle"
                />

                <p class="text-sm font-light text-white">
                  {{ option.description.first }}
                  <span class="font-bold text-primary-100">{{
                    option.description.second
                  }}</span>
                  {{ option.description.third }}
                </p>
              </div>
            </div>

            <div class="hidden justify-between gap-8 md:flex">
              <span
                class="text-stroke min-w-[46px] max-w-[46px] font-onest text-4xl font-bold"
                v-text="option.number"
              />

              <h4
                class="max-w-[297px] font-onest text-2xl font-bold text-white lg:max-w-[387px] xl:max-w-[424px]"
                v-text="option.subtitle"
              />
            </div>

            <p
              class="hidden max-w-[297px] text-sm font-light text-white md:block lg:max-w-[387px] xl:max-w-[424px]"
            >
              {{ option.description.first }}
              <span class="font-bold text-primary-100">{{
                option.description.second
              }}</span>
              {{ option.description.third }}
            </p>
          </div>
        </div>

        <div
          class="box-content w-full md:ml-auto md:max-w-[297px] lg:max-w-[387px] xl:max-w-[424px] xl:px-[90px]"
        >
          <BaseButton widthClass="w-full md:w-fit">Замовити послуги</BaseButton>
        </div>
      </li>
    </ul>
  </section>
</template>
