<script setup>
const props = defineProps({
  text: {
    type: Array,
    required: true,
  },

  repeatText: {
    type: Number,
    default: 10,
  },

  duration: {
    type: String,
    default: "10s",
  },
});

const textList = computed(() => {
  const textList = [];

  let currentIndex = 0;

  for (let i = 0; i < props.repeatText; i++) {
    if (currentIndex >= props.text.length) {
      currentIndex = 0;
    }

    textList.push(props.text[currentIndex]);
    currentIndex++;
  }

  return textList;
});
</script>

<template>
  <div
    class="ticker bg-ticker text-sm2 flex h-10 select-none gap-6 overflow-hidden border border-primary-100 font-onest font-normal uppercase text-primary-200"
    :style="`--duration: ${duration}`"
  >
    <div
      v-for="i in 3"
      :key="i"
      class="ticker__text relative z-[-1] flex min-w-max shrink-0 items-center justify-around gap-6"
      :aria-hidden="i > 1"
    >
      <template
        v-for="(textItem, index) in textList"
        :key="index + 'first-text'"
      >
        <p :aria-hidden="index > 0" class="whitespace-nowrap">
          {{ textItem }}
        </p>

        <div class="mx-auto h-1 w-1 rounded-full bg-primary-200" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.ticker__text {
  animation: ticker var(--duration, 10s) linear infinite;
}

@keyframes ticker {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(calc(-100% - 1.5rem));
  }
}
</style>
