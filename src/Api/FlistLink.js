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