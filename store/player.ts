import { defineStore } from 'pinia'

export const usePlayer = defineStore('player', () => {
  const { $audio } = useNuxtApp()

  const currentSongs = ref([])
  const currentSong = ref({})
  const currentIndex = ref(0)
  const isActive = ref(false)
  const activeSong = ref({})
  const genreListedId = ref('')

  const isPlaying = ref(false)
  const songTime = ref(0)
  const songDuration = ref(0)
  const songVolume = ref(0.3)

  $audio.src = '/audios/test-auido.mp3'
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

  function togglePlaying() {
    isPlaying.value = !isPlaying.value
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

    togglePlaying,
    seekSong,
    toggleRepeating,
    setSongVolume,
  }
})
