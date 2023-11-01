<template>
  <div
    class="w-full bg-black text-white flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 px-4 lg:px-8 min-h-screen lg:h-full"
  >
    <div
      class="lg:col-start-1 lg:col-span-4 lg:max-h-screen lg:h-full lg:overflow-y-auto relative scroll-smooth no-scrollbar"
    >
      <div
        class="max-lg:pt-8 lg:sticky lg:top-0 lg:pt-8 w-full bg-project-linear lg:h-[40vh] max-lg:mb-14"
      >
        <h1 class="text-name font-PPEditorial">Giulia Faraon</h1>
      </div>
      <div class="w-full flex flex-row mb-8 text-black max-lg:hidden">
        <SimpleChip label="Info" :isActive="!isWorks" @click="toggleWorks(false)"/>
        <SimpleChip label="Works" :isActive="isWorks"   @click="toggleWorks(true)"/>
      </div>
      <Transition name="fade">
        <ProjectDescription :content="project?.data" class="mb-8" v-if="!isWorks"/>
        <div class="w-full" v-else>
          <ProjectCardSimple
            v-for="card in threeProjects"
            :content="card"
            :key="card.id"
            class="w-full"
          />
        </div>
      </Transition>
    
      <div
        class="max-lg:pt-8 lg:sticky lg:bottom-0 lg:pt-8 w-full bg-project-linear-reverse lg:h-[40vh] max-lg:hidden"
      >
      </div>
    </div>
    <div
      class="lg:col-start-5 lg:col-span-8 lg:h-auto py-8 lg:max-h-screen lg:h-full lg:overflow-y-auto scroll-smooth no-scrollbar"
    >
      <SliceZone
        wrapper="main"
        :slices="project?.data.slices ?? []"
        :components="components"
      />
      <div class="py-12 w-full">
        <a
          class="text-[2rem] font-PPEditorial"
          href="mailto:hello@giuliafaraon.com"
          >hello@giuliafaraon.com</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const isWorks = ref(false)

const toggleWorks = ( val: boolean ) => {
  isWorks.value = val
}

const { data: project } = useAsyncData(route.params.uid, () =>
  prismic.client.getByUID("project", route.params.uid)
);

const { data: projects } = useAsyncData("$projects", () =>
  prismic.client.getAllByType("project", {
    orderings: [
      { field: "my.project.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ]
  })
);
const threeProjects = computed(() => {
    if(projects?.value?.length) {
      return projects.value.filter(p=>p.uid !== route.params.uid).slice(0,3)
    } else {
      return []
    }
});
/* const { data: latestprojects } = useAsyncData('$talents', () =>
  prismic.client.getAllByType("talent", {
    orderings: [
      { field: "my.project.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })
) */

/* const settings = useSettings()
 */
useHead({
  title: computed(() => `${project.value?.data.meta_title} | Giulia Faraon`),
  meta: { name: 'description', content: `${project.value?.data.meta_description}` }
});
</script>
<style>
.fade-move, /* apply transition to moving elements */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
  z-index: 10;
}
</style>