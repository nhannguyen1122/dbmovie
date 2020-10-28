import { CircularProgress, makeStyles } from "@material-ui/core";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';

const useStyles =makeStyles(theme=>({

    root:{
        height:'50px'   
    },
    AutoContentChild:{
        position:'relative',
       margin:'0 auto',
       width:'50%'
      
    },
    AutoCompleteInput:{
        boxShadow: 'inset -12px -8px 40px #464646;',
        
        paddingLeft:'3%',
        borderRadius:"0.9rem",
        border:'1px solid black',
        transition:'all ease 0.5s', 
        '&:focus':{
            border:'1px solid red',
            boxShadow:`rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 30px -18px inset`
        },
        height: '100%',
        outline: 'none',
        width:'100%',
        margin:0,
        lineHeight:'25px',
        fontSize: '25px',
    },
    ULContent:{
        position:'absolute',
        left:'1%',
        boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
        zIndex:100,
        
        borderRadius:'0.3rem',
        backgroundColor:'white',
        paddingLeft:'2px',
        paddingTop:'1px',
        width:'100%',
    },
    LIContent:{
        marginLeft:'2%',
        fontSize:'20px',
      
        listStyle:'none',
        transition:'all ease 0.2s',
       ' &:hover':{
            backgroundColor: '#f2f2f2',
            cursor:'pointer',
        }
    },
    Title:{
        textAlign:'center',
        fontSize:'50px',
        color:'red',
        userSelect:'none',
        fontFamily: ' "Libre Baskerville", serif'
    },
    searchIconDiv:{
        position:'absolute',
        margin:0,
        height:'100%',
        top:0,
        right:0,
        fontSize:'25px',
        '&:hover':{
            color:'red',
            cursor:'pointer',
            
        },
    
    }
}))
const AutoCompleteComponent=props=>{
    const classes=useStyles();
    const {SearchResult,SearchForKeyWord,SearchWithKeyWord,formValue,setValueAutocomplete,render}=props;
    // const[render,setRender]=React.useState(false)
  

    let persistRef=useRef(null);
    
    
    const handleChange=e=>{
        const {value}=e.target;
        setValueAutocomplete(value);
        if(value){
            if(persistRef.current){
                clearTimeout(persistRef.current);
            }
            persistRef.current=setTimeout(() => SearchForKeyWord(value),900);
        }
        else{
            SearchForKeyWord(null);
        }
    }
    const SearchForMovie=(value)=>{
        SearchWithKeyWord(value);
        setValueAutocomplete(value);
        SearchForKeyWord(null);
    }
    const handleSubmit=()=>{
        if(formValue){
         SearchForMovie(formValue);
        }
     }
    const renderUl=()=>{
        let result=null;
        if(render){
            result=<ul className={classes.ULContent}>
                {SearchResult.length>0&&SearchResult.map((item,index)=>{
                 return <React.Fragment  key={index} >
                 <li className={classes.LIContent} 
                onClick={()=>SearchForMovie(item.title)}>{item.title}</li>
             </React.Fragment>
            })}
            </ul>;
        }
        else{
            result=''
        }
        return result;
    }
    return <div >
     <div><h1 className={classes.Title}>MOVIE PROJECT</h1></div>  
        <div className={classes.AutoContentChild}>
                <input className={classes.AutoCompleteInput} type="text" 
                        value={formValue}
                        //    onFocusOut={handleFocusOut}
                        onFocus={handleChange}
                        onChange={handleChange}
                        id="AutoCompleteInput" 
                        name="AutoCompleteInput" 
                        placeholder="Enter Keyword"
                        autoComplete="off"/>
        <SearchIcon className={classes.searchIconDiv} onClick={handleSubmit}/> 
           {renderUl()}
          </div>
           
          
          
         

    
    </div>
}
export default AutoCompleteComponent;
