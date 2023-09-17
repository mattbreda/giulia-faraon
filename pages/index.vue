<template>
  <div
    class="w-screen lg:h-screen lg:max-h-screen flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 px-4 lg:px-8"
  >
    <div
      class="lg:col-start-1 lg:col-span-3 lg:h-full lg:overflow-y-auto no-scrollbar lg:scroll-smooth lg:px-[4px] relative"
    >
      <div class="lg:sticky lg:top-0 max-lg:mb-20 lg:left-0 w-full">
        <GiuliaHeader />
      </div>
      <div class="lg:hidden col-start-4 col-span-9 py-8 max-h-screen h-64">
        <div
          class="w-full h-full shadow-simple-inner rounded-lg overflow-hidden"
        >
          <!-- <nuxt-img src="/images/test-progetti.jpg" class="object-cover h-full w-full"/> -->
          <img :src="`/landing-images/${imgCounter}.jpg`"  class="object-cover h-full w-full" />
        </div>
      </div>
      <div class="w-full px-[4px] flex flex-col">
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
        <KumbuchaCard />
        <PhotoCard key="photo-card1" class="photo-card" />
        <div class="py-12">
          <a
            class="text-[2rem] font-PPEditorial"
            href="mailto:hello@giuliafaraon.com"
            >hello@giuliafaraon.com</a
          >
          <div class="font-TWKLausanneULight text-[12px]">© 2023</div>
        </div>
      </div>
    </div>
    <div class="max-lg:hidden col-start-4 col-span-9 h-full py-8 max-h-screen">
      <div
        class="w-full h-full shadow-simple-inner h-full rounded-lg"
      >
        <!-- <nuxt-img
          src="/images/test-progetti.jpg"
          class="object-cover h-full w-full"
        /> -->
        <img :src="`/landing-images/${imgCounter}.jpg`" class="h-full w-full object-cover object-center rounded-lg"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { components } from "~/slices";
import useAssets from '../composables/useAssets'
const prismic = usePrismic();
const assets = useAssets;
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("homepage", "homepage")
);
const { data: projects } = useAsyncData("$projects", () =>
  prismic.client.getAllByType("project")
);

const homepageProjects = computed(() => {
  return projects.value.filter((p) => p.data.is_in_homepage);
});
let imgInterval = null;
const imgCounter = ref(0);
useHead({
  title: prismic.asText(page.value?.data.title),
});
const counterHandler = () => {
  if(imgCounter.value < 3) {
    imgCounter.value = imgCounter.value + 1
  } else {
    imgCounter.value = 0
  }
}
onMounted(() => {
  if (!imgInterval) {
    imgInterval = setInterval(counterHandler, 1000);
  }
});
onUnmounted(() => {
  if (imgInterval) clearInterval(imgInterval);
});

useHead({
  title: computed(() => `Giulia Faraon`),
  meta: { name: 'description', content: `Sito portfolio di Giulia Faraon` }
});
</script>
