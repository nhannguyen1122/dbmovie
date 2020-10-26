import React, { useState, useEffect } from "react";
import { Grid, makeStyles,   IconButton, Grow, Tooltip  } from "@material-ui/core";
import PropTypes from "prop-types";

import DetailsIcon from "@material-ui/icons/Details";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Skeleton from '@material-ui/lab/Skeleton';

import { Link } from "react-router-dom";
import ToastConfig from "../../Api/toast";
let Toast=new ToastConfig();
const useStyles = makeStyles({
  root: {
    margin:'0 auto',
    width: "250px",
    boxShadow: `5px 5px 115px -14px black`,
    borderRadius: "0.9rem",
    background: `linear-gradient(
      rgba(30,27,38, 0.95), 
      rgba(30,27,38, 0.95))`,
    color: "white",
    height: "480px",
    maxHeight: "480px",

    "&:hover": {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    }
  },
  imageSection: {
    position: "relative",
    borderRadius: "0.9rem 0.9rem 0 0",
    width: "250px",
    maxWith:'250px',
    overflow: "hidden",
    maxHeight: "340px",
    height: "340px",
    userSelect: "none",

    transition: "all ease 1s",
    "&:hover>div": {
      transform: "translateY(0)",
      opacity: 1
    },
    "&:hover>span": {
      backgroundColor: "rgba(0,0,0,.5)",
      opacity: 1
    },
    "&:hover>img": {
      transform: `scale(1.1, 1.1)`
    }
  },
  imgContent: {
   
    position: "absolute",
    transition: "all ease 1s",
    height: "100%",
    width: "100%",
  },
  panel: {
    position: "absolute",
    width: "100%",
    height: "110%"
  },

  contentSection1: {
    position: "absolute",
    top: 0,
    transform: "translateY(100px)",
    opacity: 0,
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: "all ease 0.5s"
  },
  contentSection2: {
    position: "absolute",

    top: "30%",
    transform: "translateY(100px)",
    opacity: 0,
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: "all ease 1s"
  },
  contentSection3: {
    position: "absolute",
    transform: "translateY(40px)",
    opacity: 0,
    top: "60%",
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: "all ease 1.5s"
  },
  TitleContent: {
    padding: "0px 10px 10px 20px"
  },
  h2: {
    fontFamily: `"Montserrat",sans-serif`,
    fontWeight: 10,
    color: "#fe4141"
  },
  IconButton: {
    color: "#e7e7e7",
    transition: "all ease 0.4s",
    "&:hover": {
      color: "red",
      backgroundColor: "white"
    }
  },
  mvDes: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 13,
    color: "#bdb6a4"
  }
    
  });

const Movie=props=>{

    const classes = useStyles();
    const{item,openModal,showDetails,getMovieyoutube,openFlist}=props;
    
    const params=id=>{
      return `/details/${id}`
    }
    const[delay,setTime]=useState(false);
    const [checked, setChecked] = useState(false);
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
    const renderVoteRate=item=>{
      
      if(parseFloat(item)>=8.0){
        return <span style={{color:'green'}}>{item}</span>
      }
      else if(parseFloat(item)<8.0&&parseFloat(item)>6.0){
        return <span style={{color:'orange'}}>{item}</span>
      }
      else{
        return <span style={{color:'red'}}>{item}</span>
      }
    }
    const srcImg=(item)=>{
      let result="";
      if(item.poster_path){
        result=`https://image.tmdb.org/t/p/w500/${item.poster_path}`
      }
      else{
        result=`https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg`
      }
      return result;
    }
    const handleAddToFlist=(item)=>{
      let token=localStorage.getItem('user');
      let username=localStorage.getItem('username');
      if(token&&username){
        openFlist(0);
       
        showDetails(item);
        
      }
      else{
        Toast.error('Login Required')
      }
    }
    const renderMovie=()=>{
      let result='';
      result=  <>
      <div className={classes.root}>
        <div className={classes.imageSection}>
          <img
            alt="img"
            src={srcImg(item)}
            className={classes.imgContent}
          />
          <span className={classes.panel}></span>
          <div className={classes.contentSection1}>
            <Tooltip title="Detail">
            <Link to={params(item.id)}>
              <IconButton className={classes.IconButton}  onClick={()=>{handleOpenDetails(item)}}>
                
                <DetailsIcon />
              </IconButton>
              </Link>
            </Tooltip>
          </div>
          <div className={classes.contentSection2}>
            <Tooltip title="Trailer"  onClick={()=>handleOpen(item)}>
              <IconButton className={classes.IconButton}>
                <YouTubeIcon />
              </IconButton>
            </Tooltip>
          </div>

          <div className={classes.contentSection3} >
            <Tooltip title="Add To Favorite">
              <IconButton className={classes.IconButton} onClick={()=>handleAddToFlist(item)}>
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className={classes.TitleContent}>
          <h3 className={classes.h2}>{item.title}</h3>
          <div className={classes.mvDes}>
            <div>Vote Rate: {renderVoteRate(item.vote_average)}</div>
            <div>
              {" "}
              Release_date: {item.release_date&&item.release_date
                .split("-")
                .reverse()
                .join("-")}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
      return result;
    }
    return<>
    <Grow
    in={checked}
   
    style={{ transformOrigin: '0 0 0' }}
    {...(checked ? { timeout: 1000 } : {})}
  ><Grid item sm={6} md={3} xs={12} >
    {renderMovie()}
    {/* <Card className={classes.root}  >
      <div >
      <CardActionArea  className={classes.CardContentArea} >
       {delay?<> <CardMedia
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          title="Contemplative Reptile"
        />
        <CardContent >
        <Typography  gutterBottom variant="h6" component="h5">
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
        <Button size="small" color="primary" onClick={handleAddToFlist}>
         <PlaylistAddIcon/>  
        </Button>
        </Tooltip>
      </CardActions>
      </>:<><Skeleton animation='wave'  className={classes.cardactionskeleton}/></>}
    </Card> */}
        
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