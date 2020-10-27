import AxiosConfig from "./AxiosConfig";
const apikey="e554796cdcd37b28589f4c58e54712d9";
const SearchUrl=`https://api.themoviedb.org/3/search/movie`;
const TopRateURL=`https://api.themoviedb.org/3/movie/top_rated`;
const VideoURL=` https://api.themoviedb.org/3/movie`;
const topPopularMovieUrl=`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
const UpcomingtMovieUrl=`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US`
export const SearchWithKeyWord=keyword=>{
    return AxiosConfig.get(`${SearchUrl}?query=${keyword}&api_key=${apikey}&language=en-US&page=1`);
}
export const SearchTopRated=()=>{
    return AxiosConfig.get(`${TopRateURL}?api_key=${apikey}&language=en-US&page=1`);
}
export const GetYoutubevideoAxios=id=>{
    return AxiosConfig.get(`${VideoURL}/${id}/videos?api_key=${apikey}&language=en-US//videos`);
}
export const GetPageAPI=()=>{
    return AxiosConfig.get(`${TopRateURL}?api_key=${apikey}&language=en-US`);
}
export const GetTopPopularMovies=()=>{
    return AxiosConfig.get(topPopularMovieUrl);
}
export const GetUpcomingtMovie=()=>{
    return AxiosConfig.get(UpcomingtMovieUrl);
}
export const GetTopRateByPage=page=>{
    return AxiosConfig.get(`${TopRateURL}?api_key=${apikey}&language=en-US&page=${page}`);
}
export const GetCastAxios=id=>{
    return  AxiosConfig.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}`);
}
export const GetDetailCastAxios=id=>{
    return AxiosConfig.get(`https://api.themoviedb.org/3/person/${id}?api_key=${apikey}&language=en-US`);
}
