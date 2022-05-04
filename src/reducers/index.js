import {combineReducers} from 'redux';
import auth from './auth';
import message from './message';
<<<<<<< HEAD
import cart from './cart'
export default combineReducers({
    auth,
    message,
    cart
=======
import prdt from './product';

export default combineReducers({
    auth,
    message,
    prdt,
   
>>>>>>> 1860a53adc41dfba4f45b4fab235a13c3e3657e3
});