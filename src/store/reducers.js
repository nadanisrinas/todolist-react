import dataReducer from "./data/reducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
