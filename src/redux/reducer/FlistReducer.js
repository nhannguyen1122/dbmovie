import * as constants from '../constant'
let init={
    list:[],

}

 const FlistReducer=(state=init,action)=>{
    switch(action.type){
        case constants.getFlist: 
        return {...state}
        case constants.getFlistOk: 
        
        return {...state,list:action.payload}
        case constants.deleteFlist: 
        return {...state}
        case constants.deleteFlistOk:
            state.list=state.list.filter(item=>item._id!==action.payload);
        return {...state}
        
        default:
            return {...state}
    }
}
export default FlistReducer;