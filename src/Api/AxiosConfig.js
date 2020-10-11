import axios from "axios";

class AxiosConfig{
    constructor(){
       this.instance=axios.create();
       //handleling before make a request
       this.instance.interceptors.request.use(function (config) {
           console.log(config);
        let token=JSON.parse(localStorage.getItem('user'));
        if(token){
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
        return this.instance.get(url);
    }
    post(url,data){
        return  this.instance.post(url,data);
    }
    patch(url,data){
        return this.instance.patch(url,data);
    }
    delete(url){
        return this.instance.delete(url);
    }
}
export default new AxiosConfig();