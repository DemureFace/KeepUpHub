<script setup>
const checkedServices = ref([]);

const serviceList = [
  { id: "contact-center", label: "Сontact Center", value: "contact-center" },
  { id: "support", label: "Support", value: "support" },
  {
    id: "payments-and-anti-fraud",
    label: "Payments & Anti-Fraud",
    value: "payments-and-anti-fraud",
  },
  { id: "retention", label: "Retention", value: "retention" },
];

const rangeValues = [
  { label: "до 500", value: 1, price: 1000 },
  { label: "501 - 1 000", value: 2, price: 2500 },
  { label: "1001 - 5 000", value: 3, price: 3700 },
  { label: "5 001 - 10 000", value: 4, price: 5000 },
  { label: "10 001+", value: 5, price: 7000 },
];

const rangeValue = ref(1);
const customerPrice = computed(() => {
  const rangeValuePrice = rangeValues.find(
    (value) => value.value === rangeValue.value,
  );

  return rangeValuePrice.price;
});
</script>

<template>
  <section>
    <div class="container">
      <h2
        v-text="$t('calculator_section.title')"
        class="mb-4 font-onest text-4xl font-bold uppercase text-white"
      />

      <p class="mb-8 font-onest text-sm font-light text-white">
        {{ $t("calculator_section.description.help") }}
        <span class="text-primary-100 underline">
          {{ $t("calculator_section.description.apply") }}
        </span>
      </p>

      <h3
        v-text="$t('calculator_section.type')"
        class="mb-3 font-onest text-2xl font-bold text-white"
      />
    </div>

    <div
      class="hide-scrollbar mx-auto mb-8 flex w-full gap-3 overflow-x-scroll px-0 md:px-8 lg:px-[38px] xl:max-w-[1136px] xl:px-0"
    >
      <div class="mr-1 h-1 w-1 md:hidden" />

      <BaseCheckbox
        v-for="service in serviceList"
        :key="service.id"
        v-model="checkedServices"
        v-bind="service"
      />

      <div class="ml-1 h-1 w-1 md:hidden" />
    </div>

    <div
      class="container flex flex-col md:flex-row md:items-center md:justify-between md:gap-6"
    >
      <BaseInputRange
        v-model="rangeValue"
        :range-values="rangeValues"
        label="Об’єм клієнтської бази на місяць:"
        class="mb-8 w-full md:mb-0"
      />

      <div
        class="flex max-w-[168px] items-center justify-end gap-2.5 md:max-w-[196px] md:flex-col md:items-end md:gap-0"
      >
        <p class="text-xs font-light text-white md:text-right md:text-sm">
          Орієнтовна вартість в USD: (Contact Center & Retention)
        </p>

        <span class="text-2xl font-bold text-white">
          {{ `${customerPrice}$` }}
        </span>
      </div>
    </div>
  </section>
</template>
