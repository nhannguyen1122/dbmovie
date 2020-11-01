import React from "react";
import PropTypes from "prop-types";
import {
  TextField,
  makeStyles,
  Button,
  Grid,
  Fade,
  Zoom,
  Fab,
  Hidden
} from "@material-ui/core";
import ConfirmModal from '../Modal/LoginConfirm'
import 'react-toastify/dist/ReactToastify.min.css';
import {Formik, FastField, Form} from 'formik';
import * as Yup from "yup";
import bcg from "../../img/bc2.png";
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import {Link} from "react-router-dom";
import ResgisterConfirm from "../Modal/RegisterConfirm";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    position: 'relative',
    top: '1rem',
    margin: '0 auto',
    width: '70%',
    borderRadius: '1rem',
    backgroundImage: `url(${bcg})`,
    height: '80vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: `5px 5px 40px -10px black`,
    overflow: 'hidden'
  },
  h1:{
    fontFamily:'cursive',
    color:'orange'
  },
  HomeButton:{
    textDecoration: 'none'
  },
  formContainer: {
    margin:'3rem'
  },
  loginForm: {
    width: '100%',
    height: '80vh',
    backgroundColor: 'white'
  },
  inputSection: {
    width: '80%',
    margin: '0 auto'
  },
  fastField: {
    width: '100%'
  },
  inputButton: {
    width: '81%'
  },
  aHref: {
    textDecoration: 'underLine',
    fontSize: '12px',
    '&:hover': {
      cursor: 'pointer'
    },
    marginLeft: '30%'
  },
  CreateIcon: {
    fontSize: '13px'
  },
  //mobileMode
  root1:{
    position:'relative',
    boxShadow: `5px 5px 40px -10px black`,
    textAlign:'center',
    margin:'10%',
  },
  loginContainer:{
    borderRadius:'1rem',
   paddingBottom:'30px',
    position:'absolute',
    top:0,
    width:'100%',
    backgroundColor: 'white',
  },
  registerContainer:{
    borderRadius:'1rem',
    paddingBottom:'30px',
    position:'absolute',
    top:0,
    width:'100%',
    backgroundColor: 'white',
  }
}))

