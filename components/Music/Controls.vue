<script setup lang="ts">
const repeat = ref(false)
const shuffle = ref(false)

defineProps({
  isPlaying: Boolean
})

const emit = defineEmits(['shuffle', 'repeat', 'goNext', 'goPrev', 'togglePlaying'])

const togglePlaying = () => {
  emit('togglePlaying')
}
const toggleShuffle = () => {
  shuffle.value = !shuffle.value
  emit('shuffle')
}
const toggleRepeat = () => {
  repeat.value = !repeat.value
  emit('repeat')
}
</script>

<template>
  <div class="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <Icon
      name="mdi:repeat"
      size="20"
      :color="repeat ? 'blue' : 'white'"
      @click="toggleRepeat"
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
      @click="togglePlaying"
      class="cursor-pointer"
    />
    <Icon
      v-show="!isPlaying"
      name="mdi:play"
      size="45"
      color="#FFF"
      @click="togglePlaying"
      class="cursor-pointer"
    />
    <Icon name="mdi:skip-next" size="30" color="#FFF" class="cursor-pointer" @click="$emit('goNext')" />
    <Icon
      name="mdi:shuffle-variant"
      size="20"
      :color="shuffle ? 'blue' : 'white'"
      @click="toggleShuffle"
      class="hidden sm:block cursor-pointer"
    />
  </div>
</template>
