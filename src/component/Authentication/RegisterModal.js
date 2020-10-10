import React from "react";
import { TextField, makeStyles, Button, Modal } from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';
import { Formik,FastField, Form } from 'formik';

import * as Yup from "yup";
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
    errors:{
        color:'red'
    }
    

}));
const initialValues={
    email:'',
    username:'',
    password:'',
    repassword:''
}
const validationSchema=Yup.object().shape({
    email:Yup.string().email().required('required'),
    username:Yup.string().min(6,'at least 6 characters')
    .max(15,'max is 15 characters').required('required'),
    password:Yup.string().min(6,'at least 6 characters')
    .max(10,'max is 10 characters').required('required'),
    // repassword:Yup.string().oneOf([Yup.ref('password'),null],'Passwords must match')
})

const RegisterModal=props=>{
    
    const classes=useStyles();
    
   const handleSubmit=value=>{
     console.log(value);
   }
   
   const renderInput=({field,form,...props})=>{
    const{value}=field;

    return <TextField value={value} {...field}{...props}{...form} />
   }
   return <Formik
   initialValues={initialValues}
   validationSchema={validationSchema}
   onSubmit={value=>handleSubmit(value)}
   >
       {(touched,errors,...props)=>{
           console.log(touched);
           return (
               <Form className={classes.root}>
                   
                   <div>
                       <FastField
                       id="Email"
                       name="email"
                       label="Email"
                       component={renderInput}
                       />
                       {touched.email&&errors.email&&<div>
                           {errors.email}
                           </div>}
                   </div>
                   
               </Form>
           )
       }}

   </Formik>
    // return<>
    // <form className={classes.root} onSubmit={handleSubmit}> 
    //          <div><h1 className={classes.h1}>RegisterForm</h1></div>
    //          <div>  <TextField  name="email"   id="Email" label="Email"className={classes.input} /></div>
    //          <br />
    //          <div>  <TextField  name="username"  id="Username" label="Username" className={classes.input} /></div>
    //          <br/>
    //          <div>  <TextField  name="password"   type="password"id="password" label="Password"className={classes.input} /></div>
    //          <br />
    //          <div>  <TextField  name="repassword"   type="repassword"id="repassword" label="Password"className={classes.input} /></div>
    //          <br />
             
    //          <div>
    //              <Button variant="contained" type="submit" color="primary" >Register</Button>
    //          </div>
    // </form>
           
    //     </Formik>
    }
export default RegisterModal;