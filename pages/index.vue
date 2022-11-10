<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { genres } from '~~/constants'
import { usePlayer } from '~~/store/player'
import { chartsWorld } from '~~/types'

const { $APIs } = useNuxtApp()

const genreListId = ref('POP')
const genreTitle = ref('pop')

const { data: homeCharts } = useAsyncData(
  'homeCharts',
  () => $APIs.shazam.get('/charts/world') as Promise<chartsWorld[]>
)

const playerStore = usePlayer()
const { togglePlaying } = playerStore
const { currentSong, isPlaying } = storeToRefs(playerStore)
provide('isPlaying', isPlaying)
</script>

<template>
  <div class="flex flex-col">
    <div class="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
      <h2 class="font-bold text-3xl text-white text-left">Top Charts</h2>
      <select
        v-model="genreListId"
        class="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
      >
        <option v-for="genre in genres" :key="genre.value" :value="genre.value">
          {{ genre.title }}
        </option>
      </select>
    </div>

    <div class="flex flex-wrap sm:justify-start lg:justify-center gap-3">
      <SongCard
        v-for="song in homeCharts"
        :key="song.key"
        :song="song"
        :active="song.key === currentSong?.key"
        @togglePlaying="togglePlaying(song, homeCharts as chartsWorld[])"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
