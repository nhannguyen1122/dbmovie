import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Container, Menu, MenuItem, Grid, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { TopRatedMovie } from "../../styledComponent";

import YouTubeIcon from '@material-ui/icons/YouTube';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DetailsIcon from '@material-ui/icons/Details';
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import Skeleton from "@material-ui/lab/Skeleton";
const TopTrendingMovies=props=>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [item,setItem]=React.useState({});
  const[delay,setTime]=React.useState(false);
  useEffect(()=>{
    let settimeoutskeletons=setTimeout(() => {
      setTime(true);
    },2000);
    return ()=>clearTimeout(settimeoutskeletons);
  },[])
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
        Skeletonimg:{
          height:'100%',
          width:'100%'
        }
        
        
      }));
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
      const classes = useStyles();
      const{openModal,showDetails,getMovieyoutube}=props;
      const results=props.upComingMovies;
    
      const render=(results)=>{
        console.log(results);
       if(results.length>0){
         return <Container>
         <TopRatedMovie>upComing Movies </TopRatedMovie>
         {delay?<>
      <GridList className={classes.gridList} cols={5.5}>
        {results.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={`https://image.tmdb.org/t/p/w500/${tile.poster_path}`} alt={tile.title}  />
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
     </>:<>
     <GridList className={classes.gridList} cols={5.5}>
        {results.map((tile) => (
          <GridListTile key={tile.img}>
           <Skeleton animation="wave" className={classes.Skeletonimg}
           variant="rec"
           />
          </GridListTile>
        ))}
      </GridList>
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
               <Link to={setparams(item.id)}>
               <MenuItem onClick={()=>handleOpenDetails(item)} > 
               
               <DetailsIcon />
               Details
               
               </MenuItem>
               </Link>
              
               <MenuItem > 
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
export default TopTrendingMovies;

TopTrendingMovies.propsTypes={
    latestMovie:PropTypes.array,
    openModal:PropTypes.object,
    showDetails:PropTypes.object,
    getMovieyoutube:PropTypes.object
}