import React from "react";
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
     
    },
    
   
  }));
const Authenticationn=props=>{
   
    const classes=useStyles();
    return <div className={classes.root}>
        {props.children}
    </div>
}
export default Authenticationn;