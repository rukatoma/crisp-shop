<script setup>
import Banner from '../components/Banner.vue'
import RoutePath from '../components/RoutePath.vue'
import Catalog from '../components/Catalog.vue'
import { filters } from '../js/filters';
import { products } from '../js/products';

const pageName = 'Shop'
</script>

<template>
    <main>
        <Banner
            type="full"
            title="Shoping without limits."
            desc="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
            btn="shop now"
            url="/shop"
            imageUrl="/banners/banner-bg-3.jpg"
         />
        <RoutePath :page="pageName" />
        <Catalog :filters="filters" :products="products" />
    </main>
</template>

<style scoped>
.grid {
    grid-template-columns: max-content 1fr;
}
</style>