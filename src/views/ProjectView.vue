<template>
  <div>
    <div v-if="project">
      <div class="container mx-auto mt-10 sm:mt-20">
        <!-- Project header -->
        <ProjectHeader :singleProjectHeader="singleProjectHeader" />

        <!-- Project gallery -->
        <ProjectGallery :projectImages="projectImages" />

        <!-- Project information -->
        <ProjectInfo :projectInfo="projectInfo" />

        <!-- Project related projects -->
        <ProjectRelatedProjects :relatedProject="relatedProject" />
      </div>
    </div>
    <div v-else>
      <p>Loading project...</p>
    </div>
  </div>
</template>

<script>
import dbsource from "../data/db.json";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";

export default {
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects,
  },
  data() {
    return {
      projects: dbsource.projects,
    };
  },
  props: {
    // Add props here
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    // Add computed properties here
    project() {
      var pr = this.projects.find((p) => p.id === parseInt(this.id));
      return pr;
    },
    singleProjectHeader() {
      return {
        singleProjectTitle: this.project.title,
        singleProjectDate: this.project.date,
        singleProjectTag: this.project.category,
      };
    },
    projectImages() {
      var image = {
        id: 1,
        title: this.project.title,
        image: this.project.image,
      };
      return [image];
    },
    projectInfo() {
      var company = dbsource.clients.find((client) =>
        this.project.clients.includes(client.id)
      );
      var pinfo = {
        clientHeading: "About Client",
        companyInfos: Array(company),
        objectivesHeading: "Objective",
        objectivesDetails: this.project.objectives,
        technologies: [
          {
            title: "Tools & Technologies",
            techs: this.project.technologies,
          },
        ],
        projectDetailsHeading: "Challenge",
        projectDetails: this.project.details,
        socialSharingsHeading: "Share This",
        socialSharings: [
          {
            id: 1,
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/realstoman",
          },
          {
            id: 2,
            name: "Instagram",
            icon: "instagram",
            url: "https://instagram.com/realstoman",
          },
          {
            id: 3,
            name: "Facebook",
            icon: "facebook",
            url: "https://facebook.com/",
          },
          {
            id: 4,
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://linkedin.com/",
          },
          {
            id: 5,
            name: "Youtube",
            icon: "youtube",
            url: "https://www.youtube.com/c/StomanStudio",
          },
        ],
      };
      return pinfo;
    },
    relatedProject() {
      var related_projects_ids = this.project.relatedProjects.map((p) =>
        parseInt(p)
      );
      var related_projects = this.projects.filter((p) =>
        related_projects_ids.includes(p.id)
      );

      return {
        relatedProjectsHeading: "Related Projects",
        relatedProjects: related_projects,
      };
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
</style>
