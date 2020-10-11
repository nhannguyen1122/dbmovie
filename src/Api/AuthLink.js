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

// after auth
//get username

export const getUserNameAxios=()=>{
    return AxiosConfig.get(`${url}/user/getUsername`);
}
export const getInfoAxios=()=>{
    return AxiosConfig.get(`${url}/user/infor`);

}
export const updatePasswordAxios=data=>{
    return AxiosConfig.patch(`${url}/user/update/${data.username}`,{password:data.password});
}
