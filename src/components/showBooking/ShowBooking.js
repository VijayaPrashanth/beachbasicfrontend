import { Button, Container, Grid, Typography } from "@material-ui/core";
import styles from "./styles/showBookingStyles"
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function ShowBooking() {
    const classes = styles();
    const {movie} = useLocation().state;
    const navigate = useNavigate();
    const goBooking = ()=>{
        navigate("/booking");
    }
    return (
        <>
            <Container data-testid="show_details" style={{ marginTop: "350" }} className={classes.containerDisplay}>
                <div data-testid="show_movie_poster">
                    <img src={movie.image_url} height="250" alt="movie_image" />
                </div>
                <div data-testid="show_movie_name">
                    <Typography data-testid="movie_name">{movie.name}</Typography>
                </div>
                <div data-testid="show_movie_genre">
                    <Typography data-testid="genre">{movie.genre}</Typography>
                </div>
                <div data-testid="show_running_time">
                    <Typography data-testid="running_time">Running time : {movie.running_time_in_mins} mins</Typography>
                </div>
                <div data-testid="show_imdb_rating">
                    <Typography data-testid="rating">IMDB Rating : {movie.rating}</Typography>
                </div>
                
                    <Grid container spacing={2} style={{justifyContent:"center",marginTop:10}}>
                    <Grid item >
                        <Button onClick={goBooking} variant="outlined" style={{ backgroundColor: "teal",color:"whitesmoke" }} data-testid="bookbutton">book</Button>
                    </Grid>
                    <Grid item>
                        <NavLink to="/showsbymovie" state={{ movie_id: movie.id }} style={{ textDecoration: "none" }}>
                            <Button variant="outlined" style={{ backgroundColor: "teal",color:"whitesmoke" }} data-testid="availableshows">view available shows</Button>
                        </NavLink>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}