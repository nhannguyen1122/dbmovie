import AxiosConfig from "./AxiosConfig";


const url='https://backendapinodejs.herokuapp.com';
const localUrl=`http://localhost:2000`

export const testAxios=()=>{
    return AxiosConfig.get(`${url}/test`);
}
export const loginAxios=(data)=>{
    return AxiosConfig.post(`${url}/authentication/login`,data);
}
export const registerAxios=(data)=>{
    return AxiosConfig.post(`${url}/authentication/register`,data);
}
