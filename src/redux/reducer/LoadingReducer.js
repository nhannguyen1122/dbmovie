import * as constant from "../constant"
let init={
    leftLoading:false,
    rightLoading:false,
    confirmModalOpenState:false,
    registerConfirOpenState:false,
    resetFormState:false,
    FlistOpenState:false,
    DrawerModalOpenState:false,
    flistModalType:0
   
}
 const loadingReducer=(state=init,action)=>{
    switch(action.type){
        case constant.openDetailDrawer:
        return {...state,DrawerModalOpenState:true}
        case constant.closeDetailDrawer:
        return {...state,DrawerModalOpenState:false}
        case constant.openFlist :
        return {...state,FlistOpenState:true,flistModalType:action.payload}
        case constant.closeFlist: 
        return {...state,FlistOpenState:false}
        case constant.handleLeftLoading: 
        return {...state,leftLoading:true}
        case constant.handleCloseLeftLoading: 
        return {...state,leftLoading:false}
        case constant.handleRightLoading: 
        return {...state,rightLoading:true}
        case constant.handleCloseRightLoading: 
        return {...state,rightLoading:false}
        case constant.handleCloseConfirmModal: 
        return {...state,confirmModalOpenState:false}
        case constant.handleOpenConfirmModal: 
        return {...state,confirmModalOpenState:true}
        case constant.handleOpenRegisterConfirmModal: 
        return {...state,registerConfirOpenState:true}
        case constant.handleCloseRegisterConfirmModal: 
        return {...state,registerConfirOpenState:false}
        case constant.openRegisterForm:
        return {...state,resetFormState:true}
        default:
            return state;
    }
}
export default loadingReducer;