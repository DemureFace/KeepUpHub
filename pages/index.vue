<script setup>
import WellcomSection from "~/components/home/WellcomSection.vue";
import ServicesSection from "~/components/home/ServicesSection.vue";
import ServicesInfoSection from "~/components/home/ServicesInfoSection.vue";
import ChoiceSection from "~/components/home/ChoiceSection.vue";
import ResultsSection from "~/components/home/ResultsSection.vue";
import FeedbackSection from "~/components/home/FeedbackSection.vue";
import CalculatorSection from "~/components/home/CalculatorSection.vue";
import QuestionsSection from "~/components/home/QuestionsSection.vue";
</script>

<template>
  <WellcomSection class="mb-[272px]" />

  <ServicesSection class="mb-[100px] md:mb-36 xl:mb-44" />

  <ServicesInfoSection class="mb-[100px] md:mb-36 xl:mb-44" />

  <ChoiceSection class="mb-[100px] md:mb-36 xl:mb-44" />

  <ResultsSection class="mb-[100px] md:mb-36 xl:mb-44" />

  <FeedbackSection class="mb-[100px] md:mb-36 xl:mb-44" />

  <CalculatorSection class="mb-[100px]" />

  <QuestionsSection />
</template>
