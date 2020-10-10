import React, { useState } from "react";
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import {  Button, makeStyles, Grid, IconButton, Container, Drawer, Divider, ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import HomeIcon from '@material-ui/icons/Home';
import { Link, Redirect } from "react-router-dom";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import List from '@material-ui/core/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles=makeStyles(theme=>({
  Icon1:{
   
    [theme.breakpoints.up('md')]:{
      width:'50px',
      height:'50px',
      color:'red',
    },
    [theme.breakpoints.down('md')]:{
     
      color:'red',
    }
    
},
Home:{
  [theme.breakpoints.up('md')]:{
 
    borderRadius:'50%',
    "&:hover":{
      backgroundColor:'white'
  }
  },
 
},
SignIn:{
    border:'none',
    color:'red',
    width:'50px',
    height:'50px',
    fontSize:'70px',
    borderRadius:'50%',
    "&:hover":{
        backgroundColor:'white'
    }
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
  width:'30vh'
},
MenuIconButton1:{
 marginLeft:'25%'
  
},
menuName:{
  textDecoration:'none'
}
}))

const MenuComponent=props=>{
  const {authState,getTopRatedMovie,setValueAutocomplete,handleLogout}=props;
  const[openDrawer,setStateDrawer]=useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuicon=[
    { name:'Home',
     
    },
    { name:'User',
    
  },
  ]
  const open = Boolean(anchorEl);
  const classes=useStyles();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleGoHome1=()=>{
      setStateDrawer(false);
      
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
    const DesktopMode=()=>{
      return  <>
      <Grid container spacing={3} className={classes.menuContainer}>
      <Grid item md={6}>
          <Link to='/homepage'>
          <Button aria-controls="fade-MenuComponent" aria-haspopup="true" 
        
        className={classes.Home} onClick={handleGoHome} >
        <HomeIcon   className={classes.Icon1} />
      </Button>
          </Link>
      </Grid>
      <Grid item md={6}>
      {localStorage.getItem('user')?<> <Button aria-controls="fade-MenuComponent" aria-haspopup="true" 
    onClick={handleClick}
    className={classes.SignIn} >
    <ExitToAppIcon  className={classes.Icon1} />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      > 
      <MenuItem onClick={handleClose}>favorite list</MenuItem>
      <MenuItem onClick={handleLogoutUser}>Log out</MenuItem>
      </Menu></>:<>
      <Tooltip title="Login">
      <Button aria-controls="fade-MenuComponent" aria-haspopup="true" 
   onClick={()=>window.location.href="/authentication"}
    className={classes.SignIn} >
    <PersonIcon  className={classes.Icon1} />
      </Button>
      </Tooltip>
     </>
      }
      </Grid>
    </Grid>
      </>
    }
    const mobileMode=()=>{
      return<> <Container className={classes.mobileContainer}>
      <IconButton  className={classes.MenuIconButton} 
      onClick={handleOpenDrawer}
      >

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
          {menuicon.map((item,index)=>{
            return <React.Fragment key={index}>{item.name==='User'?
            <ListItem button >
            <ListItemIcon>
              <PersonIcon className={classes.Icon1}/>
            </ListItemIcon>
            {item.name}
            </ListItem>
            :
            <Link to='/homepage'  className={classes.menuName}  >
            <ListItem button onClick={handleGoHome1}>
            
            <ListItemIcon>
            <HomeIcon className={classes.Icon1} />
            </ListItemIcon>
            {item.name}
          
            </ListItem>
             </Link>
    }
           
          
            <Divider/>
            </React.Fragment>
          })}
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
    
}