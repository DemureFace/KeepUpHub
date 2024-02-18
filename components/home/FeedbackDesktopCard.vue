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
});
</script>

<template>
  <div
    class="flex h-full flex-col items-center rounded-2xl bg-gray-200 py-12 md:px-4 xl:px-8"
  >
    <img
      :src="props.image.src"
      :alt="props.image.alt"
      class="mb-6 h-[150px] w-[150px]"
    />

    <h3
      v-text="props.name"
      class="font-vinnytsia mb-1 text-2xl font-bold text-white"
    />

    <h4
      v-text="props.position"
      class="mb-6 font-onest text-sm font-medium text-white"
    />

    <p
      v-text="$t(props.text)"
      class="mb-6 text-center font-onest text-sm font-light text-white"
    />

    <div class="mt-auto flex gap-1">
      <img
        v-for="star in 5"
        :key="star"
        src="/images/svg/star.svg"
        alt="star"
        class="h-3 w-3"
      />
    </div>
  </div>
</template>
