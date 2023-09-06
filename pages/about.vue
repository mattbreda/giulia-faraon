<template>
  <div class="w-full px-4 lg:px-8 bg-about-linear min-h-screen relative">
    <GiuliaHeader />
    
    <div
      class="w-full lg:grid lg:grid-cols-4 lg:border-b lg:border-black max-lg:pt-16"
      v-if="about.data"
    >
      <div
        class="w-full lg:px-4 text-titolo-h2 font-TWKLausanneULight lg:border-r max-lg:border-b border-black pb-4 lg:pb-36"
      >
        <h2 class="text-titolo-grande font-TWKLausanneULight mb-8">
          Come posso aiutarti
        </h2>
        <PrismicRichText :field="about.data.testo_come_posso_aiutarti" />
      </div>
      <div
        class="w-full lg:px-4 text-titolo-h2 font-TWKLausanneULight  lg:border-r max-lg:border-b border-black flex flex-col max-lg:pt-8 max-lg:pb-4"
      >
        <h2 class="text-titolo-grande font-TWKLausanneULight mb-8">
          Di cosa mi occupo
        </h2>
        <div class="underline mb-2">Creative Strategy</div>
        <ul class="mb-4">
          <li>Brand Strategy</li>
          <li>Brand Identity</li>
          <li>Concept Ideas</li>
        </ul>
        <div class="underline mb-2">Digital</div>
        <ul class="mb-4">
          <li>User Interface</li>
          <li>User Experience</li>
          <li>Digital Campaign</li>
          <li>Social Media Strategy</li>
          <li>Content production</li>
        </ul>
        <div class="underline mb-2">Editorial</div>
        <ul class="mb-4">
          <li>Book & Magazine</li>
          <li>Catalogue</li>
        </ul>
      </div>
      <div
        class="w-full lg:px-4 text-titolo-h2 font-TWKLausanneULight lg:border-r max-lg:border-b border-black max-lg:pt-8 max-lg:pb-4"
      >
        <h2 class="text-titolo-grande font-TWKLausanneULight mb-8">
          Side project
        </h2>

        <PrismicRichText :field="about.data.testo_side_project" />
        <a href="https://www.instagram.com/funky_fermenteria/" target="_blank" class="pt-4 text-paragraph font-TWKLausanneLight  hover:underline">Approfondisci +</a>

      </div>
      <div class="w-full max-lg:pt-8 lg:px-4 text-titolo-h2 font-TWKLausanneULight">
        <NuxtImg :src="about.data.foto.url" class="mb-4 w-full rounded-lg" />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
const prismic = usePrismic();

const { data: about } = useAsyncData("$about", () =>
  prismic.client.getSingle("about")
);

useHead({
  title: about.value?.data.meta_title || "Giulia Faraon | About",
});
</script>
