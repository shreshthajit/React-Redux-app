import { combineReducers } from "redux";
import { DetailsReducer, selectedDetailssReducer } from "./DetailsReducer";
const reducers = combineReducers({
  allDetails: detailsReducer,
  product: selectedDetailsReducer,
});
export default reducers;
