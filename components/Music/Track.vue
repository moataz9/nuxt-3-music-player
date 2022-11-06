<script setup lang="ts">
defineProps(['isPlaying', 'activeSong'])
</script>

<template>
  <div class="flex-1 flex items-center justify-start">
    <div
      :class="isPlaying ? 'animate-[spin_6s_linear_infinite]' : ''"
      class="hidden sm:block h-16 w-16 mr-4"
    >
      <img :src="activeSong?.images?.coverart" alt="cover art" class="rounded-full" />
    </div>
    <div class="w-[50%]">
      <p class="truncate text-white font-bold text-lg">
        {{ activeSong?.title ? activeSong?.title : 'No active Song' }}
      </p>
      <p class="truncate text-gray-300">
        {{ activeSong?.subtitle ? activeSong?.subtitle : 'No active Song' }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
