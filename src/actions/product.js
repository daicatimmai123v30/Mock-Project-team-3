import {SORT_PRODUCTS,FILTER_CATEGORY,SEARCH_PRODUCTS} from './types'

export const searchProducts =(text)=> {
    return {
        type: SEARCH_PRODUCTS,
        payload:text
}
    
}

export const filterCategories =(selects)=> {
    return {
        type: FILTER_CATEGORY,
        payload:selects
}
    
}

export const sortProducts =(selects)=> {
    return {
        type: SORT_PRODUCTS,
        payload:selects
}
    
}