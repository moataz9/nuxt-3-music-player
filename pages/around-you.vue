<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePlayer } from '~~/store/player';
import { chartsWorld, ipRegistryData } from '~~/types'

const { $APIs } = useNuxtApp()

const { data: countryCharts } = useAsyncData('countryCharts', async () => {
  const currentLocation = (await $APIs.ipregistry.get('')) as ipRegistryData
  const LocationCharts = (await $APIs.shazam.get(
    `/charts/country?country_code=${currentLocation.location.country.code}`
  )) as chartsWorld[]
  return {
    currentLocation,
    LocationCharts,
  }
})

const playerStore = usePlayer()
const { togglePlaying } = playerStore
const { currentSong, isPlaying } = storeToRefs(playerStore)
provide('isPlaying', isPlaying)
</script>

<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-3xl text-white text-left mt-4 mb-10">
      Around you
      <span class="font-black">
        {{ countryCharts?.currentLocation.location.country.name }}
      </span>
    </h2>

    <div class="flex flex-wrap sm:justify-start justify-center gap-8">
      <SongCard
        v-for="song in countryCharts?.LocationCharts"
        :key="song.key"
        :song="song"
        :active="song.key === currentSong?.key"
        @togglePlaying="togglePlaying(song, countryCharts?.LocationCharts)"
      />
    </div>
  </div>
</template>
