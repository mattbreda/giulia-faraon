<template>
  <div
    class="lg:ml-4 text-titolo-h3 lg:text-titolo-h2 font-TWKLausanneULight py-1.5 px-4 rounded-2xl shadow-menu-buttons transition-all duration-600"
    :class="[ activeColor ? `background-${color}`:'bg-white', colorClass,]"
  >
    {{ label }} 
  </div>
</template>
<script setup>
const route = useRoute()

const props = defineProps({
  label: { type: String, default: "" },
  color: { type: String, default: "" },
  path: { type: String, default: ""}
});
const colorClass = computed(() => {
  if (props.color === "home") {
    return "hover:bg-home";
  } else if (props.color === "green") {
    return "hover:bg-green";
  } else if (props.color === "blue") {
    return "hover:bg-blue";
  } else if(props.color === "yellor") {
    return "hover:bg-yellow"
  } else {
    return "hover:bg-green-400";
  }
});
const activeColor = computed(() => {
  return route.fullPath === props.path
})
</script>
<style>
.background-home {
  @apply bg-home
}
.background-green {
  @apply bg-green
}
.background-blue {
  @apply bg-blue
}
.background-yellow {
  @apply bg-yellow
}
</style>