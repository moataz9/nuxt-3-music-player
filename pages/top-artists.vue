<script setup lang="ts">
import { chartsWorld } from '~~/types'
const { $APIs } = useNuxtApp()

const { data: topCharts } = useAsyncData(
  'topCharts',
  () => $APIs.shazam.get('/charts/world') as Promise<chartsWorld[]>
)
</script>

<template>
  <div class="flex flex-col">
    <h2 class="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>
    <div class="flex flex-wrap sm:justify-start md:justify-center gap-3">
      <NuxtLink
        v-for="chart in topCharts"
        :key="chart.key"
        class="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
        :to="`/artists/${chart?.artists[0].adamid}`"
      >
        <img alt="song_img" :src="chart?.images?.coverart" class="w-full h-56 rounded-lg" />
        <p class="mt-4 font-semibold text-lg text-white truncate">{{ chart?.subtitle }}</p>
      </NuxtLink>
    </div>
  </div>
</template>
