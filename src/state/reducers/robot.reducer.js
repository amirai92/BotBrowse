import {
  LOAD_ROBOT_START,
  LOAD_ROBOT_SUCCESS,
  LOAD_ROBOT_FAIL,
  UPDATE_LIST,
  SELECT_ROBOT,
  CREATE_BOT
} from "../actions/robot.actions";

export const initialState = {
  full_list: [],
  is_loading: false,
  error_msg: "",
  filtered_list: [],
  selected_item: {}
};
const reducer = (state = initialState, action) => {
  console.log("state reducer", state);
  console.log("action", action);
  switch (action.type) {
    case LOAD_ROBOT_START:
      return {
        ...initialState,
        is_loading: true
      };
    case LOAD_ROBOT_SUCCESS:
      return {
        ...initialState,
        full_list: action.payload,
        filtered_list: action.payload,
        selected_item: action.payload[0]
      };
    case LOAD_ROBOT_FAIL:
      return {
        ...initialState,
        error_msg: action.payload
      };
    //check here if to add
    case UPDATE_LIST:
      return {
        ...state,
        filtered_list: action.payload
      };
    case SELECT_ROBOT:
      return {
        ...state,
        selected_item: action.payload
      };
    
    case CREATE_BOT: 
      return {
        ...state,
        full_list:  action.payload,

      };
    
    default:
      return state;
  }
};
export default reducer;
