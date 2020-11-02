import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import {   makeStyles, Grid, IconButton, Container, Drawer, Divider, ListItem, ListItemIcon, ListItemText, Tooltip, Collapse } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import List from '@material-ui/core/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StarBorder from '@material-ui/icons/StarBorder';
const useStyles=makeStyles(theme=>({
  Icon1:{
    fontSize:'40px',
    color:'red',
    "&:hover":{
      color:'yellow'
  }
},
IconMobile:{
  fontSize:'20px',
  color:'red'
},
LinkIcon:{
  textDecoration:'none',
  color:'black'
},
menuContainer:{
  
  [theme.breakpoints.up('sm')]:{
    textAlign:'center',
  },
  [theme.breakpoints.down('sm')]:{
   display:'none'
  }
  
},
mobileContainer:{
  [theme.breakpoints.up('md')]:{
   display:'none'
  },
},
menuDrawerIcon:{
  color:'white'
},
MenuIconButton:{
  
},
DrawerContainer:{
  width:'35vh'
},
MenuIconButton1:{
 marginLeft:'25%'
  
},
menuName:{
  textDecoration:'none'
}
}))

const MenuComponent=props=>{
    const {getUsername,setValueAutocomplete,handleLogout,getTopRatedMovie}=props;
    const[openDrawer,setStateDrawer]=useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [expandOpen,setExpandOpen] = useState(false);
    const open = Boolean(anchorEl);
    const classes=useStyles();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    useEffect(()=>{
      getUsername();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleGoHome1=()=>{
      setStateDrawer(false);
      setValueAutocomplete('');
      getTopRatedMovie();
    }
    const handleGoHome=()=>{
      setValueAutocomplete('');
      getTopRatedMovie();
    }
    const setDrawerClose=()=>{
      setStateDrawer(false);
    }
    const handleOpenDrawer=()=>{
      setStateDrawer(true);
    }
    const handleLogoutUser=()=>{
      handleLogout();
    }
    const handleFlist=()=>{
      
    }
    const handleClickOpenExpand=()=>{
      setExpandOpen(!expandOpen);
    }
    const DesktopMode=()=>{
      return  <>
      <Grid container spacing={0} className={classes.menuContainer}>
        <Grid item md={6}>
            <Link to='/homepage' >
            <IconButton onClick={handleGoHome} >
                <HomeIcon   className={classes.Icon1} />
            </IconButton>
            </Link>
        </Grid>
      <Grid item md={6}>
        {localStorage.getItem('username')?<><span style={{color:'white'}}>hi {JSON.parse(localStorage.getItem('username'))}!</span> 
        <IconButton   onClick={handleClick}>
            <ExitToAppIcon  className={classes.Icon1} />
        </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      > 
        <Link to={`/flist/${JSON.parse(localStorage.getItem('username'))}`} 
        className={classes.LinkIcon}><MenuItem onClick={handleFlist}>Your List</MenuItem></Link>
        <MenuItem onClick={handleLogoutUser}>Log out</MenuItem>
      </Menu>
      </>:<>
      <Tooltip title="Login">
            <IconButton 
        onClick={()=>window.location.href="/authentication"} >
          <PersonIcon  className={classes.Icon1} />
      </IconButton>
      </Tooltip>
     </>
      }
      </Grid>
    </Grid>
      </>
    }
    const mobileMode=()=>{
      return<> <Container className={classes.mobileContainer}>
            <IconButton  className={classes.MenuIconButton} onClick={handleOpenDrawer}>
            <MenuIcon className={classes.menuDrawerIcon}/>
            </IconButton >
     
      <Drawer  anchor='left' open={openDrawer} onClose={setDrawerClose}>
           <div className={classes.DrawerContainer}>
           <IconButton  className={classes.MenuIconButton1} 
          onClick={setDrawerClose}>
          <MenuOpenIcon  />
          </IconButton >
          <Divider/>
         <List className={classes.list}>
          
           <React.Fragment >
            <Link to='/homepage'  className={classes.menuName}  >
            <ListItem button onClick={handleGoHome1}>
            
            <ListItemIcon>
            <HomeIcon className={classes.IconMobile} />
            </ListItemIcon>
            Home
            </ListItem>
             </Link>
    
             {localStorage.getItem('username')?<>
             <ListItem button  onClick={handleClickOpenExpand}>
            <ListItemIcon>
              <PersonIcon className={classes.IconMobile}/>
            </ListItemIcon>
            {JSON.parse(localStorage.getItem('username'))}
            </ListItem>
            <Collapse in={expandOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <Link to={`/flist/${JSON.parse(localStorage.getItem('username'))}`}className={classes.LinkIcon}>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Your List"  />
              </ListItem>
            </Link>
              <ListItem button className={classes.nested} onClick={handleLogoutUser}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItem>
            </List>
          </Collapse></>
            :
            <ListItem button   onClick={()=>window.location.href="/authentication"} >
              <ListItemIcon>
              <PersonIcon className={classes.IconMobile}/>
              </ListItemIcon>
              Login
            </ListItem>}
            <Divider/>
            </React.Fragment>
          
         </List>

           </div>
          </Drawer>
          </Container>
      </>
    }
    return <>
    {DesktopMode()}
     {mobileMode()}
     
    </>
}
export default MenuComponent;
MenuComponent.propTypes={
  getUsername:PropTypes.func,
  setValueAutocomplete:PropTypes.func,
  handleLogout:PropTypes.func,
  getTopRatedMovie:PropTypes.func,
}