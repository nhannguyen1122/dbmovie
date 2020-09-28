import React from "react";
import { Grid, Container, Button, makeStyles } from "@material-ui/core";
import { TopRatedMovie } from "../../styledComponent";
import { Link } from "react-router-dom";

const useStyles=makeStyles({
    button:{
        float: 'right',
        marginRight:'3%',
        color:'white',
    },
})


const ListMovie=props=>{
    const classes= useStyles();
    const{title,setCurrentTopRatePage}=props;
    const handleOpenTopRated=()=>{
        setCurrentTopRatePage(1);
    }
    return <Container> <TopRatedMovie>{title?"Results":"Top Rated Movie"} </TopRatedMovie> <Grid container spacing={3} >
        {props.children}
        </Grid  >
        <br/>
        {title ?"":<Link to='/topratemovie' variant="contained" className={classes.button}  color="secondary"size="small" onClick={handleOpenTopRated} > see more</Link>}
        </Container>
        ;
}
export default ListMovie;