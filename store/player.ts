import { defineStore, storeToRefs } from 'pinia'
import { chartsWorld } from '~~/types'
import { useSongsLoader } from './songsLoader'

export const usePlayer = defineStore('player', () => {
  const { $audio } = useNuxtApp()

  const isActive = ref(false)
  const activeSong = ref({})
  const genreListedId = ref('')

  const currentSongs = ref<chartsWorld[]>([])
  const currentSong = ref()
  const currentSongIndex = ref(0)
  const songsLoader = useSongsLoader()
  const { topCharts } = storeToRefs(songsLoader)

  const isPlaying = ref(false)
  const isRepeating = ref(false)
  const songTime = ref(0)
  const songDuration = ref(0)
  const songVolume = ref(0.3)

  onMounted(() => {
    // $audio.src = '/audios/test-auido.mp3'
    $audio.volume = songVolume.value
    $audio.ontimeupdate = () => {
      songTime.value = $audio.currentTime
    }
    $audio.onloadeddata = () => {
      songDuration.value = $audio.duration
    }
    $audio.onended = () => {
      isPlaying.value = false
    }
  })

  function togglePlaying(song?: chartsWorld) {
    isPlaying.value = !isPlaying.value
    if (song) {
      if (song.key !== currentSong.value?.key) {
        currentSong.value = {
          image: song.images.background,
          key: song.key,
          songUri: song.hub.actions[1].uri,
        }

        isPlaying.value = true
        $audio.src = currentSong.value.songUri

        if (isRepeating) $audio.loop = true

        currentSongs.value = topCharts.value

        currentSongIndex.value = currentSongs.value.findIndex(
          item => item.key === currentSong.value?.key
        )
      }
    }

    if (isPlaying.value) {
      $audio.play()
    } else {
      $audio.pause()
    }
  }

  function seekSong() {
    $audio.currentTime = songTime.value
  }

  function toggleRepeating() {
    isRepeating.value = !isRepeating
    $audio.loop = !$audio.loop
  }

  function setSongVolume() {
    $audio.volume = songVolume.value
  }

  return {
    isPlaying,
    songTime,
    songDuration,
    songVolume,
    currentSong,

    togglePlaying,
    seekSong,
    toggleRepeating,
    setSongVolume,
    // setPlayer
  }
})
