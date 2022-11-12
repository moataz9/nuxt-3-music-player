<script setup lang="ts">
defineProps(['imgSrc', 'title', 'index', 'active', 'subtitle'])
defineEmits(['togglePlaying'])
</script>

<template>
  <div
    class="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2"
    :class="`${active ? 'bg-[#4c426e]' : 'bg-transparent'}`"
  >
    <h3 class="font-bold text-base text-white mr-3">{{ index }} •</h3>
    <div class="flex-1 flex flex-row justify-between items-center">
      <img class="w-20 h-20 rounded-lg" :src="imgSrc" :alt="title" />
      <div class="flex-1 flex flex-col justify-center mx-3">
        <p class="text-xl font-bold text-white">
          {{ title }}
        </p>
        <p class="text-base text-gray-300 mt-1">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <PlayPause :active="active" @togglePlaying="$emit('togglePlaying')" />
  </div>
</template>
