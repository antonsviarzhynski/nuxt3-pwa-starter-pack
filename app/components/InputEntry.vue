<script setup lang="ts">
const name = ref('')

const localePath = useLocalePath()
const router = useRouter()
function go() {
  if (name.value) {
    router.push(localePath(`/hi/${encodeURIComponent(name.value)}`))
  }
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      :placeholder="$t('messages.whatsYourName')"
      type="text" autocomplete="off"
      p="x-4 y-2" m="t-5" w="250px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ $t('messages.go') }}
      </button>
    </div>
  </div>
</template>
