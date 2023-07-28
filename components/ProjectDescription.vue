<template>
  <div class="w-full bg-white text-black rounded-lg p-4">
    <PrismicRichText class="font-PPEditorial text-[2rem] leading-8	mb-4" :field="content.title"/>
    <PrismicRichText class="font-TWKLausanneULight text-title-h2 mb-8" :field="content.sub_title"/>
    <PrismicRichText class="font-TWKLausanneULight text-title-h3" :field="content.long_text"/>
  </div>
</template>
<script setup>
const props = defineProps({
  content: Object
})
</script>