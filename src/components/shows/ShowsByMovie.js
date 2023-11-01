import { Grid, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { authHeader } from "../helpers/AuthService";

export default function ShowsByMovie(){
    const location = useLocation();
    const {movie_id} = location.state;
    const[response, setResponse] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8080/shows/${movie_id}`,authHeader()).then((res)=>setResponse(res.data))
    },[])
    return(
        <>
        <Typography style={{marginTop:80}}>
            hello! {movie_id}
        </Typography>

        {
            response.map((item,index)=>(
                <Grid container style={{justifyContent:"center"}} spacing={4} key={item.id}>
                    <Grid item>
                        date : {new Date(item.date).getDate() + "-" + new Date(item.date).getMonth() + "-" + new Date(item.date).getFullYear()}
                    </Grid>
                    <Grid item>
                        slot : {item.slot.startTime}
                    </Grid>
                </Grid>
            ))
        }
        
        </>
    );
}