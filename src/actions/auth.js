import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    SET_MESSAGE
} from './types';
import AuthService from '../services/auth.services';
export const signup = (username, email, password) => (dispatch) =>{
    return AuthService.register(username ,email ,password).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: "",
              });

            return Promise.resolve();
        },
        (error) => {
            const message = "Email or username already exists"
            dispatch({
                type: REGISTER_FAIL,
              });
              dispatch({
                type: SET_MESSAGE,
                payload: message,
              });
              return Promise.reject();
        }
    );
};

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password) .then(
        (data) => {
            const message = ""
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {user: data}
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
              });
            return Promise.resolve();
        },
        (error) => {
            const message = "Wrong information"
            dispatch({
              type: LOGIN_FAIL,
            });
            dispatch({
              type: SET_MESSAGE,
              payload: message,
            });
            return Promise.reject();
        }
    )
}

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};