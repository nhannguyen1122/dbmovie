import { makeStyles } from "@material-ui/core";
import React, { useState, useRef } from "react";
import { AutoCompleteInput, ULContent,LIContent ,AutoContent,AutoContentChild,AutoContentULChild,Title} from "../../styledComponent";

const useStyles =makeStyles(theme=>({

    root:{
        position:'relative',
        height:'50px'   
    },
    AutoContentChild:{
        position:'absolute',
       [theme.breakpoints.up('md')]:{
        width:'40%',
        left:'30.5%',
       },
       [theme.breakpoints.down('md')]:{
        width:'50%',
        left:'25%',
       },
        height:'100%'
    },
    AutoCompleteInput:{
        height: '100%',
        outline: 'none',
        width:'100%',
        margin:0,
        lineHeight:'40px',
        fontSize: '30px',
        padding:0,
    },
    AutoContentULChild:{
        display:'block',
        position:'absolute',
        top:'38px',
       [theme.breakpoints.up('md')]:{
        width:'40.2%',
        left:'30.55%',
       },
       [theme.breakpoints.down('md')]:{
        width:'50.2%',
        left:'25.1%',
       },
        boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
        zIndex:100,
    },
    ULContent:{
        backgroundColor:'white',
        padding:0,
        paddingTop:'1px',
        width:'100%',
    },
    LIContent:{
        fontSize:'20px',

        listStyle:'none',
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
    }
}))
const AutoCompleteComponent=props=>{
    const classes=useStyles();
    const {SearchResult,SearchForKeyWord,SearchWithKeyWord}=props;
    const[values,setValue]=useState({
        renderArray:false,
        formvalue:""
    })

    let persistRef=useRef(null);
    const handleFocusOut=(e)=>{
        setValue({
            renderArray:false
        })
    }
    const handleChange=e=>{
        const {value}=e.target;
        setValue({
            ...values,
            formvalue:value
        })
        
        
        if(persistRef.current){
            clearTimeout(persistRef.current);
            
        }
        persistRef.current=setTimeout(() => {
            if(!value){
              
                setValue({
                    
                    
                    renderArray:false,

                })
            }
       else{
        SearchForKeyWord(value);
        
       if(SearchResult.length>0){
      
        setValue({
           formvalue:value,
            
            renderArray:true,

        })
       }
       }
      }, 1000);
      
      
    }
    
    const SearchForMovie=(value)=>{
       
        setValue({
            formvalue:value,
           
            renderArray:false,

        });
        SearchWithKeyWord(value);
    }
    const render=()=>{
        let result=null;
        if(values.renderArray){
            result=<ul className={classes.ULContent}>{SearchResult.map((item,index)=>{
                 return <>
                 <li className={classes.LIContent} 
                 key={index} onClick={()=>SearchForMovie(item.title)}>{item.title}</li>
             </>
            })}</ul>;
        }
        else{
            result="";
        }
    
        return result;
    }
    return <>
     <h1 className={classes.Title}>MOVIE API</h1>
    <div className={classes.root}> 
        
        <div className={classes.AutoContentChild}>
        <input className={classes.AutoCompleteInput} type="text" 
      value={values.formvalue}
       onFocusOut={handleFocusOut}
       onFocus={handleChange}
        onChange={handleChange}
        id="AutoCompleteInput" 
        name="AutoCompleteInput" 
        placeholder="Enter Keyword"
        autocomplete="off"/>
         </div>
         <div className={classes.AutoContentULChild}>
           {render()}
          </div>
           
          
          
         

    </div>
    </>
}
export default AutoCompleteComponent;
