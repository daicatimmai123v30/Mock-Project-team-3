import axios from 'axios';
const API_URL = 'http://localhost:1337/api/auth/local';
const register = (username, email, password) => {
    return axios.post(API_URL + "/register",{
        username,
        email,
        password
    });

};
const login = (username, password) => {
    return axios
      .post(API_URL + "", {
        identifier: username,
        password: password,
      })
      .then((response) => {
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };

const logout = () =>{
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};