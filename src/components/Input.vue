<script setup>

const props = defineProps({
    type: String,
    placeholder: String,
    name: String,
    vModel: Object
})
</script>

<template>
    <input 
        :type="props.type" 
        :placeholder="props.placeholder" 
        :id="props.name" 
        class="input font-service w-full h-11 border-gray-400 outline-none"
        v-model="props.vModel"
    >
</template>

<style scoped>
.input {
    border-width: 1px;
    padding: 0 16px;
}
</style>
