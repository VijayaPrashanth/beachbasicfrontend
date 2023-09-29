import { Button, Card, CardContent, CardMedia, Container, Grid, Link, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles/homeStyles"

const Home = () => {

    const classes = styles();
    const [response, setResponse] = useState([]);


    useEffect(() => {

        async function movieResponse() {
            try {
                await axios.get("http://localhost:8080/movies").then((res) => { setResponse(res.data) });
            } catch (error) {
                console.error(error);
            }
        }
        movieResponse();

    }, [])
    console.log(response);
    return (
        <>
            <Container data-testid="movieList" style={{ marginTop: "350" }} className={classes.containerDisplay}>
                <Grid container xs={14}>
                    {
                        response.map((item, index) => (
                            <Grid item xs={10} md={4} key={index}>
                                <Link href="/book">
                                    <Card key={index}>
                                        <Card>
                                            <CardMedia>
                                                <img src={item.image_url} height="250" alt="movie_image" />
                                            </CardMedia>
                                            <CardContent>
                                                <Typography>{item.name}</Typography>
                                                <Typography>{item.genre}</Typography>
                                                <Typography>Running time : {item.running_time_in_mins} mins</Typography>
                                                <Typography>IMDB Rating : {item.rating}</Typography>
                                                {/* <Button style={{ backgroundColor: "crimson", color: "whitesmoke" }} size="small">Book</Button> */}
                                            </CardContent>
                                        </Card>
                                    </Card>
                                </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    );
}

export default Home;