import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLanguage = defineStore('language', () => {
  const storage = useLocalStorage()
  const language = ref(storage('nuxt-i18n-language') ?? 'en')

  function setLanguage(newLang: string) {
    language.value = newLang
    localStorage.setItem('nuxt-i18n-language', newLang)
  }

  return {
    language,
    setLanguage,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLanguage, import.meta.hot))
