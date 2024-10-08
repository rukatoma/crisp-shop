<script setup>
import { creators } from '../js/creators.js';

const props = defineProps({
    index: Number,
    data: {
        id: Number,
        creatorId: Number,
        pubDate: Date,
        type: String,
        title: String,
        desc: String,
    }
})

const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' }
</script>

<template>
    <RouterLink :to="'/blog/id-:key' + data.id">
        <div class="blog-item bg-white p-6 flex flex-col justify-between">
            <div class="content">
                <span class="text-lg mb-5 font-semibold uppercase text-gray-300">{{ data.type }}</span>
                <h3 class="text-2xl capitalize mb-8">{{ data.title }}</h3>
                <p class="blog-desc text-base mb-8">{{ data.desc }}</p>
            </div>
            <span 
                class="text-xs font-light border-t-2 border-black text-gray-400 pt-5"
            >
                {{ data.pubDate.getDate() + ' ' + new Intl.DateTimeFormat("en-US", { month: 'long' }).format(data.pubDate) + ' ' + data.pubDate.getFullYear() + ' by ' + creators.filter(x => x.id === data.creatorId).map(x => x.name ) }}
            </span>
        </div>
    </RouterLink>
</template>

<style scoped>
.blog-item {
    min-height: 420px;
    height: 100%;
}
</style>
