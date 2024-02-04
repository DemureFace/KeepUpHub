<script setup>
const props = defineProps({
  modelValue: {
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

const emit = defineEmits(["update:model-value"]);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:model-value", Number(value)),
});

function setPointSizeClass(index) {
  const isFirstOrLastPoint =
    index === 0 || index === props.rangeValues.length - 1;

  if (isFirstOrLastPoint) return "w-4 h-4";

  return "w-3 h-3";
}

function setPointBackgroundClass(value) {
  return value <= props.modelValue ? "bg-primary-gradient" : "bg-gray-500";
}

const progressWidthClass = computed(() => {
  const rangeValuesLength = props.rangeValues.length;
  const rangeValueIndex = props.rangeValues.findIndex(
    (value) => value.value === props.modelValue,
  );

  return {
    width: `${(rangeValueIndex / (rangeValuesLength - 1)) * 100}%`,
  };
});
</script>

<template>
  <div class="relative flex w-full flex-col">
    <h4 class="mb-4 text-lg font-bold text-white md:text-2xl">
      {{ props.label }}
    </h4>

    <div class="mb-6 flex items-center justify-between md:max-w-[446px]">
      <span
        v-for="value in props.rangeValues"
        :key="value.label"
        class="whitespace-nowrap text-center font-onest font-light text-white"
        :class="
          value.value === props.modelValue
            ? 'text-xs'
            : 'text-[8px] leading-4 first:text-xs last:text-xs md:text-xs'
        "
      >
        {{ value.label }}
      </span>
    </div>

    <div class="relative flex md:max-w-[446px]">
      <input
        v-model="model"
        type="range"
        min="1"
        max="5"
        step="1"
        class="z-10 w-full"
      />

      <div
        class="absolute left-1/2 top-1/2 flex h-0.5 w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between bg-gray-500"
      >
        <div
          class="absolute h-1 rounded-full bg-primary-gradient"
          :style="progressWidthClass"
        />

        <div
          v-for="(value, index) in props.rangeValues"
          :key="value.value"
          class="relative flex cursor-pointer rounded-full"
          :class="[
            setPointSizeClass(index, value.value),
            setPointBackgroundClass(value.value),
            {
              'before:absolute before:left-1/2 before:top-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-primary-gradient after:absolute after:left-1/2 after:top-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white':
                value.value === props.modelValue,
            },
          ]"
          @click="emit('update:model-value', Number(value.value))"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="range"] {
  appearance: none;
  width: 100%;
  background: transparent;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  margin-top: -7px;
}
input[type="range"]::-moz-range-thumb {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}
input[type="range"]::-ms-thumb {
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  background: transparent;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: transparent;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 2;
  cursor: pointer;
  background: transparent;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 2px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: transparent;
}
input[type="range"]:focus::-ms-fill-lower {
  background: transparent;
}
input[type="range"]::-ms-fill-upper {
  background: transparent;
}
input[type="range"]:focus::-ms-fill-upper {
  background: transparent;
}
</style>
