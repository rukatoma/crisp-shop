<script setup>
// import { computed } from 'vue';
import CatalogFilters from './CatalogFilters.vue';
import Products from './Products.vue';
import { checkboxCategoriesValue, checkboxBrandsValue, checkboxLengthValue, checkboxSizeValue, isFilter, resetFilters, selectCountOfViewValue, selectPopularityValue } from '../js/catalog';
import ContentTitle from './ContentTitle.vue';
import { products } from '../js/products';

const props = defineProps({
    type: String,
    filters: {
        categories: {
            name: String,
            items: Array
        },
        brands: {
            name: String,
            items: Array
        },
        sizes: {
            name: String,
            items: Array
        },
        length: {
            name: String,
            items: Array
        },
    },
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

// const filteredProducts = []

// // const filterProducts = (products, selectPopularityValue) => 
// // {
// //     let max = {};
// //     for(let i = 0; i < products.length - 1; i++)
// //     {
// //         for(let j = i + 1; j < products.length; j++)
// //         {
// //             switch(selectPopularityValue.value)
// //             {
// //                 case 'HtL': 
// //                 {
// //                     if(products[i].price < products[j].price) {
                        
// //                         max = products[j]
// //                         break;
// //                     } 
// //                     else
// //                     {
// //                         max = products[i]
// //                         break;
// //                     }
// //                 }
// //                 case 'LtH': 
// //                 {
// //                     if(products[i].popularity > products[j].popularity) {
                        
// //                         max = products[j]
// //                         break;
// //                     } 
// //                     else
// //                     {
// //                         max = products[i]
// //                         break;
// //                     }
// //                 }
// //                 case 'P': 
// //                 { 
// //                     if(products[i].popularity <= products[j].popularity) {
                        
// //                         max = products[j]
// //                         break;
// //                     } 
// //                     else
// //                     {
// //                         max = products[i]
// //                         break;
// //                     }
// //                 }
// //             }
// //         }
// //         filteredProducts.push(max);
// //         console.log(max.popularity)
// //         max = {};
// //     }
// // }

// filterProducts(products, selectPopularityValue)
</script>

<template>
    <article class="flex">
        <aside class="aside flex flex-col gap-14 border-r-2 border-devider mr-7">
            <div v-if="props.type !== 'min' && isFilter()" class="filter flex flex-col">
                <div class="flex items-end justify-between mb-10">
                    <span class="text-3xl">Filter</span>
                    <button type="button" @click="resetFilters" class="uppercase cursor-pointer text-sm">Reset all</button>
                </div>
                <ContentTitle v-if="checkboxBrandsValue.length !== 0" title="Brand:" class="mb-3"/>
                <div class="flex flex-wrap gap-1">
                    <span v-for="(item, index) in checkboxBrandsValue" class="uppercase text-sm">{{ item }}</span>
                </div>
                <ContentTitle v-if="checkboxSizeValue.length !== 0" title="Size (Inches):" class="mb-3"/>
                <div class="flex flex-wrap gap-1">
                    <span v-for="(item, index) in checkboxSizeValue" class="uppercase text-sm">{{ item }}</span>
                </div>
                <ContentTitle v-if="checkboxLengthValue.length !== 0" title="Length:" class="mb-3"/>
                <div class="flex flex-wrap gap-1">
                    <span v-for="(item, index) in checkboxLengthValue" class="uppercase text-sm">{{ item }}</span>
                </div>
            </div>
            <CatalogFilters :type="props.type" :filters="props.filters"/>
        </aside>
        <div class="w-full">
            <div v-if="props.type !== 'min'" class="selects mb-5 grid gap-5 grid-cols-2">
                <select v-model="selectPopularityValue" class="select text-sm" name="" id="">
                    <option value="HtL">Price(High to low)</option>
                    <option value="LtH">Price(Low to high)</option>
                    <option selected value="P">Popularity</option>
                </select>
                <select v-model="selectCountOfViewValue" class="select text-sm" name="" id="">
                    <option selected value="48">48</option>
                    <option value="32">32</option>
                    <option value="24">24</option>
                    <option value="12">12</option>
                </select>
            </div>
            <Products :type="props.type" :products="products"/>
        </div>
    </article>
</template>

<style scoped>
.selects {
    grid-template-columns: 1fr min-content;
    position: relative;
    right: 0;
    max-width: 344px;
    height: 46px;
}

.select {
    padding: 11px;
    border: 1px solid #cacaca;
    outline: none;
}

.select::before {
    right: 11px;
}

.filter {
    padding: 28px 24px;
    border: 1px solid #000;
}
.aside {
    min-width: max-content;
    width: 350px;
    padding-right: 28px;
}
</style>
