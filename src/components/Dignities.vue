<script setup>
import { dignitiesList } from '../js/dignities.js'
</script>

<template>
    <ul class="dignities h-24 flex items-center justify-around p-5">
       <li v-for="(el, index) in dignitiesList" :key="index" class="checkmark relative">{{ el }}</li> 
    </ul>
</template>

<style scoped>
.dignities {
    background-color: #E6F1FA;
}

.checkmark {
    padding-left: 20px;
}

.checkmark::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -8px;
    width: 14px;
    height: 2px;
    transform: translateY(-50%) rotate(-45deg);
    background-color: #000;
}

.checkmark::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -11px;
    width: 6px;
    height: 2px;
    transform: translateY(20%) rotate(45deg);
    background-color: #000;
}
</style>
