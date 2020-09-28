import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Container, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    pagination:{
        border:'2px solid green',
        backgroundColor: 'white',
        width:'35%',
        borderRadius:'20px'
    }
})
const PaginationComponent=props=>{
    const{totalpage,getTopRatePage,current,setCurrentTopRatePage}=props;
    
    const classes=useStyles();
    const paginate=page=>{
        getTopRatePage(page);
     
        setCurrentTopRatePage(page);
    }
    return <Container><div className={classes.pagination}>
        <Pagination
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