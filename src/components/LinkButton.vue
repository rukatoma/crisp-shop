<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    text: String,
    url: String
});
</script>

<template>
    <RouterLink :to="props.url" class="p-12 pt-3 pb-3 border-2 border-black uppercase font-medium text-lg inline-block">
        {{ props.text }}
    </RouterLink>
</template>