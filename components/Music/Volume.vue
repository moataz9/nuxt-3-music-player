<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="hidden lg:flex flex-1 items-center justify-end">
    <Icon
      name="fa:volume-up"
      v-if="modelValue <= 1 && modelValue > 0.5"
      size="25"
      color="#FFF"
      @click="$emit('update:modelValue', 0)"
    />
    <Icon
      name="fa:volume-down"
      v-if="modelValue <= 0.5 && modelValue > 0"
      size="25"
      color="#FFF"
      @click="$emit('update:modelValue', 0)"
    />
    <Icon
      name="fa:volume-off"
      v-if="modelValue === 0"
      size="25"
      color="#FFF"
      @click="$emit('update:modelValue', 0)"
    />
    <input
      type="range"
      step="any"
      :value="modelValue"
      min="0"
      max="1"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
    />
  </div>
</template>

<style lang="scss" scoped></style>
