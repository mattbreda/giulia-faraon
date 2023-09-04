<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="bg-blue rounded-lg shadow-simple p-4"
  > 
    <h2 class="text-titolo-h2 text-purple font-TWKLausanneULight lg:pb-2">About</h2>
    <PrismicRichText :field="slice.primary.title" class="text-titolo-h2 font-TWKLausanneLight"/>
    <PrismicRichText :field="slice.primary.description" class="text-titolo-h2 font-TWKLausanneULight lg:mb-6" />
    <NuxtLink to="/about" class="text-paragraph font-TWKLausanneLight  hover:underline">Approfondisci +</NuxtLink>
  </section> 
</template>
<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AboutCardSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
