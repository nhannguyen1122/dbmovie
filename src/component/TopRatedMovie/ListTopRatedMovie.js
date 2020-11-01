import { Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
const useStyles = makeStyles(theme=>({
        h1:{
                float:'left',
                color:'red',
                userSelect:'none'
        }
}))
const ListTopRatedMovie=props=>{
        const classes= useStyles();
        const{getTopRatePage,current,getPage}=props;
        useEffect(()=>{
                getTopRatePage(current);
                getPage();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        },[current])
        
return <><h1 className={classes.h1}>Top Rated Movie</h1>
        <Grid container spacing={1} >
        {props.children}
        </Grid  ></>

}

export default ListTopRatedMovie;
ListTopRatedMovie.propTypes = {
        getTopRatePage:PropTypes.func,
        current:PropTypes.number,
        getPage:PropTypes.func,
}