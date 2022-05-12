import {GET_BRANDS} from '../actions/types';

const initialState = {
    data:[],
    meta:{}
};
export default function (state = initialState, action){
    const {type, payload} = action;
    switch(type) {
        case GET_BRANDS:
            return payload;
        default:
            return state;
    }
}
