<template>
  <div class="w-full px-8 bg-about-linear min-h-screen">
    <div class="w-full grid grid-cols-4 border-b border-black pt-[20vh]" v-if="about.data">
      <div class="w-full px-4 text-titolo-h2 font-TWKLausanneULight lg:border-r lg:border-black">
        <h2 class="text-titolo-grande font-TWKLausanneULight mb-8">Come posso aiutarti</h2>
        <PrismicRichText :field="about.data.testo_come_posso_aiutarti"/>
      </div>
      <div class="w-full px-4 text-titolo-h2 font-TWKLausanneULight lg:border-r lg:border-black">
        <h2 class="text-titolo-grande font-TWKLausanneULight mb-8">Di cosa mi occupo</h2>
        Creative Strategy Brand Strategy Brand Identity Concept Ideas Digital User Interface User Experience Digital Campaign Social Media Strategy Content production Editorial Book & Magazine Catalogue
      </div>
      <div class="w-full px-4 text-titolo-h2 font-TWKLausanneULight lg:border-r lg:border-black">
        <h2 class="text-titolo-grande font-TWKLausanneULight mb-8">Side project</h2>

        <PrismicRichText :field="about.data.testo_side_project"/>
      </div>
      <div class="w-full px-4 text-titolo-h2 font-TWKLausanneULight">
        <NuxtImg :src="about.data.foto.url" class="mb-4 w-full" />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
const prismic = usePrismic()

const { data: about } = useAsyncData('$about', () =>
  prismic.client.getSingle("about")
)


useHead({
  title: about.value?.data.meta_title || 'Giulia Faraon | About'
});
</script>
