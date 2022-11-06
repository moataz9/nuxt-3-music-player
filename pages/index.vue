<script setup lang="ts">
// import { storeToRefs } from 'pinia'
import { useSongsLoader } from '~~/store/songsLoader'

const genreListId = ref('pop')
const genreTitle = ref('pop')
const songs = useSongsLoader()
const { getTopCharts } = songs
const data = await getTopCharts()
console.log(data);
</script>

<template>
  <div class="flex flex-col">
    <div class="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
      <h2 class="font-bold text-3xl text-white text-left">Discover {{ genreTitle }}</h2>

      <pre class="text-red-600">
        {{ data }}
      </pre>

      <!-- @change="(e) => dispatch(selectGenreListId(e.target.value))" -->
      <select
        :value="genreListId"
        class="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
      >
        <!-- <option v-for="genre in genres" :key="genre.value" :value="genre.value">{{ genre.title }}</option> -->
      </select>
    </div>

    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <!-- <SongCard
          v-for="(song, i) in data" :key="i"
          key={song.key}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
          i={i}
        /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
