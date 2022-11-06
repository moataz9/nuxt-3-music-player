import { defineStore } from 'pinia'

export const usePlayer = defineStore('player', {
  state: () => ({
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListedId: '',
  }),

  actions: {
    // setActiveSong(song) {
    //   this.activeSong = song
    //   if (song.data.tracks.hits) {
    //   } else {
    //   }
    // },
  },
})
