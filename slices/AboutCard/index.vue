<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
  <!-- <div class="">
      <PrismicRichText :field="props.slice.primary.title" />
      <PrismicRichText :field="props.slice.primary.description" />

   </div> -->
   <H1>test</H1>
    <PrismicRichText :field="slice.primary.title" />
    <PrismicRichText :field="slice.primary.description" />

    Placeholder component for about_card (variation: {{ slice.variation }})
    Slices
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
