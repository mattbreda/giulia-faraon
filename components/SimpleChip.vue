<template>
  <div
    class="mr-4 lg:text-titolo-h2 font-TWKLausanneULight py-1.5 px-4 rounded-2xl shadow-menu-buttons transition-all duration-600 hover:bg-blue cursor-pointer"
    :class="[ isActive ? `background-green`:'bg-white']"
  >
    {{ label }} 
  </div>
</template>
<script setup>
const route = useRoute()

const props = defineProps({
  label: { type: String, default: "" },
  isActive: {type: Boolean, default: false},
  path: { type: String, default: ""}
});
const activeColor = computed(() => {
  return route.fullPath === props.path
})
</script>
<style>
.background-green {
  @apply bg-green
}
.background-blue {
  @apply bg-blue
}
</style>