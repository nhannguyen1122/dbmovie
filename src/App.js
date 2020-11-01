import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { Routes } from './Routes';
import "./App.css";
import GlobalLoadingContainer from './redux/container/GlobalLoadingContainer';
function App() {
  return (
    <div >
    <Router>
    <Switch>
    {
        Routes.map((item,index)=>{
          return <Route key={index} 
          component={item.component}
          path={item.path}
          exact={item.exact} />
        })
      }
     
      </Switch>
      <GlobalLoadingContainer/>
      <ToastContainer/>
      </Router>
     
    </div>
  );
}

export default App;
