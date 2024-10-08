<script setup>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import LinkButton from './LinkButton.vue';
import { RouterLink } from "vue-router";

const modules = [Navigation, Pagination];

const props = defineProps({
  slides: {
    image: String,
    url: String,
  },
});
</script>

<template>
  <article>
    <swiper
      class="swiper-main"
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
    >
      <swiper-slide v-for="el in props.slides">
        <RouterLink :to="el.url">
          <div
            :style="'background-image: url(' + el.image + ')'"
            class="flex items-center justify-center w-full bg-no-repeat bg-cover h-0 duration-200"
            style="padding-top: 42.857%"
          >
            <!-- <div class="flex items-center justify-between ">
                            <div class="title mr-36 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:-top-6 after:-right-10 before:content-[''] before:absolute before:w-0.5 before:h-20 before:bg-black before:-right-10 before:-top-6">
                                <h1 class="font-semibold text-7xl uppercase">Summer sale</h1>
                                <h1 class="font-semibold text-7xl uppercase">Get <b class="text-transparent  stroke-black ">30% off</b></h1>
                                <h1 class="font-semibold text-7xl mb-12">On all dress.</h1>
                                <LinkButton :text="'Shop now'" />
                            </div>
                            <div class="h-3/4">
                                <img src="/swiper/first-slide-img2.jpg" alt="" class="shadow-lg inline-block h-3/4 -mr-11">
                                <img src="/swiper/first-slide-img.jpg" alt="" class="shadow-lg inline-block h-5/6">
                            </div>
                        </div> -->
          </div>
        </RouterLink>
      </swiper-slide>
    </swiper>
  </article>
</template>

<style>
.swiper-main .swiper-slide {
  height: max-content;
}

.swiper-main .swiper-slide:hover div {
    transform: scale(0.95);
}

.swiper-main .swiper-button-next,
.swiper-main .swiper-button-prev {
  top: auto;
  bottom: 0;
  padding: 25px;
  color: #fff;
  background-color: #000;
}

.swiper-main .swiper-button-next {
  right: 0;
}

.swiper-main .swiper-button-prev {
  left: auto;
  right: 54px;
}

.swiper-main .swiper-button-next::after,
.swiper-main .swiper-button-prev::after {
  font-size: 14px;
  font-weight: 700;
}

.swiper-main .swiper-pagination {
  max-width: max-content;
  display: flex;
  align-items: center;
  margin-left: 28px;
  margin-bottom: 22px;
}

.swiper-main .swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  border-radius: 0px;
  background-color: transparent;
  border: 1px solid #000;
}

.swiper-main .swiper-pagination-bullet-active {
  width: 22px;
  height: 22px;
  background-color: #000;
}
</style>
