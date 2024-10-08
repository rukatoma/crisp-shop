<script setup>
const props = defineProps({
    title: String,
})
</script>

<template>
    <h3 class="text-2xl capitalize">{{ props.title }}</h3>
</template>

<style scoped>

</style>
