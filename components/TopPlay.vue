<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePlayer } from '~~/store/player'
import { chartsWorld } from '~~/types'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const { $APIs } = useNuxtApp()
const { data: topCharts } = useAsyncData<chartsWorld[]>('topCharts', () =>
  $APIs.shazam.get('/charts/world')
)

const playerStore = usePlayer()
const { togglePlaying } = playerStore
const { currentSong, isPlaying } = storeToRefs(playerStore)
provide('isPlaying', isPlaying)
</script>

<template>
  <div class="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
    <div class="w-full flex flex-col">
      <div class="flex flex-row justify-between items-center">
        <h2 class="text-white font-bold text-2xl">Top 10 Charts</h2>
        <NuxtLink to="/top-charts">
          <p class="text-gray-300 text-base cursor-pointer">See more</p>
        </NuxtLink>
      </div>

      <div class="mt-4 flex flex-col gap-1 max-h-[50vh] overflow-auto">
        <TopChartCard
          v-for="(song, i) in topCharts?.slice(0, 10)"
          :key="song.key"
          :index="i + 1"
          :song="song"
          :active="song.key === currentSong?.key"
          @togglePlaying="togglePlaying(song, topCharts?.slice(0, 10) as chartsWorld[])"
        />
      </div>
    </div>

    <div class="w-full flex flex-col mt-8">
      <div class="flex flex-row justify-between items-center">
        <h2 class="text-white font-bold text-2xl">Top Artists</h2>
        <NuxtLink to="/top-artists">
          <p class="text-gray-300 text-base cursor-pointer">See more</p>
        </NuxtLink>
      </div>

      <Swiper
        slidesPerView="auto"
        :spaceBetween="15"
        freeMode
        centeredSlides
        centeredSlidesBounds
        :modules="[FreeMode]"
        class="mt-4 w-full"
      >
        <SwiperSlide
          v-for="chart in topCharts?.slice(0, 20)"
          :key="chart.key"
          :style="{ width: '25%', height: 'auto' }"
          class="shadow-lg rounded-full animate-slideright"
        >
          <NuxtLink :to="`/artists/${chart.artists[0].adamid}`">
            <img :src="chart?.images?.background" alt="Name" class="rounded-full w-full object-cover" />
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
