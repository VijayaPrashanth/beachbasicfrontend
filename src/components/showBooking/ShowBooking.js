import { Button, Container, Typography } from "@material-ui/core";
import styles from "./styles/showBookingStyles"
import { useLocation, useNavigate } from "react-router-dom";

export default function ShowBooking() {
    const classes = styles();
    //const location = useLocation();
    // const { movie } = location.state ?? {};
    // console.log(location.pathname);
    const {movie} = useLocation().state;
    console.log(movie);
    const navigate = useNavigate();
    const goBooking = ()=>{
        navigate("/booking");
    }
    return (
        <>
            {/* {
                (!(movie === undefined) && !(movie === null)) ? (
                    
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
                        <Button onClick={goBooking} variant="outlined" style={{backgroundColor:"skyblue"}}>book</Button>
                    </Container>

                ) : (
                        <div style={{marginTop:200}}>
                            <Typography data-testid="undefined_show">
                                Select a movie and come here 
                            </Typography>
                        </div>
                )
            } */}
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
                <Button onClick={goBooking} variant="outlined" style={{ backgroundColor: "skyblue" }}>book</Button>
            </Container>
        </>
    );
}