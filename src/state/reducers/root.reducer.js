import { combineReducers } from "redux";
import robotReducer from "./robot.reducer";

const rootReducer = combineReducers({
  robot: robotReducer
});

export default rootReducer;
