<template>
  <nav class="fixed right-14 top-14 z-10 flex flex-row">
    <NuxtLink v-for="link in menuVoices" :key="link.labek" :to="link.path">
      <MenuChip :label="link.label" :color="link.color" :path="link.path"/>
    </NuxtLink>
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
