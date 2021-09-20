import { ActionTypes } from "../constants/action-types";

export const setRockets = (details) => {
  return {
    type: ActionTypes.SET_ROCKETS,
    payload: details,
  };
};

export const selectedRockets = (details) => {
  return {
    type: ActionTypes.SELECTED_ROCKETS,
    payload: details,
  };
};
export const removeSelectedRockets = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ROCKETS,
  };
};
