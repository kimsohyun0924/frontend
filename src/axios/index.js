import axios from 'axios';
import { admin_path } from './config';

const API = {
  axiosCall(endpoint, payload, method) {
    endpoint = admin_path + endpoint;
    method = method ? method.toLowerCase() : 'get';
    let fn = axios[method];  
    if(!payload) {
      return fn(endpoint);
    } else {
      return fn(endpoint, payload);
    } 
  }
}

export default API;
