<script setup lang="ts">
import { links } from '~~/constants'
const showMobileMenu = ref(false)
</script>

<template>
  <div class="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
    <img src="~/assets/logo.svg" alt="logo" class="w-full h-14 object-contain" />
    <NuxtLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      class="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
    >
      <Icon :name="link.icon" class="w-6 h-6 mr-3" />
      <span class="text-xl">{{ link.name }}</span>
    </NuxtLink>
  </div>

  <!-- Mobile sidebar -->
  <div class="absolute md:hidden block top-6 right-3">
    <Icon
      :name="showMobileMenu ? 'fa:close' : 'fa:bars'"
      class="w-6 h-6 mr-2 text-white"
      @click="showMobileMenu = !showMobileMenu"
    />
  </div>

  <div
    class="absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition"
    :class="`${showMobileMenu ? 'left-0' : '-left-full'}`"
  >
    <img src="~/assets/logo.svg" alt="logo" class="w-full h-14 object-contain" />
    <NuxtLink
      v-for="(link, index) in links"
      :key="index"
      :to="link.to"
      @click="showMobileMenu = false"
      class="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
    >
      <Icon :name="link.icon" class="w-6 h-6 mr-3" />
      <span class="text-xl">{{ link.name }}</span>
    </NuxtLink>
  </div>
</template>
