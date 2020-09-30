import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Container, makeStyles } from "@material-ui/core";
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
    const{totalpage,getTopRatePage,current,setCurrentTopRatePage}=props;
    
    const classes=useStyles();
    const paginate=page=>{
        getTopRatePage(page);
     
        setCurrentTopRatePage(page);
    }
    return <Container><div className={classes.pagination}>
        <Pagination className={classes.paginationContent}
    count={totalpage}
     color="primary"
     page={current}
     default={1}
     onChange={(event, page) => {
             paginate(page);
          }}
          />
    </div>
    </Container>;
}

export default PaginationComponent;