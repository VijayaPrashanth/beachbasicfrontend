import axios from "axios";

const tokenKey = "cinephilia";
const userKey = "vijay_user";


export const authHeader=()=> {
    if(localStorage.getItem(tokenKey)) {
        return {
            headers:{
                Authorization: 'Basic '+localStorage.getItem(tokenKey)
            }
        }
    }

    return{
        headers:{}
    }
}

export const login =async(username,password)=>{
    console.log("tokenKey : "+tokenKey);
    console.log(localStorage.getItem(tokenKey));
    // console.log("username : "+username);
    // console.log("password : "+ password);
    const token = encode(username, password);
    const config = {
        headers:{
            Authorization: 'Basic ' + token,
        },
    }
    let response
    try {
        response=await axios.get(`http://localhost:8080/login`, config).catch((err)=>{console.log("print error:");console.log({err}.response)});
    } catch (error) {
        console.log("error:"+error);
    }
    
    console.log("response data : "+{response});

    if(response.data !== null)
    {
        localStorage.setItem(tokenKey,token);
        localStorage.setItem(userKey, username);
    }
    
    return response.data;
}

export const logout = () =>{
    console.log("logout");
    console.log("on logout : "+localStorage.getItem(tokenKey));
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(userKey)
    localStorage.clear();
}

export const isLoggedIn = () =>{
    console.log("isLoggedIn : "+localStorage.getItem(tokenKey));
    return localStorage.getItem(tokenKey) !== null;
}

export const userName = () => {
    return localStorage.getItem(userKey);
};

const encode = (username, password) => {
    return window.btoa(username + ":" + password);
};