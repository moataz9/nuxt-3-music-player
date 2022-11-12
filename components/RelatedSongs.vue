<script setup lang="ts">
defineProps(['songs', 'artistId','active', 'isPlaying', 'activeSong'])
defineEmits(['togglePlaying'])
</script>

<template>
  <div class="flex flex-col">
    <h1 class="font-bold text-3xl text-white">Related Songs:</h1>

    <div class="mt-6 w-full flex flex-col">
      <SongBar
        v-for="(song, i) in songs"
        :key="`${artistId}-${song.key}-${i}`"
        :song="song"
        :i="i"
        :active="active"
        :artistId="artistId"
        :activeSong="activeSong"
        @togglePlaying="$emit('togglePlaying')"
      />
    </div>
  </div>
</template>
