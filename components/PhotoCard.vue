<template>
  <div class="photo-card w-full flex flex-col shadow-simple rounded-lg p-4 mt-6">
    <nuxt-img
      src="/images/pic-giulia.webp"
      class="object-cover w-full"
      alt="Foto di Giulia Faraon"
      format="webp"
    />
    <NuxtLink to="/about" class="mt-6"><SmallButton label="About" color="blue"></SmallButton></NuxtLink>
  </div>
</template>
<style>
.photo-card .link-card {
  display: none
}
</style>
