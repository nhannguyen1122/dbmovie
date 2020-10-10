import axios from "axios";

class AxiosConfig{
    constructor(){
       this.instance=axios.create(
       
       );
    }
    setHeader(token){
        if(token){
            return this.instance.defaults.headers.common.['Authorization']=`Bearer ${token}`
        }
        else{
            delete this.AxiosInstance.defaults.headers.common["Authorization"]; }
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