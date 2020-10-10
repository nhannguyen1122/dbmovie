import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './redux/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga';

const persistConfig = {
  key: 'root',
  storage,
  
}
const persistedReducer = persistReducer(persistConfig, RootReducer);
const sagaMiddleware = createSagaMiddleware();
// const store=createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const store=createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);

ReactDOM.render(
  
    <Provider store={store}>
      {/* <PersistGate  persistor={persistor}> */}
      <App />
        {/* </PersistGate> */}
    
    </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
