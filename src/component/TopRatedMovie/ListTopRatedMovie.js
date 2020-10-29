import { Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
const useStyles = makeStyles(theme=>({
        h1:{
                float:'left',
                color:'red',
                userSelect:'none'
        }
}))
const ListTopRatedMovie=props=>{
        const classes= useStyles();
        const{getTopRatePage,current}=props;
        useEffect(()=>{
                getTopRatePage(current);
                console.log('current change');
        },[current])
return <><h1 className={classes.h1}>Top Rated Movie</h1>
        <Grid container spacing={1} >
        {props.children}
        </Grid  ></>

}

export default ListTopRatedMovie;