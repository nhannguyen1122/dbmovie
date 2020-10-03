import React from "react";

import { Container, Grid, makeStyles } from "@material-ui/core";
import { FooterElement } from "../../styledComponent";
const useStyles = makeStyles(theme=>({
    footerContent:{
        margin:'0 auto'
    },
    aContent:{
        textDecoration:'none'
    }
}))
const Footer=props=>{
    const classes = useStyles();
    return<FooterElement>
        <Grid container spacing={1} >
            <Grid item sm={4} xs={6} className={classes.footerContent}>
            <h1>API FROM</h1>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDb)" width="130" height="94"/>
           
            </Grid>
            <Grid itemitem sm={4} xs={6} className={classes.footerContent}>
            <h1> The Basic</h1>
            {
                [
                    "About TMDb",
                    "Contact Us",
                    "Support Forums",
                   " API",
                    "System Status"].map((item,index)=>{
                        return <div key={index}>{item}</div>
                    })
            }

            </Grid>
            <Grid item sm={4} xs={6} className={classes.footerContent}>
            <h1> More Infor</h1>
            <a href="https://github.com/nhannguyen1122/dbmovie" className={classes.aContent}>Git hub</a>
            </Grid>


        </Grid>
       <Container>
       <hr/>
       </Container>
        <div style={{userSelect:'none',marginLeft:'70%'}}>Copy Right@2020-Nhân nguyễn</div>
    </FooterElement>
}
export default Footer;