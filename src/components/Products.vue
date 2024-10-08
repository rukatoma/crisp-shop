<script setup>
// Imports
import { ref } from 'vue'
import { checkboxCategoriesValue, checkboxBrandsValue, checkboxSizeValue, checkboxLengthValue, selectPopularityValue, selectCountOfViewValue } from '../js/catalog.js';
import Card from './Card.vue';
import Button from './Button.vue';

// Props
const props = defineProps({
    type: String,
    products: {
        catalog: String,
        name: String,
        price: Number,
        salePrice: Number,
        sale: Number,
        colors: Array,
        brand: String,
        size: Array,
        length: String,
        imageUrl: String,
        popularity: Number,
        id: Number
    }
})

// DOM
const grid = ref(null);

// Methods
const showAllProducts = () => {
    grid.value.classList.add('visible');
}

// const oldCategoriesValue = checkboxCategoriesValue;
// const oldBrandsValue = checkboxBrandsValue;
// const oldSizeValue = checkboxSizeValue;
// const oldLengthValue = checkboxLengthValue;
// const oldPopularityValue = selectPopularityValue;
// const oldViewValue = selectCountOfViewValue;

// setInterval(() => {
//     if(oldCategoriesValue !== checkboxCategoriesValue){ 
//         Vue.this.$forceUpdate()
//         oldCategoriesValue = checkboxCategoriesValue; 
//     }
//     if(oldBrandsValue !== checkboxBrandsValue){ 
//         Vue.this.$forceUpdate()
//         oldBrandsValue = checkboxBrandsValue; 
//     }
//     if(oldSizeValue !== checkboxSizeValue){ 
//         Vue.this.$forceUpdate()
//         oldSizeValue = checkboxSizeValue; 
//     }
//     if(oldLengthValue !== checkboxLengthValue){ 
//         Vue.this.$forceUpdate()
//         oldLengthValue = checkboxLengthValue; 
//     }
//     if(oldPopularityValue !== selectPopularityValue){ 
//         Vue.this.$forceUpdate()
//         oldPopularityValue = selectPopularityValue; 
//         refreshProducts(oldPopularityValue, products);
//     }
//     if(oldViewValue !== selectCountOfViewValue){ 
//         Vue.this.$forceUpdate()
//         oldViewValue = selectCountOfViewValue; 
//     }
// }, 100);

</script>

<template>
    <div class="text-center">
        <div ref="grid" class="grid text-left mb-16" :class="props.type === 'min' ? '' : 'grid--full'">
            <div 
                v-for="(el, index) in props.products" 
                :key="index" 
                v-show="checkboxCategoriesValue.length === 0 && checkboxBrandsValue.length === 0 && checkboxSizeValue.length === 0 && checkboxLengthValue.length === 0 || checkboxCategoriesValue.includes(el.catalog) || checkboxBrandsValue.includes(el.brand) || checkboxSizeValue.some(value => el.size.includes(value)) || checkboxLengthValue.includes(el.length)"
            >
                <Card :type="props.type" :data="el" :index="index"/>
            </div>
            <div class="w-full h-full bg-gray-50"></div>
            <div class="w-full h-full bg-gray-50"></div>
            <div class="w-full h-full bg-gray-50"></div>
        </div>
        <Button v-if="props.type === 'min'" class="button" text="Load more" @click="showAllProducts" />
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    justify-content: start;
    grid-gap: 28px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 344px));
    height: 1200px;
    overflow: hidden;
}

.grid--full {
    height: 100%;
}

.grid.visible {
    height: max-content;
}

.grid.visible~.button {
    display: none;
}
</style>
