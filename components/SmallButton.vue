<template>
  <button class="text-paragraph font-TWKLausanneULight py-1.5 px-4 rounded-2xl shadow-menu-buttons" :class=[colorClass]>{{ label }}</button>
</template>
<script setup>

const props = defineProps({
  label: { type: String, default: "" },
  color: { type: String, default: "" },
  path: { type: String, default: ""}
});
const colorClass = computed(() => {
  if (props.color === "red") {
    return "hover:bg-red";
  } else if (props.color === "green") {
    return "hover:bg-green";
  } else if (props.color === "blue") {
    return "hover:bg-blue";
  } else {
    return "hover:bg-green-400";
  }
});
</script>