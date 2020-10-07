
import {combineReducers} from "redux";
import AutoCompleteReducer from "./AutoCompleteReducer";
import MovieReducer from "./MovieReducer";
import AuthReducer from "./AuthReducer";
const RootReducer=combineReducers({MovieReducer,AutoCompleteReducer,AuthReducer});
export default RootReducer;