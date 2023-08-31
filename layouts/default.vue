<template>
  <div class="w-[100dvw] h-[100dvh]">
    <Menu />
    <slot />
  </div>
</template>

<script setup>
const route = useRoute();
</script>
<style>
.test {
  color: black;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>