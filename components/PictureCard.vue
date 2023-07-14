<template>

  <div class="w-full flex flex-col shadow-simple rounded-lg p-4 mt-6">
     <nuxt-img src="/images/pic-giulia.jpg" class="object-cover w-full" alt="Foto di Giulia Faraon" />
    <div>Pippo</div>
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
