
import {combineReducers} from "redux";
import AutoCompleteReducer from "./AutoCompleteReducer";
import MovieReducer from "./MovieReducer";
import AuthReducer from "./AuthReducer";
import loadingReducer from "./LoadingReducer"
import FlistReducer from "./FlistReducer";
const RootReducer=combineReducers({MovieReducer,AutoCompleteReducer,AuthReducer,loadingReducer,FlistReducer});
export default RootReducer;