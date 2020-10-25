import React, { useEffect } from "react";
import { Grid, makeStyles, Button, Tooltip, GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import YouTubeIcon from '@material-ui/icons/YouTube';

import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import FavoriteIcon from "@material-ui/icons/Favorite";
import toast from "../../Api/toast";

const Toast=new toast();


   
   const useStyles = makeStyles((theme) => ({
      root: {
        backgroundImage:
          "url('https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        width: "100%",
        fontFamily: '"Montserrat",sans-serif',
        backgroundColor: "rgb(0,0,0.5)",
        margin:0,
        paddingBottom:3,
        
        
      },
      contentSection: {
        width: "60%",
        margin: " 0 auto",
        // backgroundColor: " orange",
        position: "relative",
        padding: "3%",
        backgroundImage: "linear-gradient(#42291c,#676255)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        marginBottom:0,
        
      },
      title: {
        fontSize: 50,
        color: "#e3e0db",
    
        fontWeight: 5,
        margin: 0
      },
      infor: {
        color: "#a6988c",
        fontSize: 20,
        lineHeight: "40px"
      },
    
      RatingSection: {
        textAlign: "center",
        minWidth: "100px",
        maxWidth: "100px",
        display: "block",
        backgroundColor: "#d49510",
        padding: 6,
        borderRadius: "50%"
      },
      Rating: {
        backgroundColor: "#a6988c",
        left: 0,
        display: "block",
        padding: 7,
        fontSize: 60,
        borderRadius: "50%",
        color: "#d3584d"
      },
      DetailSection: {
        color: "#85776f"
      },
      img: {
        width: "100%",
        height:'90%',
        boxShadow: `5px 5px 40px -10px black`,

      },
      carouselContainer: {
         color: "#85776f"
      },
     carouselItemContainer: {
        position: "relative",
        maxWidth:'200px',
        maxHeight:'300px',
        width:'200px',
        height:'200px',
        '&:hover>span':{
           backgroundColor:'rgb(0,0,0,0.5)',
           

        },
        '&:hover>div':{
        opacity:1,
         transform:'scale(1,1)'

      }
     },
      gridItemListContainerImg:{
         position: "absolute",
         width:'100%',
         height:'100%'
      },
      titleCarousel:{
         position: "absolute",
         left:'5%',
        zIndex:"100",
         color:"yellow",
         top:'60%'
      },
      bgcHover:{
         position: "absolute",
         width:'100%',
         height:'100%',
         transition:'all ease 0.5s'
        
      },
      buttonCarouselSection:{
         position: "absolute",
         display:'flex',
         top:'40%',
         justifyItems:'center',
         justifyContent:'center',
         transition:'all ease 0.5s',
         opacity:0,
         width:'100%',
         zIndex:110,
         transform:'scale(0,0)'
        
        
      }
     
    }));
const config=[{
   width:120,
   itemsToShow:4
}]
const MovieDetails=props=>{
   const classes=useStyles();
   const {Details,openTrailer,getMovieyoutube,match,getCasts,casts,openFlist}=props;
   
   
   let imgPath=`https://image.tmdb.org/t/p/w500${Details.poster_path}`;
   const handleopenModal=(item)=>{
      openTrailer(item);
      getMovieyoutube(item.id);
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
  
   useEffect(() => {
      
      getCasts(match.params.id);
      return () => {
         
      };
   }, []);
   const renderCarousel=item=>{
      let result='';
      result=<div className={classes.carouselItemContainer}>
         <h2 className={classes.titleCarousel}>{item.name}</h2>
         <img src={item.profile_path?`https://image.tmdb.org/t/p/w500/${item.profile_path}`:`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`} alt={item.name}  className={classes.gridItemListContainerImg}/>
         <span className={classes.bgcHover}></span>
         <div className={classes.buttonCarouselSection}><Button  variant="outlined" color="secondary">More Infor</Button></div>
      </div>
      return result;
   }
   const renderBackGroundColor=(item)=>{
      let result=''
     if(parseFloat(item)>=8.0){
        result="green";
      }
      else if(parseFloat(item)<8.0&&parseFloat(item)>6.0){
       result="orange";
      }
      else{
        result='red';
      }
      return result;
   }
     const handleAddToFlist=(item)=>{
    let token=localStorage.getItem('user');
    let username=localStorage.getItem('username');
    if(token&&username){
      openFlist(0);
     
      // showDetails(item);
      
    }
    else{
      Toast.error('Login Required')
    }
  }
   return (<div className={classes.root}>
        <div className={classes.contentSection}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <h1 className={classes.title}>{Details.title}</h1>
              <span className={classes.infor}>
                Release_date:{Details.release_date.split("-").reverse().join("-")}
              </span>
              <Grid container spacing={2} className={classes.DescriptionSection}>
                <Grid item xs={12} md={6}>
                  <div className={classes.RatingSection} style={{backgroundColor:renderBackGroundColor(Details.vote_average)}}>
                    {" "}
                    <div className={classes.Rating}>{renderVoteRate(Details.vote_average)}</div>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} className={classes.infor}>
                  <div> Popularity:{parseFloat(Details.popularity).toFixed(2)}</div>
                  <div> Language:{Details.original_language}</div>
                </Grid>
                </Grid>
              <div className={classes.DetailSection}>
                <h2>Overview</h2>
                <div>{Details.overview}</div>
              </div>
              &nbsp;
              <Grid container spacing={3}><Grid item sx={12} md={6}>
                  <Tooltip title="">
                  <Button variant="contained" color="primary"  onClick={()=>handleopenModal(Details)}><YouTubeIcon/>trailer</Button>
                  </Tooltip>
                  &nbsp;&nbsp;
                  <Tooltip title="">
                  <Button variant="contained" color="secondary" onClick={()=>handleAddToFlist(Details)}><FavoriteIcon/> </Button>
                  </Tooltip>
                  
                </Grid>
                <Grid item sx={12} md={6}></Grid>
              </Grid>
            </Grid>
            <Grid item sx={12} md={6}>
              <img
                className={classes.img}
                src={`https://image.tmdb.org/t/p/w500/${Details.poster_path}`}
                alt="img"
              />
              
            </Grid>
          </Grid>
          <div className={classes.carouselContainer}>
         <h2>Casts</h2>
         <Carousel itemsToShow={4} pagination={false} breakpoints={config} className={classes.Carousel}>
         {casts.map((item,index)=><React.Fragment key={index}>{renderCarousel(item)}</React.Fragment>)}
         </Carousel>
       </div>
        </div>
        
       <div>
      
       </div>
      </div>
    );


   
   
}
export default MovieDetails;
MovieDetails.propsTypes = {
   Details: PropTypes.object,
   openTrailer:PropTypes.object,
   getMovieyoutube:PropTypes.object
}