const LoginForm = props => {
  const {openRegisterForm, openLoginForm, loginFormOpenState,registerFormOpenState,
  handleLogin,handleRegister,loadingReducer,handleOpenConfirmModal,handleOpenRegisterConfirmModal
  ,handleCloseRegisterConfirmModal,handleCloseConfirmModal} = props;
  const {confirmModalOpenState,registerConfirOpenState}=loadingReducer;
  const classes = useStyles();
  const handleSubmitLoginForm = async(value, action) => {
    action.setSubmitting(true);
    await handleLogin(value);
    action.setSubmitting(false);
  }
  const handleSubmitRegisterForm = async({email,username,password,repassword,...value}, action) => {
    action.setSubmitting(true);
    // setSubmit(true);
    await handleRegister({email:email,username:username,password:password});
    action.resetForm();
    action.setSubmitting(false);
  }
  const handleOpenLoginForm=props=>{
      const {touched}=props;
      if(touched.username||touched.password||touched.email||touched.repassword){
        handleOpenRegisterConfirmModal();
      }
      else{
        openLoginForm();
      }
  }
  const handleOpenModal=(props)=>{
    const{touched}=props;
    if(touched.username||touched.password){
    handleOpenConfirmModal();
    }
    else{
      openRegisterForm();
    }
    
  }
  const renderRegistrationForm=()=>{
    return  <>
    <h1 className={classes.h1}>Register form</h1>
    <Formik
      initialValues={{
      email: '',
      username: '',
      password: '',
      repassword: ''
    }}
      validationSchema={Yup
      .object()
      .shape({
        email: Yup
          .string()
          .email()
          .required('required'),
        username: Yup
          .string()
          .min(6, "at least 6 characters")
          .required("required"),
        password: Yup
          .string()
          .min(6, "at least 6 characters")
          .required("required"),
        repassword: Yup
          .string()
          .oneOf([
            Yup.ref('password'),
            null
          ], 'Passwords must match')
          .required('required')
      })}
      onSubmit={(value, actions) => handleSubmitRegisterForm(value, actions)}>
      {(props) => {
        const {
          touched,
          errors
         
        }=props;
        return <Form className={classes.inputSection}>
          <div className={classes.inputSection}>
            <FastField
              inputProps={{
              className: classes.fastField
            }}
              className={classes.fastField}
              placeholder='Email'
              as={TextField}
              type='input'
              name="email"
              error={errors.email && touched.email}
              helperText={touched.email && errors.email
              ? errors.email
              : ''}/>
          </div>
          <br/>
          <div className={classes.inputSection}>
            <FastField
              inputProps={{
              className: classes.fastField
            }}
              className={classes.fastField}
              placeholder='Username'
              as={TextField}
              type='input'
              name="username"
              error={errors.username && touched.username}
              helperText={touched.username && errors.username
              ? errors.username
              : ''}/>
          </div>
          <br/>
          <div className={classes.inputSection}>
            <FastField
              inputProps={{
              className: classes.fastField
            }}
              className={classes.fastField}
              placeholder='Password'
              as={TextField}
              type='password'
              name="password"
              error={errors.password && touched.password}
              helperText={touched.password && errors.password
              ? errors.password
              : ''}/>
          </div>
          <br/>
          <div className={classes.inputSection}>
            <FastField
              className={classes.fastField}
              placeholder="RePassword"
              as={TextField}
              type='password'
              name="repassword"
              error={errors.repassword && touched.repassword}
              helperText={touched.repassword && errors.repassword
              ? errors.repassword
              : ''}/>
          </div>

          <br/>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            className={classes.inputButton}>
            Register
          </Button>
          <br/>
          <br/>
          <div className={classes.aHref} onClick={handleOpenLoginForm.bind(null,props)}>
            <CreateIcon className={classes.CreateIcon}/>
            Already have an account?</div>
          <br/>
          <div className={classes.inputSection}>
            <Link to="/homepage" className={classes.HomeButton}>
              <Fab variant="extended" color="primary" ><HomeIcon/>
                Home</Fab>
            </Link>
          </div>
          <ResgisterConfirm registerConfirOpenState={registerConfirOpenState}
          handleCloseRegisterConfirmModal={handleCloseRegisterConfirmModal}
          openLoginForm={openLoginForm}
          formProps={props}
          />
        </Form>
      }}
    </Formik>
    
  </>
  }
  const renderLoginForm=()=>{
    return <> 
    <h1 className={classes.h1}>Login form</h1>
    <Formik
    
      initialValues={{
      username: '',
      password: ''
    }}
      validationSchema={Yup
      .object()
      .shape({
        username: Yup
          .string()
          .min(6, "at least 6 characters")
          .required("required"),
        password: Yup
          .string()
          .min(6, "at least 6 characters")
          .required("required")
      })}
      onSubmit={(value, actions) => handleSubmitLoginForm(value, actions)}>
      {(props) => {
        const {
          touched,
          errors,
        }=props;
        return <Form className={classes.inputSection}>
          <div className={classes.inputSection}>
            <FastField
              inputProps={{
              className: classes.fastField
            }}
              className={classes.fastField}
              placeholder='Username'
              as={TextField}
              type='input'
              name="username"
              error={errors.username && touched.username}
              helperText={touched.username && errors.username
              ? errors.username
              : ''}/>
          </div>
          <br/>
          <div className={classes.inputSection}>
            <FastField
              className={classes.fastField}
              placeholder="Password"
              as={TextField}
              type='password'
              name="password"
              error={errors.password && touched.password}
              helperText={touched.password && errors.password
              ? errors.password
              : ''}/>
          </div>

          <br/>
          <Button
            variant="contained"
            type="submit"
            color="secondary"
            className={classes.inputButton}>
            login
          </Button>
          <br/>
          <br/>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Link
                  to="/homepage"
                  className={classes.HomeButton}>
                  <Button color="primary"><HomeIcon/>
                    Home</Button>
                </Link>
              </Grid>
              <Grid item xs={12} md={6}>
              <Button color="primary"   onClick={handleOpenModal.bind(null,props)}><CreateIcon/>
                  Register</Button>
              </Grid>
            </Grid>
            <ConfirmModal
            openRegisterForm={openRegisterForm}
            confirmModalOpenState={confirmModalOpenState} 
            handleCloseConfirmModal={handleCloseConfirmModal}
           formProps={props}/>
        </Form>
      }}
    </Formik>
   
  </>
  }
  return<> <Hidden smDown> <Zoom in={true}>
    
    <div className={classes.root}>
     
      <Grid container spacing={0}>
        <Fade in={loginFormOpenState} className={classes.loginForm}>
          <Grid item sm={12}md={6}>
          <div className={classes.formContainer}>
            {renderLoginForm()}
            </div>
          </Grid>
        </Fade>
        <Fade in={registerFormOpenState} className={classes.loginForm}>
          <Grid item sm={12}md={6}>
          <div className={classes.formContainer}>
           {renderRegistrationForm()}
          </div>
          </Grid>
        </Fade>
      </Grid>
     
    </div>   
  </Zoom>
  </Hidden>
  <Hidden mdUp>
    <Zoom  in={true}>
    <div className={classes.root1} >
      <Fade in={loginFormOpenState}>
        <div className={classes.loginContainer}>{renderLoginForm()}</div></Fade>
      <Fade in={registerFormOpenState}>
        <div className={classes.registerContainer}>{renderRegistrationForm()}</div></Fade>
    </div>
    </Zoom>
  </Hidden>
  </>
}
export default LoginForm;
LoginForm.propTypes = {
  openRegisterForm:PropTypes.func,
  openLoginForm:PropTypes.func,
  loginFormOpenState:PropTypes.bool,
  registerFormOpenState:PropTypes.bool,
  handleLogin:PropTypes.func,
  handleRegister:PropTypes.func,
  loadingReducer:PropTypes.object,
  handleOpenConfirmModal:PropTypes.func,
  handleOpenRegisterConfirmModal:PropTypes.func,
  handleCloseRegisterConfirmModal:PropTypes.func,
  handleCloseConfirmModal:PropTypes.func
}