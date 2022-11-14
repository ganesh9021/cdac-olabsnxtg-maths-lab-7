import changeTheNumber from "./upDown";
import { combineReducers } from "redux";
import { savethenum } from "./upDown";


const rootReducer = combineReducers({
  changeTheNumber,
  savethenum
});

export default rootReducer;
