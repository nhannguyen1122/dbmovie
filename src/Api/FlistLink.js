import AxiosConfig from "./AxiosConfig";


const url='https://backendapinodejs.herokuapp.com/playlist';
const localUrl=`http://localhost:2000/playlist`

export const getFlistAxios=()=>{
    return AxiosConfig.get(`${url}`);
}
export const deleteFlistAxios=id=>{
    return AxiosConfig.delete(`${url}/delete/${id}`);
}
export const addNewFlistAxios=name=>{
    return AxiosConfig.post(`${url}/add`,name);
}
export const updateFlistAxios=(data)=>{
    return AxiosConfig.patch(`${url}/update/${data.id}`,{name:data.name});
}

export const addMovieToFlistAxios=data=>{
    console.log(data.name);
    return AxiosConfig.patch(`${url}/addmovie/${data.name}`,{movie:data.movie})
}
export const handleDeleteMovieAxios=id=>{
    return AxiosConfig.delete(`${url}/deletemovie/${id}`)
}