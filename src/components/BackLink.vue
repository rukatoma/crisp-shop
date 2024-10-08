<script setup>
import router from '../router';

const props = defineProps({
    text: String,
})
</script>

<template>
    <a @click="router.go(-1)" class="text-sm font-medium text-gray-400 cursor-pointer uppercase">{{ props.text }}</a>
</template>

<style scoped>

</style>
