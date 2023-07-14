<template>
<nuxt-link :to="{name: 'work-uid', params: {uid: content.uid }}">
  <div class="w-full flex flex-col shadow-simple rounded-lg p-4 mt-6">
    <prismic-image :field="content.data.external_image" />
    <div class="text-titolo-h2 text-purple font-TWKLausanneULight lg:mb-2 lg:mt-6">{{content.data.type || 'Editorial'}}</div>
    <prismic-rich-text :field="content.data.title" class="richtext text-titolo-h2 font-TWKLausanneLight" />
    <prismic-rich-text :field="content.data.description" class="text-titolo-h2 font-TWKLausanneULight lg:mb-6" />
    <NuxtLink :to="`work/${content.uid}`" class="text-paragraph font-TWKLausanneLight">Approfondisci +</NuxtLink>
  </div>
  </nuxt-link>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: () => {}
  }
});
</script>
