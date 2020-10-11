import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from "redux-persist/lib/storage";
import * as actions from "../constant";
let init={
    SearchResult:[],
    Movies:{
        title:false,
        results:[]
    },
    TopRatedMovie:{
        results:[1,2,3],
        total:0,
        current:1,
    },
    MovieDetails:{},
    TrailerOpen:{
        openstate:false,
        MovieTrailer:""
    },
    topPopularMovie:[],
    upComingMovies:[],

}
const persistConfig={
    key:'movie',
    storage,
    whitelist:['MovieDetails','TopRatedMovie'],
    StateReconciler: autoMergeLevel2

}
const MovieReducer =(state=init,action)=>{
    switch(action.type){
        case actions.OpenVideoTrailerModal:
            return{...state,TrailerOpen:{...state.TrailerOpen,openstate:true}};
        case actions.CloseVideoTrailerModal:
            return {...state,TrailerOpen:{openstate:false,MovieTrailer:""}};
        case actions.showDetails:
            state={...state,MovieDetails:action.payload}
            return {...state};
            //input
        case actions.SearchForKeyWord:
            return {...state};
        case actions.SearchSuccess: 
        
            return {...state, SearchResult:action.payload}
            //default
        case actions.getTopRatedMovie:
            return {...state,
                Movies:{...state.Movies,title:false}
            }
        case actions.getTopRatedMovieSuccess:
            return {
                ...state,
                Movies:{
                    title:false,
                    results:action.payload
                }
            }
        case actions.getTopPopularMovie:
            return {...state};
        case actions.getTopPopularMovieSuccess:
            return {...state,topPopularMovie:action.payload}
        case actions.getUpcomingMovie: 
            return {...state}
        case actions.getUpcomingMovieSuccess:
            return {...state,upComingMovies:action.payload}
            //after have keyword in input
        case actions.SearchWithKeyWord:
            return {...state}
        case actions.SearchWithKeyWordSuccess:
            return {...state,
            Movies:{
                title:true,
                results:action.payload
            }}
        case actions.getMovieyoutube:
            return {...state}
        case actions.getMovieyoutubeSuccess:
            return {...state,TrailerOpen:{...state.TrailerOpen,MovieTrailer:action.payload}};
        case actions.getPage:
            return{...state};
        case actions.getTotalPage:
            state= {...state,TopRatedMovie:{...state.TopRatedMovie,total:action.payload}}
            console.log(state);
            return {...state};
        case actions.getTopRatePage: 
            return{...state}
        case actions.getTopRatePageSuccess: 
            return {...state,TopRatedMovie:{...state.TopRatedMovie,results:action.payload}}
        case actions.setCurrentTopRatePage:
            return {...state,TopRatedMovie:{...state.TopRatedMovie,current:action.payload}} 
        default:
           
            return state;
    }
}


export default persistReducer(persistConfig,MovieReducer);