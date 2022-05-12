import {combineReducers} from 'redux';
import auth from './auth';
import message from './message';
import cart from './cart';
import brands from './brands';
import products from './products'
export default combineReducers({
    auth,
    message,
    cart,
    brands,
    products,
});