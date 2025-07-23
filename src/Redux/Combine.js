import { combineReducers } from "redux";
import Reducer from './Reducer'
const root = combineReducers({
  items: Reducer,
});
export default root; 