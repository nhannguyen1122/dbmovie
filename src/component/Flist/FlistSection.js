import { Button, Collapse, Container, Divider, Fab, Fade, Grid, Grow, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Slide, Tooltip } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React from "react";
import AddIcon from '@material-ui/icons/Add';
import DetailsIcon from '@material-ui/icons/Details';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import { useEffect } from "react";
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
      height:'200px'
    },
    flistSection:{
        borderRadius:'0.5rem',
        margin:'0 auto',
        backgroundColor:'#4f4e5c',
        width:'90%',
       marginTop:'20px',
       boxShadow: `rgba(0, 0, 0, 0.1) 0px 4px 12px`,
       color:'white'
      
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
      }
    
}))

const FlistSection=props=>{
    const{getMovieyoutube,openDetailDrawer,FlistReducer,
      getFlist,deleteFlist,openFlist,handleExpandFlist,setUpdateList  }=props;
    const{list}=FlistReducer;
    
    console.log(list);
   
    const classes = useStyles();
    useEffect(()=>{
      getFlist();
    },[])
    const handleClick=(item)=>{
        
        handleExpandFlist(item._id)
    }
    const handleOpenDetail=()=>{
        openDetailDrawer();
    }
    const handleOpenDeleteFlist=id=>{
      console.log(id);
      deleteFlist(id);
    }
    const handleAdd=()=>{
      openFlist(1);
    }
    const handleUpdate=(item)=>{
      openFlist(2);
      setUpdateList(item)

    }
    return <Container>
        <Fade in={true}>
        <div className={classes.root}>
           <div className={classes.title}> <h1> Your List</h1>
            <Tooltip title="add new"><Fab   color='secondary' onClick={handleAdd}><AddIcon /></Fab></Tooltip></div>
        {list.length>0?list.map((item,index)=>{
          return <List className={classes.flistSection} key={index}>
          <ListItem >
          <ListItemText primary={item.name}  />
          <Tooltip title="update" >
                <IconButton  color="secondary"className={classes.IconButton} onClick={()=>handleUpdate(item)} >
                 <UpdateIcon/>
                </IconButton>
              </Tooltip>
                
              <Tooltip title="details" >
                <IconButton  color="secondary"className={classes.IconButton} onClick={()=>handleOpenDeleteFlist(item._id)} >
                 <DeleteForeverIcon/>
                </IconButton>
              </Tooltip>
          {item.ExpandMore ? <ExpandLess className={classes.Expand}  onClick={()=>handleClick(item)} /> : <ExpandMore className={classes.Expand}    onClick={()=>handleClick(item)} />}
        </ListItem>
        <Collapse in={item.ExpandMore} timeout="auto" unmountOnExit>
         {item.movie?item.movies.map((item,index)=>{
           return  <List component="div" disablePadding>
           <ListItem  className={classes.nested}>
             <ListItemIcon>
              <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="img" className={classes.imageSection}/>
             </ListItemIcon>
             <ListItemText primary={item.title} />
             
             {/* <Tooltip title="update">
                {/* <Button variant="contained" color="secondary">update</Button>
                </Tooltip> */}
                <Tooltip title="details" >
                <IconButton  color="primary"className={classes.IconButton}  onClick={()=>handleOpenDetail()}>
                 <DetailsIcon/>
                </IconButton>
              </Tooltip>
               
              <Tooltip title="details" >
                <IconButton  color="secondary"className={classes.IconButton}  onClick={()=>handleOpenDetail()}>
                 <DeleteForeverIcon/>
                </IconButton>
              </Tooltip>
           </ListItem>
         </List>
         }): <ListItem  className={classes.nested}>
              No movies
           </ListItem>}
          
        </Collapse>
        
  
        
          </List>
        }):<h1 className={classes.title}>No List</h1>}

    

        </div>
        </Fade>
    </Container>
}
export default FlistSection;