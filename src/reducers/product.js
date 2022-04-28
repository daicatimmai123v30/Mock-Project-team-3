import {PRODUCTS,CATEGORIES} from '../Enum/Constants'
import {SEARCH_PRODUCTS,SORT_PRODUCTS,FILTER_CATEGORY} from '../actions/types';

const initState={
    filters:{
        search:'',
        selectType:[],
        sort: 'price'
    },
    categories:CATEGORIES,
    productsList:PRODUCTS
}

export default function(state=initState,action) {

    switch(action.type){
        case SEARCH_PRODUCTS:
            return {
                ...state,
                filters:{
                    ...state.filters,
                    search: action.payload
                }
            }
            case SORT_PRODUCTS:
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        sort: action.payload
                    }
                }
            case FILTER_CATEGORY:
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        selectType: action.payload
                    }
                }
        default: return state
    }
}

