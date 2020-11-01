import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles(theme=>({
    root:{
      position:'fixed',
      width:'100%',
      height:'100%',
      backgroundImage:`url("https://miro.medium.com/max/4038/1*uVW5KIjt28G-gEsrjqArRw.jpeg")`,
      backgroundSize:'cover'
     
      
    },
    HomeIcon:{
        fontSize:'50px'
    }
}))
const NotFound=props=>{
    const classes=useStyles();
    return <div className={classes.root}>
        <Link to="/homepage"><HomeIcon className={classes.HomeIcon}/></Link>
    </div>
}
export default NotFound;