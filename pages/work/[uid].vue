<template>
  <div
    class="w-full bg-black text-white flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 px-4 lg:px-8 min-h-screen lg:h-full"
  >
    <div
      class="lg:col-start-1 lg:col-span-2 lg:max-h-screen lg:h-full lg:overflow-y-auto relative scroll-smooth no-scrollbar"
    >
      <div class="max-lg:pt-8 lg:sticky lg:top-0 lg:pt-8 w-full bg-project-linear lg:h-[40vh]">
        <h1 class="text-name font-PPEditorial">Giulia Faraon</h1>
      </div>
      <div class="w-full flex flex-row mb-8 text-black pointer-events-none">
        <SimpleChip label="Info" :isActive="true" />
        <SimpleChip class="ml-4" label="Works" />
      </div>
      <ProjectDescription :content="project?.data" class="mb-8" />
    </div>
    <div
      class="lg:col-start-3 lg:col-span-10 lg:h-auto py-8 lg:max-h-screen lg:h-full lg:overflow-y-auto scroll-smooth no-scrollbar"
    >
      <SliceZone
        wrapper="main"
        :slices="project?.data.slices ?? []"
        :components="components"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Content } from "@prismicio/client";

import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: project } = useAsyncData("work/[uid]", () =>
  prismic.client.getByUID("project", route.params.uid)
);
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
  title: computed(() => `${prismic.asText(project.value?.data.title)} | test}`),
});
</script>