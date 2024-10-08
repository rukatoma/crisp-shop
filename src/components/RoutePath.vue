<script setup>
import BackLink from './BackLink.vue';

const props = defineProps({
    page: String
})
</script>

<template>
    <div class="text-sm text-gray-400 font-service capitalize mt-5 mb-5">
        <BackLink text="Back" />
        <span class="font-service"> / {{ props.page }}</span>
    </div>
</template>

<style scoped>

</style>
