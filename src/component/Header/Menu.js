import React, { useState } from "react";
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';
import {  Button, makeStyles, Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
const useStyles=makeStyles(theme=>({
  Icon1:{
   
    [theme.breakpoints.up('md')]:{
      width:'50px',
      height:'50px',
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
  
  [theme.breakpoints.up('md')]:{
    textAlign:'center',
  },
  [theme.breakpoints.down('md')]:{
   display:'none'
  }
  
},
mobileContainer:{
  [theme.breakpoints.up('lg')]:{
   display:'none'
  },
},
menuDrawerIcon:{
  color:'white'
}
}));
const MenuComponent=props=>{
  const[signInState,setSignIn]=useState(true);
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes=useStyles();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleGoHome=()=>{
      
      const{getTopRatedMovie}=props;
      getTopRatedMovie();
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
      <Button aria-controls="fade-MenuComponent" aria-haspopup="true" 
    onClick={handleClick}
    className={classes.SignIn} >
    <PersonIcon  className={classes.Icon1} />
      </Button>

      {signInState?<Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      > 
      <MenuItem onClick={handleClose}>favorite list</MenuItem>
      <MenuItem onClick={handleClose}>Log out</MenuItem>
      </Menu>:
      <Menu
      id="fade-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    > <MenuItem onClick={handleClose}>Log in</MenuItem>
    <MenuItem onClick={handleClose}>Register</MenuItem>
    </Menu>
      }
      </Grid>
    </Grid>
      </>
    }
    const mobileMode=()=>{
      return <div className={classes.mobileContainer}>
      <MenuIcon className={classes.menuDrawerIcon}/>
      </div>
    }
    return <>
    {DesktopMode()}
     {mobileMode()}
    </>
}
export default MenuComponent;
MenuComponent.propTypes={
    classes:PropTypes.object
}