import React from "react";
import { TextField, makeStyles, Button, Modal } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';

const useStyles=makeStyles((theme)=>({
    root:{
        width:'25%',
        textAlign:'center',
        margin:'0 auto',
       boxShadow:'0 7px 4px #777',
       marginTop:'15%',
       padding: '1%',
       borderRadius:'10px',
       backgroundColor:'white'
    },
    h1:{
        color:'red',
        userSelect:'none',

    },
    input:{
        width:'70%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
           },
    paper: {
     backgroundColor: theme.palette.background.paper,
     border: '2px solid #000',
     boxShadow: theme.shadows[5],
     padding: theme.spacing(2, 4, 3),
      },

}));
const LoginForm=props=>{
    const classes=useStyles();
    const [open, setOpen] = React.useState(false);
    const openRegisterModel=()=>{
            setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    return<>
    <form className={classes.root}> 
             <div><h1 className={classes.h1}>Login Form</h1></div>
             <div>  <TextField id="input-with-icon-grid" label="Username" className={classes.input} /></div>
             <br/>
             <div>  <TextField  type="password"id="input-with-icon-grid" label="Password"className={classes.input} /></div>
             <br />
             <div><Button variant="contained" color="secondary" >Login</Button>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Button variant="contained" color="secondary" onClick={openRegisterModel} >Register</Button>

             </div>
    </form>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
            >
            {props.children}
            </Modal>
        </>
    }
export default LoginForm;