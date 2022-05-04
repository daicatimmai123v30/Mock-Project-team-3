import {combineReducers} from 'redux';
import auth from './auth';
import message from './message';
<<<<<<< HEAD
import prdt from './product';

export default combineReducers({
    auth,
    message,
    prdt,
   
=======
import cart from './cart'
export default combineReducers({
    auth,
    message,
    cart
>>>>>>> DaiTL
});