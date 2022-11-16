<script setup lang="ts">
import type { SearchResults } from '~~/types'
import { storeToRefs } from 'pinia'
import { usePlayer } from '~~/store/player'

const { $APIs } = useNuxtApp()
const route = useRoute()
const searchTerm = route.params.searchTerm

const { data: searchCharts } = useAsyncData<SearchResults>('searchCharts', () =>
  $APIs.shazam.get(`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`)
)

const results = searchCharts.value?.tracks?.hits.map(song => song.track)

const playerStore = usePlayer()
const { togglePlaying } = playerStore
const { currentSong, isPlaying } = storeToRefs(playerStore)
provide('isPlaying', isPlaying)
refreshNuxtData('searchCharts')
</script>

<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-3xl text-white text-left mt-4 mb-10">
      Showing results for <span class="font-black">{{ searchTerm }}</span>
    </h2>

    <div class="flex flex-wrap sm:justify-start justify-center gap-3">
      <SongCard
        v-for="song in results"
        :key="song.key"
        :song="song"
        :active="song.key === currentSong?.key"
        @togglePlaying="togglePlaying(song, results)"
      />
    </div>
  </div>
</template>
