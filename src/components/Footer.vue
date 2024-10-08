<script setup>
import Logo from './Logo.vue';
import { RouterLink } from 'vue-router';
import SubmitButton from './SubmitButton.vue';
import Input from './Input.vue';
</script>

<template>
    <footer class="footer bg-black p-5 pb-10 pt-16">
        <div class="body">
            <Logo :path="'/'" />
            <ul class="flex flex-col gap-2">
                <span class="text-lg text-white uppercase mb-4">Features</span>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/shop/sex:men">Men</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/shop/sex:women">Women</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/shop/sex:men">Boys</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/shop/sex:men">Girls</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/shop/sex:men">New arrivals</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/shop/sex:men">Shoes</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/shop/sex:men">Clothes</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/shop/sex:men">Accessories</RouterLink></li>
            </ul>
            <ul class="flex flex-col gap-2">
                <span class="text-lg text-white uppercase mb-4">Menu</span>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/about">About us</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/contact">Contact us</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/account">My account</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/account/orders">Orders history</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/account/wishlist">My wish list</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/blog">Blog</RouterLink></li>
                <li class="font-service text-xs footer-gray-text uppercase"><RouterLink to="/login">Login</RouterLink></li>
            </ul>
            <ul class="flex flex-col gap-2">
                <span class="text-lg text-white uppercase mb-4">Contact us</span>
                <li class="flex flex-col">
                    <span class="name font-medium text-xs text-white uppercase">Adress:</span>
                    <a href="" target="_black" class="font-service text-xs footer-gray-text uppercase">123 Street name, City, England</a>
                </li>
                <li class="flex flex-col">
                    <span class="name font-medium text-xs text-white uppercase">Phone:</span>
                    <a href="" target="_black" class="font-service text-xs footer-gray-text uppercase">(123) 456-7890</a>
                </li>
                <li class="flex flex-col">
                    <span class="name font-medium text-xs text-white uppercase">Email:</span>
                    <a href="" target="_black" class="font-service text-xs footer-gray-text uppercase">MAIL@EXAMPLE.COM</a>
                </li>
                <li class="flex flex-col">
                    <span class="name font-medium text-xs text-white uppercase">Working days/hours:</span>
                    <a href="" target="_black" class="font-service text-xs footer-gray-text uppercase">MON - SUN / 9:00AM - 8:00PM</a>
                </li>
            </ul>
            <ul class="flex flex-col gap-6">
                <span class="text-lg text-white uppercase mb-4">Follow us</span>
                <a href="" class="flex items-center gap-3">
                    <img src="/facebook-white-icon.svg" alt="">
                    <span class="footer-gray-text text-xs uppercase">Facebook</span>
                </a>
                <a href="" class="flex items-center gap-3">
                    <img src="/twitter-white-icon.svg" alt="">
                    <span class="footer-gray-text text-xs uppercase">Twitter</span>
                </a>
                <a href="" class="flex items-center gap-3">
                    <img src="/instagram-white-icon.svg" alt="">
                    <span class="footer-gray-text text-xs uppercase">Instagram</span>
                </a>
            </ul>
            <ul class="flex flex-col gap-2">
                <span class="text-lg text-white uppercase mb-4">Join us</span>
                <li class="footer-gray-text font-service text-xs uppercase">Subscribe to our newsletters</li>
                <Input type="email" placeholder="Email Adress" name="footer-email-input" class="bg-transparent border-white text-white h-10" />
                <SubmitButton name="Subscribe!" class="bg-white w-full h-10 text-black" />
            </ul>
        </div>
        <span class="copyright w-full mt-24 pt-3 block text-xs text-white font-service uppercase">© 2019. Crisp theme Developed by Belvg</span>
    </footer>
</template>

<style scoped>
.body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-row-gap: 40px;
    justify-content: start;
}

.footer-gray-text {
    font-family: Roboto;
    color: #828282;
}

.footer-gray-text a {
    font-family: Roboto;
    color: #828282;
}

.copyright {
    border-top: 1px solid #4f4f4f;
}
</style>
