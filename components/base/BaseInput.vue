<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },

  id: {
    type: String,
    default: null,
  },

  name: {
    type: String,
    default: null,
  },

  type: {
    type: String,
    default: "number",
  },

  label: {
    type: String,
    default: null,
  },

  placeholder: {
    type: String,
    default: null,
  },

  isValid: {
    type: Boolean,
    default: false,
  },

  isInvalid: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:model-value"]);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:model-value", value),
});

const borderColor = computed(() => {
  if (props.isValid) return "border-primary-100";
  if (props.isInvalid) return "border-danger";

  return "border-white/30 group-hover:border-white/50";
});

const symbolColor = computed(() => {
  if (props.isValid) return "text-primary-100";
  if (props.isInvalid) return "text-danger";

  return "text-white/30 group-hover:text-white/50";
});
</script>

<template>
  <div class="group relative flex flex-col items-start justify-start">
    <label v-if="props.id" :for="props.id" v-text="props.label" />

    <div
      class="relative flex w-full items-center overflow-hidden rounded-2xl border bg-transparent px-6 py-3.5 transition-colors duration-300"
      :class="borderColor"
    >
      <input
        v-model="model"
        :id="props.id"
        :name="props.name"
        :type="props.type"
        :placeholder="props.placeholder"
        class="min-w-0 grow appearance-none border-none bg-transparent p-0 font-onest text-sm font-normal text-white outline-none placeholder:text-white/30 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </div>

    <div
      v-text="'*'"
      class="absolute -right-1.5 top-1 flex h-1.5 w-1.5 items-center transition-colors duration-300"
      :class="symbolColor"
    />
  </div>
</template>
