import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Container, div, Grid, IconButton, makeStyles } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import materialui from "../../img/materialui.png";
import reacticon from "../../img/react.gif";
import nodejsicon from "../../img/node1.png";
const useStyles = makeStyles(theme=>({
    root:{
        backgroundColor:'white',
        paddingLeft:12,
        
        margin:'0 auto'
    },
    flexContainer:{ 
        display:'flex',
        flexDirection:'row',
       justifyContent:'center'
        

    },
    
    h2:{
        fontWeight:'10px',
        fontFamily: `Raleway,Arial`,
        color:'grey'
    },
    footerContent:{
        margin:'0 auto',
        // maxWidth:'25%',
        fontSize:'15px',
        fontFamily:'cursive',
        padding:'5px'
        
        
    },
   
    aContent:{
        textDecoration:'none',
        color:'black',
        fontSize:'40px'
    },
    FooterIcon:{
        width:'60px',
        height:'60px',
        padding:'20px'
        

    },
    CopyRight:{userSelect:'none',
    [theme.breakpoints.up('md')]:{
        marginLeft:'80%'
    },
    [theme.breakpoints.down('sm')]:{
        marginLeft:'5%'
    }
}
}))
const Footer=props=>{
    const classes = useStyles();
    return<div className={classes.root}>
         <Container>
        <Grid container spacing={2} >
            <Grid  item sm={6} md={3} xs={12}className={classes.footerContent}>
            <h2 className={classes.h2}>API FROM</h2>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDb)" width="130" height="94"/>
            </Grid>

           <Grid  item sm={6} md={3} xs={12}className={classes.footerContent}>
            <h2 className={classes.h2}> More Infor</h2>
           <span> <IconButton href="https://github.com/nhannguyen1122/dbmovie" ><GitHubIcon className={classes.aContent}/></IconButton></span>
           <span> <IconButton href="https://github.com/nhannguyen1122/dbmovie" ><GitHubIcon className={classes.aContent}/></IconButton></span>
           <span> <IconButton href="https://github.com/nhannguyen1122/dbmovie" ><GitHubIcon className={classes.aContent}/></IconButton></span>

            </Grid>

           <Grid  item sm={6} md={3} xs={12}className={classes.footerContent}>
            <h2 className={classes.h2}> Address</h2>
            <div><IconButton><PhoneIcon/></IconButton><span>(+84)347541357</span></div>
            <div><IconButton><LocationOnIcon/></IconButton><span>Hà Nội- Việt nam</span></div>
            <div><IconButton><EmailIcon/></IconButton><span>nhannguyen1122@gmail.com</span></div>

            </Grid>

           <Grid  item sm={6} md={3} xs={12}className={classes.footerContent}>
            <h2 className={classes.h2}> About this Project</h2>
            <div>This project has two part.In the front end, it is included react  combined with redux, redux-saga, formik,axios, React Router , Material UI,etc...
                In the back end , i am using nodejs-express-jwtoken to build a user favorite list  </div>
           

            </Grid>


        </Grid>
       
     <hr/></Container>
       <div className={classes.flexContainer}>
            <div><img src={materialui} alt="material" className={classes.FooterIcon}/></div>
            <div><img src={reacticon} alt="material" className={classes.FooterIcon}/></div>
            <div><img src={nodejsicon} alt="material" className={classes.FooterIcon}/></div>

       </div>
        <div className={classes.CopyRight}>Copy Right@2020-Nhân nguyễn</div>
        <br/>
        
    </div>
}
export default Footer;