<script setup lang="ts">
defineProps(['min', 'max', 'modelValue'])
defineEmits(['update:modelValue'])

const getTime = (time: number) => `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`
</script>

<template>
  <div class="hidden sm:flex flex-row items-center">
    <button
      type="button"
      @click="$emit('update:modelValue', modelValue - 5)"
      class="hidden lg:mr-4 lg:block text-white"
    >
      <Icon name="fa:minus" />
    </button>
    <p class="text-white">{{ modelValue === 0 ? '0:00' : getTime(modelValue) }}</p>
    <input
      type="range"
      step="any"
      :min="min"
      :max="max"
      :value="Number(modelValue)"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg cursor-pointer"
    />
    <p class="text-white">{{ max === 0 ? '0:00' : getTime(max) }}</p>
    <button
      type="button"
      @click="$emit('update:modelValue', modelValue + 5)"
      class="hidden lg:ml-4 lg:block text-white"
    >
      <Icon name="fa:plus" />
    </button>
  </div>
</template>
