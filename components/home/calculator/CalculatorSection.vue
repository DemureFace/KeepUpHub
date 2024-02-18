<script setup>
import CalculatorRange from "./CalculatorRange.vue";

import { useCalculator } from "./useCalculator";

const {
  serviceList,
  checkedServices,
  rangesList,
  monthValue,
  monthRangeList,
  totalCost,
} = useCalculator();
</script>

<template>
  <section>
    <div class="container">
      <h2
        v-text="$t('calculator_section.title')"
        class="mb-4 font-vinnytsia text-4xl font-bold uppercase text-white"
      />

      <p class="mb-8 font-onest text-sm font-light text-white">
        {{ $t("calculator_section.description.help") }}
        <span class="text-primary-100 underline">
          {{ $t("calculator_section.description.apply") }}
        </span>
      </p>

      <h3
        v-text="$t('calculator_section.type')"
        class="mb-3 font-vinnytsia text-2xl font-bold text-white"
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

    <div class="container flex flex-col gap-12 md:gap-10">
      <template v-for="item in rangesList" :key="item.id">
        <CalculatorRange
          v-if="checkedServices.includes(item.id)"
          v-model="item.modelValue"
          v-bind="item"
          class="mb-8 w-full md:mb-0"
        />
      </template>

      <div
        v-if="checkedServices.length > 0"
        class="flex flex-col lg:flex-row lg:items-end lg:justify-between"
      >
        <BaseInputRange
          v-model="monthValue"
          title="calculator_section.ranges.period.title"
          :range-values="monthRangeList"
          :should-translate="false"
          class="mb-16 w-full md:max-w-[446px] lg:mb-0"
        />

        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2 md:flex-row md:gap-4">
            <h4 class="font-vinnytsia text-2xl font-bold text-white">
              {{ $t("calculator_section.ranges.total") }}
            </h4>

            <span
              class="bg-gradient-to-r from-primary-200 to-primary-100 bg-clip-text font-vinnytsia text-[32px] font-bold leading-9 text-transparent"
            >
              {{ totalCost }}$
            </span>
          </div>

          <BaseButton widthClass="w-full md:w-fit" class="lg:ml-auto">
            {{ $t("calculator_section.button_text") }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
