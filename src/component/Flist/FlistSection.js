import {  Collapse, Container, Fab, Fade,Hidden, 
  IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Tooltip } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React from "react";
import AddIcon from '@material-ui/icons/Add';
import DetailsIcon from '@material-ui/icons/Details';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import { useEffect } from "react";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor:'#403f4d',
        borderRadius:'0.5rem',
        padding:'10px',
        margin:'0 auto',
       
    },
    title:{
      color:'yellow',
      textAlign:'center',
      
    },
    imageSection:{
      marginRight:'10px',
      width:'150px',
      height:'200px',
      boxShadow: `5px 5px 40px -10px black`,
    },
    flistSection:{
        borderRadius:'0.5rem',
        margin:'0 auto',
        backgroundColor:'#4f4e5c',
        width:'90%',
       marginTop:'20px',
       boxShadow: `rgba(0, 0, 0, 0.1) 0px 4px 12px`,
       color:'white',
      
      
    },
    flistLoadingSection:{
      borderRadius:'0.5rem',
      margin:'0 auto',
      backgroundColor:'#4f4e5c',
      width:'90%',
     marginTop:'20px',
     boxShadow: `rgba(0, 0, 0, 0.1) 0px 4px 12px`,
     color:'white',
     position: 'absolute',
     top:1,
    
  },
    nested: {
        marginTop:'5px',
        border:'2px solid black',
        paddingLeft: theme.spacing(4),
        backgroundColor:'#aaaab6',
        width:'95%',
        margin:'0 auto',
        borderRadius:'0.5rem',
      },
      nestedMobile:{
        paddingTop:'5px',
        border:'2px solid black',
        backgroundColor:'#aaaab6',
        margin:'0 auto',
        borderRadius:'0.5rem',
        textAlign:'center'
        
      },
      IconButton:{
        '&:hover':{
          color:'yellow'
        }
      },
      Expand:{
        "&:hover":{
          color:'yellow',
          cursor:'pointer',
        }
      },
      mobileButtonSection:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        itemAlign:'center'
      }
    
}))

const FlistSection=props=>{
    const{getMovieyoutube,openDetailDrawer,FlistReducer,getFlist,deleteFlist,
    openFlist,handleExpandFlist,setUpdateList,handleDeleteMovie,showDetails  }=props;
      // const [listLoading,displayListLoading]=React.useState(true)
    const{list}=FlistReducer;
    const classes = useStyles();
    useEffect(()=>{
      getFlist();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const handleClick=(item)=>{
        
        handleExpandFlist(item._id)
    }
    const handleOpenDetail=(movie)=>{
        openDetailDrawer(0);
        showDetails(movie);
        getMovieyoutube(movie.id);
    }
    const handleOpenDeleteFlist=id=>{
      deleteFlist(id);
    }
    const handleAdd=()=>{
      openFlist(1);
    }
    const handleUpdate=(item)=>{
      openFlist(2);
      setUpdateList(item)

    }
    const handleDeleteMovieFromList=(movieid,listid)=>{
      handleDeleteMovie({id:`${listid}-${movieid}`});
    }
    const renderDesktopList=(movie,item)=>{
      return <List component="div" disablePadding>
      <ListItem  className={classes.nested}>
        <ListItemIcon>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img" className={classes.imageSection}/>
        </ListItemIcon>
        <ListItemText primary={movie.title} />
            <Tooltip title="details" >
            <IconButton  color="primary"className={classes.IconButton}  onClick={()=>handleOpenDetail(movie)}>
            <DetailsIcon/>
            </IconButton>
          </Tooltip>
          
          <Tooltip title="remove from list" >
            <IconButton  color="secondary"className={classes.IconButton}  onClick={()=>handleDeleteMovieFromList(movie.id,item._id)}>
            <DeleteForeverIcon/>
            </IconButton>
          </Tooltip>
      </ListItem>
    </List>
    }
    const renderMobileList=(movie,item)=>{
      return<Container className={classes.nestedMobile}>
         <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="img" className={classes.imageSection}/>
        <div>{movie.title}</div>
        <div className={classes.mobileButtonSection}>
        <Tooltip title="details" >
            <IconButton  color="primary"className={classes.IconButton}  onClick={()=>handleOpenDetail(movie)}>
            <DetailsIcon/>
            </IconButton>
          </Tooltip>
        <Tooltip title="remove from list" >
            <IconButton  color="secondary"className={classes.IconButton}  onClick={()=>handleDeleteMovieFromList(movie.id,item._id)}>
            <DeleteForeverIcon/>
            </IconButton>
          </Tooltip>
        </div>
      </Container>
    }
    return <Container>
        <Fade in={true}>
        <div className={classes.root}>
           <div className={classes.title}> <h1> Your List</h1>
            <Tooltip title="add new"><Fab   color='secondary' onClick={handleAdd}><AddIcon /></Fab></Tooltip></div>
        {list.length>0?list.map((item,index)=>{
          return <React.Fragment  key={index}>
          <List className={classes.flistSection} >
          <ListItem >
          <ListItemText primary={item.name}  />
          <Tooltip title="update" >
                <IconButton  color="secondary"className={classes.IconButton} onClick={()=>handleUpdate(item)} >
                <UpdateIcon/>
                </IconButton>
              </Tooltip>
              <Tooltip title="delete" >
                <IconButton  color="secondary"className={classes.IconButton} onClick={()=>handleOpenDeleteFlist(item._id)} >
                <DeleteForeverIcon/>
                </IconButton>
              </Tooltip>
          {item.ExpandMore ? <ExpandLess className={classes.Expand}  onClick={()=>handleClick(item)} /> : <ExpandMore className={classes.Expand}    onClick={()=>handleClick(item)} />}
        </ListItem>
        <Collapse in={item.ExpandMore} timeout="auto" unmountOnExit>
        {item.movies.length>0?item.movies.map((movie,index)=>{
          return<React.Fragment key={index}>  <Hidden xsDown>{renderDesktopList(movie,item)}</Hidden>
                  <Hidden smUp>{renderMobileList(movie,item)}</Hidden></React.Fragment>
     }): <ListItem  className={classes.nested}>
          No movies
       </ListItem>}
      
    </Collapse>
      </List>
        </React.Fragment>
        }):<h1 className={classes.title}>No List</h1>}
        </div>
        </Fade>
    </Container>
}
export default FlistSection;
FlistSection.propTypes = {
  getMovieyoutube:PropTypes.func,
  openDetailDrawer:PropTypes.func,
  FlistReducer:PropTypes.object,
  getFlist:PropTypes.func,
  deleteFlist:PropTypes.func,
  openFlist:PropTypes.func,
  handleExpandFlist:PropTypes.func,
  setUpdateList:PropTypes.func,
  handleDeleteMovie:PropTypes.func,
  showDetails:PropTypes.func,
}