<script setup lang="ts">
const searchTerm = ref('')
const router = useRouter()
const goSearchPage = () => {
  router.push('/search/' + searchTerm.value)
}
</script>

<template>
  <form
    @submit.prevent="goSearchPage"
    autocomplete="off"
    class="p-2 text-gray-400 focus-within:text-gray-700"
  >
    <label for="search-field" class="sr-only"> Search for all Songs </label>
    <div class="flex flex-row justify-start items-center">
      <Icon name="fa:search" aria-hidden="true" class="w-5 h-5 ml-4" />
      <input
        v-model="searchTerm"
        id="search-field"
        type="search"
        autocomplete="off"
        class="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
        placeholder="Search"
      />
    </div>
  </form>
</template>
