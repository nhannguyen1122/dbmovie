import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Container, Menu, MenuItem, Grid, Hidden } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import toast from "../../Api/toast";
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DetailsIcon from '@material-ui/icons/Details';
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
const useStyles = makeStyles((theme) => ({
       
  gridList: {
    flexWrap: 'nowrap',
  
    transform: 'translateZ(0)',
    width:'100%'
    
  },
  title: {
    color:'white',
    '&:hover':{
      color:'yellow'
    }
  },
  titleBar: {
    background:
    
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  moviename:{
    color:'yellow'
  },
  closebutton: {
    fontSize:'15px',
    backgroundColor:'#6F7C87',
    border:'none',
    borderRadius:'50%',
    outline:'none',
    '&:hover':{
      color:'white',
      cursor:'pointer',
      backgroundColor:'red',
    }
   
  },
  youtube: {
    color:'red'
  },
  DetailIcon:{
    textDecoration:'none'
  },
  h1:{
    
    color:'red',
    userSelect:'none',

    float:'left',
  },
  Skeletonimg:{
    width:'100%',
    height:'100%',
  }
  
  
}));
const Toast=new toast(); 

const UpcomingMovie=props=>{
  const classes = useStyles();
  const{openModal,showDetails,getMovieyoutube,openFlist,getUpcomingMovie}=props;
  const results=props.upComingMovies;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [item,setItem]=React.useState({});
  const[delay,setTime]=React.useState(false);
  useEffect(()=>{
    let settimeoutskeletons=setTimeout(() => {
      setTime(true);
    },2000);
    
    getUpcomingMovie();
    return ()=>clearTimeout(settimeoutskeletons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    
      const handleOpen=(item)=>{
        openModal(item);
        setAnchorEl(null);
        getMovieyoutube(item.id)
      }
      const handleOpenMenu=(e,item)=>{
        setAnchorEl(e.currentTarget);
        setItem(item);
      }
      const handleClose=()=>{
        setAnchorEl(null);
      }
      const setparams=id=>{
        
        return `/details/${id}`
      }
      const handleOpenDetails=item=>{
        
        showDetails(item);
        getMovieyoutube(item.id);
      }
      const handleAddToFlist=item=>{
        let token=localStorage.getItem('user');
     let username=localStorage.getItem('username');
     if(token&&username){
       openFlist(0);
      
       showDetails(item);
       
     }
     else{
       Toast.error('Login Required')
     }}
      
      const renderList=(numb,results)=>{
       
        return<> <GridList className={classes.gridList} cols={numb}>
        {results.map((tile,index) => (
          <GridListTile key={index}>
            <img src={tile.poster_path?`https://image.tmdb.org/t/p/w500/${tile.poster_path}`:`https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg`} alt={tile.title}  />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.moviename,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} onClick={(event)=>handleOpenMenu(event,tile)}>
                  <MenuIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </>
      }
      const renderSkeletonList=(numb,results)=>{
        return <>
           <GridList className={classes.gridList} cols={numb}>
        {results.map((tile,index) => (
          <GridListTile key={index}>
           <Skeleton  animation="wave" className={classes.Skeletonimg}
           variant="rect"
           />
          </GridListTile>
        ))}
      </GridList>
        </>
      }
    

      const render=(results)=>{
        if(results.length>0){
          return <Container>
          <h1 className={classes.h1}> Up Coming Movies</h1>
     {delay?<>
      <Hidden smDown >
        {renderList(4.5,results)}
      </Hidden>
      <Hidden mdUp>
        {renderList(2.5,results)}
        </Hidden>
      
     </>:<>
     <Hidden smDown >
        {renderSkeletonList(4.5,results)}
      </Hidden>
      <Hidden mdUp>
        {renderSkeletonList(2.5,results)}
        </Hidden>
     </>}
     <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={handleClose}
         
       >
        <Grid container spacing={2}>
             <Grid item md={9}>
               <MenuItem onClick={()=>handleOpen(item)} > 
               <YouTubeIcon className={classes.youtube} /> 
               Trailer
               </MenuItem>
               <Link to={setparams(item.id)} className={classes.DetailIcon}>
               <MenuItem onClick={()=>handleOpenDetails(item)} > 
               
               <DetailsIcon />
               Details
               
               </MenuItem>
               </Link>
              
               <MenuItem  onClick={()=>handleAddToFlist(item)} > 
               <PlaylistAddIcon/>   
               Add to list
               </MenuItem>
             </Grid>
             <Grid item md={1}>
              <button  className={classes.closebutton} onClick={handleClose}> x</button>
             </Grid>
 
        </Grid>
       </Menu>
   </Container>
       }
      }

    return <>{render(results)}</>
}
export default UpcomingMovie;

UpcomingMovie.propsTypes={
  getUpcomingMovie:PropTypes.func,
    openModal:PropTypes.func,
    showDetails:PropTypes.func,
    getMovieyoutube:PropTypes.func,
    openFlist:PropTypes.func,
}