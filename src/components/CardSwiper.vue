<script setup>
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from './Card.vue';

const props = defineProps({
    type: String,
    title: String,
    products: {
        catalog: String,
        name: String,
        price: Number,
        sale: Number,
        colors: Array,
        imageUrl: String,
        id: Number
    }
})

const modules = [Navigation];

</script>

<template>
  <article class="mb-20">
    <h3 class="capitalize text-2xl -mb-8">{{ props.title }}</h3>
    <swiper class="swiper-two" :modules="modules" slides-per-view="auto" :space-between="28" navigation :scrollbar="{ draggable: false }">
        <swiper-slide v-for="(el, index) in props.products">
            <Card :type="props.type" :data="el" :index="index" />
        </swiper-slide>
    </swiper>
  </article>
</template>

<style>

.swiper-two {
    padding-top: 70px;
}

.swiper-two .swiper-slide {
  width: 340px;
}

.swiper-two .swiper-button-next,
.swiper-two .swiper-button-prev {
  top: 0;
  transform: translateY(50%);
  padding: 20px;
  color: gray;
  background-color: #fff;
  border: 2px solid lightgray;
}

.swiper-two .swiper-button-next {
  right: 0;
}

.swiper-two .swiper-button-prev {
  left: auto;
  right: 46px;
}

.swiper-two .swiper-button-next::after,
.swiper-two .swiper-button-prev::after {
  font-size: 12px;
  font-weight: 700;
}
</style>
