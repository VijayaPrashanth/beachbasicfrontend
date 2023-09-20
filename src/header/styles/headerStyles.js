import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    header:{
        backgroundColor:"black"
    },
    toolbar:{
        backgroundColor: "teal",
        display:"flex",
        justifyItems:"space-evenly"
    },
    title:{
        display:"flex",
        justifyContent:"space-between"
    },
    exceptTitle:{
        display:"flex",
        justifyContent:"space-between"
    },
    titletext:{
        color:"white"
    }
}));
