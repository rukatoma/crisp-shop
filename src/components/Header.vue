<script setup>
import { RouterLink } from "vue-router";
import Logo from "./Logo.vue";
import Navbar from "./Navbar.vue";
import MiniCart from "./miniCart.vue";
import SignIn from "./SignIn.vue";
</script>

<template>
    <header class="grid items-center grid-cols-3 bg-black h-28 p-5">
        <Logo path="/" />
        <Navbar />
        <div class="services">
            <ul class="flex items-center justify-end gap-2">
                <SignIn />
                <RouterLink 
                    :to="'/registration'" 
                    class="hover:bg-gray-700 uppercase font-semibold text-white cursor-pointer p-2.5" 
                    activeClass="active"
                >
                    Create an account
                </RouterLink>
                <RouterLink to="/account/favourite" class="uppercase font-semibold text-white cursor-pointer p-2.5 ml-2">
                    <img src="/fav-icon.svg" alt="">
                </RouterLink>
                <MiniCart />
            </ul>
        </div>
    </header>
</template>

<style scoped>
.active {
    color: #000;
    background-color: #fff;
}
</style>