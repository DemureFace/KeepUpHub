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

  return "border-white/30 can-hover:hover:border-white/50";
});
</script>

<template>
  <div
    class="flex items-center rounded-2xl border bg-transparent px-6 py-3.5 transition-colors duration-300"
    :class="borderColor"
  >
    <textarea
      v-model="model"
      :id="props.id"
      :name="props.name"
      :placeholder="$t(props.placeholder)"
      rows="6"
      class="hide-scrollbar min-w-0 shrink grow resize-none appearance-none border-none bg-transparent text-base text-white outline-none placeholder:text-white/30"
    />
  </div>
</template>
