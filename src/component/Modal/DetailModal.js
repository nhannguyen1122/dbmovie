import { Drawer, Hidden, makeStyles } from '@material-ui/core';
import YouTube from "react-youtube";

import React from 'react';
    const useStyles = makeStyles(theme=>({
        root:{
            padding:'10px',
            width: '45vh',
            background: `linear-gradient(
                rgba(30,27,38, 0.95), 
                rgba(30,27,38, 0.95))`,
            color:'grey',
           
        },
        loading:{
            width:'45vh',
            display:'flex',
            justifyContent:'center',
            height:'60px',
            position:'fixed',
            zIndex:1500
        },
        loading1:{
            display:'none'
        },
        root1:{
           
            width: '45vh',
            display:'flex',
            justifyContent:'center',
            justifyItems:'center',
            flexDirection:'column',
         
        },
        h1:{
           
            fontFamily:'cursive',
            color:'orange'
        },
        span:{
            color:"white"
        },
        xButtonRight:{
            backgroundColor:'red',
            color:'white',
            outline:'none',
            border:'none',
            '&:hover':{
                cursor:'pointer',
                color:'yellow',

            },
            '&:active':{
              
                color:'black',
                
            }


        },
        xButtonLeft:{
            marginLeft:'90%',
            backgroundColor:'red',
            color:'white',
            outline:'none',
            border:'none',
            borderRadius:'50%',
            '&:hover':{
                cursor:'pointer',
                color:'yellow',

            },
            '&:active':{
              
                color:'black',
                
            }
        },
        //cast
        img:{
            width:'200px',
            height:'200px',
            borderRadius:'50%',
            boxShadow: `5px 5px 40px -10px black`,
        },
        imgSection:{
            background: `linear-gradient(
                rgba(30,27,38, 0.95), 
                rgba(30,27,38, 0.95))`,
            textAlign:'center'
        },
        name:{
            color:'yellow'
        },
        spanCast:{
            fontWeight:'bold'
        },
        inforSection:{
            padding:'10px'
        },
        youtubeSection:{
            textAlign:'center'
        }
    }))
const DetailsModal=props=>{
    const{DrawerModalOpenState,closeDetailDrawer,MovieDetails,drawerModalContent,personalCast,MovieTrailerid}=props;
   
    const _onReady=(e)=>{
        e.target.pauseVideo();
      }
const opts1 = {
    height: '190px',
    width: '230px',
  
};
const opts={
    height: '150px',
    width:'200px',
}
    const classes=useStyles();
   
    const handleClose = () => {
        closeDetailDrawer();
    }
    const renderModal=numb=>{
      if(numb===0){
          return <div className={classes.root}>
          <button className={classes.xButtonRight} onClick={handleClose}>x</button>
          <h1 className={classes.h1}>{MovieDetails.title}</h1>
        <div> <span className={classes.span}>Release: </span>{MovieDetails.release_date.split("-").reverse().join('-')}</div>
        <div> <span className={classes.span}>Poppularity: </span>{parseFloat(MovieDetails.popularity).toFixed(2)}</div>
        <div> <span className={classes.span}>Vote count: </span>{parseFloat(MovieDetails.vote_count).toFixed(2)}</div>
        <div> <span className={classes.span}>18+: </span>{MovieDetails.adult?'yes':'no'}</div>
        <div> <span className={classes.span}>language: </span>{MovieDetails.original_language}</div>
        <div> <span className={classes.span}>vote_avg: </span>{MovieDetails.vote_average}</div>
        <br/>
        <div><span className={classes.span}>Trailer</span></div>
        <br/>
        <div className={classes.youtubeSection}> <Hidden mdUp>
          <YouTube videoId={MovieTrailerid} opts={opts} onReady={_onReady} />
          </Hidden>
          <Hidden smDown>
          <YouTube videoId={MovieTrailerid} opts={opts1} onReady={_onReady} />
          </Hidden> </div>
        <br/>
        
        <div><span className={classes.span}>Overview:</span>{MovieDetails.overview}</div>
        <br/>
        <img alt='img' style={{width:'100%',height:'40vh'}}src={MovieDetails.backdrop_path?`https://image.tmdb.org/t/p/w500/${MovieDetails.backdrop_path}`:`https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`}/>

          </div>
      }
      else{
          return<>
          <div className={classes.root1}>
              <div className={classes.imgSection}>
              <button className={classes.xButtonLeft} onClick={handleClose}>x</button>
          <br/>
          <img alt='img'className={classes.img}src={personalCast.profile_path?`https://image.tmdb.org/t/p/w500/${personalCast.profile_path}`:'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'}/>
            <h2 className={classes.name}>{personalCast.name}</h2>
              </div>
           
          <div className={classes.inforSection}>
          <div> <span className={classes.spanCast}>Stage name: </span>{personalCast.also_known_as?personalCast.also_known_as:'No have'}</div>
          <div> <span className={classes.spanCast}>Sex: </span>{personalCast.gender===1?'woman':'man'}</div>
          <div> <span className={classes.spanCast}>Dob: </span>{personalCast.birthday?personalCast.birthday.split('-').reverse().join('-'):'Not update yet'}</div>
          <div> <span className={classes.spanCast}>Career: </span>{personalCast.known_for_department}</div>

          <div> <span className={classes.spanCast}>Biography: </span>{personalCast.biography?personalCast.biography:'Not update yet'}</div>
          </div>
          
         
     </div>
        </>
       
        
      }
    }
    return <>
    <Drawer  open={DrawerModalOpenState} anchor={drawerModalContent===0?'right':'left'} onClose={handleClose} >
    
     
         {renderModal(drawerModalContent)}
   
    </Drawer>
    </>
}

export default DetailsModal;