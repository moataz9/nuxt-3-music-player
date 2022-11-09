<script setup lang="ts">
defineProps({
  isPlaying: Boolean,
  isRepeating: Boolean,
  isShuffling: Boolean,
})

const emit = defineEmits(['shuffle', 'repeat', 'goNext', 'goPrev', 'togglePlaying'])
</script>

<template>
  <div class="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <Icon
      name="mdi:repeat"
      size="20"
      :color="isRepeating ? '#030313' : 'white'"
      @click="emit('repeat')"
      class="hidden sm:block cursor-pointer"
    />
    <Icon
      name="mdi:skip-previous"
      size="30"
      color="#FFF"
      @click="$emit('goPrev')"
      class="cursor-pointer"
    />
    <Icon
      v-show="isPlaying"
      name="mdi:pause"
      size="45"
      color="#FFF"
      @click="emit('togglePlaying')"
      class="cursor-pointer"
    />
    <Icon
      v-show="!isPlaying"
      name="mdi:play"
      size="45"
      color="#FFF"
      @click="emit('togglePlaying')"
      class="cursor-pointer"
    />
    <Icon name="mdi:skip-next" size="30" color="#FFF" class="cursor-pointer" @click="$emit('goNext')" />
    <Icon
      name="mdi:shuffle-variant"
      size="20"
      :color="isShuffling ? '#030313' : 'white'"
      @click="emit('shuffle')"
      class="hidden sm:block cursor-pointer"
    />
  </div>
</template>
