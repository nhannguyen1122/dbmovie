import { AppBar, Button, Checkbox, Divider, Fab, List, ListItem, ListItemIcon, ListItemText, makeStyles, Modal, TextField, Tooltip } from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import React from "react";
import AddIcon from '@material-ui/icons/Add';
import * as Yup from "yup";

const useStyles = makeStyles(theme=>({
    root:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
        position:'fixed',
        witdh:'40px'
        
        
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
      padding:'10px'
    },
    content:{
      padding:'10px',
    },
    textField:{
      width:'100%'
    }
    ,fabButton:{
      marginLeft:'10px'
    }
   
}));

const addToFlist={
  AppBar:'Choose your Flist to add',
  Movie:'this is Movie',
  button:<AddIcon />

}


const FlistModal=props=>{
    const {FlistOpenState,closeFlist,flistModalType,addNewFlist,updateList,handleUpdateList}=props;
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
    console.log(FlistOpenState);
    const classes=useStyles();
    const renderAddToFlistModal=()=>{
      return <>
       <AppBar position="static" color="secondary" className={classes.AppBar}> Choose your Flist to add</AppBar>
        <div className={classes.content}>
        <h1>Movie:this is movie</h1>
        <br/>
        <br/>
        <Divider/>
        <Formik>
            {(props)=>{
                return <Form>
                  {<List>
                    <ListItem >
                    <ListItemIcon>
                    <Checkbox
                edge="start"
                checked={true}
                tabIndex={-1}
                disableRipple
                // inputProps={{ 'aria-labelledby': labelId }}
              />  <ListItemText id='a' primary={`name flist 1`} />
              </ListItemIcon>
                        </ListItem>  
                    </List>}
                </Form>
            }}
        </Formik>
        <Divider/>
      
        <br/>
        <div className={classes.fabButton}>
        <Tooltip title="add "  >
       <Fab color="primary" aria-label="add" 
        size="small"
        >
        <AddIcon />
        </Fab>
        </Tooltip>
        </div>
      
        </div>
      </>
    }
    const handleSubmit=value=>{
      console.log(value);
      flistModalType===1&&addNewFlist(value.list)
      flistModalType===2&&handleUpdateList({id:value.id,name:value.updatelist});
    }
    const renderInputModal=(obj)=>{
      return <>
        <AppBar className={classes.AppBar} position="static" color="primary">{obj.AppBar}</AppBar>
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
                   <Tooltip title="add "  >
                      <Button color="primary" variant="contained" aria-label="add"  type="submit"
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