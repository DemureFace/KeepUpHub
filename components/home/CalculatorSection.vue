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
  { label: "до 500", value: 1 },
  { label: "501 - 1 000", value: 2 },
  { label: "1001 - 5 000", value: 3 },
  { label: "5 001 - 10 000", value: 4 },
  { label: "10 001+", value: 5 },
];

const rangeValue = ref(1);
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

    <div class="container">
      <BaseInputRange
        v-model="rangeValue"
        :range-values="rangeValues"
        label="Об’єм клієнтської бази на місяць:"
        class="mb-20"
      />
    </div>
  </section>
</template>
