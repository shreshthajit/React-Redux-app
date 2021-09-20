import { ActionTypes } from "../constants/action-types";
const intialState = {
  details: [],
};

export const RocketReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROCKETS:
      return { ...state, rockets: payload };
    default:
      return state;
  }
};

export const selectedRocketsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_ROCKETS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_ROCKETS:
      return {};
    default:
      return state;
  }
};
