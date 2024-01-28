<template>
  <button @click="handleClick" :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["buttonType"]);
const { emit } = defineEmits(["click"]);

const buttonClasses = {
  [props.buttonType === "primary"
    ? "primary-gradient "
    : "bg-gray-300 text-gray-700"]: true,
};

const handleClick = () => {
  emit("click");
};
</script>
