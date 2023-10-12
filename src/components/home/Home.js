import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles/homeStyles"
import { NavLink } from "react-router-dom";

const Home = () => {

    const classes = styles();
    const [response, setResponse] = useState([]);


    useEffect(() => {
            try {
             axios.get("http://localhost:8080/movies").then((res) => {
                console.log(res.data);
                     setResponse(res.data) 
                    });
            } catch (error) {
                //console.error(error);
            }
    }, [])
    return (
        <>
            <Container data-testid="movieList" style={{ marginTop: "350" }} className={classes.containerDisplay}>
                <Grid container data-testid="container">
                    {
                        response.map((item, index) => (
                            <Grid item xs={10} md={4} key={index}>
                                <NavLink to="/book" state={{ movie: item }} style={{ textDecoration: "none" }}>
                                    <Card key={index}>
                                        <Card>
                                            <CardMedia>
                                                <div data-testid="movie_poster">
                                                    <img src={item.image_url} height="250" alt="movie_image" />
                                                </div>
                                            </CardMedia>
                                            {/* <CardContent>
                                                <Typography data-testid="movie_name">{item.name}</Typography>
                                                <Typography data-testid="genre">{item.genre}</Typography>
                                                <Typography data-testid="running_time">Running time : {item.running_time_in_mins} mins</Typography>
                                                <Typography data-testid="rating">IMDB Rating : {item.rating}</Typography> */}
                                                {/* <Button style={{ backgroundColor: "crimson", color: "whitesmoke" }} size="small">Book</Button> */}
                                            {/* </CardContent> */}
                                        </Card>
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