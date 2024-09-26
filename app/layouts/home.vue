<script setup lang="ts">
const head = useLocaleHead({
  addDirAttribute: true, // Adds dir
  addSeoAttributes: true, // Adds lang
})
const htmlAttrs = computed(() => head.value.htmlAttrs!)
</script>

<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">
    <Body>
      <main class="px-10 py-20 text-center">
        <slot />
        <Footer />
        <div class="mx-auto mt-5 text-center text-sm opacity-25">
          [Home Layout]
        </div>
      </main>
    </Body>
  </Html>
</template>
