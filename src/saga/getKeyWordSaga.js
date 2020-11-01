import { takeLatest, call, put, takeEvery, delay } from "redux-saga/effects";
import * as constants from "../redux/constant";
import { SearchWithKeyWord,GetCastAxios, SearchTopRated, GetYoutubevideoAxios,GetTopRateByPage,GetUpcomingtMovie,GetTopPopularMovies,GetPageAPI, GetDetailCastAxios } from "../Api/ApiLink";
import * as actions from "../redux/action";
import toast from "../Api/toast";
let Toast=new toast();
export function* getKeyWordSaga(){
   yield takeLatest(constants.SearchForKeyWord,SearchSaga);
   yield takeLatest(constants.getTopRatedMovie,getTopRatedMoviesaga);
   yield takeEvery(constants.SearchWithKeyWord,SearchWithKeyWordsaga);
   yield takeLatest(constants.getMovieyoutube,getMovieyoutubeSaga);
   yield takeLatest(constants.getUpcomingMovie,getupComingMovieSaga);
   yield takeLatest(constants.getTopPopularMovie,getTopPopularMovieSaga);
   yield takeLatest(constants.getPage,getTotalPagesaga);
   yield takeEvery(constants.getTopRatePage,getTopRatePageSaga)
   yield takeEvery(constants.getCasts,getCastsSaga);
   yield takeLatest(constants.getDetailCast,getDetailCastSaga);
}
function* getDetailCastSaga(action){
   try {
      const res=yield call(GetDetailCastAxios,action.payload);
      const {data}=res;
      yield put(actions.getDetailCastOk(data));
   } catch (error) {
    const errorsMessage = error.response.data;
    Toast.error(errorsMessage.msg);
    yield delay(1000);
    yield put(actions.handleOpenBackdrop(false));
   }
}
function* getCastsSaga(action){
    yield true;
    try {
        const id=action.payload;
        const res=yield call(GetCastAxios,id);
        
        if(res.data.cast.length>0){
            yield put(actions.getCastsOk(res.data.cast));
        }
        else{
            window.location.href=`/notfound`
        }
        
    } catch (error) {
        const errorsMessage = error.response.data;
        Toast.error(errorsMessage.msg);
        yield delay(1000);
        yield put(actions.handleOpenBackdrop(false));
        window.location.href=`/notfound`
    }
}
 function* SearchSaga(action){
    
    try {
        if(action.payload){
       const res= yield call(SearchWithKeyWord,action.payload);
       const {results}=res.data;
       if(results.length>0){
       yield put(actions.SearchSuccess(results));
       yield put(actions.setRender(true));
        }
        else{
            yield put(actions.setRender(false));
        }
    }

        else{
            yield put(actions.setRender(false));

        }
    } catch (error) {
        const errorsMessage = error.response.data;
        Toast.error(errorsMessage.msg);
        yield delay(1000);
        yield put(actions.handleOpenBackdrop(false));
    }
}
 function* getTotalPagesaga(){
    try {
        const res=yield call(GetPageAPI);
        const{total_pages}=res.data;
        yield put(actions.getTotalPage(total_pages));
    }
    catch(err){
        const errorsMessage = err.response.data;
        Toast.error(errorsMessage.msg);
        yield delay(1000);
        yield put(actions.handleOpenBackdrop(false));
    }
}
 function* getTopRatedMoviesaga(){
    try{
        const res=yield call(SearchTopRated);
    
        const {results}=res.data;
        yield put(actions.getTopRatedMovieSuccess(results));
    }
    catch(error){
        const errorsMessage = error.response.data;
        Toast.error(errorsMessage.msg);
        yield delay(1000);
        yield put(actions.handleOpenBackdrop(false));
    }
}
 function* SearchWithKeyWordsaga(action){
    try{
        yield put(actions.handleOpenBackdrop(true));
        const res=yield call(SearchWithKeyWord,action.payload);   
        const {results}=res.data;
        yield put(actions.handleOpenBackdrop(false));
        yield put(actions.SearchWithKeyWordSuccess(results));
    }
    catch(error){
        const errorsMessage = error.response.data;
        Toast.error(errorsMessage.msg);
        yield delay(1000);
        yield put(actions.handleOpenBackdrop(false));
    }
}
  function* getMovieyoutubeSaga(action){
    try {
        yield true;
        const res=yield call(GetYoutubevideoAxios,action.payload);
        const {key}=res.data.results[0];
        yield put(actions.getMovieyoutubeSuccess(key));
    } catch (error) {
        // const errorsMessage = error.response.data;
        // Toast.error(errorsMessage.msg);
        // yield delay(1000);
        // yield put(actions.handleOpenBackdrop(false));
        throw(error);
    }

}
 function* getupComingMovieSaga(){
    try{
        const res=yield call(GetUpcomingtMovie);
        const {results}=res.data;
        yield put(actions.getUpcomingMovieSuccess(results));
    }
    catch(error){
        const errorsMessage = error.response.data;
        Toast.error(errorsMessage.msg);
        yield delay(1000);
        yield put(actions.handleOpenBackdrop(false));
    }
}
 function* getTopPopularMovieSaga(){
    try{
        const res=yield call(GetTopPopularMovies);
        const {results}=res.data;

        yield put(actions.getTopPopularMovieSuccess(results));
    }
    catch(error){
        const errorsMessage = error.response.data;
        Toast.error(errorsMessage.msg);
        yield delay(1000);
        yield put(actions.handleOpenBackdrop(false));
    }
}
  function* getTopRatePageSaga(action){
    try{
    const callapi=yield call(GetTopRateByPage,action.payload);
    const {results}=callapi.data;
    yield put(actions.getTopRatePageSuccess(results));
    } catch (error) {
        const errorsMessage = error.response.data;
        Toast.error(errorsMessage.msg);
        yield delay(1000);
        yield put(actions.handleOpenBackdrop(false));
    }
}