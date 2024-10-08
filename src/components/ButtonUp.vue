<script setup>
import { ref } from 'vue';

const buttonUp = ref(null)

window.addEventListener('scroll',() => {
    if(window.scrollY > 400) {
        if (!Array.from(buttonUp.value.classList).includes('show')) {
            buttonUp.value.classList.add('show')
        }
    } else if(window.scrollY < 400) {
        if (Array.from(buttonUp.value.classList).includes('show')) {
            buttonUp.value.classList.remove('show')
        }
    }
}) 

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
</script>

<template>
    <button ref="buttonUp" id="button-up" class="fixed right-10 bottom-10 uppercase" type="button" @click="scrollUp">Scroll up</button>
</template>

<style scoped>
#button-up.show {
    margin-bottom: 0;
}

#button-up {
    z-index: 99;
    width: 100px;
    height: 100px;
    color: #fff;
    background-color: #000;
    margin-bottom: -200px;
    outline: none;
    box-shadow: 0 4px 16px #757575;
    transition: 200ms ease-in-out;
}

#button-up:hover {
    transform: scale(.9);
}
</style>
