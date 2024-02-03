<script setup>
const props = defineProps({
  image: {
    type: Object,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  position: {
    type: String,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },

  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex flex-col rounded-2xl bg-gray-200 p-4">
    <div class="flex items-center gap-6">
      <img :src="props.image.src" :alt="props.image.alt" class="h-16 w-16" />

      <div class="flex flex-col">
        <h3
          v-text="props.name"
          class="font-onest text-lg font-bold text-white"
        />

        <h4
          v-text="props.position"
          class="font-onest text-xs font-medium text-white"
        />

        <div class="mt-2 flex gap-1">
          <img
            v-for="star in 5"
            :key="star"
            src="/images/svg/star.svg"
            alt="star"
            class="h-3 w-3"
          />
        </div>
      </div>

      <img
        src="/images/svg/arrow-open.svg"
        alt="Arrow Open"
        class="ml-auto transition-transform duration-300 ease-in-out"
        :class="isOpen ? 'rotate-180' : ''"
      />
    </div>

    <div
      class="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
      :class="isOpen ? 'grid-rows-1' : 'grid-rows-[repeat(1,minmax(0,0fr))]'"
    >
      <p
        v-text="$t(props.text)"
        class="pt-6 font-onest text-sm font-light text-white"
      />
    </div>
  </div>
</template>
