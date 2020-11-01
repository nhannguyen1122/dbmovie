import React from "react";
import { makeStyles, Modal, Backdrop, Fade, Hidden } from "@material-ui/core";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      position:'fixed',
      backgroundColor: 'black',
      border: '1px solid black',
      borderRadius:'0.5rem',
      outline:'none',
      boxShadow: theme.shadows[5],
      padding:0,
    },
  }));
const VideoModal=props=>{
       const classes=useStyles();
       const {TrailerOpen,closeModal,MovieTrailerid}=props;
            const handleClose = () => {
              closeModal();
            };
            const _onReady=(e)=>{
              e.target.pauseVideo();
            }
            const opts = {
              height: '190px',
              width: '340px',
              
            };
            const opts1 = {
              height: '390px',
              width: '640px',
              
            };
    return <>
   
         <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={TrailerOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={TrailerOpen}>
          <div className={classes.paper}>
          <Hidden mdUp>
          <YouTube videoId={MovieTrailerid} opts={opts} onReady={_onReady} />
          </Hidden>
          <Hidden smDown>
          <YouTube videoId={MovieTrailerid} opts={opts1} onReady={_onReady} />
          </Hidden>
          </div>
        </Fade>
      </Modal>
    </>
}
export default VideoModal;
VideoModal.propTypes={
  TrailerOpen:PropTypes.bool,
  closeModal:PropTypes.func,
  MovieTrailerid:PropTypes.string
}