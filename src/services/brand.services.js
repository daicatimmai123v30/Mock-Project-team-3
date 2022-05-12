import axios from "axios";
const URL_API = "http://localhost:1337/api/";
const getAllBrand = () =>{
    return axios.get(URL_API+"brands")
}

export default {
    getAllBrand
};