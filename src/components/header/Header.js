import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles/headerStyles";
import { Person2 } from "@mui/icons-material";

const Header = () => {

    const classes = styles();
    return (
        <>
            <AppBar className={classes.header}>
                <Toolbar data-testid="name" className={classes.toolbar}>
                    <Typography variant="h5" className={classes.titletext}>
                        Cinephilia
                    </Typography>
                    <div className={classes.title}>
                        <div data-testid="welcome_text">
                            Welcome User!
                        </div>
                        <div data-testid="user_icon">
                            <Person2 />
                        </div>
                    </div>
                    {/* <div data-testid="welcome_text">
                        Welcome User!
                    </div>
                    <div data-testid="user_icon">
                        <Person2 />
                    </div> */}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;