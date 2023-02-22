import axios from "axios";

const BASE_URL = "";

const createAxios = axios.create({
  baseURL: BASE_URL
});

createAxios.defaults.timeout = 30000;

createAxios.interceptors.request.use(
 config =>{
    //요청을 보내기 전에 수행할 로직
    return config;
   },
   error =>{
    //요청 에러가 발생했을 때 수행할 로직
    return Promise.reject(error);
   }
);

createAxios.interceptors.response.use(
 response => {
    // 응답에 대한 로직 작성
    // const res = response.data;
    return response;
   },
   error =>{
    // 응답 에러가 발생했을 때 수행할 로직 작성
    // console.log(error);
    return Promise.reject(error);
  },
);

export default createAxios;