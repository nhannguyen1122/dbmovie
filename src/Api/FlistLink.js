import AxiosConfig from "./AxiosConfig";


const url='https://backendapinodejs.herokuapp.com';
const localUrl=`http://localhost:2000`

export const getFlistAxios=()=>{
    return AxiosConfig.get(`${url}/playlist`);
}
export const deleteFlistAxios=id=>{
    return AxiosConfig.delete(`${url}/playlist/delete/${id}`);
}