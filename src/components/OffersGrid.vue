<script setup>
import LinkButton from './LinkButton.vue';

const props = defineProps({
    offers: { 
        title: String,
        desc: String,
        btn: String,
        url: String,
        imageUrl: String, 
        color: String
    }
})
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-7 mb-7">
        <div v-for="(el, index) in props.offers" :class="'offer relative flex items-center o' + index" :style="'background-color:' + el.color">
            <div class="content z-10 mr-5">
                <h2 class="text-5xl font-semibold mb-2 uppercase">{{ el.title }}</h2>
                <p class="text-xl font-service mb-14">{{ el.desc }}</p>
                <LinkButton :text="el.btn" :url="el.url" />
            </div>
            <img :src="el.imageUrl" alt="offer image" class="absolute h-full right-0 object-cover">
        </div>
    </div>
</template>

<style scoped>
.grid {
    grid-template-areas: "first  thrid"
                         "second thrid";
}

.o0 {
    grid-area: first;
}

.o1 {
    grid-area: second;
}

.o2 {
    grid-area: thrid;
}

.offer {
    min-height: 430px;
    padding-left: 94px;
}

.o0 .content {
    margin-left: 35%;
}

.o0 img {
    left: 0;
}

.o1 img, .o2 img {
    right: 0;
}

.o2 .content {
    margin-top: 400px;
}

.o2 h2 {
    max-width: 400px;
    font-size: 96px;
}
</style>
