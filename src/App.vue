<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Dignities from "./components/Dignities.vue";
import ButtonUp from "./components/ButtonUp.vue";
</script>

<template>
    <!-- <strong>Current route path:</strong> {{ $route.fullPath }} -->
    <ButtonUp />
    <Header />
    <RouterView />
    <Dignities />
    <Footer />
</template>

<style scoped>

</style>
