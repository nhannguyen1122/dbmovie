import { takeLatest, call, put, takeEvery } from "redux-saga/effects";
import * as constants from "../redux/constant";
import { SearchWithKeyWord, SearchTopRated, GetYoutubevideoAxios,GetTopRateByPage,GetUpcomingtMovie,GetTopPopularMovies,GetPageAPI } from "../Api/ApiLink";
import * as actions from "../redux/action";
export function* getKeyWordSaga(){
   yield takeLatest(constants.SearchForKeyWord,SearchSaga);
   yield takeLatest(constants.getTopRatedMovie,getTopRatedMoviesaga);
   yield takeEvery(constants.SearchWithKeyWord,SearchWithKeyWordsaga);
   yield takeLatest(constants.getMovieyoutube,getMovieyoutubeSaga);
   yield takeLatest(constants.getUpcomingMovie,getupComingMovieSaga);
   yield takeLatest(constants.getTopPopularMovie,getTopPopularMovieSaga);
   yield takeLatest(constants.getPage,getTotalPagesaga);
   yield takeEvery(constants.getTopRatePage,getTopRatePageSaga)

}
export function* SearchSaga(action){
    
    try {
       const apicall= yield call(SearchWithKeyWord,action.payload);
       const {results}=apicall.data;
       yield put(actions.SearchSuccess(results));
    } catch (error) {
        console.log(error);
    }
}
export function* getTotalPagesaga(){
    try {
        const apicall=yield call(GetPageAPI);
        const{total_pages}=apicall.data;
        yield put(actions.getTotalPage(total_pages));
    }
    catch(err){
        console.log(err);
    }
}
export function* getTopRatedMoviesaga(){
    try{
        const apicall=yield call(SearchTopRated);
    
        const {results}=apicall.data;
        yield put(actions.getTopRatedMovieSuccess(results));
    }
    catch(error){
        console.log(error);
    }
}
export function* SearchWithKeyWordsaga(action){
    try{
        const apicall=yield call(SearchWithKeyWord,action.payload);   
        const {results}=apicall.data;
        yield put(actions.SearchWithKeyWordSuccess(results));
    }
    catch(error){
        console.log(error);
    }
}
export  function* getMovieyoutubeSaga(action){
    try {
        yield true;
        const res=yield call(GetYoutubevideoAxios,action.payload);
        console.log(res);
        const {key}=res.data.results[0];
       console.log(key);
        yield put(actions.getMovieyoutubeSuccess(key));
    } catch (error) {
        console.log(error);
    }

}
export function* getupComingMovieSaga(){
    try{
        const res=yield call(GetUpcomingtMovie);
        const {results}=res.data;
        yield put(actions.getUpcomingMovieSuccess(results));
    }
    catch(error){
        console.log(error);
    }
}
export function* getTopPopularMovieSaga(){
    try{
        const res=yield call(GetTopPopularMovies);
        console.log(res);
        const {results}=res.data;

        yield put(actions.getTopPopularMovieSuccess(results));
    }
    catch(error){
        console.log(error);
    }
}
export  function* getTopRatePageSaga(action){
    
    const callapi=yield call(GetTopRateByPage,action.payload);
    const {results}=callapi.data;
    yield put(actions.getTopRatePageSuccess(results));
}