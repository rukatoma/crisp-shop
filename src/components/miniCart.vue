<script setup>
import { ref, onMounted } from 'vue';
import { showPopup, hidePopup } from '../js/popupHandler.js';

const miniCartPopup = ref(null);
</script>

<template>
    <div @click="showPopup(miniCartPopup)" class="flex text-white cursor-pointer p-2.5">
        <img src="/cart-icon.svg" alt="">
        <div class="flex flex-col ml-3">
            <span class="font-service text-xs font-normal mb-0.5">Shopping cart</span>
            <span class="font-service text-sm uppercase font-bold">0,00 Eur</span>
        </div>
    </div>
    <div ref="miniCartPopup" @click="hidePopup($event, miniCartPopup)" id="mini-cart-popup" class="flex justify-end">
        <div class="body h-full w-96 bg-white">
            <div class="close" @click="hidePopup($event, miniCartPopup)" />
        </div>
    </div>
</template>

<style scoped>
#mini-cart-popup {
   position: fixed;
   left: 0;
   top: 0;
   z-index: -1000;
   width: 100%;
   height: 100vh;
   transition: z-index ease-out;
   cursor: pointer;
}

#mini-cart-popup.show {
   z-index: 100;
   background-color: rgba(256, 256, 256, .5);
}

.body {
    margin-right: -400px;
    padding: 45px 30px;
    transition: 200ms ease-in;
    cursor: default;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
}

#mini-cart-popup.show .body {
    margin-right: 0;
}
</style>
