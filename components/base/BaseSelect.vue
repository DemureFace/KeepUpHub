<script setup>
import { useClickOutside } from "~/composables/useClickOutside";

const props = defineProps({
  options: Array,
  modelValue: [String, Number],
  size: {
    type: String,
    default: "sm",
    validator: (size) => ["sm", "md"].includes(size),
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectRef = ref(null);
const isOpen = ref(false);

const selectedOption = ref(
  props.options.find((option) => option.value === props.modelValue) ||
    props.options[0],
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropDown = () => {
  isOpen.value = false;
};

const { registerElement } = useClickOutside();

const selectOption = (option) => {
  selectedOption.value = option;
  emit("update:modelValue", option.value);
  isOpen.value = false;
};

const selectedImage = computed(() => {
  return selectedOption.value.image;
});

const labelClasses = computed(() => {
  return props.size === "sm" ? "font-bold" : "font-normal";
});

onMounted(() => {
  registerElement(selectRef.value, closeDropDown);
});
</script>

<template>
  <div
    ref="selectRef"
    class="relative z-10 cursor-pointer border bg-dark px-4 py-3.5"
    :class="
      isOpen
        ? 'rounded-t-3xl border-white/50 border-b-transparent'
        : 'rounded-3xl border-white/20 hover:border-white/50'
    "
    @click="toggleDropdown"
  >
    <div class="flex justify-between gap-2.5">
      <div class="flex gap-2">
        <img
          v-if="selectedImage"
          :src="selectedImage.src"
          :alt="selectedImage.alt"
          class="w-4"
        />

        <span :class="labelClasses" class="font-onest text-sm text-white">
          {{ selectedOption.label }}
        </span>
      </div>

      <img
        src="/images/svg/arrow.svg"
        alt="arrow"
        :class="isOpen ? 'rotate-180' : 'rotate-0'"
      />
    </div>

    <ul
      v-if="isOpen"
      class="absolute -left-px top-full flex w-[calc(100%+2px)] flex-col overflow-hidden rounded-b-3xl border border-white/50 border-t-transparent bg-dark"
    >
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="flex gap-2.5 px-4 pb-3.5 pt-[5px] hover:bg-black"
      >
        <img
          v-if="option.image"
          :src="option.image.src"
          :alt="option.image.alt"
          class="w-4"
        />

        <span
          :class="labelClasses"
          class="font-onest text-sm font-bold text-white"
        >
          {{ option.label }}
        </span>
      </li>
    </ul>
  </div>
</template>
