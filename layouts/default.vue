<template>
  <div class="w-screen h-screen">
    <Menu />
      <slot />
  </div>
</template>

<script setup>
const route = useRoute()
</script>
<style>
.test {
  color: black;
}
</style>