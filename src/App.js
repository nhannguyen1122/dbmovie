import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { Routes } from './Routes';
import "./App.css";

import TrailerModalContainer from './redux/container/TrailerModalContainer';
function App() {
  return (
    <div>
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
      </Router>
      <TrailerModalContainer/>
    </div>
  );
}

export default App;
