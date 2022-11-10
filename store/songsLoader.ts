import { chartsWorld } from 'types'
import { defineStore } from 'pinia'

export const useSongsLoader = defineStore('songsLoader', () => {
  const { $APIs } = useNuxtApp()

  const loadErr = ref(false)
  const topCharts = ref<chartsWorld[]>([])

  async function getTopCharts() /* : Promise<chartsWorld[]> */ {
    try {
      const result = (await $APIs.shazam.get('/charts/world')) as chartsWorld[]
      topCharts.value = result
    } catch (err) {
      console.log(err)
      loadErr.value = true
    }
  }

  async function getSongsByGenre(genre: string): Promise<chartsWorld[]> {
    return await $APIs.shazam.get(`/charts/genre-world?genre_code=${genre}`)
  }

  async function getSongsByCountry(countryCode: string): Promise<chartsWorld[]> {
    return await $APIs.shazam.get(`/charts/country?country_code=${countryCode}`)
  }

  async function getSongsBySearch(searchTerm: string): Promise<chartsWorld[]> {
    return await $APIs.shazam.get(`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`)
  }

  async function getArtistDetails(artistId: string) {
    return await $APIs.shazam.get(`/artists/details?artist_id=${artistId}`)
  }

  async function getSongDetails(songid: string): Promise<chartsWorld[]> {
    return await $APIs.shazam.get(`/tracks/details?track_id=${songid}`)
  }

  async function getSongRelated(songid: string): Promise<chartsWorld[]> {
    return await $APIs.shazam.get(`/tracks/related?track_id=${songid}`)
  }

  return {
    getTopCharts,
    topCharts,
    getSongsByGenre,
    getSongsByCountry,
    getSongsBySearch,
    getArtistDetails,
    getSongDetails,
    getSongRelated,
  }
})
