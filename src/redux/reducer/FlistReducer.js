import * as constants from '../constant'
let init={
    list:[],
    updateList:{},
  

}
const findIndex=(id,list)=>{
    let result=null;
    for(let i =0;i<list.length;i++){
        if(list[i]._id===id){
            result=i;
        }
    }

    return result;
}

 const FlistReducer=(state=init,action)=>{
    switch(action.type){
        case constants.handleDeleteMovie:
        return {...state}
        case constants.handleDeleteMovieOk:
        console.log(action.payload); //playlistid-movieid
        //find index of playlist
        // filter id array
        let arrId=action.payload.split('-');
        let listid=arrId[0];
        let movieid=arrId[1];
        let indexOfList=findIndex(listid,state.list);
        state.list[indexOfList].movies=state.list[indexOfList].movies.filter(item=>item.id!==parseInt(movieid));
        return {...state};
        case constants.addMovieToFlist: 
        return {...state};
        case constants.setUpdateList:
        return {...state,updateList:action.payload}
        case constants.handleUpdateList: 
        return {...state}
        case constants.handleUpdateListOk: 
       let updateIndex=findIndex(action.payload._id,state.list);
       console.log(action.payload);
       return {...state,list:[...state.list.slice(0,updateIndex),
        {...state.list[updateIndex],
        name:action.payload.name,
        timeUpdated:action.payload.timeUpdated
        }
        ,...state.list.slice(updateIndex+1)]}
        case constants.handleExpandFlist: 
        let index=findIndex(action.payload,state.list)
        console.log(index);
        return {...state,list:[...state.list.slice(0,index),
            {
                ...state.list[index],
                ExpandMore:!state.list[index].ExpandMore
            }
            ,...state.list.slice(index+1)]}
        case constants.getFlist: 
        
        return {...state}
        case constants.getFlistOk: 
        return {...state,list:action.payload}
        case constants.addNewFlist: 
        return {...state}
        case constants.addNewFlistOk: 
      
        return {...state,list:[...state.list,{...action.payload,ExpandMore:false
        
        }]}
        case constants.deleteFlist: 
       return {...state}
        case constants.deleteFlistOk:
            console.log(action.payload);
            state.list=state.list.filter(item=>item._id!==action.payload);
            console.log(state.list);
        return {...state}
        
        default:
            return {...state}
    }
}
export default FlistReducer;