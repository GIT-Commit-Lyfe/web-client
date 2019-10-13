import { combineReducers } from "redux";
import sellerReducer from './sellerReducer'

const rootReducer = combineReducers({
  seller : sellerReducer,
});

export default rootReducer;
