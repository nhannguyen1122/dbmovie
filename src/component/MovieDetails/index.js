import React, { useEffect } from "react";
import { Grid, makeStyles, Button, Tooltip } from "@material-ui/core";
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PropTypes from 'prop-types';
// const Details={
//    popularity: 13.751,
//    vote_count: 1269,
//    video: false,
//    poster_path: "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
//    id: 696374,
//    adult: false,
//    backdrop_path: "/969BfPHGJcjg2aUv60g5uiiXFzf.jpg",
//    original_language: "en",
//    original_title: "Gabriel's Inferno",
//    genre_ids: [
//    10749
//    ],
//    title: "Gabriel's Inferno",
//    vote_average: 9,
//    overview: "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
//    release_date: "2020-05-29"
//    }
   
   
   const useStyles=makeStyles(theme=>({
      MovieDetailContent:{
            margin:'0 auto'
      },
      containbody:{
         backgroundColor:'white',
         height:'50%',
         width:'70%',
         margin:'0 auto',
         borderRadius:'2%',
         boxShadow:`-moz-box-shadow:    inset 0 0 10px #000000;
         -webkit-box-shadow: inset 0 0 10px #000000;
         box-shadow:         inset 0 0 10px #000000;`,
         minWidth:'320px'
      },
      leftContent:{
         textAlign:"center",
         [theme.breakpoints.up('md')]:{
            width:'300px',
         height:'500px',
         },
         [theme.breakpoints.down('md')]:{
            width:'200px',
         height:'300px',
         },
         
         margin:'0 auto',
         position:'relative',
         padding:'10px',
         borderRadius:'6%',
         backgroundColor:'red',
         
         overflow:'hidden'
        
        
      },
      leftContentimg:{
         position:'absolute',
         [theme.breakpoints.up('md')]:{
            width:'300px',
            height:'500px',
         },
         [theme.breakpoints.down('md')]:{
            width:'200px',
            height:'300px',
         },
         left:'10px',
         borderRadius:'6%',
         userSelect:'none'
      },
      leftContenthandleSection:{
         position:'absolute',
         left:0,
         top:0,
         color:'white',
         backgroundColor:'white',
         width:'100%',
         height:'100%',
        
         opacity:0,
         transition:'all ease 1s'
         ,
         '&:hover':{
            opacity:0.7
         }
         
      },
      buttonSection:{
         position:'absolute',
         top:'45%',
         [theme.breakpoints.down('sm')]:{
            left:'15%'
         }
       
      },
      buttonhandle:{
         color:'white',
       
         borderRadius:'30%'
         ,
       '&:hover':{
          color:'yellow'
       }
      },
      
      rightContent:{
         textAlight:'center',
         margin:'10px',
         width:'80%',
         padding:'10px',
         height:'90%',
        
        

      },
      rightContentTitle:{
         fontSize:'50px',
        color:'orange',
        userSelect:'none'
      },
      rightContentReleaseDate:{
         fontWeight:'bold',
         fontSize:'20px'
      },
      rightContentOverview:{
         fontSize:'25px'
      },

   }));

const MovieDetails=props=>{
   const classes=useStyles();
   const {Details,openTrailer,getMovieyoutube}=props;
   console.log(Details);
   let imgPath=`https://image.tmdb.org/t/p/w500${Details.poster_path}`;
   const handleopenModal=(item)=>{
      openTrailer(item);
      getMovieyoutube(item.id);
   }

   useEffect(() => {
      
      return () => {
         
      };
   }, []);
   return <>
   <Grid container spacing={3} className={classes.containbody}>
      <Grid item md={6} className={classes.MovieDetailContent}>
            <div className={classes.leftContent}>
            <img  src={imgPath} alt="hello" className={classes.leftContentimg}/>
              <div className={classes.leftContenthandleSection}>
              <Grid container spacing={3} className={classes.buttonSection} >
                 <Grid item md={6}>
                    <Tooltip title="Trailer">
                    <Button variant="contained" color="secondary" className={classes.buttonhandle}
                    onClick={()=>handleopenModal(Details)}
                    >
                       <YouTubeIcon />
                    </Button>
                    </Tooltip>
                    </Grid>
                 <Grid item md={6}>
                    <Tooltip title="Add to List">
                    <Button variant="contained" color="secondary"className={classes.buttonhandle}>
                     <PlaylistAddIcon />
                    </Button>
                    </Tooltip>
                    </Grid>
              </Grid>
              </div>
           
            </div>      
      </Grid>
      <Grid item md={6}className={classes.MovieDetailContent}>
      <div className={classes.rightContent}>
      <div className={classes.rightContentTitle}>{Details.title}</div>
      <div className={classes.rightContentReleaseDate}>Release Date: {Details.release_date?Details.release_date.split("-").reverse().join("-"):Details.release_date}</div>
      <br/>
      <div className={classes.rightContentOverview}>{Details.overview}</div>
      </div>
      </Grid>
   </Grid>
   </>;
}
export default MovieDetails;
MovieDetails.propsTypes = {
   Details: PropTypes.object,
   openTrailer:PropTypes.object,
   getMovieyoutube:PropTypes.object
}