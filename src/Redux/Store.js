import { legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import root from "./Combine";
const Store = legacy_createStore(root, applyMiddleware(thunk));

export default Store;