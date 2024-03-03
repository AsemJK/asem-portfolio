<script>
export default {
  props: ["singleProjectHeader"],
};
</script>

<template>
  <div>
    <a
      href="/projects"
      class="text-ternary-dark dark:text-ternary-light hover:underline"
    >
      <i data-feather="arrow-left" class="w-6"></i>
    </a>
    <!-- Project heading and meta info -->
    <p
      class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-3 sm:mt-2 mb-2"
    >
      {{ singleProjectHeader.singleProjectTitle }}
    </p>
    <div class="flex">
      <div class="flex items-center mr-10">
        <i
          data-feather="clock"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
          >{{ singleProjectHeader.singleProjectDate }}</span
        >
      </div>
      <div class="flex items-center">
        <i
          data-feather="tag"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
          >{{ singleProjectHeader.singleProjectTag }}</span
        >
      </div>
    </div>
  </div>
</template>
