import axios from "axios";

class AxiosConfig{
    constructor(){
       this.flistInstance=axios.create();
       //handleling before make a request
       this.flistInstance.interceptors.request.use(function (config) {
           console.log('config:',config);
        let token=JSON.parse(localStorage.getItem('user'));
        if(token&&config.url.includes(`https://backendapinodejs.herokuapp.com`)){
             config.headers.common['Authorization']=`Bearer ${token}`
        }
        else{
            delete config.headers.common["Authorization"]; }
    return config;

     },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
       );
    }
    get(url){
        return this.flistInstance.get(url);
    }
    post(url,data){
        return  this.flistInstance.post(url,data);
    }
    patch(url,data){
        return this.flistInstance.patch(url,data);
    }
    delete(url){
        return this.flistInstance.delete(url);
    }
}
export default new AxiosConfig();