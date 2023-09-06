<template>
  <div class="w-full bg-white text-black rounded-lg p-4">
    <PrismicRichText class="font-PPEditorial text-[2rem] leading-8	mb-4" v-if="content?.title" :field="content.title"/>
    <PrismicRichText class="font-TWKLausanneULight text-title-h2 mb-8" v-if="content?.sub_title" :field="content.sub_title"/>
    <PrismicRichText class="font-TWKLausanneULight text-title-h3" v-if="content?.long_text" :field="content.long_text"/>
  </div>
</template>
<script setup>
const props = defineProps({
  content: Object
})
</script>