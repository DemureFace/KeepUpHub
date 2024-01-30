<template>
  <div class="baseDropDownSelect">
    <select
      v-model="selectedOption"
      @change="handleSelectionChange"
      class="border-borderDropDownSelect bg-bgDropDownSelect rounded-3xl border"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";

const props = defineProps(["options"]);

const selectedOption = ref(props.options[0].value);

const handleSelectionChange = () => {
  console.log(`Selected option: ${selectedOption.value}`);
};

onMounted(() => {
  console.log(`Default selected option: ${selectedOption.value}`);
});
</script>
