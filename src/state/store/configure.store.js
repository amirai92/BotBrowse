import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root.reducer";
import logger from "../middleware/log.middleware";
import {
  save_state_locally,
  get_local_state
} from "../middleware/localstorage.middleware";

const middleware = applyMiddleware(logger, thunk, save_state_locally);

const initialState = get_local_state();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(middleware)
);

export default store;
