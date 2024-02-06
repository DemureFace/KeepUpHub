<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    default: "",
  },

  rangeValues: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:model-value"]);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:model-value", Number(value)),
});

const currentPrice = computed(() => {
  return props.rangeValues.find((item) => item.value === props.modelValue)
    ?.price;
});
</script>

<template>
  <div
    class="flex flex-col md:flex-row md:items-center md:justify-between md:gap-6"
  >
    <BaseInputRange
      v-model="model"
      :range-values="rangeValues"
      :title="props.title"
      class="mb-8 w-full md:mb-0 md:max-w-[446px]"
    />

    <div
      class="flex items-center justify-end gap-2.5 md:flex-col md:items-end md:gap-0"
    >
      <div class="flex flex-col">
        <p class="text-right text-xs font-light text-white md:text-sm">
          {{ $t("calculator_section.ranges.cost") }}
        </p>
        <p class="text-right text-xs font-light text-white md:text-sm">
          {{ props.label }}
        </p>
      </div>

      <span class="text-2xl font-bold text-white">
        {{ `${currentPrice}$` }}
      </span>
    </div>
  </div>
</template>
