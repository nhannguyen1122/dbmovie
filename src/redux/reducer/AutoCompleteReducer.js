import React from "react";
import * as actionsConstant from '../constant';
let init={
    formValue:'',
    
}
const AutoCompleteReducer=(state=init,action)=>{
    switch(action.type){
        case actionsConstant.setValueAutocomplete:
            return {...state,formValue:action.payload}
        
        default:
            console.log(state);
            return state;
    }
}
export default AutoCompleteReducer;