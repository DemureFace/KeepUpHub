<script setup>
const data = [
  {
    title: "services_info_section.contact_center.title",
    image: {
      src: "/images/svg/headephones.svg",
      alt: "headephones",
    },
    options: [
      {
        number: "01",
        subtitle: "services_info_section.contact_center.subtitle_first",
        description: {
          first: "services_info_section.contact_center.description_first.first",
          second:
            "services_info_section.contact_center.description_first.second",
          third: "services_info_section.contact_center.description_first.third",
        },
      },
      {
        number: "02",
        subtitle: "services_info_section.contact_center.subtitle_second",
        description: {
          first:
            "services_info_section.contact_center.description_second.first",
          second:
            "services_info_section.contact_center.description_second.second",
          third:
            "services_info_section.contact_center.description_second.third",
        },
      },
      {
        number: "03",
        subtitle: "services_info_section.contact_center.subtitle_third",
        description: {
          first: "services_info_section.contact_center.description_third.first",
          second:
            "services_info_section.contact_center.description_third.second",
          third: "services_info_section.contact_center.description_third.third",
        },
      },
    ],
  },
  {
    title: "services_info_section.support.title",
    image: {
      src: "/images/svg/mail-icon.svg",
      alt: "mail-icon",
    },
    options: [
      {
        number: "01",
        subtitle: "services_info_section.support.subtitle_first",
        description: {
          first: "services_info_section.support.description_first.first",
          second: "services_info_section.support.description_first.second",
          third: "services_info_section.support.description_first.third",
        },
      },
      {
        number: "02",
        subtitle: "services_info_section.support.subtitle_second",
        description: {
          first: "services_info_section.support.description_second.first",
          second: "services_info_section.support.description_second.second",
          third: "services_info_section.support.description_second.third",
        },
      },
      {
        number: "03",
        subtitle: "services_info_section.support.subtitle_third",
        description: {
          first: "services_info_section.support.description_third.first",
          second: "services_info_section.support.description_third.second",
          third: "services_info_section.support.description_third.third",
        },
      },
    ],
  },

  {
    title: "services_info_section.payment_and_anti.title",
    image: {
      src: "/images/svg/retention-icon.svg",
      alt: "retention",
    },
    options: [
      {
        number: "01",
        subtitle: "services_info_section.payment_and_anti.subtitle_first",
        description: {
          first:
            "services_info_section.payment_and_anti.description_first.first",
          second:
            "services_info_section.payment_and_anti.description_first.second",
          third:
            "services_info_section.payment_and_anti.description_first.third",
        },
      },
      {
        number: "02",
        subtitle: "services_info_section.payment_and_anti.subtitle_second",
        description: {
          first:
            "services_info_section.payment_and_anti.description_second.first",
          second:
            "services_info_section.payment_and_anti.description_second.second",
          third:
            "services_info_section.payment_and_anti.description_second.third",
        },
      },
      {
        number: "03",
        subtitle: "services_info_section.payment_and_anti.subtitle_third",
        description: {
          first:
            "services_info_section.payment_and_anti.description_third.first",
          second:
            "services_info_section.payment_and_anti.description_third.second",
          third:
            "services_info_section.payment_and_anti.description_third.third",
        },
      },
    ],
  },
  {
    title: "services_info_section.retention.title",
    image: {
      src: "/images/svg/coin-icon.svg",
      alt: "coin-icon",
    },
    options: [
      {
        number: "01",
        subtitle: "services_info_section.retention.subtitle_first",
        description: {
          first: "services_info_section.retention.description_first.first",
          second: "services_info_section.retention.description_first.second",
          third: "services_info_section.retention.description_first.third",
        },
      },
      {
        number: "02",
        subtitle: "services_info_section.retention.subtitle_second",
        description: {
          first: "services_info_section.retention.description_second.first",
          second: "services_info_section.retention.description_second.second",
          third: "services_info_section.retention.description_second.third",
        },
      },
      {
        number: "03",
        subtitle: "services_info_section.retention.subtitle_third",
        description: {
          first: "services_info_section.retention.description_third.first",
          second: "services_info_section.retention.description_third.second",
          third: "services_info_section.retention.description_third.third",
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
            v-text="$t(item.title)"
            class="font-vinnytsia text-2xl font-bold uppercase text-white"
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
                v-text="option.number"
                class="text-stroke min-w-[46px] max-w-[46px] font-onest text-4xl font-bold"
              />

              <div class="flex flex-col gap-3">
                <h4
                  class="font-vinnytsia text-2xl font-bold uppercase text-white"
                  v-text="$t(option.subtitle)"
                />

                <p class="text-sm font-light text-white">
                  <span v-text="$t(option.description.first)" />
                  <span>&nbsp;</span>
                  <span
                    class="font-bold text-primary-100"
                    v-text="$t(option.description.second)"
                  />
                  <span>&nbsp;</span>
                  <span v-text="$t(option.description.third)" />
                </p>
              </div>
            </div>

            <div class="hidden justify-between gap-8 md:flex">
              <span
                class="text-stroke min-w-[46px] max-w-[46px] font-onest text-4xl font-bold"
                v-text="option.number"
              />

              <h4
                class="max-w-[297px] font-vinnytsia text-2xl font-bold text-white lg:max-w-[387px] xl:max-w-[424px]"
                v-text="$t(option.subtitle)"
              />
            </div>

            <p
              class="hidden max-w-[297px] text-sm font-light text-white md:block lg:max-w-[387px] xl:max-w-[424px]"
            >
              <span v-text="$t(option.description.first)" />
              <span>&nbsp;</span>
              <span
                class="font-bold text-primary-100"
                v-text="$t(option.description.second)"
              />
              <span>&nbsp;</span>
              <span v-text="$t(option.description.third)" />
            </p>
          </div>
        </div>

        <div
          class="box-content w-full md:ml-auto md:max-w-[297px] lg:max-w-[387px] xl:max-w-[424px] xl:px-[90px]"
        >
          <BaseButton widthClass="w-full md:w-fit">{{
            $t("services_info_section.contact_center.button_text")
          }}</BaseButton>
        </div>
      </li>
    </ul>
  </section>
</template>
