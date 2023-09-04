<template>
  <div class="w-full flex flex-col shadow-simple rounded-lg p-4 mt-6">
    <prismic-image :field="content.data.external_image" />
    <div class="text-titolo-h2 text-purple font-TWKLausanneULight mb-2 mt-6">{{content.data.type || 'Editorial'}}</div>
    <prismic-rich-text :field="content.data.title" class="richtext text-titolo-h2 font-TWKLausanneLight" />
    <div class="flex flex-col grow justify-between">
      <prismic-rich-text :field="content.data.description" class="text-titolo-h2 font-TWKLausanneULight mb-6" />
      <NuxtLink :to="{name: 'work-uid', params: {uid: content.uid }}" class="text-paragraph font-TWKLausanneLight link-card hover:underline">Approfondisci +</NuxtLink>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: () => {}
  }
});
</script>
