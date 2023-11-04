<template>
  <div class="w-full px-4 lg:px-8">
    <GiuliaHeader />
    <div v-if="categories.length" class="flex flex-row pt-8 lg:pt-0 max-lg:hidden sticky top-14 z-50">
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
      class="flex flex-col lg:grid lg:grid-cols-4 w-full lg:gap-6 lg:auto-rows-fr"
    >
      <ProjectCardSimple
        v-for="card in sortedProjects"
        :content="card"
        :key="card.id"
        class="w-full lg:max-w-[25vw] z-20"
      />
    </TransitionGroup>
    <Footer />

  </div>
</template>
<script setup>
const prismic = usePrismic();

const { data: projects } = useAsyncData("$projects", () =>
  prismic.client.getAllByType("project")
);

const selectedCategories = ref([]);
const sortedByOrd = (a,b) => {
  const aOrderValue = a.data.order.length? Number(a.data.order[0].text) : projects.value.length
  const bOrderValue = b.data.order.length? Number(b.data.order[0].text) : projects.value.length
  if(aOrderValue>bOrderValue) {
    return 1
  } else if(aOrderValue<bOrderValue) {
    return -1
  }
  return 0
}
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

const sortedProjects = computed(() => {
  return filteredProjects.value.sort((a,b)=>sortedByOrd(a,b))
})

const handleCategory = (val) => {
  const indexOfCat = selectedCategories.value.indexOf(val);
  if (indexOfCat > -1) {
    selectedCategories.value.splice(indexOfCat, 1);
  } else {
    selectedCategories.value.push(val);
  }
};
const resetCategory = () => (selectedCategories.value = []);


useHead({
  title: "Giulia Faraon | Work",
});
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