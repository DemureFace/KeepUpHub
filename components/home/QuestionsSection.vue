<script setup>
const questionList = [
  {
    number: "01",
    question: "questions_section.questions.first.question",
    answer: "questions_section.questions.first.answer",
  },
  {
    number: "02",
    question: "questions_section.questions.second.question",
    answer: "questions_section.questions.second.answer",
  },
  {
    number: "03",
    question: "questions_section.questions.third.question",
    answer: "questions_section.questions.third.answer",
  },
  {
    number: "04",
    question: "questions_section.questions.fourth.question",
    answer: "questions_section.questions.fourth.answer",
  },
  {
    number: "05",
    question: "questions_section.questions.fifth.question",
    answer: "questions_section.questions.fifth.answer",
  },
];

const currentOpenIndex = ref(0);
</script>

<template>
  <section>
    <div class="container">
      <h2
        v-text="$t('questions_section.title')"
        class="font-vinnytsia mb-4 text-2xl font-bold uppercase text-white md:text-4xl"
      />

      <ul class="flex flex-col gap-4">
        <li
          v-for="(question, index) in questionList"
          :key="question.number"
          class="flex cursor-pointer flex-col rounded-2xl bg-gray-200 px-6 py-4"
          @click="currentOpenIndex = index"
        >
          <div class="flex w-full items-center gap-4">
            <h3
              v-text="question.number"
              class="font-onest text-4xl font-bold text-primary-100"
            />

            <h4
              v-text="$t(question.question)"
              class="font-onest text-sm font-bold text-white"
            />

            <img
              src="/images/svg/arrow-open.svg"
              alt="Arrow Open"
              class="ml-auto min-h-[26px] min-w-[26px] transition-transform duration-300 ease-in-out"
              :class="currentOpenIndex === index ? 'rotate-180' : ''"
            />
          </div>

          <div
            class="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
            :class="
              currentOpenIndex === index
                ? 'grid-rows-1'
                : 'grid-rows-[repeat(1,minmax(0,0fr))]'
            "
          >
            <p
              v-text="$t(question.answer)"
              class="pt-2 font-onest text-sm font-light text-white xl:pl-[62px]"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
