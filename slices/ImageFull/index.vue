<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="w-full"
  >
    <nuxt-img :src="slice.primary.immagine.url" class="object-cover h-full w-full rounded-lg max-lg:mb-4 lg:mb-6"/>
  </section>
</template>
<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ImageFullSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>