import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles/headerStyles";
import { Logout, Person2 } from "@mui/icons-material";
const Header = ({ onLogout, isAuthenticated }) => {

    const classes = styles();

    const handleAuthenticated = () => {
        if (isAuthenticated) {
            return (
                <>
                    {/* <InputBase type="search" variant="outlined" size="small" style={{ backgroundColor: "white", color: "black" }} /> */}
                    
                    <div data-testid="welcome_text">
                        Welcome User!
                    </div>
                    <div data-testid="user_icon">
                        <Person2 />
                    </div>

                    <div onClick={onLogout}>
                        <Logout />
                        <Typography>Logout</Typography>
                    </div>
                </>
            )
        }
    }
    return (
        <>
            <AppBar className={classes.header}>
                <Toolbar data-testid="name" className={classes.toolbar}>
                    <a href="/" style={{ textDecoration: "none", color: "white" }}>
                        <Typography variant="h5" className={classes.titletext}>
                            Cinephilia
                        </Typography>
                    </a>
                    <div>
                        <a href="/shows" style={{ textDecoration: "none", color: "white" }}>
                            Shows
                        </a>
                    </div>
                    {
                        handleAuthenticated()
                    }

                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;