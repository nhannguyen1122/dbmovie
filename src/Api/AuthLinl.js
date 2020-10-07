import AxiosConfig from "./AxiosConfig";
const url='https://backendapinodejs.herokuapp.com/';

export const loginAxios=(data)=>{
    return AxiosConfig.post(`${url}/authentication/login`,data);
}