import { Fade, Grid, makeStyles, Tooltip } from "@material-ui/core";
import React, { useEffect } from "react";
import YouTubeIcon from '@material-ui/icons/YouTube';
import DetailsIcon from '@material-ui/icons/Details';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import toast from "../../Api/toast";

const useStyles = makeStyles({
    root:{
        position:'relative',
        overflow:'hidden',
        height:'300px',
        width:"200px",
        margin:'0 auto',
        borderRadius:'10%',
    },
    img:{
        width:'100%',
        height:"100%",
        position:'absolute',
    },
    contentSection:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,.5)',
       opacity:0,
       transition:'0.5s all ease',
        '&:hover':{
           opacity:1
        }
       

    },
    button:{
        position:'absolute',
        top:'20%',
        left:'40%',
        fontSize:'20px',
        padding:'5px',
        color:'red',
        backgroundColor:'white',
        borderRadius:'45%',
        '&:hover':{
            cursor:'pointer',
            backgroundColor:'yellow'
        }
    },
    button1:{
        position:'absolute',
        top:'40%',
        left:'40%',
        fontSize:'20px',
        padding:'5px',
        color:'black',
        backgroundColor:'white',
        borderRadius:'45%',
        '&:hover':{
            cursor:'pointer',
            backgroundColor:'yellow'
        }
    },
    button2:{
        position:'absolute',    
        top:'60%',
        left:'40%',
        fontSize:'20px',
        padding:'5px',
        color:'blue',
        backgroundColor:'white',
        borderRadius:'45%',
        '&:hover':{
            cursor:'pointer',
            backgroundColor:'yellow'
        }
    },
    containerskeleton:{
        height:'100%',
        width:"200px",
        margin:'0 auto'
    }
})
const Toast=new toast(); 
const TopRatedMovie=props=>{
    const{item,openModal,getMovieyoutube,showDetails,openFlist}=props;
    const [checked, setChecked] = React.useState(false);
    const[delay,setTime]=React.useState(false);
    useEffect(()=>{
            let skeletontimeout=setTimeout(() => {
                setTime(true);
                setChecked((prev) => !prev);
            },2000);
            return ()=>clearTimeout(skeletontimeout);
    },[])
    const classes=useStyles();
    const params=id=>{
        return `/details/${id}`
      }
    const handleOpen=item=>{
        //dispatch action open modal video
        openModal(item);
        //dispatch action call youtube
        getMovieyoutube(item.id);
   }
   const handleOpenDetails=item=>{
       console.log(showDetails(item));
    showDetails(item);
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
    return <Grid item  sm={6} md={3} xs={12}>
        
       {delay?<>
        <Fade   in={checked} >
        <div className={classes.root}>
        
       <img alt="img" className={classes.img} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
        <div className={classes.contentSection}>
         <div><YouTubeIcon className={classes.button} onClick={()=>handleOpen(item)} /> </div>
         <div> <Link to={params(item.id)}><DetailsIcon className={classes.button1} onClick={()=>handleOpenDetails(item)} /></Link></div>
         <div>   <PlaylistAddIcon   className={classes.button2} onClick={()=>handleAddToFlist(item)} /></div>
        </div>
        </div>
        </Fade >
       </>:<>
      
       <Skeleton className={classes.containerskeleton} animation="wave"/>
      
       </>}
    
    </Grid>
}
export default TopRatedMovie;