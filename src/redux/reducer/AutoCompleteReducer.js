import React from "react";
import * as constants from '../constant';
let init={
    formValue:'',
    render:false,
    
    
}
const AutoCompleteReducer=(state=init,action)=>{
    switch(action.type){
        case  constants.setRender:
            return {...state,render:action.payload}
        case constants.setValueAutocomplete:
            return {...state,formValue:action.payload}
        
        default:
            console.log(state);
            return state;
    }
}
export default AutoCompleteReducer;