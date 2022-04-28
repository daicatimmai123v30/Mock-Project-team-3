import {combineReducers} from 'redux';
import auth from './auth';
import message from './message';
import prdt from './product';

export default combineReducers({
    auth,
    message,
    prdt,
   
});