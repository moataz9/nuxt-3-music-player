<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlayer } from '~~/store/player'
// const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = usePlayer()
const PlayerStore = usePlayer()
const { togglePlaying, seekSong, toggleRepeating, setSongVolume } = PlayerStore
const { isPlaying, songTime, songDuration, songVolume } = storeToRefs(PlayerStore)
// music controls
const handlePrevSong = () => {}
const handleNextSong = () => {}
const setShuffle = () => (shuffle.value = true)

const shuffle = ref(false)
</script>

<template>
  <div class="relative sm:px-12 px-8 w-full flex items-center justify-between">
    <!-- <MusicTrack :isPlaying="isPlaying" :activeSong="activeSong" /> -->
    <div class="flex-1 flex flex-col items-center justify-center">
      <MusicControls
        :isPlaying="isPlaying"
        @goNext="handleNextSong"
        @goPrev="handlePrevSong"
        @repeat="toggleRepeating"
        @shuffle="setShuffle"
        @togglePlaying="togglePlaying"
      />
      <MusicSeekbar
        v-model.number="songTime"
        @update:modelValue="seekSong"
        min="0"
        :max="songDuration"
      />
    </div>
    <MusicVolume v-model.number="songVolume" @update:modelValue="setSongVolume" />
  </div>
</template>
