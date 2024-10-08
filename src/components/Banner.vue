<script setup>
import LinkButton from './LinkButton.vue';

const props = defineProps({
    type: String,
    title: String,
    desc: String,
    btn: String,
    url: String,
    imageUrl: String
})
</script>

<template>
    <article v-show="props.type === 'full'" class="banner mb-16 w-full bg-center flex items-center justify-center" :style="'background-image: url(' + props.imageUrl + ')'">
        <div class="content relative">
            <h2 class="text-5xl font-medium uppercase mb-5">{{ props.title }}</h2>
            <p class="font-service text-2xl mb-6">{{ props.desc }}</p>
            <LinkButton :text="props.btn" :url="props.url" />
        </div>
    </article>
    <article v-show="props.type === 'half'" class="banner banner--half mb-16 w-full bg-center flex items-center">
        <div class="half-image" :style="'background-image: url(' + props.imageUrl + ')'"/>
        <div class="content relative">
            <h2 class="text-5xl font-medium uppercase mb-5">{{ props.title }}</h2>
            <p class="font-service text-2xl mb-6">{{ props.desc }}</p>
            <LinkButton :text="props.btn" :url="props.url" />
        </div>
    </article>
</template>

<style scoped>
.banner {
    height: 460px;
}

.banner--half {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    height: 100%;
}

.content {
    max-width: 600px;
    margin: 50px;
}

.content::before {
    content: "";
    position: absolute;
    top: -30px;
    right: -30px;
    width: 100%;
    height: 2px;
    background-color: black;
}

.content::after {
    content: "";
    position: absolute;
    top: -30px;
    right: -30px;
    width: 2px;
    height: 90px;
    background-color: black;
}

.half-image {
    height: 340px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
