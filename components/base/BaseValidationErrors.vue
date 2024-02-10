<script setup>
const props = defineProps({
  errors: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <Transition name="list">
    <span
      v-if="props.errors?.[0]?.$message"
      class="absolute top-full w-full whitespace-nowrap pt-1 font-mono text-xs font-medium text-danger"
    >
      {{ props.errors[0].$message }}
    </span>
  </Transition>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}
</style>
