import RobotService from "../../services/robot.service";
//action types
export const LOAD_ROBOT_START = "LOAD_ROBOT_START";
export const LOAD_ROBOT_SUCCESS = "LOAD_ROBOT_SUCCESS";
export const LOAD_ROBOT_FAIL = "LOAD_ROBOT_FAIL";
export const UPDATE_LIST = "UPDATE_LIST";
export const SELECT_ROBOT = "SELECT_ROBOT";
export const CREATE_BOT = "CREATE_BOT";

//actions creators - call them when using dispatch
const load_robot_start = () => ({
  type: LOAD_ROBOT_START
});
const load_robot_success = (payload) => ({
  type: LOAD_ROBOT_SUCCESS,
  payload
});
const load_robot_fail = (payload) => ({
  type: LOAD_ROBOT_FAIL,
  payload
});
export const createBot = (payload) => ({
  type: CREATE_BOT,
  payload
});

export const updateList = (payload) => ({
  type: UPDATE_LIST,
  payload
});

export const selectRobot = (payload) => ({
  type: SELECT_ROBOT,
  payload
});

// async action creators - aka thunks
export const loadRobots = () => async dispatch => {
  try {
      dispatch(load_robot_start()); // START
      const data = await RobotService.get_all_robots();
      dispatch(load_robot_success(data)); // SUCCESS
  } catch (error) {
    console.log(error);
    dispatch(load_robot_fail(error.message)); // FAILED
  }
};
