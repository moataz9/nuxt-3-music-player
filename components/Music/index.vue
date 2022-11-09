<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { CurrentSong } from '~~/types'
import { usePlayer } from '~~/store/player'

const PlayerStore = usePlayer()
const {
  togglePlaying,
  seekSong,
  toggleRepeating,
  setSongVolume,
  goNextSong,
  goPrevSong,
  toggleShuffling,
} = PlayerStore
const { isPlaying, songTime, songDuration, songVolume, isRepeating, isShuffling, currentSong } =
  storeToRefs(PlayerStore)
</script>

<template>
  <div class="relative sm:px-12 px-8 w-full flex items-center justify-between">
    <MusicTrack :isPlaying="isPlaying" :activeSong="(currentSong as CurrentSong)" />
    <div class="flex-1 flex flex-col items-center justify-center">
      <MusicControls
        :isPlaying="isPlaying"
        :isRepeating="isRepeating"
        :isShuffling="isShuffling"
        @goNext="goNextSong"
        @goPrev="goPrevSong"
        @repeat="toggleRepeating"
        @shuffle="toggleShuffling"
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
