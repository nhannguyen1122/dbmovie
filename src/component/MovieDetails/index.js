import React, { useEffect } from "react";
import { Grid, makeStyles, Button, Tooltip, GridList, GridListTile, GridListTileBar, IconButton } from "@material-ui/core";
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import FavoriteIcon from "@material-ui/icons/Favorite";

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
   
   
   // const useStyles=makeStyles(theme=>({
      // MovieDetailContent:{
      //       margin:'0 auto'
      // },
      // containbody:{
      //    backgroundColor:'white',
      //    height:'50%',
      //    width:'100%',
      //    margin:'0 auto',
      //    borderRadius:'2%',
      //    boxShadow:`-moz-box-shadow:    inset 0 0 10px #000000;
      //    -webkit-box-shadow: inset 0 0 10px #000000;
      //    box-shadow:         inset 0 0 10px #000000;`,
      //    minWidth:'320px'
      // },
      // leftContent:{
      //    textAlign:"center",
      //    [theme.breakpoints.up('md')]:{
      //       width:'300px',
      //    height:'500px',
      //    },
      //    [theme.breakpoints.down('md')]:{
      //       width:'200px',
      //    height:'300px',
      //    },
         
      //    margin:'0 auto',
      //    position:'relative',
      //    padding:'10px',
      //    borderRadius:'6%',
      //    backgroundColor:'red',
         
      //    overflow:'hidden'
        
        
      // },
      // leftContentimg:{
      //    position:'absolute',
      //    [theme.breakpoints.up('md')]:{
      //       width:'300px',
      //       height:'500px',
      //    },
      //    [theme.breakpoints.down('md')]:{
      //       width:'200px',
      //       height:'300px',
      //    },
      //    left:'10px',
      //    borderRadius:'6%',
      //    userSelect:'none'
      // },
      // leftContenthandleSection:{
      //    position:'absolute',
      //    left:0,
      //    top:0,
      //    color:'white',
      //    backgroundColor:'white',
      //    width:'100%',
      //    height:'100%',
        
      //    opacity:0,
      //    transition:'all ease 1s'
      //    ,
      //    '&:hover':{
      //       opacity:0.7
      //    }
         
      // },
      // buttonSection:{
      //    position:'absolute',
      //    top:'45%',
      //    [theme.breakpoints.down('sm')]:{
      //       left:'15%'
      //    }
       
      // },
      // buttonhandle:{
      //    color:'white',
       
      //    borderRadius:'30%'
      //    ,
      //  '&:hover':{
      //     color:'yellow'
      //  }
      // },
      
      // rightContent:{
      //    textAlight:'center',
      //    margin:'10px',
      //    width:'80%',
      //    padding:'10px',
      //    height:'90%',
        
        

      // },
      // rightContentTitle:{
      //    fontSize:'50px',
      //   color:'orange',
      //   userSelect:'none'
      // },
      // rightContentReleaseDate:{
      //    fontWeight:'bold',
      //    fontSize:'20px'
      // },
      // rightContentOverview:{
      //    fontSize:'25px'
      // },

   // }));

   const data=[
      {
      cast_id: 2,
      character: "Julianne Mitchell",
      credit_id: "5ea1c702713ed4002450fa16",
      gender: 1,
      id: 1312450,
      name: "Melanie Zanetti",
      order: 1,
      profile_path: "/lbUQ7ilvBtWMU23reKsHg3jRmsf.jpg"
      },
      {
      cast_id: 3,
      character: "Gabriel Emerson",
      credit_id: "5ea1c724bdc34c002023c899",
      gender: 2,
      id: 544002,
      name: "Giulio Berruti",
      order: 2,
      profile_path: "/ktPKniWGVkm6eBG7a2R7WGd96kZ.jpg"
      },
      {
      cast_id: 4,
      character: "Tom Mitchell",
      credit_id: "5ea1c74aec455200273d19dc",
      gender: 2,
      id: 73659,
      name: "Kurt McKinney",
      order: 3,
      profile_path: "/ebkMXPJXAGsPpfzysNmht6NVtR6.jpg"
      },
      {
      cast_id: 5,
      character: "",
      credit_id: "5ea1c77cec455200213d1a14",
      gender: 1,
      id: 2267910,
      name: "Agnes Albright",
      order: 4,
      profile_path: "/a1UVXkIFONmwjr0Cxydc0jQHPFq.jpg"
      },
      {
      cast_id: 6,
      character: "",
      credit_id: "5ea1c78fec455200213d1a22",
      gender: 1,
      id: 2595115,
      name: "Margaux Brooke",
      order: 5,
      profile_path: "/leLl5l6KnjMdg5O48FhDfB7GquI.jpg"
      },
      {
      cast_id: 7,
      character: "",
      credit_id: "5ea1c7a7bdc34c002623c860",
      gender: 2,
      id: 1326237,
      name: "Ned Van Zandt",
      order: 6,
      profile_path: "/lJK2Bk79xhP133piZ03p4d6rsD0.jpg"
      }
      ]
   const useStyles = makeStyles((theme) => ({
      root: {
        backgroundImage:
          "url('https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg')",
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
   const {Details,openTrailer,getMovieyoutube,match,getCasts,casts}=props;
   
   
   let imgPath=`https://image.tmdb.org/t/p/w500${Details.poster_path}`;
   const handleopenModal=(item)=>{
      openTrailer(item);
      getMovieyoutube(item.id);
   }
   const renderVoteRate=item=>{
      
      if(parseFloat(item)>=8.0){
        return <span style={{color:'green'}}>{item}</span>
      }
      else if(parseFloat(item)<8.0){
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
      else if(parseFloat(item)<8.0){
       result="orange";
      }
      else{
        result='red';
      }
      return result;
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
                  <div> popularity:100</div>
                  <div> Language:us</div>
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
                  <Button variant="contained" color="secondary"><FavoriteIcon/> </Button>
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