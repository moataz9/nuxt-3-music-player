<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlayer } from '~~/store/player'

const { currentSong } = storeToRefs(usePlayer())
</script>

<template>
  <div class="relative flex min-h-screen">
    <Sidebar />

    <div class="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
      <Searchbar />

      <div
        class="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse"
      >
        <div class="flex-1 h-fit pb-40">
          <slot />
        </div>
        <div class="xl:sticky relative top-0 h-fit">TopPlay</div>
      </div>
    </div>

    <div
      class="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10"
      v-if="currentSong"
    >
      <clientOnly>
        <Music />
      </clientOnly>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
