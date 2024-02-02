<script setup>
const resultList = [
  {
    number: "137 530",
    description: "results_section.minutes-of-communication",
  },
  {
    number: "807 470",
    description: "results_section.requests",
  },
  {
    number: "0$",
    description: "results_section.deposits",
  },
];

let targetValue = 11870000;
let duration = 5000;

function animateValue(start, end, duration, element) {
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;

    let timeElapsed = currentTime - startTime;
    let nextValue = Math.round(
      easeInOutQuad(timeElapsed, start, end - start, duration),
    );

    element.textContent = `${nextValue.toLocaleString()}$`;

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      element.textContent = `${end.toLocaleString()}$`;
    }
  }

  requestAnimationFrame(animation);
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

onMounted(async () => {
  await nextTick();

  const animatedElement = document.getElementById("result-2");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateValue(0, targetValue, duration, animatedElement);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1, rootMargin: "0px 0px -50px 0px" },
  );

  observer.observe(animatedElement);
});
</script>

<template>
  <section>
    <div class="container">
      <h2
        v-text="$t('results_section.title')"
        class="mb-14 text-center font-onest text-5xl font-bold uppercase text-white md:max-w-[512px] md:text-left md:text-8xl"
      />

      <div
        class="border-gray-100 relative flex rounded-2xl border px-4 py-10 md:px-7 lg:px-16 xl:pl-[168px] xl:pr-[75px]"
      >
        <div
          class="border-b-gray-100 absolute -top-10 left-1/2 flex h-0 w-0 -translate-x-1/2 justify-center border-b-[40px] border-l-[40px] border-r-[40px] border-l-transparent border-r-transparent md:left-24 md:translate-x-0 xl:left-52"
        >
          <div
            class="absolute mt-0.5 border-b-[40px] border-l-[40px] border-r-[40px] border-b-dark border-l-transparent border-r-transparent"
          />
        </div>

        <ul
          class="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:gap-8"
        >
          <li
            v-for="(result, index) in resultList"
            :key="result.number"
            class="flex flex-col"
          >
            <h3
              :id="`result-${index}`"
              v-text="result.number"
              class="font-onest text-[40px] font-bold leading-[48px]"
              :class="
                index === resultList.length - 1
                  ? 'w-[250px] bg-gradient-to-r from-primary-200 to-primary-100 bg-clip-text text-right text-transparent'
                  : 'text-center text-white '
              "
            />

            <p
              v-text="$t(result.description)"
              class="text-center font-onest text-lg font-light text-white"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
