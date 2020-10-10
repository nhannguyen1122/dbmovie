
import {combineReducers} from "redux";
import AutoCompleteReducer from "./AutoCompleteReducer";
import MovieReducer from "./MovieReducer";
import AuthReducer from "./AuthReducer";
import loadingReducer from "./LoadingReducer"
const RootReducer=combineReducers({MovieReducer,AutoCompleteReducer,AuthReducer,loadingReducer});
export default RootReducer;