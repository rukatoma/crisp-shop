<script setup>
const props = defineProps({
    text: String
})
</script>

<template>
    <button 
        type="button" 
        class="
            uppercase 
            text-sm 
            font-medium 
            text-devider 
            p-3.5 
            pr-8
            pl-8 
            border-devider 
            border-2
            duration-200
            hover:text-liteblack
            hover:border-gray-400"
    >
        {{ props.text }}
    </button>
</template>

<style scoped>

</style>
