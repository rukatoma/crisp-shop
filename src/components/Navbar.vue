<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import MiniSearch from './miniSearch.vue';

const isActive = ref(true)
</script>

<template>
   <nav class="nav flex justify-center">
      <ul class="flex items-center gap-2">
         <RouterLink to="/" class="nav-link text-sm uppercase font-semibold text-white cursor-pointer p-2.5" activeClass="active">Home</RouterLink>
         <RouterLink to="/shop" class="nav-link text-sm uppercase font-semibold text-white cursor-pointer p-2.5" activeClass="active">Shop</RouterLink>
         <RouterLink to="/blog" class="nav-link text-sm uppercase font-semibold text-white cursor-pointer p-2.5" activeClass="active">Blog
         </RouterLink>
         <RouterLink to="/sale" class="nav-link text-sm uppercase font-semibold text-white cursor-pointer p-2.5" activeClass="active">Sale</RouterLink>
         <RouterLink to="/contact" class="nav-link text-sm uppercase font-semibold text-white cursor-pointer p-2.5" activeClass="active">Contact us</RouterLink>
         <MiniSearch />
      </ul>
    </nav>
</template>

<style scoped>
.nav-link {
   position: relative;
}
.nav-link::after {
   content: "";
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);
   height: 2px;
   width: 0;
   background-color: #EB5757;
   transition: 100ms;
}

.nav-link:hover:after {
   width: 100%;
}

.active::after {
   width: 100%;
}
</style>