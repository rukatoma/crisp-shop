<script setup>
import { ref, onMounted } from 'vue';
import { showPopup, hidePopup } from '../js/popupHandler.js';

const signInPopup = ref(null);
</script>

<template>
    <div 
        @click="showPopup(signInPopup)" 
        class="hover:bg-gray-700 uppercase font-semibold text-white cursor-pointer p-2.5"
    >
        Sign in
    </div>
    <div ref="signInPopup" @click="hidePopup($event, signInPopup)" id="sign-in-popup" class="flex justify-end">
        <div class="body h-full w-96 bg-white">
            <div class="close" @click="hidePopup($event, signInPopup)" />
            <form action="">
                
            </form>
        </div>
    </div>
</template>

<style scoped>
#sign-in-popup {
   position: fixed;
   left: 0;
   top: 0;
   z-index: -1000;
   width: 100%;
   height: 100vh;
   transition: z-index ease-out;
   cursor: pointer;
}

#sign-in-popup.show {
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

#sign-in-popup.show .body {
    margin-right: 0;
}
</style>
