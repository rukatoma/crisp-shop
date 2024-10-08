<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    brands: Array
})
</script>

<template>
    <article>
        <div class="relative w-full p-3 pt-6 pb-6 flex items-center justify-center flex-wrap text-lg border-devider border-2 mt-10">
            <span class="absolute left-1/2 -top-3 uppercase -translate-x-2/4 pl-16 pr-16 bg-white">Choose your brand</span>
            <RouterLink :to="'/shop/filter:brand-'+ el.name" v-for="(el, index) in props.brands" class="item flex items-center justify-center h-36 pl-8 pr-8 w-max relative">
                <img :src="el.logoUrl" alt="" class=""/>
            </RouterLink>
        </div>
    </article>
</template>

<style scoped>
.item::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    width: 70%;
    height: 70%;
    background-color: transparent;
    transform: translate(-50%,-50%);
    transition: 200ms;
}

.item:hover:before {
    width: 100%;
    height: 100%;
    background-color: #F0F2F2;
}
</style>
