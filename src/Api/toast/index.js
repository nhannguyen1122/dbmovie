import React from "react";
 import {toast} from "react-toastify";

class ToastConfig{
    
    success(mes){
        return toast.success(mes, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1500
          });
    }
    error(mes){
        return  toast.error(mes, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1500
          });
    }
    notify(mes){
        return toast.info(mes, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose:1500
          });
    }
}
export default ToastConfig;