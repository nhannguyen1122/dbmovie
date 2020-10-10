import * as constant from "../constant"
let init={
    leftLoading:false,
    rightLoading:false
}
 const loadingReducer=(state=init,action)=>{
    switch(action.type){
        case constant.handleLeftLoading: 
        return {...state,leftLoading:true}
        case constant.handleCloseLeftLoading: 
        return {...state,leftLoading:false}
        case constant.handleRightLoading: 
        return {...state,rightLoading:true}
        case constant.handleCloseRightLoading: 
        return {...state,rightLoading:false}
        default:
            return state;
    }
}
export default loadingReducer;