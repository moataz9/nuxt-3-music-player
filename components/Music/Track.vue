<script setup lang="ts">
import { PropType } from 'vue';
import { CurrentSong } from '~~/types';

defineProps({
  isPlaying: { type: Boolean, required: true },
  activeSong: { type: Object as PropType<CurrentSong>, required: true },
})
</script>

<template>
  <div class="flex-1 flex items-center justify-start select-none max-w-[50vw]" :title="activeSong.title">
    <div
      :class="{ 'animate-[spin_6s_linear_infinite]': isPlaying }"
      class="hidden sm:block h-16 w-16 mr-4"
    >
      <img :src="activeSong.image" alt="cover art" class="rounded-full" />
    </div>
    <div class="w-[50%]">
      <p class="truncate text-white font-bold text-lg">
        {{ activeSong.title ? activeSong.title : 'No active Song' }}
      </p>
      <p class="truncate text-gray-300">
        {{ activeSong.subtitle ? activeSong.subtitle : 'No active Song' }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
