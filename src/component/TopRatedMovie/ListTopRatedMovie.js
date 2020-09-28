import { Container, Grid } from "@material-ui/core";
import React from "react";
const ListTopRatedMovie=props=>{
return <Grid container spacing={1} >
        {props.children}
        </Grid  >

}

export default ListTopRatedMovie;