<script setup>
import FeedbackMobileCard from "./FeedbackMobileCard.vue";
import FeedbackDesktopCard from "./FeedbackDesktopCard.vue";

const feedbackList = [
  {
    image: {
      src: "/images/feedback/1.png",
      alt: "Feedback 1",
    },
    name: "Alex",
    position: "CMO",
    text: "feedback_section.feedbacks.first.text",
  },
  {
    image: {
      src: "/images/feedback/2.png",
      alt: "Feedback 2",
    },
    name: "Yanis",
    position: "Owner",
    text: "feedback_section.feedbacks.second.text",
  },
  {
    image: {
      src: "/images/feedback/3.png",
      alt: "Feedback 3",
    },
    name: "Francois",
    position: "COO",
    text: "feedback_section.feedbacks.third.text",
  },
];

const currentOpenIndex = ref(0);
</script>

<template>
  <section>
    <div class="container">
      <h2
        v-text="$t('feedback_section.title')"
        class="font-vinnytsia mb-[30px] text-[26px] font-bold leading-8 text-white"
      />

      <ul class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <li
          v-for="(feedback, index) in feedbackList"
          :key="feedback.name"
          @click="currentOpenIndex = index"
        >
          <FeedbackMobileCard
            v-bind="feedback"
            :isOpen="currentOpenIndex === index"
            class="flex md:hidden"
          />

          <FeedbackDesktopCard v-bind="feedback" class="hidden md:flex" />
        </li>
      </ul>
    </div>
  </section>
</template>
