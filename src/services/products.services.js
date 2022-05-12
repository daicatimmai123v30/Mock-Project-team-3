import axios from "axios";
const URL_API = "http://localhost:1337/api/";
const getAllProducts = () =>{
    return axios.get(URL_API+"products")
}

export default {
    getAllProducts
};