<template>
  <select
    v-model="selectedValue"
    @change="handleChange"
    class="rounded border p-2"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["options", "value"]);
const selectedValue = ref(props.value);

const handleChange = () => {
  defineEmits().input(selectedValue.value);
};
</script>
