<script setup lang="ts">
import { appName } from '~/constants/app'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${appName} | ${titleChunk}` : appName
  },
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
