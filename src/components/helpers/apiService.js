/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { authHeader } from "./AuthService";

export default {

    get: async(path)=>{
        return axios.get(`http://localhost:8080/${path}`,authHeader());
    },

    post: async(path,payload)=>{
        return axios.post(`http://localhost:8080/${path}`,payload, authHeader())
    }

};