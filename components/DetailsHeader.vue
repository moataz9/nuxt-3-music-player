<script setup lang="ts">
defineProps({
  imgSrc: { type: String },
  name: { type: String },
  subName: { type: String },
  to: { type: String },
  genreName: { type: String },
})
</script>

<template>
  <div class="relative w-full flex flex-col">
    <div class="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div class="absolute inset-0 flex items-center">
      <img
        alt="profile"
        :src="imgSrc"
        class="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div class="ml-5">
        <p class="font-bold sm:text-3xl text-xl text-white">
          {{ name }}
        </p>
        <!-- <NuxtLink :to="to"> -->
        <p class="text-base text-gray-400 mt-2">{{ name }}</p>
        <!-- </NuxtLink> -->

        <p class="text-base text-gray-400 mt-2">
          {{ genreName }}
        </p>
      </div>
    </div>

    <div class="w-full sm:h-44 h-24" />
  </div>
</template>
