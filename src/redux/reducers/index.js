import { combineReducers } from "redux";
import itemReducers from "./itemReducers";
const rootReducer = (combineReducers({
    notes: itemReducers
}))

export default rootReducer;