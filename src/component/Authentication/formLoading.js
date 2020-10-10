import React from "react";
import {
  makeStyles,
 
} from "@material-ui/core";
import icon from "../../img/loading.gif"

const useStyles = makeStyles((theme) => ({

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
  },
  img:{
      paddingTop:'45%',
      width:'100px'
  }
 
}))

const LoadingComponent = props => {
    const{loadingReducer} = props;
    const{leftLoading,rightLoading}=loadingReducer;
  const classes = useStyles();
  return<div>
     {leftLoading?<div className={classes.loginLoadingLeft}><img src={icon} alt="loading" className={classes.img}/></div>:null}
     {rightLoading?<div className={classes.loginLoadingRight}><img src={icon} alt="loading"className={classes.img}/></div>:null}
  </div>
  

}
export default LoadingComponent;