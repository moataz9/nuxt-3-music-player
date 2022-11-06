<script setup lang="ts"></script>

<template>
  <div class="relative flex">
    <Sidebar />

    <div class="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
      <Searchbar />

      <div class="px-6 h-[clac(100vh-72px)] overflow-y-scroll overflow-hidden flex xl:flex-row flex-col-reverse" >
        <div class="flex-1 h-fit pb-40">
          <slot />
        </div>
        <div class="xl:sticky relative top-0 h-fit"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
