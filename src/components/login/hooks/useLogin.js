/* eslint-disable import/no-anonymous-default-export */
import { Typography } from "@material-ui/core";
import { useState } from "react";

export default(onLogin)=>{

    const[errorResponse, setErrorResponse] = useState(false);

    const handleError=()=>{
        if(errorResponse) {
            <Typography variant="h5" color="red">
                Login failed
            </Typography>
        }
    }

    const handleLogin = async(values)=>{
        const {username, password} = values;
        console.log("username : " + username);
        console.log("password : "+ password)
        try{
            await onLogin(username, password);
            setErrorResponse(false);
        }
        catch (error){
            if(error.response && error.response === 401){
                setErrorResponse(true);
            }
            else{
                throw error;
            }
        }
    }

    
    return{
        handleLogin:handleLogin,
        handleError:handleError,
    };
};