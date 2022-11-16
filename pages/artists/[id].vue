<script setup lang="ts">
import type { ArtistDetails, artist, song } from '~~/types'
import { storeToRefs } from 'pinia'
import { usePlayer } from '~~/store/player'

const { $APIs } = useNuxtApp()

const route = useRoute()
const artistId = route.params.id as string

const { data: artistData, pending } = useAsyncData(
  'artistsDetails',
  () => $APIs.shazam.get(`/artists/details?artist_id=${artistId}`) as Promise<ArtistDetails>
)

useHead({
  title: 'Artist Page',
})

const player = usePlayer()
const { togglePlaying } = player
const { isPlaying, currentSong } = storeToRefs(player)

provide('isPlaying', isPlaying)
refreshNuxtData('artistsDetails')
</script>

<template>
  <div class="flex flex-col" v-if="artistData">
    <DetailsHeader
      :imgSrc="Object.values(artistData?.artists as artist)[0].attributes.artwork.url.replace('{w}', '500').replace('{h}', '500')"
      :name="Object.values(artistData?.artists as artist)[0].attributes.name"
      :genreName="Object.values(artistData?.artists as artist)[0].attributes.genreNames.join(', ')"
    />

    <div class="flex flex-col">
      <h3 class="font-bold text-3xl text-white">Related Songs:</h3>
      <div class="mt-6 w-full flex flex-col">
        <SongBar
          v-for="(song, i) in Object.values(artistData?.songs as song)"
          :key="`${artistId}-${song.id}-${i}`"
          :index="i + 1"
          :imgSrc="song.attributes.artwork.url"
          :active="currentSong?.key === song.id"
          :title="song.attributes.name"
          :subtitle="song.attributes.albumName"
          @togglePlaying="togglePlaying(song, Object.values(artistData?.songs as song))"
        />
      </div>
    </div>
  </div>
</template>
