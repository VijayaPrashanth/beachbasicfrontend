import { Card, CardMedia, Container, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles/homeStyles"
import { NavLink } from "react-router-dom";
import { authHeader } from "../helpers/AuthService";

const Home = () => {

    const classes = styles();
    const [response, setResponse] = useState([]);


    useEffect(() => {
        try {
            axios.get("http://localhost:8080/movies", authHeader()).then((res) => {
                console.log(res.data);
                setResponse(res.data)
            });
        } catch (error) {
            //console.error(error);
        }
    }, [])
    return (
        <>
            <Container data-testid="movieList" style={{ marginTop: "350", backgroundColor: "white" }} className={classes.containerDisplay}>
                <Grid container data-testid="container">
                    {
                        response.map((item, index) => (
                            <Grid item xs={12} md={4} key={index} style={{ padding: 5, borderRadius: 4 }}>
                                <NavLink to="/book" state={{ movie: item }} style={{ textDecoration: "none" }}>
                                    <Card style={{ borderRadius: 3, backgroundColor: "whitesmoke",boxShadow:"5px 5px 15px rgb(5,5,10)" }} key={index}>
                                        <CardMedia>
                                            <div data-testid="movie_poster">
                                                <img src={item.image_url} height="250" alt="movie_image" />
                                            </div>
                                        </CardMedia>
                                    </Card>
                                </NavLink>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    );
}

export default Home;