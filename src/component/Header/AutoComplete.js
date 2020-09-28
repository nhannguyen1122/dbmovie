import React, { useState, useRef } from "react";
import { AutoCompleteInput, ULContent,LIContent ,AutoContent,AutoContentChild,AutoContentULChild,Title} from "../../styledComponent";


const AutoCompleteComponent=props=>{
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
            result=<ULContent>{SearchResult.map((item,index)=>{
                 return <>
                 <LIContent key={index} onClick={()=>SearchForMovie(item.title)}>{item.title}</LIContent>
             </>
            })}</ULContent>;
        }
        else{
            result="";
        }
    
        return result;
    }
    return <>
     <Title>MOVIE API</Title>
    <AutoContent> 
        
        <AutoContentChild>
        <AutoCompleteInput type="text" 
        
      value={values.formvalue}
       onFocusOut={handleFocusOut}
       onFocus={handleChange}
        onChange={handleChange}
        id="AutoCompleteInput" 
        name="AutoCompleteInput" 
        placeholder="Enter Keyword"
        autocomplete="off"/>
         </AutoContentChild>
         <AutoContentULChild>
           {render()}
          </AutoContentULChild>
           
          
          
         

    </AutoContent>
    </>
}
export default AutoCompleteComponent;
