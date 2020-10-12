import { Checkbox, Divider, Fab, List, ListItem, ListItemIcon, ListItemText, makeStyles, Modal, Tooltip } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:'white',
        outline:'none',
        border:'none',
        top:'25%',
        left:'35%',
        position:'fixed',
        width:'400px',
        borderRadius:'0.5rem',
        padding:'10px'
    },
    
   
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
        
       <Tooltip title="add new " >
       <Fab color="primary" aria-label="add" 
        size="small"
        >
        <AddIcon />
        </Fab>
        </Tooltip>
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
        </div>
    </Modal>
}
export default FlistModal;