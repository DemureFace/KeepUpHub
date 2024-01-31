<script setup>
const props = defineProps({
  text: {
    type: Array,
    required: true,
  },

  repeatText: {
    type: Number,
    default: 5,
  },

  duration: {
    type: String,
    default: "10s",
  },
});

const textList = computed(() => {
  const textList = [];

  for (let i = 0; i < props.repeatText; i++) {
    if (i < props.text.lenght) {
      textList.push(props.text[i]);
      console.log(props.text[i]);
    }
  }

  return textList;
});
</script>

<template>
  <div
    class="ticker bg-ticker text-sm2 text-primary-200 border-primary-100 flex h-7 select-none gap-6 overflow-hidden border font-onest font-normal uppercase"
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

        <div class="bg-stars mx-auto h-5 w-5 bg-cover xl:h-6 xl:w-6" />
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
