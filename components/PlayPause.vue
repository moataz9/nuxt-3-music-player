<script setup lang="ts">
defineProps({
  isPlaying: {
    type: Boolean,
  },
  activeSong: {
    type: Object,
  },
  song: {
    type: Object,
  },
  handlePause: {
    type: Function,
  },
  handlePlay: {
    type: Function,
  },
})
</script>

<template>
  <Icon
    v-if="isPlaying && activeSong?.title === song?.title"
    name="fa:pause-circle-o"
    class="text-gray-300"
    size="35"
    @click="handlePause"
  />
  <Icon v-else name="fa:play-circle-o" class="text-gray-300" size="35" @click="handlePlay" />
</template>
