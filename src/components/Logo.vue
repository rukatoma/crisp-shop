<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  path: String
})
</script>

<template>
  <RouterLink :to="path" class="logo relative cursor-pointer">
    <img src="/logo/logo.part1.svg" alt="" class="absolute bottom-0 left-0" />
    <img src="/logo/logo.part2.svg" alt="" class="absolute top-0 right-0" />
  </RouterLink>
</template>

<style scoped>
.logo {
  width: 92.5px;
  height: 42.5px;
}

.logo img {
  transition: 200ms;
}

.logo:hover img:first-child {
  transform: translate(-2px, 2px);
}

.logo:hover img:last-child {
  transform: translate(2px, -2px);
}
</style>
