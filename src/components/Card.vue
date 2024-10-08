<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    type: String,
    index: Number,
    data: {
        catalog: String,
        name: String,
        price: Number,
        salePrice: Number,
        colors: Array,
        imageUrl: String,
        id: Number
    }
})

const isSalePrice = props.data.salePrice !== null;
const salePrice = (isSalePrice ? parseFloat(props.data.salePrice).toFixed(2) + ' EUR' : props.data.salePrice);
const salePercent = '-' + parseFloat(((props.data.price - props.data.salePrice) / props.data.price) * 100).toFixed(0) + '%';
</script>

<template>
    <div  class="card bg-white relative">
        <RouterLink :to="'/dress/id:' + String(props.data.id) + '&color:'" class="router-link">
            <div 
                class="image w-full h-full bg-center bg-no-repeat bg-cover mb-3" 
                :style="'background-image: url(' + props.data.imageUrl +  ')'"
            />
        </RouterLink>
        <span class="text-xs font-semibold uppercase text-devider mb-3">{{ props.data.catalog }}</span>
        <p class="text-lg font-light mb-3">{{ props.data.name }}</p>
        <span :class="isSalePrice ? 'line-through text-gray-300 font-normal' : ''" class="text-2xl font-medium mt-auto">
            {{ parseFloat(props.data.price).toFixed(2) }} EUR
        </span>
        <span v-if="isSalePrice" class="text-red-500 ml-5">
            {{ salePrice }}
        </span>
        <div 
            class="sale absolute top-4 left-0 bg-black text-white text-sm font-service pt-0.5 pb-0.5 pr-2 pl-2" 
            v-if="isSalePrice"
        >
            {{ salePercent }}
        </div>
    </div>
    <ul v-if="props.type !== 'min'" class="ml-3 mt-4 flex gap-5">
        <li v-for="(item, j) in props.data.colors" :key="j">
            <input type="radio" name="radio-color" :id="props.index + '-' + j" class="radio">
            <label :for="props.index + '-' + j" :style="'background-color:' + item" />
        </li>
    </ul>
</template>

<style scoped>
.image {
    height: 450px;
    transition: 200ms;
}

.card:hover .image {
    transform: scale(.97);
    /* box-shadow: 4px 4px 20px rgb(215, 215, 215); */
}

.radio {
    display: none;
}

.radio {
    display: none;
}

.radio + label {
    position: relative;
    display: flex;
    align-items: center;
    width: 17px;
    height: 17px;
    user-select: none;
}

.radio + label::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 27px;
    height: 27px;
    border: 2px solid white;
}

.radio:checked + label {
    color: #000;
}

.radio:checked + label::before {
    border-color: #000;
    background-color: #000;
    background-position: center;
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-color: transparent;
}

.sale {

}
</style>
