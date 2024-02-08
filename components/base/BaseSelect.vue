<script setup>
import { useClickOutside } from "~/composables/useClickOutside";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },

  id: {
    type: String,
    default: null,
  },

  options: {
    type: Array,
    required: true,
  },

  size: {
    type: String,
    default: "md",
    validator: (size) => ["sm", "md"].includes(size),
  },

  placeholder: {
    type: String,
    default: "",
  },

  errors: {
    type: Array,
    default: () => [],
  },

  isValid: {
    type: Boolean,
    default: false,
  },

  isInvalid: {
    type: Boolean,
    default: false,
  },

  shouldTranslate: {
    type: Boolean,
    default: false,
  },

  class: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:model-value"]);

const selectRef = ref(null);
const isOpen = ref(false);

const selectedOption = computed({
  get: () => {
    return props.options.find((option) => option.value === props.modelValue);
  },
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

function closeDropDown() {
  isOpen.value = false;
}

const { registerElement } = useClickOutside();

const selectOption = (option) => {
  emit("update:model-value", option.value);

  closeDropDown();
};

const isSelectOption = (value) => {
  return value === props.modelValue;
};

const selectedImage = computed(() => {
  return selectedOption.value?.image;
});

const labelClasses = computed(() => {
  return props.size === "sm" ? "font-normal" : "font-bold";
});

const selectBorderClasses = computed(() => {
  if (isOpen.value) {
    if (props.isValid)
      return "rounded-t-2xl border-primary-100 border-b-transparent";

    if (props.isInvalid)
      return "rounded-t-2xl border-danger border-b-transparent";

    return "rounded-t-2xl border-white/50 border-b-transparent";
  }

  if (props.isValid) return "rounded-2xl border-primary-100";
  if (props.isInvalid) return "rounded-2xl border-danger";

  return "rounded-2xl border-white/30 transition-colors duration-300 can-hover:hover:border-white/50";
});

const selectListBorderClasses = computed(() => {
  if (props.isValid) return "rounded-b-2xl border-primary-100";
  if (props.isInvalid) return "rounded-b-2xl border-danger";

  return "rounded-b-2xl border-white/50";
});

onMounted(() => {
  registerElement(selectRef.value, closeDropDown);
});
</script>

<template>
  <div class="flex flex-col" :class="class">
    <div
      :id="props.id"
      ref="selectRef"
      class="relative z-10 cursor-pointer border bg-dark px-4 py-3.5"
      :class="selectBorderClasses"
      @click="toggleDropdown"
    >
      <div class="flex justify-between gap-2.5">
        <div class="flex max-w-[calc(100%-42px)] gap-2">
          <img
            v-if="selectedImage"
            :src="selectedImage.src"
            :alt="selectedImage.alt"
            class="w-4"
          />

          <span
            :class="labelClasses"
            class="overflow-hidden text-ellipsis whitespace-nowrap font-onest text-sm text-white"
          >
            {{
              shouldTranslate
                ? $t(selectedOption?.label || props.placeholder)
                : selectedOption?.label || props.placeholder
            }}
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
        class="absolute -left-px top-full flex w-[calc(100%+2px)] flex-col overflow-hidden border border-t-transparent bg-dark pb-2.5"
        :class="selectListBorderClasses"
      >
        <li
          v-for="option in options"
          :key="option.value"
          class="flex cursor-pointer gap-2.5 px-4 py-1 transition-colors duration-300"
          :class="
            isSelectOption(option.value)
              ? 'bg-gray-500'
              : 'can-hover:hover:bg-gray-400'
          "
          @click="selectOption(option)"
        >
          <img
            v-if="option.image"
            :src="option.image.src"
            :alt="option.image.alt"
            class="w-4"
          />

          <span :class="labelClasses" class="font-onest text-sm text-white">
            {{ shouldTranslate ? $t(option.label) : option.label }}
          </span>
        </li>
      </ul>
    </div>

    <BaseValidationErrors :errors="props.errors" />
  </div>
</template>
