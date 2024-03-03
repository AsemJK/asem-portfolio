<script setup>
import Button from "../reusable/Button.vue";
import FormInput from "../reusable/FormInput.vue";
import FormTextarea from "../reusable/FormTextarea.vue";
import { ref } from "vue";
import axios from "axios";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const updateNameValue = (val) => {
  name.value = val;
};
const updateEmailValue = (val) => {
  email.value = val;
};
const updateSubjectValue = (val) => {
  subject.value = val;
};
const updateMessageValue = (val) => {
  message.value = val;
};

const sendEmail = async () => {
  const data = {
    name: name.value,
    toName: "Asem-Portfolio",
    email: email.value,
    title: subject.value,
    message: message.value,
  };
  const tokenData = await axios.post(
    `${process.env.VUE_APP_API_URL}/login`,
    {
      email: "admin@admin.com",
      password: "Admin123!",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const response = await axios.post(
    `${process.env.VUE_APP_API_URL}/contact`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
      Authorization: `Bearer ${tokenData.data.token}`,
    }
  );
  console.log(response);
};
</script>

<template>
  <div class="w-full md:w-1/2">
    <div
      class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
    >
      <p
        class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
      >
        Contact Form
      </p>
      <form
        action="#"
        @submit.prevent="sendEmail"
        class="font-general-regular space-y-7"
      >
        <FormInput
          label="Full Name"
          inputIdentifier="name"
          @update-val="updateNameValue"
        />
        <FormInput
          label="Email"
          inputIdentifier="email"
          inputType="email"
          @update-val="updateEmailValue"
        />
        <FormInput
          label="Subject"
          inputIdentifier="subject"
          @update-val="updateSubjectValue"
        />
        <FormTextarea
          label="Message"
          textareaIdentifier="message"
          @update-val="updateMessageValue"
        />

        <div>
          <Button
            title="Send Message"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
