<template>
  <p>single talent</p>
  {{route}}
  {{project.data ? project.data : 'Error 404'}}
</template>

<script setup>/* 
import { Content } from '@prismicio/client'

import { components } from '~/slices' */

const prismic = usePrismic()
const route = useRoute()
const { data: project } = useAsyncData('work/[uid]', () =>
  prismic.client.getByUID('project', route.params.uid )
)
/* const { data: latestprojects } = useAsyncData('$talents', () =>
  prismic.client.getAllByType("talent", {
    orderings: [
      { field: "my.project.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })
) */

/* const settings = useSettings()
 */
useHead({
  title: computed(() => `${prismic.asText(project.value?.data.title)} | test}`)
})

</script>