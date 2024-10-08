<script setup>
const props = defineProps({
    name: String,
})
</script>

<template>
    <button 
        type="button" 
        class="outline-none bg-black w-72 h-11 uppercase text-black"
    >
        {{ props.name }}
    </button>
</template>

<style scoped>

</style>
