import { AppBar, Button, Checkbox, Divider, Fab, FormControl, FormControlLabel, FormGroup, FormLabel, List, ListItem, ListItemIcon, ListItemText, makeStyles, Modal, Radio, RadioGroup, TextField, Tooltip } from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import React, { useEffect } from "react";
import AddIcon from '@material-ui/icons/Add';
import * as Yup from "yup";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme=>({
    root:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center', 
        witdh:'40px', 
    },
    contentSection:{
      
      backgroundColor:'white',
      border:'none', outline:'none',
      borderRadius:'0.5rem',
      overflow:'hidden',
     [theme.breakpoints.up('md')]:{
      width:'400px',
     
     
     }
      
    },
    AppBar:{
      padding:'10px',
      background: `linear-gradient(
        rgba(30,27,38, 0.95), 
        rgba(30,27,38, 0.95))`,
    },
    content:{
      padding:'10px',
    },
    textField:{
      width:'100%'
    }
    ,fabButton:{
      marginLeft:'10px'
    },
    LinkButton:{
      textDecoration:'none'
    }
   ,buttonFlist:{
     background:`linear-gradient(
      rgba(30,27,38, 0.95), 
      rgba(30,27,38, 0.95))`,
      color:'white'
   },
   h1:{
     fontFamily:'cursive'
   },
   xButton:{
     position:'absolute',
     margin:'10px',
     right:0,
     backgroundColor:'red',
     width:'22px',
     height:'22px',
     top:0,
     border:'none',
     borderRadius:'50%',
     color:'white',
     outline:'none',

     '&:hover':{
       color:'yellow',
       cursor:'pointer',
     },
     '&:active':{
      color:'black',
      cursor:'pointer',
    }
     
   }
}));




const FlistModal=props=>{
 
    const {FlistOpenState,closeFlist,flistModalType,addNewFlist,updateList,handleUpdateList,getFlist,list,addMovieToFlist,MovieDetails}=props;
    
    console.log(list);
    useEffect(()=>{
      getFlist();
    },[])
    const addToFlist={
     movie:MovieDetails,
     name:'',
     validationSchema:Yup.object().shape({
      movie:Yup.object(),
      name:Yup.string().required()
    }),
     
    
    }
    const addNew={
      AppBar:'Add new list',
      name:'list',
      placeholder:'add new list',
      initialValues:{
        list:''
      },
      validationSchema:Yup.object().shape({
          list:Yup.string().min(6,'at least 6 characters').required()
        }),
        button:"Add"
      
    
    }
    const Update={
      AppBar:'Update this List',
      placeholder:'update this list',
      name:'updatelist',
      initialValues:{
        id:updateList._id,
        updatelist:updateList.name
      },
      validationSchema:Yup.object().shape({
        updatelist:Yup.string().min(6,'at least 6 characters').required()
      }),
      button:'Update'
      
    }
    const classes=useStyles();
    
    const renderAddToFlistModal=()=>{
      
      return <>
       <AppBar position="relative"  className={classes.AppBar}> <div>Choose your list to add</div>
      <button className={classes.xButton} onClick={()=>closeFlist()}> x</button>
       </AppBar>
        <div className={classes.content}>
    <h1 className={classes.h1}>Movie:{MovieDetails.title}</h1>
        <br/>
        <br/>
        <FormLabel component="legend">Your List</FormLabel>
        <br/>
        <Divider/>
        <Formik
        initialValues={addToFlist}
        validationSchema={addToFlist.validationSchema}
        onSubmit={value=>handleSubmit(value)}
        >
            {(props)=>{
                return <Form>
                 <FormControl component="fieldset">
       
                  <RadioGroup aria-label="name" name="name" >
                 {list.length?list.map((item,index)=>{
                   return   <FastField as={FormControlLabel}
                    key={index}
                    value={item.name}
                   control={<Radio />} 
                    label={item.name} />
                 }):<React.Fragment><div>You dont have any list yet</div>
                 <br/>
                <Link to={`/flist/${JSON.parse(localStorage.getItem('username'))}`} className={classes.LinkButton}><Button variant="contained"className={classes.buttonFlist} onClick={()=>closeFlist()} size="small">Mange your list</Button></Link>
                <br/>
                 </React.Fragment>}
                  </RadioGroup>
          </FormControl>
          <br/>
          <Divider/>
          <br/>
        <div className={classes.fabButton}>
        <Tooltip title="add "  >
       <Fab className={classes.buttonFlist} aria-label="add"  type='submit'
        size="small"
        >
        <AddIcon />
        </Fab>
        </Tooltip>
        </div>  
                 
                </Form>
            }}
            
            
        </Formik>
        
      
        
      
        </div>
      </>
    }
    const handleSubmit=value=>{
      flistModalType===0&&addMovieToFlist(value);
      flistModalType===1&&addNewFlist(value.list)
      flistModalType===2&&handleUpdateList({id:value.id,name:value.updatelist});
    }
    const renderInputModal=(obj)=>{
      return <>
        <AppBar className={classes.AppBar} position="relative" >{obj.AppBar}
        <button className={classes.xButton} onClick={()=>closeFlist()}> x</button>
        </AppBar>
        <div className={classes.content}>
      
        <Formik
        initialValues={obj.initialValues}
        validationSchema={obj.validationSchema}
        onSubmit={value=>handleSubmit(value)}
        >
            {(props)=>{
              const{touched,errors}=props;
             
                return <Form>
                  {flistModalType===1&&<FastField  as={TextField}
                  className={classes.textField}
                  placeholder={obj.placeholder}
                  type="input"
                  name={obj.name}
                 error={(errors.list&&touched.list)}
                  helperText={touched.list && errors.list
                  ? errors.list
                  : ''}/>}
                  {flistModalType===2&&<FastField  as={TextField}
                  className={classes.textField}
                  placeholder={obj.placeholder}
                  type="input"
                  name={obj.name}
                 error={(errors.updatelist&&touched.updatelist)}
                  helperText={(touched.updatelist && errors.updatelist)
                  ? errors.updatelist
                  : ''}/>}
                   <br/>
                    <br/>
                  <div className={classes.fabButton}>
                   <Tooltip title={obj.button}  >
                      <Button  className={classes.buttonFlist}variant="contained" aria-label="add"  type="submit"
                        size="small"
                        >
                        {obj.button}
                        </Button>
                    </Tooltip>
                   
                  </div>
                </Form>
            }}
        </Formik>
        
      
        
      
        </div>
      </>
      
    }
    const renderContent=(flistModalType)=>{
      switch(flistModalType){
        case 0: return renderAddToFlistModal(); 
        case 1: return renderInputModal(addNew);
        case 2: return renderInputModal(Update);
        default: return ;
      }
    }
    return <Modal open={FlistOpenState} className={classes.root} onClose={()=>closeFlist()} >
      <div  className={classes.contentSection}>
      {renderContent(flistModalType)}
     
        </div>
    </Modal>
}
export default FlistModal;