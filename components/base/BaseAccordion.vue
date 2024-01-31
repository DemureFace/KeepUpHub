<template>
  <div class="space-y-1">
    <div v-for="(item, index) in items" :key="index" class="rounded border">
      <div
        @click="toggleAccordion(index)"
        class="cursor-pointer bg-gray-100 p-2"
      >
        {{ item.title }}
      </div>
      <div v-show="item.expanded" class="p-2">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["items"]);
const toggleAccordion = (index) => {
  props.items[index].expanded = !props.items[index].expanded;
};
</script>
