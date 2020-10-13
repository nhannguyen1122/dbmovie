import { AppBar, Button, Grid, makeStyles, Modal } from "@material-ui/core";
import React from "react";
import ClearIcon from '@material-ui/icons/Clear';

const useStyles=makeStyles(theme=>({
    root:{
        backgroundColor:'white',
        position: 'fixed',
        top:'25%',
        left:'40%',
        width:'20%',
        borderRadius:'2rem',
        overflow:'hidden',
        border:'none',
        userSelect:'none',
        outline:'none'
        
    
    },
    titleContent:{
        margin:'25px',
        textAlign:'center'
    },
    iconTitle:{
        color:'red',
        fontSize: '80px',
        border:'2px solid orange',
        borderRadius:'50%'
    },
    content:{
        textAlign:'center',
        margin:'10px',
        color:'grey'
    },
    title:{
        color:'grey'
    }
}))
const ResgisterConfirm=props=>{
    const {registerConfirOpenState,handleCloseRegisterConfirmModal,
        openLoginForm,formProps}=props;
    const classes=useStyles();
    const handleOpenRegisterForm=()=>{
        const {resetForm}=formProps;
        handleCloseRegisterConfirmModal();
       setTimeout(()=> {openLoginForm(); 
         resetForm();},500)
      
    }
    return <>
    <Modal open={registerConfirOpenState}>
        <div className={classes.root}>
        <div >
            <div className={classes.titleContent}><ClearIcon className={classes.iconTitle}/>
            <h3 className={classes.title}>ARE YOU SURE?</h3>
            </div>
             </div>
             <div className={classes.content}>
                 <div>Do you really want to login?The register process will be cancel</div>
                 <br/>
               
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Button variant="contained" size="small" color="primary" type='reset' onClick={handleOpenRegisterForm}>Yes</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" size="small" color="primary" onClick={()=>handleCloseRegisterConfirmModal()}>cancel</Button>
            </Grid>
        </Grid>
        </div>
        </div>
    </Modal>
    </>
}
export default ResgisterConfirm;