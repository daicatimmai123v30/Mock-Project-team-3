import { GET_BRANDS } from "./types";
import brand from '../services/brand.services';

export const getBrands = () => (dispatch) => {
    const response = brand.getAllBrand()
    .then((data) => {
            dispatch({
                type: GET_BRANDS,
                payload: data.data,
            })
            return Promise.resolve();
        },
        (erro) => {
            console.log(erro)
            return Promise.reject();
        }
    )
}

