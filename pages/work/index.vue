<template>
  <div class="w-full px-8">
    <div v-if="categories.length" class="flex flex-row mt-[20vh]">
      <SimpleChip
        label="All"
        @click="resetCategory"
        :isActive="selectedCategories.length === 0"
      />
      <SimpleChip
        v-for="category in categories"
        :key="category"
        :label="category"
        :isActive="selectedCategories.includes(category)"
        @click="handleCategory(category)"
      />
    </div>

    <TransitionGroup
      name="list"
      tag="div"
      class="grid grid-cols-4 w-full gap-x-6"
    >
      <ProjectCardSimple
        v-for="card in filteredProjects"
        :content="card"
        :key="card.id"
        class="max-w-[25vw] z-20"
      />
    </TransitionGroup>
  </div>
</template>
<script setup>
const prismic = usePrismic();

const { data: projects } = useAsyncData("$projects", () =>
  prismic.client.getAllByType("project")
);

const selectedCategories = ref([]);

const categories = computed(() => {
  if (!projects.value || !projects.value.length) {
    return [];
  } else {
    const catArray = [];
    projects.value.forEach((p) => {
      if (!catArray.includes(p.data.type)) catArray.push(p.data.type);
    });
    return catArray;
  }
});

const filteredProjects = computed(() => {
  if (!selectedCategories.value.length) {
    return projects.value;
  } else {
    return projects.value.filter(p=>selectedCategories.value.includes(p.data.type))
  }
});

const handleCategory = (val) => {
  const indexOfCat = selectedCategories.value.indexOf(val);
  if (indexOfCat > -1) {
    selectedCategories.value.splice(indexOfCat, 1);
  } else {
    selectedCategories.value.push(val);
  }
};
const resetCategory = () => (selectedCategories.value = []);
</script>
<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
  z-index: 10;
}
</style>