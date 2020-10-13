import { Button, Collapse, Container, Divider, Fade, Grid, Grow, List, ListItem, ListItemIcon, ListItemText, makeStyles, Slide, Tooltip } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React from "react";
const useStyles = makeStyles((theme)=>({
    root:{
        backgroundColor:'white',
        borderRadius:'0.5rem',
        padding:'10px',
        margin:'0 auto'
    },
    flistSection:{
        borderRadius:'0.5rem',
        margin:'0 auto',
        backgroundColor:'grey',
        width:'90%',
       marginTop:'20px',
      
    },
    nested: {
        marginTop:'5px',
        border:'2px solid black',
        paddingLeft: theme.spacing(4),
        backgroundColor:'white',
        width:'95%',
        margin:'0 auto',
        borderRadius:'0.5rem',
      },
    
}))

const FlistSection=props=>{
    const{getMovieyoutube,openDetailDrawer  }=props;
    const [open,setOpen]=React.useState(false);
    const classes = useStyles();
    const handleClick=()=>{
        setOpen(state=>!state)
    }
    const handleOpenDetail=()=>{
        console.log('hello')
        openDetailDrawer();
    }
    return <Container>
        <Fade in={true}>
        <div className={classes.root}>
            <h1> Your List</h1>
        <List className={classes.flistSection}>
        <ListItem >
        <ListItemText primary="flist1"  />
               <Tooltip title="Update">
               <Button variant="contained" color="secondary">update</Button>
               </Tooltip>
               <Tooltip title="Update">
               <Button variant="contained" color="secondary">update</Button>
               
               </Tooltip>
               <Tooltip title="detail"> 
               <Button variant="contained" color="secondary">detail</Button>
               </Tooltip>
        {open ? <ExpandLess  onClick={handleClick} /> : <ExpandMore   onClick={handleClick} />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem  className={classes.nested}>
            <ListItemIcon>
             a
            </ListItemIcon>
            <ListItemText primary="Movie 1" />
            {/* <Tooltip title="update">
               {/* <Button variant="contained" color="secondary">update</Button>
               </Tooltip> */}
               <Tooltip title="detail"> 
               <Button variant="contained" color="secondary" onClick={()=>handleOpenDetail()}>detail</Button>
               </Tooltip>
               <Tooltip title="delete">
               <Button variant="contained" color="secondary">delete</Button>
               </Tooltip>
          </ListItem>
        </List>
        
      </Collapse>
      

      
        </List>

    

        </div>
        </Fade>
    </Container>
}
export default FlistSection;