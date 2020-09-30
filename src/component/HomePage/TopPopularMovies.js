import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { Container, Menu, MenuItem, Grid, Button, Hidden } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { TopRatedMovie } from "../../styledComponent";

import YouTubeIcon from '@material-ui/icons/YouTube';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DetailsIcon from '@material-ui/icons/Details';
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
const TopPopularMovies=props=>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const[delay,setTime]=React.useState(false);
  const [item,setItem]=React.useState({});
  useEffect(() => {
    let settimeoutskeletons=setTimeout(() => {
      setTime(true);
    },2000)
    return ()=>{
      clearTimeout(settimeoutskeletons);
    }
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
        getMovieyoutube(item.id);
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
        console.log(item);
        showDetails(item);
      }


      const renderList=(numb,results)=>{
       
        return<> <GridList className={classes.gridList} cols={numb}>
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
      </>
      }
      const renderSkeletonList=(numb,results)=>{
        return <>
           <GridList className={classes.gridList} cols={numb}>
        {results.map((tile) => (
          <GridListTile key={tile.img}>
           <Skeleton  animation="wave" className={classes.Skeletonimg}
           variant="rec"
           />
          </GridListTile>
        ))}
      </GridList>
        </>
      }
      const classes = useStyles();
      const{openModal,showDetails,getMovieyoutube}=props;
      const results=props.topPopularMovie;

      const render=(results)=>{
        if(results.length>0){
          return <Container>
          <TopRatedMovie> Popular  Movies</TopRatedMovie>
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
    return<>{render(results)}</>
}
export default TopPopularMovies;

TopPopularMovies.propsTypes={
    topPopularMovie:PropTypes.array,
    openModal:PropTypes.object,
    showDetails:PropTypes.object
}