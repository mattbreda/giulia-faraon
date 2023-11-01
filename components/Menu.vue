<template>
  <nav class="fixed bottom-8 lg:right-14 lg:top-14 z-40 flex flex-row max-lg:w-full max-lg:justify-between max-lg:px-9 h-fit">
    <NuxtLink v-for="link in menuVoices" :key="link.labek" :to="link.path" class="h-fit">
      <MenuChip :label="link.label" :color="link.color" :path="link.path"/>
    </NuxtLink>
    <a href="mailto:hello@giuliafaraon.com" class="h-content">
      <MenuChip label="Contatti" color="yellow" />
    </a>
  </nav>
</template>
<script setup>
const menuVoices = computed(() => [
  {
    label: "Home",
    path: "/",
    color: "home"
  },
  {
    label: "About",
    path: "/about",
    color: "blue"
  },
  {
    label: "Works",
    path: "/work",
    color: "green"
  }
]);
</script>
