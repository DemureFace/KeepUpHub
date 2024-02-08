<script setup>
const props = defineProps({
  errors: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <TransitionGroup name="list" tag="ul" class="relative pl-1">
    <li
      v-for="error in props.errors"
      :key="error.$uid"
      class="baseValidation-error text-danger w-full whitespace-nowrap pt-1 font-mono text-xs font-medium"
    >
      {{ error.$message }}
    </li>
  </TransitionGroup>
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
