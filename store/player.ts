import { defineStore, storeToRefs } from 'pinia'
import { chartsWorld, CurrentSong } from '~~/types'
// import { useSongsLoader } from './songsLoader'

export const usePlayer = defineStore('player', () => {
  const { $audio } = useNuxtApp()

  const currentSongs = ref<chartsWorld[]>([])
  const currentSong = ref<CurrentSong>()
  const currentSongIndex = ref(0)
  const currentSongsRoute = ref('')

  const isPlaying = ref(false)
  const isRepeating = ref(false)
  const isShuffling = ref(false)
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
      if (isShuffling.value) {
        const randomIndex = Math.floor(Math.random() * currentSongs.value.length)
        const randomSong = currentSongs.value[randomIndex]
        togglePlaying(randomSong)
      } else {
        goNextSong()
      }
    }
  })

  function togglePlaying(song?: chartsWorld, songs?: chartsWorld[]) {
    // const currentRoute = useRoute()

    // if (currentSongsRoute.value !== currentRoute.fullPath) {
      // currentSongsRoute.value = currentRoute.fullPath
      if (songs) currentSongs.value = songs
    // }

    isPlaying.value = !isPlaying.value

    if (song) {
      if (song.key !== currentSong.value?.key) {
        currentSong.value = {
          image: song.images.background,
          key: song.key,
          songUri: song.hub.actions[1].uri,
          title: song.title,
          subtitle: song.subtitle,
        }

        isPlaying.value = true
        $audio.src = currentSong.value.songUri as string

        if (isRepeating.value) $audio.loop = true

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
    isRepeating.value = !isRepeating.value
    $audio.loop = !$audio.loop
  }

  function toggleShuffling() {
    isShuffling.value = !isShuffling.value
  }

  function setSongVolume() {
    $audio.volume = songVolume.value
  }

  function goNextSong() {
    const songsCount = currentSongs.value.length
    if (currentSongIndex.value < songsCount - 1) {
      const nextSong = currentSongs.value[currentSongIndex.value + 1]
      togglePlaying(nextSong)
    } else {
      const firstSong = currentSongs.value[0]
      togglePlaying(firstSong)
    }
  }

  function goPrevSong() {
    const songsCount = currentSongs.value.length
    if (currentSongIndex.value > 0) {
      const prevSong = currentSongs.value[currentSongIndex.value - 1]
      togglePlaying(prevSong)
    } else {
      const lastSong = currentSongs.value[songsCount - 1]
      togglePlaying(lastSong)
    }
  }

  return {
    isPlaying,
    isRepeating,
    isShuffling,
    songTime,
    songDuration,
    songVolume,
    currentSong,

    togglePlaying,
    seekSong,
    toggleRepeating,
    setSongVolume,
    goNextSong,
    goPrevSong,
    toggleShuffling,
  }
})
