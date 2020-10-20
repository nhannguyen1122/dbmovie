import { AppBar, Button, Grid, makeStyles, Modal } from "@material-ui/core";
import React from "react";


const useStyles=makeStyles(theme=>({
    modal:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
          position:'fixed',
    },
    root:{
        backgroundColor:'white',
    
        width:'30%',
        borderRadius:'0.3rem',
        overflow:'hidden',
        border:'none',
        userSelect:'none',
        outline:'none'
        
    
    },
    title:{
        margin:'5px'
    },
    content:{
        textAlign:'center',
        margin:'10px'
    }
}))
const ConfirmModal=props=>{
    const {confirmModalOpenState,handleCloseConfirmModal,openRegisterForm,formProps}=props;
    const classes=useStyles();
    const handleOpenRegisterForm=()=>{
        const {resetForm}=formProps;
        handleCloseConfirmModal();
       setTimeout(()=> {openRegisterForm(); 
         resetForm();},500)
      
    }
    return <>
    <Modal open={confirmModalOpenState} className={classes.modal}>
        <div className={classes.root}>
        <AppBar position="sticky" color="secondary" >
            <h3 className={classes.title}>Confirm</h3>
             </AppBar>
             <div className={classes.content}>
                 <div>Do you really want to register?The login process will be cancel</div>
                 <br/>
                 <hr/>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Button variant="contained" size="small" color="secondary" type='reset' onClick={handleOpenRegisterForm}>Yes</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" size="small" color="secondary" onClick={()=>handleCloseConfirmModal()}>cancel</Button>
            </Grid>
        </Grid>
        </div>
        </div>
    </Modal>
    </>
}
export default ConfirmModal;