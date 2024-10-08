<script setup>
import HomeSwiper from "../components/HomeSwiper.vue";
import BrandList from "../components/BrandList.vue";
import OffersGrid from "../components/OffersGrid.vue";
import Catalog from "../components/Catalog.vue";
import Banner from "../components/Banner.vue";
import CardSwiper from "../components/CardSwiper.vue";
import BlogPreview from "../components/BlogPreview.vue";
import { slides } from "../js/slides.js";
import { brands } from "../js/brands.js";
import { offers } from "../js/offers.js";
import { filters } from "../js/filters.js";
import { products } from "../js/products.js";
</script>

<template>
  <main>
    <HomeSwiper :slides="slides" />
    <BrandList :brands="brands"/>
    <OffersGrid :offers="offers" />
    <Catalog type="min" :filters="filters" :products="products"/>
    <Banner 
      type="full" 
      title="Shopping without limits" 
      desc="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!" 
      btn="Shop now" 
      url="/shop"
      imageUrl="/banners/banner-bg-1.jpg"
      class="mt-20 mb-20"
    />
    <CardSwiper type="min" title="Featured items" :products="products"/>
    <CardSwiper type="min" title="Most popular" :products="products" />
    <Banner 
      type="half" 
      title="Explore the best of you." 
      desc="You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco." 
      btn="Shop now" 
      url="/shop"
      imageUrl="/banners/banner-bg-2.jpg"
      class="mt-20 mb-12"
    />
  </main>
  <BlogPreview />
</template>

<style scoped></style>
