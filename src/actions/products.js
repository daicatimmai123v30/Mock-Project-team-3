import { GET_PRODUCTS } from "./types";
import products from '../services/products.services';

export const getProducts = () => (dispatch) => {
    const response = products.getAllProducts()
    .then((data) => {
            dispatch({
                type: GET_PRODUCTS,
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
