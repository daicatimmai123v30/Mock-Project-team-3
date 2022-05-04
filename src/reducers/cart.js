import{
    ADD_CART,
    REMOVE_CART
} from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = [];
export default function (state = initialState, action){
    console.log(user)
    const {type, payload} = action;
    switch (type) {
        case ADD_CART:{
            return 
        }
        case REMOVE_CART:{
            return
        }
        default:
            return state;
    }
}