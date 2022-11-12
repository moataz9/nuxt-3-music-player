<script setup lang="ts">
import { usePlayer } from '~~/store/player'
import { ArtistDetails, artist } from '~~/types'

const { $APIs } = useNuxtApp()

const route = useRoute()
const artistId = route.params.id as string

const { data: artistData, pending } = useAsyncData(
  'artistsDetails',
  () => $APIs.shazam.get(`/artists/details?artist_id=${artistId}`) as Promise<ArtistDetails>
)

if (!pending.value) {
  console.log('pending');
} else {
  console.log('pending false');
}

const { isPlaying, currentSong } = usePlayer()
provide('isPlaying', isPlaying)
refreshNuxtData('artistsDetails')
</script>

<template>
  <div class="flex flex-col">
    <!-- <pre class="text-white">{{ artistData }}</pre> -->
    <DetailsHeader
      :imgSrc="Object.values(artistData?.artists as artist)[0].attributes.artwork.url.replace('{w}', '500').replace('{h}', '500')"
      :name="Object.values(artistData?.artists as artist)[0].attributes.name"
      :genreName="Object.values(artistData?.artists as artist)[0].attributes.genreNames.join(', ')"
    />

    <!-- <RelatedSongs
      :data="Object.values(artistData?.songs as Songs)"
      :artistId="{artistId}"
      :activeSong="currentSong"
    /> -->
  </div>
</template>
