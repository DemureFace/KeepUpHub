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
  <div class="bg-gray-200 flex flex-col rounded-2xl p-4">
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

      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-auto transition-transform duration-300 ease-in-out"
        :class="isOpen ? 'rotate-180' : ''"
      >
        <path
          d="M0.705879 24.9227C0.264413 24.4812 0.260416 23.7686 0.696957 23.3321L21.2246 2.80446L5.04452 2.84859C4.89428 2.85327 4.74429 2.82776 4.60342 2.77357C4.46255 2.71938 4.33366 2.63761 4.22438 2.5331C4.11509 2.42859 4.02763 2.30347 3.96716 2.16512C3.90669 2.02677 3.87444 1.87801 3.87232 1.72764C3.8702 1.57726 3.89825 1.42833 3.95482 1.28965C4.01138 1.15096 4.09531 1.02534 4.20164 0.920211C4.30797 0.815081 4.43454 0.732579 4.57387 0.677582C4.7132 0.622586 4.86246 0.596212 5.01282 0.60002L23.9254 0.547674L23.9591 0.547226C24.1254 0.549184 24.2896 0.588149 24.4398 0.661292C24.59 0.734435 24.7224 0.83992 24.8274 0.970091C24.9999 1.18231 25.0901 1.44921 25.081 1.72098L25.0279 20.6151C25.0317 20.7655 25.0053 20.9147 24.9503 21.0541C24.8953 21.1934 24.8128 21.32 24.7077 21.4263C24.6026 21.5326 24.477 21.6165 24.3383 21.6731C24.1996 21.7297 24.0507 21.7577 23.9003 21.7556C23.7499 21.7535 23.6012 21.7212 23.4628 21.6608C23.3245 21.6003 23.1993 21.5128 23.0948 21.4035C22.9903 21.2943 22.9085 21.1654 22.8544 21.0245C22.8002 20.8836 22.7747 20.7336 22.7793 20.5834L22.8235 4.40334L2.29584 24.931C1.85929 25.3675 1.14799 25.3648 0.705879 24.9227Z"
          fill="url(#paint0_linear_169_718)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_169_718"
            x1="14.332"
            y1="-0.318748"
            x2="7.34505"
            y2="21.1013"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.114" stop-color="#FFE600" />
            <stop offset="0.8753" stop-color="#C4F23E" />
          </linearGradient>
        </defs>
      </svg>
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
