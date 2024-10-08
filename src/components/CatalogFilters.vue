<script setup>
import { checkboxCategoriesValue, checkboxBrandsValue, checkboxSizeValue, checkboxLengthValue, setFilters, brand, size, length } from '../js/catalog.js';
import SubmitButton from './SubmitButton.vue';

const props = defineProps({
    value: String,
    type: String,
    filters: {
        categories : {
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
    }
})

// const isOpenBrand = false;

// const changeList = (name) => {
//     switch(name) {
//         case 'brand': {
//             if(isOpenBrand === true) 
//             {
//                 isOpenBrand = false;
//             } 
//             else
//             {
//                 isOpenBrand = true;
//             }
//         }
//     }
    
// }
</script>

<template>
    <ul class="catalog-filter-categories flex flex-col gap-5" v-if="props.type === 'min'">
        <span class="capitalize mb-3 text-2xl">{{ props.filters.categories.name }}</span>
        <li v-for="(item, j) in props.filters.categories.items" :key="j">
            <input v-model="checkboxCategoriesValue" type="checkbox" :id="'checkbox-category' + j" name="filter-checkbox" :value="item.name" class=" checkbox cursor-pointer">
            <label :for="'checkbox-category' + j" class="uppercase text-sm cursor-pointer text-liteblack">{{ item.name }}</label>
        </li>
    </ul>
    <ul class="catalog-filter-categories flex flex-col gap-5" v-if="props.type !== 'min'">
        <span class="capitalize mb-3 text-2xl">{{ props.filters.brands.name }}</span>
        <!-- <button @click="changeList('brand')">open</button> -->
        <div class="list flex flex-col gap-5">
            <li v-for="(item, i) in props.filters.brands.items" :key="i">
                <input v-model="brand" type="checkbox" :id="'checkbox-brand' + i" name="filter-checkbox" :value="item.name" class=" checkbox cursor-pointer">
                <label :for="'checkbox-brand' + i" class="uppercase text-sm cursor-pointer text-liteblack">{{ item.name }}</label>
            </li>
        </div>
    </ul>
    <ul class="catalog-filter-categories flex flex-col gap-5" v-if="props.type !== 'min'">
        <span class="capitalize mb-3 text-2xl">{{ props.filters.sizes.name }}</span>
        <div class="size-grid grid grid-cols-5 gap-2 items-center justify-start">
            <li v-for="(item, k) in props.filters.sizes.items" :key="k">
                <input v-model="size" type="checkbox" :id="'checkbox-size' + k" name="filter-checkbox" :value="item.name" class="checkbox checkbox-size cursor-pointer">
                <label :for="'checkbox-size' + k" class="uppercase text-sm cursor-pointer text-liteblack">{{ item.name }}</label>
            </li>
        </div>
    </ul>
    <ul class="catalog-filter-categories flex flex-col gap-5" v-if="props.type !== 'min'">
        <span class="capitalize mb-3 text-2xl">{{ props.filters.length.name }}</span>
        <li v-for="(item, l) in props.filters.length.items" :key="l">
            <input v-model="length" type="checkbox" :id="'checkbox-length' + l" name="filter-checkbox" :value="item.name" class=" checkbox cursor-pointer">
            <label :for="'checkbox-length' + l" class="uppercase text-sm cursor-pointer text-liteblack">{{ item.name }}</label>
        </li>
    </ul>
    <SubmitButton @click="setFilters(brand, size, length)" name="Apply" v-if="props.type !== 'min'" class="text-white" />
    <ul class="catalog-filter-categories flex flex-col gap-5" v-if="props.type !== 'min'">
        <span class="capitalize mb-3 text-2xl">About dresses</span>
        <li>
            <p class="w-64 font-service">Every day we’re gonna be dropping the latest trends to help you nail every Summer sitch. Whether it’s a graduation, your mate's wedding, or just a cute day at the races with the gals, our occasion dresses have got you covered. Not looking for something fancy? No stress. We’ve got day dresses for days (aka bodycon dresses, t-shirt dresses, oversized shirt dresses).</p>
        </li>
    </ul>
</template>

<style scoped>
.checkbox {
    display: none;
}

.checkbox + label {
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    padding-left: 20px;
}

.checkbox + label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border: 1px solid #ccc;
}

.checkbox:checked + label {
    color: #000;
}

.checkbox:checked + label::before {
    border-color: #000;
    background-color: #000;
    background-position: center;
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-image: url('/check-icon.svg');
}

.size-grid {
    grid-template-columns: repeat(5, 46px);
    grid-template-rows: repeat(4, 46px);
}

.checkbox-size + label {
    padding-left: 11px;
    height: 100%;
}

.checkbox-size + label::before {
    width: 100%;
    height: 46px;
}

.checkbox-size:checked + label::before {
    background-color: transparent;
}

.checkbox-size:checked + label::before {
    border-color: #000;
    color: #000;
    background-image: none;
}
</style>
