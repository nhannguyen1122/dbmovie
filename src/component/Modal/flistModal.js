import { AppBar, Checkbox, Divider, Fab, List, ListItem, ListItemIcon, ListItemText, makeStyles, Modal, Tooltip } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:'white',
        outline:'none',
        border:'none',
        top:'25%',
        overflow:'hidden',
      [theme.breakpoints.up('md')]:{
        left:'35%',
        width:'400px',
      },
      [theme.breakpoints.down('sm')]:{
        left:1,
        width:'90%'
      },
        position:'fixed',
       
        borderRadius:'0.5rem',
       
    },
    content:{
      padding:'10px'
    }
    ,fabButton:{
      marginLeft:'10px'
    }
   
}));


const FlistModal=props=>{
    const {FlistOpenState,closeFlist}=props;
    const classes=useStyles();
    const renderInput=props=>{
        return <>
        </>
    }
    return <Modal open={FlistOpenState} onClose={()=>closeFlist()} >
      <div className={classes.root}>
      <AppBar position="static" color="secondary"> Choose your Flist to add</AppBar>
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
        </div>
    </Modal>
}
export default FlistModal;