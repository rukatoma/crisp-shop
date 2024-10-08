<script setup>
import BlogCard from './BlogCard.vue'
import { posts } from '../js/posts.js';
</script>

<template>
    <article class="bg-gray-50 pl-5 pr-5 pt-14 pb-14 mb-0">
        <h2 class="text-2xl mb-8">Blog</h2>
        <ul class="blog-list grid grid-cols-4 gap-8">
            <li v-for="(el, index) in posts">
                <BlogCard  :data="el" v-show="index < 4"/>
            </li>
        </ul>
    </article>
</template>

<style scoped>

</style>
