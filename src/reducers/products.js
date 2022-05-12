import {GET_PRODUCTS} from '../actions/types';

const initialState = {
    dataProducts:[],
    meta:{}
};
export default function (state = initialState, action){
    const {type, payload} = action;
    switch(type) {
        case GET_PRODUCTS:
            return {
                dataProducts:payload.data,
                meta: payload.data
            };
        default:
            return state;
    }
}
