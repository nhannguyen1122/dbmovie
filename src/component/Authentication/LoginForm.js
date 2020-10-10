import React, {useEffect} from "react";
import {
  TextField,
  makeStyles,
  Button,
  Modal,
  Grid,
  Fade,
  Zoom,
  Fab
} from "@material-ui/core";
import 'react-toastify/dist/ReactToastify.min.css';
import Backdrop from '@material-ui/core/Backdrop';
import {Formik, FastField, Form} from 'formik';
import * as Yup from "yup";
import bcg from "../../img/bc2.png";
import HomeIcon from '@material-ui/icons/Home';
import CreateIcon from '@material-ui/icons/Create';
import {Link} from "react-router-dom";
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
    boxShadow: '1px 2px',
    overflow: 'hidden'
  },
  loginForm: {

    width: '100%',
    height: '80vh',
    backgroundColor: 'white'
  },
  formContainer: {
    [
      theme
        .breakpoints
        .up('md')
    ]: {
      margin: '3rem'
    },
    [
      theme
        .breakpoints
        .down('md')
    ]: {
      margin: 0
    }

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
  }
}))

const LoginForm = props => {
  const {openRegisterForm, openLoginForm, loginFormOpenState, registerFormOpenState,handleLogin,handleRegister} = props;
  
  // const[isRegisterFormSubmit,setSubmit]=React.useState(false);

  const classes = useStyles();
  const handleSubmitLoginForm = (value, action) => {
    action.setSubmitting(true);
    handleLogin(value);
    action.setSubmitting(false);
    action.resetForm();
  }
  const handleSubmitRegisterForm = ({email,username,password,repassword,...value}, action) => {
    action.setSubmitting(true);
    // setSubmit(true);
    
    handleRegister({email:email,username:username,password:password});
    action.setSubmitting(false);
    action.resetForm();
    
  }
  return <Zoom in={true}>

    <div className={classes.root}>
      <Grid container spacing={0}>
        <Fade in={loginFormOpenState} className={classes.loginForm}>
          <Grid item xs={6}>
              
            <div className={classes.formContainer}>
              <h1>Login form</h1>
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
                {({
                  isValidating ,
                  touched,
                  values,
                  errors,
                  ...props
                }) => {
                  console.log(touched);
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
                            style={{
                            textDecoration: "none"
                          }}>
                            <Button color="primary"><HomeIcon/>
                              Home</Button>
                          </Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Button color="primary" disabled={touched.username||touched.password?true:false}  onClick={() => openRegisterForm()}><CreateIcon/>
                            Register</Button>
                        </Grid>
                      </Grid>
                  </Form>
                }}
              </Formik>
             
            </div>

          </Grid>
        </Fade>
        <Fade in={registerFormOpenState} className={classes.loginForm}>
          <Grid item xs={6}>

            <div className={classes.formContainer}>

              <h1>Register form</h1>
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
                    ], 'Passwords must match').
                    required('required')
                })}
                onSubmit={(value, actions) => handleSubmitRegisterForm(value, actions)}>
                {({
                  touched,
                  values,
                  errors,
                  ...props
                }) => {
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
                        type='input'
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
                        type='repassword'
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
                    <div className={classes.aHref} onClick={() => openLoginForm()}><CreateIcon className={classes.CreateIcon}/>
                      Already have an account?</div>
                    <br/>
                    <div className={classes.inputSection}>
                      <Link to="/homepage">
                        <Fab variant="extended" color="primary"><HomeIcon/>
                          Home</Fab>
                      </Link>
                    </div>
                  </Form>
                }}
              </Formik>
              
            </div>

          </Grid>
        </Fade>
      </Grid>
      
    </div>
  </Zoom>

}
export default LoginForm;