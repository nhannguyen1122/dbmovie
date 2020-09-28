import axios from "axios";

class AxiosConfig{
    constructor(){
       this.instance=axios.create();
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