<script setup lang="ts">
defineProps({
  song: { type: Object },
  isPlaying: { type: Boolean },
  activeSong: { type: Object },
  data: { type: Array },
  index: { type: Number },
})

const handlePauseClick = () => {}

const handlePlayClick = () => {}
</script>

<template>
  <div
    class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
    <div class="relative w-full h-56 group">
      <div
        class="absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex"
        :class="activeSong?.title === song?.title ? 'flex bg-black bg-opacity-70' : 'hidden'"
      >
        <PlayPause
          :isPlaying="isPlaying"
          :activeSong="activeSong"
          :song="song"
          :handlePause="handlePauseClick"
          :handlePlay="handlePlayClick"
        />
      </div>
      <img alt="song_img" :src="song?.images?.coverart" class="w-full h-full rounded-lg" />
    </div>

    <div class="mt-4 flex flex-col">
      <p class="font-semibold text-lg text-white truncate">
        <NuxtLink :to="`/songs/${song?.key}`">
          {{ song?.title }}
        </NuxtLink>
      </p>
      <p class="text-sm truncate text-gray-300 mt-1">
        <NuxtLink :to="song?.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'">
          {{ song?.subtitle }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
