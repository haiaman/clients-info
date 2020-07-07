import { createStore, compose, applyMiddleware } from "redux";
import { createLogicMiddleware, createLogic } from "redux-logic";
import rootReducers from "./clientsInfoReducer";
import clientsInfoLogic from "./clientsInfoLogic";

const clientLogic = createLogicMiddleware(clientsInfoLogic);
const middleware = compose(applyMiddleware(clientLogic));
const myStore = createStore(rootReducers, middleware);
export default myStore;
