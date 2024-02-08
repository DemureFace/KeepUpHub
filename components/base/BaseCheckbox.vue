<script setup>
const props = defineProps({
  modelValue: {
    type: [Boolean, Array],
    required: true,
  },

  id: {
    type: String,
    default: null,
  },

  value: {
    type: [String, Number, Boolean],
    default: "",
  },

  label: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:model-value"]);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:model-value", value),
});

const isChecked = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.some((value) => value === props.value);
  }

  return model.value;
});
</script>

<template>
  <label
    :for="props.id"
    class="group flex cursor-pointer items-center rounded-2xl border p-2.5 transition-colors duration-200"
    :class="
      isChecked
        ? 'border-transparent bg-primary-gradient'
        : 'can-hover:hover:border-white/50 border-white/30 bg-transparent'
    "
  >
    <span class="flex">
      <input
        :id="props.id"
        v-model="model"
        type="checkbox"
        :checked="isChecked"
        :value="props.value"
        class="h-0 w-0 appearance-none overflow-hidden opacity-0"
      />

      <div
        class="relative mr-2.5 h-6 w-6 rounded-lg border transition-colors duration-200"
        :class="
          isChecked
            ? 'border-transparent'
            : 'can-hover:group-hover:border-white/50 border-white/30'
        "
      >
        <img
          src="/images/svg/check.svg"
          alt="Check"
          class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2"
          :class="isChecked ? 'opacity-100' : 'opacity-0'"
        />
      </div>
    </span>

    <span
      v-text="props.label"
      class="select-none whitespace-nowrap font-onest text-sm font-light"
      :class="isChecked ? 'text-dark' : 'text-white'"
    />
  </label>
</template>
