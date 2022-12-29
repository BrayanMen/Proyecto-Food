import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/Reducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

/*import { createStore, applyMiddleware, compose } from "redux";
import {rootReducer}  from "../reducers/index";
import thunk from "redux-thunk";

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f)
        )
*/