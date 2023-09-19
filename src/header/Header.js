import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./styles/headerStyles";
const Header = () =>{

    const classes = styles();
    return(
        <>
        <AppBar className={classes.header}>
            <Toolbar data-testid="name" className={classes.title}>
               <Typography variant="h5" className={classes.titletext}>
                Cinephilia
               </Typography>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default Header;