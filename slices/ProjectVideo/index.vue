<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProjectVideoSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="rounded-lg"
  >
  <video class="w-full rounded-lg mb-4 lg:mb-6" controls>
    <source :src="slice.primary.video.url" type="video/mp4"/>
    </video>
  </section>
</template>
