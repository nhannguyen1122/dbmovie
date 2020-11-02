import * as constants from '../constant';

export const OpenVideoTrailerModal=(movie)=>{
    return {
        type:constants.OpenVideoTrailerModal,
        payload:movie
    }
}
export const CloseVideoTrailerModal=()=>{
    return{ type:constants.CloseVideoTrailerModal}
}
//show detail
export const showDetails=(movie)=>{
    return { type:constants.showDetails,
        payload:movie
    }
}
export const getCasts=id=>{
    return { type:constants.getCasts,
    payload:id
    }
}
export const getCastsOk=res=>{
    return { type:constants.getCastsOk,
    payload:res}
}
export const getDetailCast=id=>{
    return { type:constants.getDetailCast,payload:id}
}
export const getDetailCastOk=res=>{
    return { type:constants.getDetailCastOk,
    payload:res}
    
}
//set render
export const setRender=boolean=>{
    return { type:constants.setRender,
    payload:boolean}
}
//api call
export const SearchForKeyWord=keyword=>{
    return { type:constants.SearchForKeyWord,
        payload:keyword,

    }
}
export const SearchSuccess=res=>{
    return { type:constants.SearchSuccess,
    payload:res
    }
}

//get toprated movies
export const getTopRatedMovie=()=>{
    return { type:constants.getTopRatedMovie,
    
    }
}
export const getTopRatedMovieSuccess=res=>{
    return { type:constants.getTopRatedMovieSuccess,
    payload:res
    }
}
/// search with action
export const SearchWithKeyWord=keyword=>{
    return { type:constants.SearchWithKeyWord,
    payload:keyword
    }
}
export const SearchWithKeyWordSuccess=res=>{
    return { type:constants.SearchWithKeyWordSuccess,
        payload:res
    
    }
}
//get from youtube
export const getMovieyoutube=id=>{
    return { type:constants.getMovieyoutube,
    payload:id
    }
}
export const getMovieyoutubeSuccess=res=>{
    return { type:constants.getMovieyoutubeSuccess,
    payload:res
    }
}
//get lastestmv
export const getUpcomingMovie=()=>{
    return { type:constants.getUpcomingMovie}
}
export const getUpcomingMovieSuccess=res=>{
    return { type:constants.getUpcomingMovieSuccess,
    payload:res
    }
}
//get top popular
export const getTopPopularMovie=()=>{
    return { type:constants.getTopPopularMovie}
}
export const getTopPopularMovieSuccess=res=>{
    return { type:constants.getTopPopularMovieSuccess,
    payload:res
    }
}
//get totalpage
export const getPage=()=>{
    return { type:constants.getPage}
}
export const getTotalPage=(number)=>{
    return { type:constants.getTotalPage,
        payload:number
    
    }
}
//gettopratepage -
export const getTopRatePage=page=>{
    return{ type:constants.getTopRatePage,
        payload:page
    
    }
}
export const getTopRatePageSuccess=data=>{
    return{ type:constants.getTopRatePageSuccess,
    payload:data}
}
export const setCurrentTopRatePage=page=>{
    return{ type:constants.setCurrentTopRatePage,
    payload:page}
}
//auto
export const setValueAutocomplete=value=>{
    return { type:constants.setValueAutocomplete,
    payload:value}
}
//open login form
export const openLoginForm=()=>{
    return { type:constants.openLoginForm}
}
//open register form
export const openRegisterForm=()=>{
    return { type:constants.openRegisterForm}
}
// handle login
export const handleLogin=value=>{
    return { type:constants.handleLogin,
    payload:value
    }
}
export const handleLoginOk=res=>{
    return { type:constants.handleLoginOk,
    payload:res
    }
}
//log out
export const handleLogout=()=>{
    return { type:constants.handleLogout}
}
//loading
export const handleLeftLoading=()=>{
    return { type:constants.handleLeftLoading}
}
export const handleCloseLeftLoading=()=>{
    return { type:constants.handleCloseLeftLoading}
}
export const handleRightLoading=()=>{
    return { type:constants.handleRightLoading}
}
export const handleCloseRightLoading=()=>{
    return { type:constants.handleCloseRightLoading}
}
export const handleRegister=data=>{
    return { type:constants.handleRegister,
    payload:data
    }
}

//confirm
export const handleOpenConfirmModal=()=>{
    return { type:constants.handleOpenConfirmModal}
}
export const handleCloseConfirmModal=()=>{
    return { type:constants.handleCloseConfirmModal}
}
export const handleCloseRegisterConfirmModal=()=>{
    return { type:constants.handleCloseRegisterConfirmModal}
}
export const handleOpenRegisterConfirmModal=()=>{
    return { type:constants.handleOpenRegisterConfirmModal}
}
//get username 
export const getUsername=()=>{
    return { type:constants.getUsername}
}
//flist
export const openFlist=(number)=>{
    return {
        type:constants.openFlist,
        payload:number
    }
}
export const closeFlist=()=>{
    return { type:constants.closeFlist
        
    
    }
}
//open detai Drawer
export const openDetailDrawer=(number)=>{
    return { type:constants.openDetailDrawer,
        payload:number
    
    }
}
export const closeDetailDrawer=()=>{
    return { type:constants.closeDetailDrawer}
}
//flistSection
export const getFlist=()=>{
    return { type:constants.getFlist}
}
export const getFlistOk=res=>{
    return { type:constants.getFlistOk,
    payload:res}
}
export const deleteFlist=id=>{
    return { type:constants.deleteFlist,
    payload:id
    }
}
export const deleteFlistOk=res=>{
    return { type:constants.deleteFlistOk,
    payload:res}
}
export const addNewFlist=name=>{
    return { type:constants.addNewFlist,
    payload:name
    }
}
export const addNewFlistOk=res=>{
    return { type:constants.addNewFlistOk,
    payload:res
    }
}
export const handleExpandFlist=(id)=>{
    return {type:constants.handleExpandFlist,
    payload:id
    }
}
export const setUpdateList=(item)=>{
    return {type:constants.setUpdateList,
    payload :item
    }
}
export const handleUpdateList=data=>{
    return {type:constants.handleUpdateList,
    payload:data}
}
export const handleUpdateListOk=res=>{
    return {type:constants.handleUpdateListOk,
    payload:res
    }
}
export const handleOpenBackdrop=(boolean)=>{
    return {type:constants.handleOpenBackdrop,
    payload:boolean
    }
}
export const addMovieToFlist=data=>{
    return {type:constants.addMovieToFlist,
    payload:data}
}
export const handleDeleteMovie=id=>{
    return {type:constants.handleDeleteMovie,
    payload:id}
}
export const handleDeleteMovieOk=res=>{
    return {type:constants.handleDeleteMovieOk,
    payload:res}
}
export const clearResults=()=>{
    return {type:constants.clearResults}
}