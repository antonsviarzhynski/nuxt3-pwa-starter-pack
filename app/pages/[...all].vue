<script setup lang="ts">
definePageMeta({
  title: 'Not found',
})
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <NavBackButton />
    </div>
  </main>
</template>
