import { Button, Container, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import useShows from "./hooks/useShows";
import { ArrowCircleLeftRounded, ArrowCircleRightRounded } from "@mui/icons-material";
import moment from "moment/moment";

const Shows = () => {

    const today = moment().format("YYYY-MM-DD");

    const { previousDay, nextDay, isToday, isNotNext, getDate, shows } = useShows(today);

    const dateArray = []

    for (let i = 0; i < 7; i++) {
        dateArray.push(moment().add(i, "days").format("Do MMM"))
    }
    console.log(dateArray);
    console.log("shows: " + shows);

    const d = [{ date: moment().format("Do MMM"), displayable: true },
    { date: moment().add(1, "days").format("Do MMM"), displayable: false },
    { date: moment().add(2, "days").format("Do MMM"), displayable: false },
    { date: moment().add(3, "days").format("Do MMM"), displayable: false },
    { date: moment().add(4, "days").format("Do MMM"), displayable: false },
    { date: moment().add(5, "days").format("Do MMM"), displayable: false },
    { date: moment().add(6, "days").format("Do MMM"), displayable: false }];

    console.log("date : " + getDate())

    return (
        <>
        
            <Container>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <Typography variant="h4" style={{ color: "teal", marginTop: 85 }}>
                            Shows
                        </Typography>
                    </div>
                    <div>
                        <Button
                            variant="contained" size="small"
                            style={{ backgroundColor: "teal", color: "whitesmoke", marginTop: 85 }}>
                            Schedule Movie
                        </Button>
                    </div>
                </div>
                
                <div style={{ marginTop: 20 }}>

                    {
                        !isToday() &&
                        <Button onClick={previousDay}>
                            <ArrowCircleLeftRounded />
                        </Button>
                    }

                    {
                        d.map((item, index) => (
                            //use to ISOString for date
                            <Button variant={item.date===getDate() ? "contained" : "variant"} style={{ padding: 5, marginRight: 10 }}>{item.date.toLocaleString()}</Button>
                        ))
                    }

                    {
                        !isNotNext() &&
                        <Button onClick={nextDay}>
                            <ArrowCircleRightRounded />
                        </Button>
                    }
                </div> 
                
                <List key="list">
                    {

                        shows.map((show, index) => (

                            <ListItem key={show.id}>
                                <img key="image" src={show.movie.image_url} height="250" alt="movie_image" style={{
                                    width: 65,
                                    height: 105,
                                    margin: 20
                                }} />
                                <ListItemText key="listitem">
                                    <Typography variant="h5" key={show.movie.id}>
                                        {show.movie.name}
                                    </Typography>
                                    <Typography key={show.slot.id}>
                                        {show.slot.startTime}
                                    </Typography>
                                    <Typography key="cost">
                                        cost : {show.cost}
                                    </Typography>
                                    <Typography key="date">
                                        date : {moment(show.date).format("DD-MM-YYYY")}
                                    </Typography>
                                    <Typography key="rating">
                                        {show.movie.imdb_rating}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
            </Container>
        </>
    )
}

export default Shows;