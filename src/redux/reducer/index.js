
import {combineReducers} from "redux";
import AutoCompleteReducer from "./AutoCompleteReducer";
import MovieReducer from "./MovieReducer";
const RootReducer=combineReducers({MovieReducer,AutoCompleteReducer});
export default RootReducer;