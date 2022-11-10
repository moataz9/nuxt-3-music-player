<script setup lang="ts">
import type { PropType } from 'vue'
import { chartsWorld } from '~~/types'

defineProps({
  song: { type: Object as PropType<chartsWorld> },
  active: { type: Boolean, default: false },
  index: { type: Number }
})
defineEmits(['togglePlaying'])
</script>

<template>
  <div
    class="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2`}"
    :class="`${active ? 'bg-[#4c426e]' : 'bg-transparent'}`"
  >
    <h3 class="font-bold text-base text-white mr-3">{{ index }} • </h3>

    <div class="flex-1 flex flex-row justify-between items-center">
      <img class="w-20 h-20 rounded-lg" :src="song?.images.background" :alt="song?.title" />
      <div class="flex-1 flex flex-col justify-center mx-3">
        <NuxtLink :to="`/songs/${song?.key}`">
          <p class="text-xl font-bold text-white">{{ song?.title }}</p>
        </NuxtLink>
        <NuxtLink :to="`/artists/${song?.artists[0].adamid}`">
          <p class="text-base text-gray-300 mt-1">{{ song?.subtitle }}</p>
        </NuxtLink>
      </div>
    </div>
    <PlayPause :active="active" @togglePlaying="$emit('togglePlaying')" />
  </div>
</template>
