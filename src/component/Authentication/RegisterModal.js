import React from "react";
import { TextField, makeStyles, Button, Modal } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';


const useStyles=makeStyles((theme)=>({
    root:{
        width:'25%',
        textAlign:'center',
        margin:'0 auto',
       boxShadow:'0 7px 4px #777',
       marginTop:'5%',
       padding: '1%',
       borderRadius:'10px',
       backgroundColor:'white'
    },
    h1:{
        color:'#379CF4',
        userSelect:'none',

    },
    input:{
        width:'70%'
    },
    

}));
const RegisterModal=props=>{
    const [form1,setForm]=React.useState({
        email:'',
        username:'',
        password:'',
        repassword:''
    })
    const classes=useStyles();
    const handleChange=e=>{
        
        const value=e.target.value;
        const name=e.target.name;
        
       setForm({
           [name]:value
       });
    
    }
   const handleSubmit=e=>{
       e.preventDefault();
      console.log(form1);
   }
   
    return<>
    <form className={classes.root} onSubmit={handleSubmit}> 
             <div><h1 className={classes.h1}>RegisterForm</h1></div>
             <div>  <TextField  name="email" onChange={handleChange}  id="Email" label="Email"className={classes.input} /></div>
             <br />
             <div>  <TextField  name="username" onChange={handleChange} id="Username" label="Username" className={classes.input} /></div>
             <br/>
             <div>  <TextField  name="password" onChange={handleChange}  type="password"id="password" label="Password"className={classes.input} /></div>
             <br />
             <div>  <TextField  name="repassword" onChange={handleChange}  type="repassword"id="repassword" label="Password"className={classes.input} /></div>
             <br />
             
             <div>
                 <Button variant="contained" type="submit" color="primary" >Register</Button>
             </div>
    </form>
           
        </>
    }
export default RegisterModal;