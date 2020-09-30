import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Fade, Grow, Tooltip, Modal } from "@material-ui/core";
import PropTypes from "prop-types";
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DetailsIcon from '@material-ui/icons/Details';
import Skeleton from '@material-ui/lab/Skeleton';

import { Link } from "react-router-dom";
const useStyles = makeStyles({
    root: {
      maxWidth: 255,
      textAlign:'center',
      margin:'0 auto'
    },
    media: {
      height: 340,
    },
    CardContentArea:{
      height:'411px',
      
    },
    youtube:{
      color:'red',
    },
    mediaskeleton:{
      height:'100%',
      
    },
    cardactionskeleton:{
      height:'50px'
    }
  });

const Movie=props=>{
   
    const classes = useStyles();
    const{item,openModal,showDetails,getMovieyoutube}=props;
    
    const params=id=>{
      return `/details/${id}`
    }
    const[delay,setTime]=React.useState(false);
    const [checked, setChecked] = React.useState(false);
    useEffect(()=>{
      setChecked((prev) => !prev);
      let setTimeske=setTimeout(() => {
        setTime(true);
      }, 2000);
      
      return()=> clearTimeout(setTimeske);
    },[]);
    const handleOpen=(item)=>{
        //dispatch action open modal video
        openModal(item);
        //dispatch action call youtube
        getMovieyoutube(item.id);
    }
    const handleOpenDetails=item=>{
      showDetails(item);
    }
    
    return<>
    <Grow
    in={checked}
    style={{ transformOrigin: '0 0 0' }}
    {...(checked ? { timeout: 1000 } : {})}
  ><Grid item sm={6} md={3} xs={12}>
    <Card className={classes.root}>
      <div >
      <CardActionArea  className={classes.CardContentArea} >
       {delay?<> <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          title="Contemplative Reptile"
        />
        <CardContent >
        <Typography  gutterBottom variant="h6" component="h2">
         {item.title}
        </Typography>
      
      </CardContent></>
        :<Skeleton animation='wave' className={classes.mediaskeleton }/>}
       
      </CardActionArea>
      </div>
      {delay?<>
        <CardActions>
      <Tooltip title="Trailer">
        <Button size="small" color="primary" onClick={()=>handleOpen(item)}>
        <YouTubeIcon className={classes.youtube} /> 
        </Button>
      </Tooltip>
      <Tooltip title="Details">
       <Link to={params(item.id)}>
       <Button size="small" color="primary" onClick={()=>{handleOpenDetails(item)}}>
       <DetailsIcon />
        </Button>
        </Link>
        </Tooltip>
        <Tooltip title="Add to favorites">
        <Button size="small" color="primary">
         <PlaylistAddIcon/>  
        </Button>
        </Tooltip>
      </CardActions>
      </>:<><Skeleton animation='wave'  className={classes.cardactionskeleton}/></>}
    </Card>
        
        </Grid>
        </Grow>

    
</>
        
}
export default Movie;
Movie.propsTypes = {
  item: PropTypes.object,
  openModal:PropTypes.object,
  showDetails:PropTypes.object,
  getMovieyoutube:PropTypes.object,
}