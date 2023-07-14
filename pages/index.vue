<template>
  <div class="w-screen h-screen max-h-screen grid grid-cols-12 gap-6 px-8">
    <div class="col-start-1 col-span-3 h-full overflow-y-auto px-[4px] relative pt-[400px]">
      <GiuliaHeader />
      <SliceZone
        wrapper="main"
        :slices="page?.data.slices ?? []"
        :components="components"
      />
      <ProjectCardSimple
        v-for="card in homepageProjects"
        :content="card"
        :key="card.id"
      />
      <PhotoCard key="photo-card1"/>
    </div>
    <div class="col-start-4 col-span-9 h-full py-8 max-h-screen">
      <div class="w-full h-full shadow-simple-inner h-full rounded-lg overflow-hidden">
        <nuxt-img src="/images/test-progetti.jpg" class="object-cover h-full w-full"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("homepage", "homepage")
);
const { data: projects } = useAsyncData("$projects", () =>
  prismic.client.getAllByType("project")
);

const homepageProjects = computed(() => {
  return projects.value.filter((p) => p.data.is_in_homepage);
});
useHead({
  title: prismic.asText(page.value?.data.title)
});
</script>
