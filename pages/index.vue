<script setup lang="ts">
// import { storeToRefs } from 'pinia'
import { useSongsLoader } from '~~/store/songsLoader'

const genreListId = ref('pop')
const genreTitle = ref('pop')
const isPlaying = ref(false)
const activeSong = ref()

const songs = useSongsLoader()
const { getTopCharts } = songs
const topCharts = await getTopCharts()



</script>

<template>
  <div class="flex flex-col">
    <div class="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
      <h2 class="font-bold text-3xl text-white text-left">Discover {{ genreTitle }}</h2>
      <!-- @change="(e) => dispatch(selectGenreListId(e.target.value))" -->
      <select
        :value="genreListId"
        class="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
      >
        <!-- <option v-for="genre in genres" :key="genre.value" :value="genre.value">{{ genre.title }}</option> -->
      </select>
    </div>

    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <SongCard
          v-for="(song, i) in topCharts" 
          :key="song.key"
          :song="song"
          :isPlaying="isPlaying"
          :activeSong="activeSong"
          :data="topCharts"
          :index="i"
        />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
