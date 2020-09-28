import React from "react";
import { makeStyles, Modal, Backdrop, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      
      backgroundColor: theme.palette.background.paper,
      border: '1px solid black',
      boxShadow: theme.shadows[5],
      padding:0
     
    },
  }));
const VideoModal=props=>{

       const classes=useStyles();
       const {TrailerOpen,closeModal,MovieTrailerid}=props;
       console.log(MovieTrailerid);
            const handleClose = () => {
              closeModal();
            };
            const _onReady=(e)=>{
              e.target.pauseVideo();
            }
            const opts = {
              height: '390',
              width: '640',
              
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
          <YouTube videoId={MovieTrailerid} opts={opts} onReady={_onReady} />
          </div>
        </Fade>
      </Modal>
    </>
}
export default VideoModal;
VideoModal.propTypes={
  TrailerOpen:PropTypes.object,
  MovieTrailerid:PropTypes.object,
}