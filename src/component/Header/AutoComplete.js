import { makeStyles } from "@material-ui/core";
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
       
        paddingLeft:'2%',
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
      [theme.breakpoints.up('sm')]:{
        lineHeight:'40px',
        fontSize: '30px',
      },
      [theme.breakpoints.down('sm')]:{
        lineHeight:'30px',
        fontSize: '20px',
      },

        
    },
    AutoContentULChild:{
        
       
        display:'block',
        position:'absolute',
        top:'6%',

       [theme.breakpoints.up('md')]:{
        width:'51%',
        left:'25%'
        
       },
       [theme.breakpoints.down('md')]:{
        width:'51%',
        left:'25%'
       },
        boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
        zIndex:100,
    },
    ULContent:{
        borderRadius:'0.3rem',
        position:'absolute',
        top:'22vh',
        backgroundColor:'white',
        padding:0,
        paddingTop:'1px',
        width:'100%',
    },
    LIContent:{
        fontSize:'20px',
        borderRadius:'0.4rem',
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
        top:0,
        right:0,
        fontSize:'30px',
        '&:hover':{
            color:'red',
            cursor:'pointer',
            
        },
    
    }
}))
const AutoCompleteComponent=props=>{
    const classes=useStyles();
    const {SearchResult,SearchForKeyWord,SearchWithKeyWord,formValue,setValueAutocomplete,SearchSuccess}=props;
    const[render,setRender]=React.useState(false)
  

    let persistRef=useRef(null);
    
    
    const handleChange=e=>{
        const {value}=e.target;
        setValueAutocomplete(value);
       
        
        
        if(persistRef.current){
            clearTimeout(persistRef.current);
            
        }
        persistRef.current=setTimeout(() => {
            if(!value){
                SearchSuccess('');
                setRender(false);
               
            }
       else{
        
        SearchForKeyWord(value);
        setRender(true);
        
       if(SearchResult.length>0){
       }
       }
      }, 900);
    }
    const SearchForMovie=(value)=>{
        SearchWithKeyWord(value);
        setValueAutocomplete(value);
        setRender(false);
        SearchSuccess('');
    }
    const renderUl=()=>{
        let result=null;
        if(render){
            result=<ul className={classes.ULContent}>
                {SearchResult?SearchResult.map((item,index)=>{
                 return <React.Fragment  key={index} >
                 <li className={classes.LIContent} 
                onClick={()=>SearchForMovie(item.title)}>{item.title}</li>
             </React.Fragment>
            }):''}
               

            </ul>;
        }
        else{
            result=''
        }
        return result;
    }
    const handleSubmit=()=>{
       if(!formValue){
        setRender(false);
       }
       else{
        SearchForMovie(formValue);
        SearchSuccess('');
        setRender(false);
       }
    }
    return <div >
     <div><h1 className={classes.Title}>MOVIE API</h1></div>
   
        
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
        <div className={classes.searchIconDiv} onClick={handleSubmit}><SearchIcon/></div>
         </div>
         <div className={classes.AutoContentULChild}>
           {renderUl()}
          </div>
           
          
          
         

    
    </div>
}
export default AutoCompleteComponent;
