import * as constants from "../constant"
let init={
    leftLoading:false,
    rightLoading:false,
    confirmModalOpenState:false,
    registerConfirOpenState:false,
    resetFormState:false,
    FlistOpenState:false,
    DrawerModalOpenState:false,
    flistModalType:0,
    backdropOpenState:false,
    drawerModalContent:null,
    loginMobileLoading:false,
  
    
    
   
}
 const loadingReducer=(state=init,action)=>{
    switch(action.type){
        case constants.handleOpenBackdrop:{
            return {...state,backdropOpenState:action.payload}
        }
        case constants.openDetailDrawer:
            console.log(action.payload);
        return {...state,DrawerModalOpenState:true,drawerModalContent:action.payload}
        case constants.closeDetailDrawer:
        return {...state,DrawerModalOpenState:false}
        case constants.openFlist :
        return {...state,FlistOpenState:true,flistModalType:action.payload}
        case constants.closeFlist: 
        return {...state,FlistOpenState:false}
        case constants.handleLeftLoading: 
        return {...state,leftLoading:true,loginMobileLoading:true}
        case constants.handleCloseLeftLoading: 
        return {...state,leftLoading:false,loginMobileLoading:false}
        case constants.handleRightLoading: 
        return {...state,rightLoading:true,loginMobileLoading:true}
        case constants.handleCloseRightLoading: 
        return {...state,rightLoading:false,loginMobileLoading:false}
        case constants.handleCloseConfirmModal: 
        return {...state,confirmModalOpenState:false}
        case constants.handleOpenConfirmModal: 
        return {...state,confirmModalOpenState:true}
        case constants.handleOpenRegisterConfirmModal: 
        return {...state,registerConfirOpenState:true}
        case constants.handleCloseRegisterConfirmModal: 
        return {...state,registerConfirOpenState:false}
        case constants.openRegisterForm:
        return {...state,resetFormState:true}
        default:
            return state;
    }
}
export default loadingReducer;