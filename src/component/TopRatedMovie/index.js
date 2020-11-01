import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Container, makeStyles } from "@material-ui/core";
// const queryString=require("query-string");
const useStyles = makeStyles((theme)=>({
    pagination:{
        border:'2px solid green',
        backgroundColor: 'white',
        [theme.breakpoints.up('sm')]:{
            width:'60%'
        },
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        },
        borderRadius:'20px'
    },
    
}))
const PaginationComponent=props=>{
    const{totalpage,current,setCurrentTopRatePage}=props;
    // const{location}=history;
    // const {search}=location;
    // let qsStringSearch=queryString.parse(search);
    // console.log(qsStringSearch);
    // let currentPage=qsStringSearch.page;
    // console.log('currentPage',currentPage);
    // useEffect(()=>{
    //     setCurrentTopRatePage(current);
    //     console.log('currentpage cahnged')
    // },[current])

    
    const classes=useStyles();
    const paginate=page=>{
        // history.push(`/topratemovie?page=${page}`);
        setCurrentTopRatePage(page);
    }
    return <Container>
    <div className={classes.pagination}>
        <Pagination 
        className={classes.paginationContent}
        count={totalpage}
        color="primary"
        page={parseInt(current)}
        default={1}
        onChange={(event, page) => {
                paginate(page);}}
        />
    </div>
    </Container>;
}

export default PaginationComponent;