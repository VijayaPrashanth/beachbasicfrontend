import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    header:{
        //display: "flex",
        // justifyContent: "space-between"
    },
    toolbar:{
        backgroundColor: "teal", 
        display:"flex",
        justifyContent:"space-between"
    },
    title:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    },
    titletext:{
        color:"white"
    }
}));
