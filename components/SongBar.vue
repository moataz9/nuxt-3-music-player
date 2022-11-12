<script setup lang="ts">
defineProps(['song', 'i', 'active', 'artistId', 'isPlaying', 'activeSong'])
defineEmits(['togglePlaying'])
</script>

<template>
  <div
    class="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2"
    :class="`${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'}`"
  >
    <h3 class="font-bold text-base text-white mr-3">{{ i + 1 }} • </h3>
    <div class="flex-1 flex flex-row justify-between items-center">
      <img
        class="w-20 h-20 rounded-lg"
        :src="
          artistId
            ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')
            : song?.images?.coverart
        "
        :alt="song?.title"
      />
      <div class="flex-1 flex flex-col justify-center mx-3">
        <NuxtLink v-if="!artistId" :to="`/songs/${song.key}`">
          <p class="text-xl font-bold text-white">
            {{ song?.title }}
          </p>
        </NuxtLink>
        <p v-else class="text-xl font-bold text-white">
          {{ song?.attributes?.name }}
        </p>
        <p class="text-base text-gray-300 mt-1">
          {{ artistId ? song?.attributes?.albumName : song?.subtitle }}
        </p>
      </div>
    </div>
    <PlayPause v-if="!artistId" :active="active" @togglePlaying="$emit('togglePlaying')" />
  </div>
</template>
