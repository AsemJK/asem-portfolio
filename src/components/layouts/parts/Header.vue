<script setup>
import feather from "feather-icons";
import { onMounted, ref } from 'vue';

const theme = ref('light');
onMounted(() => {
    feather.replace();
    theme.value = localStorage.getItem('theme') || 'light';
})
</script>

<template>
    <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
        <!-- Banner left contents -->
        <div class="w-full md:w-1/3 text-left">
            <h1
                class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
                Hi, I am Asem
            </h1>
            <p
                class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400">
                A Full-Stack Developer & Software Engineer
            </p>
            <div class="w-full p-3 flex flex-row gap-x-8">
                <a href="https://github.com/AsemJK" target="_blank">
                    <img src="/images/github.png" class="w-10 rounded-xl hover:shadow-2xl duration-300"
                        alt="Github Logo" />
                </a>
                <a href="https://www.linkedin.com/in/asem-jk/" target="_blank">
                    <img src="/images/linkedin.png" class="w-10 rounded-xl hover:shadow-2xl duration-300"
                        alt="LinkedIn Logo" />
                </a>
            </div>
        </div>
        <!-- Banner right illustration -->
        <div class="w-full md:w-2/3 text-right float-right">
            <img v-if="theme === 'light'" src="/images/developer.png" alt="Developer" />
            <img v-else src="/images/developer-dark.png" alt="Developer" />
        </div>
    </section>
</template>

<style scoped></style>
