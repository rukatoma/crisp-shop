<script setup>
import { ref, onMounted } from 'vue';
import { showPopup, hidePopup } from '../js/popupHandler.js';

const searchPopup = ref(null);
</script>

<template>
    <div @click="showPopup(searchPopup)" class="text-sm uppercase font-semibold text-white cursor-pointer flex items-center p-2.5 hover:bg-gray-700">
        <img src="/search-icon.svg" alt="" class="mr-2" />
        <span>Search</span>
    </div>
    <div ref="searchPopup" @click="hidePopup($event, searchPopup)" id="search-popup" class="cursor-pointer">
        <form action="/shop" method="get" class="bg-white flex items-center justify-between">
            <input placeholder="Search" type="text" class="placeholder:text-slate-400 text-2xl font-service outline-none ml-16 pb-5 pl-14 border-b-2 border-slate-400 w-3/4">
            <div class="close" @click="hidePopup($event, searchPopup)" />
        </form>
    </div>
</template>

<style scoped>
#search-popup {
   position: fixed;
   left: 0;
   top: 0;
   z-index: -1000;
   width: 100%;
   height: 100vh;
   transition: z-index ease-out;
}

#search-popup.show {
   z-index: 100;
   background-color: rgba(256, 256, 256, .5);
}

#search-popup form {
   height: 0;
   width: 0;
   margin-top: -100px;
   margin-left: 50%;
   transform: translateX(-50%);
   transition: 200ms;
   cursor: default;
   box-shadow: 0 0 20px rgba(0, 0, 0, .1);
}

#search-popup.show form {
   height: 200px;
   width: 100%;
   padding: 20px;
   margin-top: 0;
   margin-left: 0;
   transform: translateX(0);
   transition: 200ms;
}

#search-popup form input {
   position: relative;
}

#search-popup form input::before {
   content: "";
   position: absolute;
   width: 50px;
   height: 50px;
   background-image: url('/search-popup-icon.svg');
   background-position: center;
   background-size: cover;
}
</style>
