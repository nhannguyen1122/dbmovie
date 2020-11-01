import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    backdrop:{
        zIndex:1400,
        color:'#fff'
    }
}));
const BackdropModal = (props) => {
    const classes = useStyles();
    const {backdropOpenState}=props;
    return (
        <div>
             <Backdrop className={classes.backdrop} open={backdropOpenState} >
        <CircularProgress color="secondary" />
      </Backdrop>
        </div>
    );
};


BackdropModal.propTypes = {
    backdropOpenState:PropTypes.bool
};


export default BackdropModal;
