import { combineReducers } from "redux";
import { accountReducers } from "./accountReducers";

export const rootReducer = combineReducers({
    account: accountReducers,
});
