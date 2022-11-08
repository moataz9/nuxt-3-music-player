<script setup lang="ts">
import { Ref } from 'vue'
const prop = defineProps({
  active: {
    type: Boolean,
  },
})
defineEmits(['togglePlaying'])
const isPlaying = inject('isPlaying') as Ref
onMounted(() => {
  console.log(isPlaying.value, prop.active)
})
watch(isPlaying, newvalue => {
  console.log(newvalue)
})
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
