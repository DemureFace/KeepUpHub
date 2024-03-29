<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button",
  },

  iconRotate: {
    type: String,
    default: "",
  },

  onlyIcon: {
    type: Boolean,
    default: false,
  },

  isLoading: {
    type: Boolean,
    default: false,
  },

  widthClass: {
    type: String,
    default: "w-fit",
  },
});

const paddings = computed(() => {
  if (props.onlyIcon) {
    return "p-[18.5px]";
  }

  return "py-3.5 pl-7 pr-6";
});

const border = computed(() => {
  return props.onlyIcon ? "rounded-full" : "rounded-2xl";
});

const buttonClasses = computed(() => [
  "relative flex flex-row items-center justify-center gap-2.5 focus:outline-none bg-primary-gradient group border border-transparent can-hover:hover:border-primary-100 can-hover:hover:bg-none",
  paddings.value,
  border.value,
  props.widthClass,
  props.isLoading ? "pointer-events-none" : "",
]);
</script>

<template>
  <button :class="buttonClasses" class="uppercase" :type="props.type">
    <div
      v-if="props.isLoading"
      class="absolute left-[calc(50%-12px)] top-[calc(50%-12px)] h-6 w-6 animate-spin rounded-full border-4 border-black border-t-transparent"
    />

    <span
      v-if="!props.onlyIcon"
      class="font-onest text-base font-bold text-black can-hover:group-hover:text-primary-100"
      :class="{ 'opacity-0': props.isLoading }"
    >
      <slot />
    </span>

    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      class="text-black can-hover:group-hover:text-primary-100"
      :class="[iconRotate, { 'opacity-0': props.isLoading }]"
    >
      <path
        d="M1.50003 8.99988C1.50003 8.74113 1.71003 8.53113 1.96878 8.53113L14.136 8.53113L9.32778 3.80238C9.28187 3.75972 9.24498 3.70829 9.21929 3.65112C9.1936 3.59396 9.17964 3.53223 9.17822 3.46957C9.17681 3.40692 9.18797 3.34462 9.21105 3.28635C9.23413 3.22809 9.26866 3.17504 9.3126 3.13035C9.35653 3.08566 9.40898 3.05024 9.46685 3.02617C9.52471 3.00211 9.58682 2.98989 9.64949 2.99024C9.71215 2.99059 9.77412 3.00351 9.83171 3.02822C9.8893 3.05294 9.94135 3.08895 9.98478 3.13413L15.6053 8.66125L15.6154 8.671C15.6641 8.72032 15.7012 8.77986 15.7241 8.84531C15.7469 8.91076 15.7549 8.98047 15.7474 9.04938C15.7357 9.16214 15.6833 9.26678 15.6 9.34375L9.98478 14.8653C9.94135 14.9104 9.8893 14.9464 9.83171 14.9712C9.77412 14.9959 9.71215 15.0088 9.64949 15.0091C9.58682 15.0095 9.52471 14.9973 9.46685 14.9732C9.40898 14.9491 9.35653 14.9137 9.3126 14.869C9.26866 14.8243 9.23413 14.7713 9.21105 14.713C9.18797 14.6548 9.17681 14.5925 9.17822 14.5298C9.17964 14.4672 9.1936 14.4054 9.21929 14.3483C9.24498 14.2911 9.28187 14.2397 9.32778 14.197L14.136 9.46825L1.96878 9.46825C1.71003 9.46825 1.50003 9.259 1.50003 8.99988Z"
      />
    </svg>
  </button>
</template>
