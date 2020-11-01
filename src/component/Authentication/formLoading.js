import React from "react";
import {
  Backdrop,
  CircularProgress,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import icon from "../../img/loading.gif"
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  backdrop:{zIndex:2000},
  loginLoadingLeft:{
    textAlign: 'center',
    position: 'fixed',
    left:'15%',
    top: '1rem',
    margin: '0 auto',
    width: '35%',
    borderRadius: '1rem 0 0 1rem',
    height: '80vh',
    overflow:'hidden',
    background:'rgba(0,0,0,0.2)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  loginLoadingRight:{
    textAlign: 'center',
    position: 'fixed',
    left:'50%',
    top: '1rem',
    margin: '0 auto',
    width: '35%',
    borderRadius: ' 0 1rem 1rem 0',
    height: '80vh',
    overflow:'hidden',
    background:'rgba(0,0,0,0.2)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    
      width:'100px'
  }
 
}))

const LoadingComponent = props => {
  const{loadingReducer} = props;
  const{leftLoading,rightLoading,loginMobileLoading}=loadingReducer;
  const classes = useStyles();
  return<div>
    <Hidden smDown> {leftLoading?<div className={classes.loginLoadingLeft}><img src={icon} alt="loading" 
    className={classes.img}/></div>:null}
    {rightLoading?<div className={classes.loginLoadingRight}><img src={icon} alt="loading"
    className={classes.img}/></div>:null}</Hidden>
    <Hidden mdUp><Backdrop className={classes.backdrop} open={loginMobileLoading}>
  <CircularProgress color="primary" />
</Backdrop></Hidden>
  </div>
  

}
export default LoadingComponent;
LoadingComponent.propTypes = {
  LoadingReducer:PropTypes.object,
}