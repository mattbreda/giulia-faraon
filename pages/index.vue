<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('homepage', 'homepage')
)
console.log(page)
useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>


<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
