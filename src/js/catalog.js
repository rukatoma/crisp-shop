import { ref, computed } from "vue";

export const checkboxCategoriesValue = ref([]);
export const checkboxBrandsValue = ref([]);
export const checkboxSizeValue = ref([]);
export const checkboxLengthValue = ref([]);
export const priceRangeValue = ref([]);
export const selectPopularityValue = ref('P');
export const selectCountOfViewValue = ref(48);
export const brand = ref([]);
export const size = ref([]);
export const length = ref([]);

export const isFilter = () => 
{
    if(checkboxBrandsValue.value.length !== 0 || checkboxCategoriesValue.value.length !== 0 ||checkboxLengthValue.value.length !== 0 ||checkboxSizeValue.value.length !== 0 || priceRangeValue.value.length !== 0) {
        return true;
    } else {
        return false;
    }
}

export const setFilters = () => 
{
    checkboxBrandsValue.value = brand.value;
    checkboxSizeValue.value = size.value;
    checkboxLengthValue.value = length.value;
}

export const resetFilters = () => 
{
    checkboxBrandsValue.value = [];
    checkboxSizeValue.value = [];
    checkboxLengthValue.value = [];
    priceRangeValue.value = [];
    brand.value = [];
    size.value = [];
    length.value = [];
}

