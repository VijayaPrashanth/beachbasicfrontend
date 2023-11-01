/* eslint-disable import/no-anonymous-default-export */
import { Typography } from "@material-ui/core";
import { useState } from "react";

export default(onLogin)=>{

    const[errorResponse, setErrorResponse] = useState(false);

    const handleError=()=>{
        if(errorResponse) {
            console.log("error : login failed");
            <Typography variant="body1" color="error" style={{marginTop:"8px"}}>
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
            console.log("before error : "+errorResponse);
            console.log("error status before error : "+error.response);
            if(error && error.response === 401){
                console.log(errorResponse);
                setErrorResponse(true);
                handleError();
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