<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: `
				I am a .NET developer, specializing in using the .NET framework
				to build applications. I am proficient in programming languages
				such as C# and skilled in developing web, desktop,
				and mobile applications using technologies like ASP.NET, MVC, .NET CORE, and Xamarin.

				I am also a JavaScript developer, specializing in using JavaScript
				to build web applications. I am proficient in front-end technologies
				like HTML, CSS, and JavaScript frameworks
				such as React, Angular, or Vue.js.
				I am also skilled in back-end technologies like Node.js and Express.js.

			As a full-stack developer, I am proficient in both
				front-end and back-end development.
				I have a comprehensive understanding of both client-side and server-side
				technologies and can work on all aspects of an application,
				from the user interface to the database.

				Both .NET and JavaScript development play crucial roles
				in my software development journey, and being a full-stack developer
				allows me to have a broader skill set and the ability
				to work on various parts of an application.
						`,
        },
        {
          id: 2,
          bio: `I am a seasoned DevOps engineer with extensive experience
			in managing software workflows using GitHub, AWS, and Azure. I have a deep understanding of Continuous Integration/Continuous Deployment (CI/CD) pipelines and have successfully implemented them using these platforms.

			With GitHub, I have managed code repositories, reviewed code, and merged
			pull requests to maintain code quality and consistency across the team.
			I have also used GitHub Actions to automate software workflows,
			enabling faster and more reliable deployments.

			In AWS, I have leveraged services like AWS CodePipeline and AWS CodeDeploy
			for building, testing, and deploying applications.
			I have also used AWS CloudFormation for infrastructure as code,
			allowing me to manage and provision AWS resources efficiently.

			In Azure, I have used Azure DevOps for planning, developing, testing,
			and delivering software. I have also used Azure Pipelines for CI/CD,
			and Azure Resource Manager for managing and organizing resources.

			My experience in these areas has allowed me to streamline software development
			processes, improve team collaboration, and increase deployment frequency,
			all while maintaining high standards of quality and reliability.`,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="/images/profile.jpg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
