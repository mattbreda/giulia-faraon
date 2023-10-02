<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="w-full lg:grid lg:grid-cols-2 lg:gap-x-6 mb-4 lg:mb-6"
  >
    <nuxt-img format="webp" :src="slice.primary.prima_immagine.url" class="object-cover h-full w-full rounded-lg max-lg:mb-4"/>
    <nuxt-img format="webp" :src="slice.primary.seconda_immagine.url" class="object-cover h-full w-full rounded-lg	"/>
  </section>
</template>
<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.DoubleVerticalImagesSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>
