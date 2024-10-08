<script setup>
const props = defineProps({
    title: String,
})
</script>

<template>
    <h2 class="text-5xl mb-8 mt-8">{{ props.title }}</h2>
</template>

<style scoped>

</style>
