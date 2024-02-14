<script>
import AboutClientSingle from "./AboutClientSingle.vue";

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading: "Some of the techniques I have used",
      clients: [
        {
          id: 1,
          title: "C#",
          img: require("@/assets/images/teqs/csharp.png"),
        },
        {
          id: 2,
          title: "Asp.Net Core",
          img: require("@/assets/images/teqs/aspcore.png"),
        },
        {
          id: 3,
          title: "Vuejs",
          img: require("@/assets/images/teqs/vue.png"),
        },
        {
          id: 4,
          title: "Angular",
          img: require("@/assets/images/teqs/angular.png"),
        },
        {
          id: 5,
          title: "Laravel",
          img: require("@/assets/images/teqs/laravel.png"),
        },
        {
          id: 6,
          title: "Sql Server",
          img: require("@/assets/images/teqs/sql_server.png"),
        },
        {
          id: 7,
          title: "AWS",
          img: require("@/assets/images/teqs/aws_clouding.png"),
        },
        {
          id: 8,
          title: "Xamarin",
          img: require("@/assets/images/teqs/xamarin.png"),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
