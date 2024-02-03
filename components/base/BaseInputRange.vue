<script setup>
const props = defineProps({
  selectedValue: {
    type: Number,
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

const emit = defineEmits(["update-selected-value"]);

function setPointSizeClass(index, value) {
  const isFirstOrLastPoint =
    index === 0 || index === props.rangeValues.length - 1;

  if (isFirstOrLastPoint) return "w-4 h-4";

  return "w-3 h-3";
}

function setPointBackgroundClass(value) {
  return value <= props.selectedValue ? "bg-primary-gradient" : "bg-gray-500";
}

const progressWidthClass = computed(() => {
  const rangeValuesLength = props.rangeValues.length;
  const rangeValueIndex = props.rangeValues.findIndex(
    (value) => value.value === props.selectedValue,
  );

  return {
    width: `${(rangeValueIndex / (rangeValuesLength - 1)) * 100}%`,
  };
});
</script>

<template>
  <div class="flex flex-col">
    <h4 class="mb-14 text-white">{{ props.label }}</h4>

    <div class="mb-6 flex items-center justify-between">
      <span
        v-for="(value, index) in props.rangeValues"
        :key="value.label"
        class="whitespace-nowrap text-center font-onest font-light text-white"
        :class="
          value.value === props.selectedValue
            ? 'text-xs'
            : 'text-[8px] leading-4 first:text-xs last:text-xs md:text-xs'
        "
      >
        {{ value.label }}
      </span>
    </div>

    <div
      class="relative flex h-0.5 w-full items-center justify-between bg-gray-500"
    >
      <div
        class="absolute h-1 rounded-full bg-primary-gradient"
        :style="progressWidthClass"
      />

      <div
        v-for="(value, index) in props.rangeValues"
        :key="value.label"
        class="relative flex cursor-pointer rounded-full"
        :class="[
          setPointSizeClass(index, value.value),
          setPointBackgroundClass(value.value),
          {
            'before:absolute before:left-1/2 before:top-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-primary-gradient after:absolute after:left-1/2 after:top-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white':
              value.value === props.selectedValue,
          },
        ]"
        @click="emit('update-selected-value', value.value)"
      />
    </div>
  </div>
</template>
