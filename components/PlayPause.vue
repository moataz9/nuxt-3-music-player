<script setup lang="ts">
import { Ref } from 'vue'
defineProps({
  active: {
    type: Boolean,
  },
})
defineEmits(['togglePlaying'])
const isPlaying = inject('isPlaying') as Ref
</script>

<template>
  <Icon
    v-show="active && isPlaying"
    name="fa:pause-circle-o"
    class="text-gray-300"
    size="35"
    @click="$emit('togglePlaying')"
  />
  <Icon
    v-show="!active || !isPlaying"
    name="fa:play-circle-o"
    class="text-gray-300"
    size="35"
    @click="$emit('togglePlaying')"
  />
</template>
