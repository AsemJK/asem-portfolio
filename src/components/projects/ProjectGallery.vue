<script>
export default {
  props: ["projectImages"],
};
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-1 sm:gap-10 mt-12">
    <div
      class="mb-10 sm:mb-0 items-center justify-center flex flex-wrap gap-4 sm:gap-10"
      v-for="projectImage in projectImages"
      :key="projectImage.id"
    >
      <img
        :src="projectImage.image"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none w-full sm:w-96 h-100 sm:h-96 object-cover"
        :alt="projectImage.title"
        :title="projectImage.title"
      />
    </div>
  </div>
</template>
