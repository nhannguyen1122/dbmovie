import React, { useEffect } from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const useStyles=makeStyles({
    button:{
        float: 'right',
        marginRight:'3%',
        color:'white',
    },
    h1:{
        color:'red',
    userSelect:'none',

    float:'left',
    }
})


const ListMovie=props=>{
    const classes= useStyles();
    const{title,setCurrentTopRatePage,getTopRatedMovie,results}=props;
    useEffect(()=>{
        if(results.length<=0){
        getTopRatedMovie();}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const handleOpenTopRated=()=>{
        setCurrentTopRatePage(1);
    }
    return <Container> <h1 className={classes.h1}>{title?"Results":"Top Rated Movie"} </h1>  
     <Grid container spacing={3} >
        
        {props.children}
        </Grid  >
        <br/>
        {title ?"":<Link to='/topratemovie' variant="contained" className={classes.button}  color="secondary"size="small" onClick={handleOpenTopRated} > see more</Link>}
        </Container>
        ;
}
export default ListMovie;
ListMovie.propTypes = {
    title:PropTypes.bool,
    setCurrentTopRatePage:PropTypes.func,
    getTopRatedMovie:PropTypes.func,
    results:PropTypes.array
}