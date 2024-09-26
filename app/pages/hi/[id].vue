<script setup lang="ts">
const route = useRoute<'hi-id'>()
const user = useUserStore()
const name = route.params.id

watchEffect(() => {
  user.setNewName(route.params.id as string)
})

definePageMeta({
  layout: 'home',
  title: 'Details',
})
</script>

<template>
  <div>
    <NavBackButton />
    <div i-twemoji:waving-hand inline-block animate-shake-x animate-duration-5000 text-4xl />
    <h3 text-2xl font-500>
      Hi,
    </h3>
    <div text-xl>
      {{ name }}!
    </div>

    <template v-if="user.otherNames.length">
      <div my-4 text-sm>
        <span op-50>Also as known as:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <LocLink :to="`/hi/${otherName}`">
              {{ otherName }}
            </LocLink>
          </li>
        </ul>
      </div>
    </template>

    <Counter />

    <div>
      <LocLink
        class="m-3 text-sm btn"
        to="/"
      >
        {{ $t('common.back') }}
      </LocLink>
    </div>
  </div>
</template>
