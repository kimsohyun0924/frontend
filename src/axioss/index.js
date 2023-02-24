import axios from 'axios';

const API = {
  axiosCall(endpoint, header, payload, method) {
    method = method ? method.toLowerCase() : 'get';
    let fn = axios[method];  
    if(!payload) {
      return fn(endpoint, header);
    } else {
      return fn(endpoint, header, payload);
    } 
  }
}

export default API;
